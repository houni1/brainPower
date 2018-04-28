<template>
  <div id="Language">
    <section class="l-case">
      <h2>{{$t('txt')}}</h2>
      <div>
        <input type="text" v-model="inputName">
      </div>
      <p>{{$t('hello', {'name': inputName})}}</p>
    </section>
    <section class="l-btn">
      <x-button type="default" @click.native="setLocal('zh')">中文</x-button>
      <x-button type="primary" @click.native="setLocal('en')">英文</x-button>
    </section>
    <p class="l-say">配置文件：i18nConfig.json</p>
  </div>
</template>

<script>
  import { XButton } from 'vux'
export default {
  name: 'Language',
  components: {
    XButton
  },
  data () {
    return {
      inputName: ''
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
      setLocal: function (type) {
        this.$i18n.set(type)
      }
  },
  /**
   * 计算属性
   */
  computed: {
  }
}
</script>
<style>
  .l-case{padding: 20px 10px;text-align: center;background: #fff;}
  .l-case input{border: 1px solid #eee;padding: 5px;margin: 20px 0;text-align: center;}
  .l-btn{padding: 15px;}
  .l-say{text-align: center;font-size: 14px;color: #999;margin-top: 20px;}
</style>
