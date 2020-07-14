<template>
  <div class="english-table">
    <h3>
      {{titles}}
      <tagLabel vertical="middle" type="blue" />
      <tagLabel vertical="middle" type="yarn" />
      <tagLabel vertical="middle" type="yellow" />
      <tagLabel vertical="middle" type="error" />
      {{englishLength}}
    </h3>
    <details class="custom-block details" open>
      <summary>
        <tagLabel text="单词" type="blue" />
        <tagLabel text="音标" type="yarn" />
        <tagLabel text="翻译" type="yellow" />
        <tagLabel text="拆解" type="error" />
      </summary>
      <table>
        <thead>
          <tr>
            <th>KEY</th>
            <th>单词</th>
            <th>音标</th>
            <th>翻译</th>
            <th>拆解</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(list,key) in json">
            <tr v-for="(item, index) in list">
              <th class="key" v-if="index === 0" :rowspan="list.length">{{key}}</th>
              <th class="word">{{item[0]}}</th>
              <td class="phonogram">
                <code>{{item[1]}}</code>
                <i @click="handleClick(item[0])">🔊</i>
              </td>
              <td class="translate"  @mouseleave="mouseOut" @mouseenter="handleHover(item[2],$event)">
                <div>{{ splitString(item[2]) }}</div>
              </td>
              <td class="disassemble">
                <code v-show="item[3]">{{item[3]}}</code>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </details>
    <video ref="video" style="opacity: 0;" controls name="media" :src="src"></video>
    <div ref="popper" v-show="popperType" class="popper" :style="styleObject">
      <div v-html="popperText"></div>
      <div class="popper__arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: Object,
      default: []
    },
    titles: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      src: "",
      styleObject: {
        top: 0,
        left: 0
      },
      popperText: "",
      popperType: false
    };
  },
  computed: {
    englishLength() {
     return Object.keys(this.json).reduce((acc, cur) => +acc + this.json[cur].length, 0)
    }
  },
  methods: {
    handleClick(word) {
      this.src = "http://dict.youdao.com/dictvoice?audio=" + word + "&type=1";
      this.$nextTick(() => {
        this.$refs["video"] && this.$refs["video"].play();
      });
    },
    mouseOut() {
      this.popperType = false;
    },
    splitString(str) {
     return str.split('</br>')[0]
    },
    handleHover(word, event) {
      this.popperType = true;
      this.popperText = word;
      this.$nextTick(() => {
        this.styleObject.top = this.getElementViewTop(event.target) -  document.querySelector('.popper').offsetHeight + "px";
        this.styleObject.left = this.getElementViewLeft(event.target) - (document.querySelector('.popper').offsetWidth / 2) + (event.target.offsetWidth /2) + "px";
        console.log(this.getElementViewTop(event.target),this.getElementViewLeft(event.target) )
      });
    },
    getElementViewTop(element) {
      let actualTop = element.offsetTop;
      let current = element.offsetParent;
      let elementScrollTop;

      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }

      if (document.compatMode == "BackCompat") {
        elementScrollTop = document.body.scrollTop;
      } else {
        elementScrollTop = document.documentElement.scrollTop;
      }

      return actualTop - elementScrollTop;
    },
    getElementViewLeft(element) {
      let actualLeft = element.offsetLeft;
      let current = element.offsetParent;
      let elementScrollLeft;

      while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
      }

      if (document.compatMode == "BackCompat") {
        elementScrollLeft = document.body.scrollLeft;
      } else {
        elementScrollLeft = document.documentElement.scrollLeft;
      }

      return actualLeft - elementScrollLeft;
    }
  }
};
</script>

<style scoped>
.popper {
  z-index: 2061;
  position: fixed;
  background: #000;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  max-width: 400px;
  opacity: .8;
}

a {
  cursor: pointer;
}
tr td:first-child {
  cursor: pointer;
}
.word {
  font-size: 20px;
  font-weight: 600;
  text-shadow: 0px 6px 20px #1e90ff;
  white-space: nowrap;
}

.phonogram,
.disassemble {
  white-space: nowrap;
  text-align: center;
}
.disassemble code {
  font-weight: bold;
  font-size: 16px;
}
.translate div {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.phonogram i {
  font-style: normal;
  font-size: 20px;
  cursor: pointer;
  filter: grayscale(100%);
}
.phonogram i:hover {
  filter: grayscale(0%);
}
.key {
  font-size: 26px;
  color: #1e90ff;
  text-shadow: 2px 2px 3px black;
}
</style>

