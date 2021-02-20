
<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String
  },
  render (h, { props, slots }) {
    return h('span', {
      class: ['badge', props.type]
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus" scoped>
.badge
  display inline-block
  font-size 14px
  height 18px
  line-height 18px
  border-radius 3px
  padding 0 6px
  color white
  margin-right 5px
  font-weight bold
  background-color #42b983
  &.tip, &.green
    background-color #1e90ff
  &.error
    background-color #DA5961 //#f66
  &.warning, &.warn, &.yellow
    background-color darken(#ffe564, 35%)
</style>