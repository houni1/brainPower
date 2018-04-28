<template>
  <div id="Explain">
    <h4>项目结构说明</h4>
    <pre>
      src
      ├── App.vue
      ├── api
      │   └── Resource.js  //接口集成文件
      ├── assets //静态文件
      │   ├── images
      │   ├── js
      │   └── styles
      ├── components //组件存放文件夹
      ├── main.js //主入口
      ├── modules //页面存放文件夹
      │   ├── Demo.vue
      │   ├── Explain.vue
      │   ├── Home.vue
      │   ├── Main.vue
      │   └── demo
      │       ├── Language.vue
      │       └── Pushup.vue
      ├── router //路由
      │   └── index.js
      └── store //状态管理
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Explain',
  components: {
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
  #Explain h4{text-align: center;padding: 15px 0;}
</style>
