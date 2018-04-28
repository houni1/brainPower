<template>
  <div id="sweepcode">
    <Headers style="background: rgba(38, 38, 38, .5); z-index: 9;">
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="mark">
      <!-- <input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput"> -->
      <div class="sweepBox">
        <img class="frame" src="../../assets/images/home/pic_yard.png" alt="">
        <img class="filter" id="filter" src="../../assets/images/home/pic_yard_a.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '../Common/Headers.vue'
export default {
  name: 'sweepcode',
  components: {
    Headers
  },
  data () {
    return {
      title: '扫码'
    }
  },
  mounted () {
    var filter = document.getElementById('filter')
    console.log(filter.offsetHeight)
    setTimeout(() => {
      this.$router.push('/terminal')
    }, 5000)
  }
}
</script>

<style lang='less' scoped>
#sweepcode {
  position: absolute;
  width: 100%;
  height: 100%;
  .mark {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(7, 7, 7s, .6);
    .sweepBox {
      width: 256px;
      height: 255px;
    //   border: 1px solid red;
      position: absolute;
      top: 40%;
      left: 50%;
      margin-left: -128px;
      margin-top: -120px;
      .frame {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
      }
      .filter {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 250px;
        height: 0px;
        // height: 249px;
      }
    }
  }
}
</style>

