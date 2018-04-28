<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive><router-view class="child-view" :class="{ 'child-top' : isShowTop}"></router-view></keep-alive>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    components: {
    },
    data () {
      return {
        viewStacks: [],
        viewFrom: 'from',
        viewTo: 'to',
        transitionName: 'slide-left',
        spiralType: 'bubbles',
        isShow: false,
        isShowTop: false
      }
    },
    created: function () {
    },
    mounted: function () {
    },
    methods: {
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/' || to.path === '/Mine' || (this.viewFrom === to.path && this.viewTo === from.path)) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.viewFrom = from.path
        this.viewTo = to.path
      }
    },
    computed: mapState({})
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  .child-view { position: absolute; left: 0; top: 0; width: 100%; height: 100%; transition: transform .3s ease; display: flex; flex-direction: column;}
  .slide-left-enter, .slide-right-leave-active { transform: translate(100%,0); }
  .slide-left-leave-active, .slide-right-enter { transform: translate(-100%,0); }
  .vux-header-title{color: #fff!important;}
  .vux-header .vux-header-left .left-arrow:before{border: 1px solid #fff!important;border-width:1px 0 0 1px!important;}
  .child-top{padding-top: 46px;}
  .vux-header{background: #35495e!important;}
</style>
