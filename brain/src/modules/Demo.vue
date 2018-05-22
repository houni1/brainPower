<template>
  <div id="Demo">
    <load-more :show-loading="false" tip="功能正在开发中，敬请期待！" background-color="#fbf9fe"></load-more>
  </div>
</template>

<script>
import { LoadMore } from 'vux'
export default {
  name: 'Demo',
  components: {
    LoadMore
  },
  data () {
    return {
    }
  },
  /**
   * 生命周期函数--在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
   */
  beforeCreate: function () {
  },
  /**
   * 生命周期函数--在实例创建完成后被立即调用
   */
  created: function () {
  },
  /**
   * 生命周期函数--在挂载开始之前被调用：相关的 render 函数首次被调用
   */
  beforeMount: function () {
  },
  /**
   * 生命周期函数--el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
   */
  mounted: function () {
  },
  /**
   * 生命周期函数--数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
   */
  beforeUpdate: function () {
  },
  /**
   * 生命周期函数--由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
   */
  updated: function () {
  },
  /**
   * 生命周期函数--keep-alive 组件激活时调用
   */
  activated: function () {
  },
  /**
   * 组件内方法
   */
  methods: {
  },
  /**
   * 计算属性
   */
  computed: {
  }
}
</script>

<style>
  .title-say{font-size: 12px;color: #999;margin-top:20px;text-align: center;}
  #Demo {
    padding-top: 30px;
  }
</style>
