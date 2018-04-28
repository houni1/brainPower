<template>
  <div id="Main">
    <!-- 首页4标签内容区域开始 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 首页4标签内容区域结束 -->
    <tabbar>
      <tabbar-item @on-item-click="onItemClick" :selected="selected==='/'">
        <img slot="icon" src="../assets/images/foot/icon-home-nor.png">
        <img slot="icon-active" src="../assets/images/foot/icon_homepage_pre.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item @on-item-click="onItemClick" :selected="selected==='/Demand'">
        <img slot="icon" src="../assets/images/foot/icon_repair_nor.png">
        <img slot="icon-active" src="../assets/images/foot/icon_repair_pre.png">
        <span slot="label">需求响应</span>
      </tabbar-item>
      <tabbar-item @on-item-click="onItemClick" :selected="selected==='/Demo'">
        <img slot="icon" src="../assets/images/foot/icon_sence_nor.png">
        <img slot="icon-active" src="../assets/images/foot/icon_sence_pre.png">
        <span slot="label">场景设置</span>
      </tabbar-item>
      <tabbar-item @on-item-click="onItemClick" :selected="selected==='/Mine'">
        <img slot="icon" src="../assets/images/foot/icon_mine_nor.png">
        <img slot="icon-active" src="../assets/images/foot/icon_mine_pre.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'
  export default {
    name: 'Main',
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {}
    },
    created: function () {
    },
    mounted: function () {
    },
    activated: function () {
    },
    methods: {
      onItemClick (index) {
        if (index === 0) {
          //  首页
          this.$router.replace({name: 'Home'})
        } else if (index === 1) {
          //  需求响应
          this.$router.replace({name: 'Demand'})
        } else if (index === 2) {
          //  场景设置
          this.$router.replace({name: 'Demo'})
        } else if (index === 3) {
          //  我的
          this.$router.replace({name: 'Mine'})
        }
      }
    },
    computed: {
      selected: function () {
        return this.$route.path
      }
    }
  }
</script>

<style>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color: #35495e!important;}
</style>
