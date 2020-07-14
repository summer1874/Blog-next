<template>
  <div>
  <el-input style="width:250px"  size="mini" v-model="query" placeholder="请输入"></el-input>
  <el-table
    class="el-table-eg"
    :span-method="objectSpanMethod"
    tooltip-effect="light"
    size="mini"
    :data="showData"
    height="500"
    border
    style="width: 100%">
    <el-table-column
      prop="key"
      label="KEY"
      align="center"
      header-align="center"
      width="50">
       <template v-slot="{row}">
         <div class="key">{{row.key}}</div>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      header-align="center"
      prop="word"
      label="单词"
      width="140">
       <template v-slot="{row}">
         <div class="word">{{row.word}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="phonogram"
      align="center"
      header-align="center"
      width="200"
      label="音标">
       <template v-slot="{row}">
        <code v-if="row.phonogram">{{row.phonogram}}</code><i class="phonogram" @click="handlePlay(row)">🔊</i>
      </template>
    </el-table-column>
    <el-table-column
      prop="translate"
      label="翻译">
      <template v-slot="{row}">
        <el-popover
          placement="top-start"
          :title="row.word"
          trigger="focus"
         >
          <div v-html="row.translate"></div>
          <div slot="reference" class="translate">
            {{splitString(row.translate)}}
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      prop="apart"
      width="140"
      align="center"
      header-align="center"
      label="拆解">
      <template v-slot="{row}">
        <code v-if="row.apart">{{row.apart}}</code>
      </template>
    </el-table-column>
  </el-table>
  <video ref="video" style="opacity: 0;" controls name="media" :src="src"></video>
  </div>
</template>

<script>
import { spanRow } from 'element-ui-table-span-method'
  export default {
    data() {
      return{
        query: '',
        queryTable: [],
        src: '',
        option: [
          { index: 0, field: 'key' },
        ]
      }
    },
    props: {
      json: { 
        type: Object,
        default: () => ({})
      }
    },
    watch: {
      query(val) {
        this.debounce(this.queryTableInit(val), 200)
        
      }
    },
    computed: {
      showData() {
        return this.queryTable.length === 0  && this.query.length === 0 ? this.tableData : this.queryTable
      },
      tableData() {
        const arr = []
        const key = Object.keys(this.json)
        key.map(e => {
         this.json[e].map(item => {
           arr.push({
             key: e,
             word: item[0],
             phonogram: item[1],
             translate: item[2],
             apart: item[3],
           })
          })
        })
        return arr
      }
    },
    methods: {
      queryTableInit(val) {
        this.queryTable = this.tableData.filter(item => {
          return item.key.includes(val) || item.word.includes(val) || item.translate.includes(val)
        })
      },
      debounce(fun, delay) {
          return function (args) {
              let that = this
              let _args = args
              clearTimeout(fun.id)
              fun.id = setTimeout(function () {
                  fun.call(that, _args)
              }, delay)
          }
      },
      splitString(str) {
        return str.split('</br>')[0]
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        return spanRow({ row, column, rowIndex, columnIndex }, this.tableData, this.option)
      },
      handlePlay({word}) {
        this.src = "http://dict.youdao.com/dictvoice?audio=" + word + "&type=1";
        this.$nextTick(() => {
          this.$refs["video"] && this.$refs["video"].play();
        });
      }
    }
    
  }
</script>

<style scoped>
.el-table-eg >>> table {
   margin: 0px;
 }

.el-table-eg >>> table tr:nth-child(2n) {
  background-color: #ffffff;
}

.word {
  font-size: 20px;
  font-weight: 600;
  text-shadow: 0px 6px 20px #1e90ff;
  white-space: nowrap;
}

.translate  {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.phonogram {
  font-style: normal;
  font-size: 20px;
  cursor: pointer;
  filter: grayscale(100%);
}
.key {
  font-size: 26px;
  color: #1e90ff;
  text-shadow: 2px 2px 3px black;
}
</style>