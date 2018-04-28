<template>
  <div id="echarts" :style="{width: '100%', height: '380px'}">
    fdsafdsafdsafdsaf
  </div>
</template>

<script>
export default {
  name: 'echarts',
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      console.log('aaaaaaaaaaa')
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    }
  }
}
</script>

<style lang='less' scoped>
#echarts {
  // border: 1px solid pink;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
</style>
