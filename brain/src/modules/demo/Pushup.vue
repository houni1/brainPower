<template>
  <div id="Pushup">
    <div class="wrapper" ref="wrapper">
      <section class="rollBox">
        <!--下拉刷新-->
        <div class="refresh addData">{{pullDownText}}</div>
        <!--数据列表-->
        <ul class="newsList">
          <li v-for="item in dataList">{{item.title}}</li>
        </ul>
        <!--上拉加载-->
        <div class="load addData" v-show="pullUp">{{pullUpText}}</div>
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Pushup',
  components: {
  },
  data () {
    return {
      dataList: [],
      pullUp: false,
      pullDown: false,
      pullDownText: '',
      pullUpText: '上拉加载更多...',
      upThreshold: -30,
      downThreshold: 70,
      downStop: 50,
      backBtn: false,
      backBtnThreshold: -1500
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
    // 初始化页面数据
    this.$store.dispatch('getData', {}).then((res) => {
      this.dataList = res.data.news
      this.$nextTick(() => {
        this.initScroll()
      })
    })
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
      initScroll: function () {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          pullDownRefresh: {
            threshold: this.downThreshold,
            stop: this.getDownStop
          },
          pullUpLoad: {
            threshold: this.upThreshold
          }
        })
        this.scroll.on('pullingUp', () => {
          this.loadData()
          this.pullUp = true
          this.scroll.refresh()
        })
        this.scroll.on('pullingDown', () => {
          this.pullDownText = '正在刷新'
          this.loadData()
          this.pullDown = true
        })
        this.scroll.on('scroll', (pos) => {
          if (this.pullDown) return
          this.getRefreshText(pos)
        })
        this.scroll.on('scroll', (pos) => {
          if (pos.y > this.backBtnThreshold && this.backBtn) {
            this.backBtn = false
          }
          if (pos.y <= this.backBtnThreshold && !this.backBtn) {
            this.backBtn = true
          }
        })
      },
      loadData: function () {
        setTimeout(() => {
          this.$store.dispatch('getData', {}).then((res) => {
            var data = res.data.news
            if (this.pullUp) {
              this.dataList = this.dataList.concat(data.splice(0, 3))
              this.pullUp = false
              this.scroll.finishPullUp()
            } else if (this.pullDown) {
              this.dataList.unshift(data[data.length - 1])
              this.pullDown = false
              this.pullDownText = '刷新完成'
              this.scroll.finishPullDown()
            } else {
              return
            }
            this.$nextTick(() => {
              this.scroll.refresh()
            })
          })
        }, 800)
      },
      getRefreshText (pos) {
        if (pos.y < this.downThreshold) {
          this.pullDownText = '下拉刷新...'
        } else {
          this.pullDownText = '释放刷新...'
        }
      },
      back () {
        this.scroll.scrollTo(0, 0, 1000)
      },
      onSwiperIndexChange () {
  //        当滚动时触发的事件
      }
  },
  /**
   * 计算属性
   */
  computed: {
    getDownStop () {
      const deviceWidth = document.documentElement.clientWidth
      return this.downStop * deviceWidth / 375
    }
  }
}
</script>
<style>
/* 必要样式 */
#Pushup{position: absolute;width: 100%;left: 0;top: 0;overflow: hidden;background: #fff;}
#Pushup .wrapper{width: 100%;height: 100%;overflow: hidden;}
#Pushup .wrapper .rollBox{position: relative;}
#Pushup .wrapper .rollBox .addData{width: 100%;height: 2rem;line-height: 2rem;text-align: center;font-size: .8rem;color: #999;font-weight: 700;}
#Pushup .wrapper .rollBox .refresh{position: absolute;left: 0;top: -2rem;}
#Pushup .newsList{padding: 0 0.5rem}
#Pushup .newsList li{padding: 12px 0;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;border-bottom: 1px solid #eee;}
</style>
