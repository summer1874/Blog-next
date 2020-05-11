<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  },
  render (h, { props, slots }) {
    return h('span', {
      class: ['badge', props.type, props.vertical]
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus" scoped>
.badge
  display inline-block
  border-radius 3px
  white-space nowrap
  padding 0.2rem 0.4rem
  color white
  margin-right 5px
  background-color #42b983
  &.yarn
    background-color #2c8ebb //#f66
  &.middle
    vertical-align middle
  &.top
    vertical-align top
  &.tip, &.green
    background-color #42b983
  &.error
    background-color #DA5961 //#f66
  &.warning, &.warn, &.yellow
    background-color darken(#ffe564, 35%)
  &.blue
    background-color #1e90ff
</style>
