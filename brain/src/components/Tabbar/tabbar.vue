<template>
  <div id="tabbar">
    <Headers>
      <div slot="title" class="tab_title">
        <div class="btnBox">
          <p @click="show1" :class="{isActive: isActive1}">空调插座</p>
          <p @click="show2" :class="{isActive: isActive2}">空调遥控器</p>
        </div>
      </div>
    </Headers>
    <div class="tab_list">
      <div v-if="flag" class="contBox jack">
        <div class="box">
            <p class="title">空调智能插座</p>
            <p class="state">
            <img src="../../assets/images/eledetails/icon_operation.png" alt="">
            <span class="stateTxt">运行中</span>
            </p>
            <p class="switch" @click="isopenBtn">
              <img v-if="isopen" src="../../assets/images/eledetails/switch_open.png" alt="">
              <img v-else src="../../assets/images/eledetails/switch_close.png" alt="">
            </p>
            <div class="infoBox">
            <p class="info_title">
                <span>基本信息</span>
            </p>
            <ul class="info_list">
                <li class="list_item">
                <span class="list_name">房间</span>
                <span class="list_cont">卧室</span>
                </li>
                <li class="list_item">
                <span class="list_name">设备名称</span>
                <span class="list_cont">空调</span>
                </li>
                <li class="list_item">
                <span class="list_name">当前功率</span>
                <span class="list_cont">30W</span>
                </li>
                <li class="list_item">
                <span class="list_name">电流</span>
                <span class="list_cont">5A</span>
                </li>
                <li class="list_item">
                <span class="list_name">今日用电量</span>
                <span class="list_cont"><label class="color">10</label>度</span>
                </li>
                <li class="list_item">
                <span class="list_name">历史总用电量</span>
                <span class="list_cont"><label class="color">1000</label>度</span>
                </li>
            </ul>
            </div>
        </div>
        </div>
      <div v-else class="telecontroller">
        <div class="wrap">
          <div class="box">
            <p class="txt">设定温度</p>
            <p class="num"><span class="number">20</span>℃</p>
            <p class="state">运行中</p>
            <dl class="left">
              <dt>
                <span class="pic">
                  <img src="../../assets/images/tabbar/icon_22.png" alt="">
                </span>
                <span class="left_txt">室内温度</span>
              </dt>
              <dd>28℃</dd>
            </dl>
            <div class="right">
              <img src="../../assets/images/tabbar/icon_close_big.png" alt="">
            </div>
          </div>
        </div>
        <div class="regulate">
          <span class="btn reduce" @click="reduce">
            <!-- <img src="../../assets/images/tabbar/btn_reduce.png" alt=""> -->
          </span>
          <span class="txt">调节温度</span>
          <span class="btn add" @click="add">
            <!-- <img src="../../assets/images/tabbar/btn_add.png" alt=""> -->
          </span>
        </div>
        <div class="btnsBox">
          <div class="btns_item">
            <p class="pic">
              <img src="../../assets/images/tabbar/icon_a_default.png" alt="">
            </p>
            <span class="txt">自动</span>
          </div>
          <div class="btns_item">
            <p class="pic">
              <!-- <img src="../../assets/images/tabbar/icon_b_default.png" alt=""> -->
              <img src="../../assets/images/tabbar/icon_b_selected.png" alt="">
            </p>
            <span class="txt">制冷</span>
          </div>
          <div class="btns_item">
            <p class="pic">
              <!-- <img src="../../assets/images/tabbar/icon_c_default.png" alt=""> -->
              <img src="../../assets/images/tabbar/icon_c_icon_b_selected.png" alt="">
            </p>
            <span class="txt">制热</span>
          </div>
          <div class="btns_item">
            <p class="pic">
              <!-- <img src="../../assets/images/tabbar/icon_d_default.png" alt=""> -->
              <img src="../../assets/images/tabbar/icon_d_selected.png" alt="">
            </p>
            <span class="txt">除湿</span>
          </div>
          <div class="btns_item">
            <p class="pic">
              <!-- <img src="../../assets/images/tabbar/icon_e_default.png" alt=""> -->
              <img src="../../assets/images/tabbar/icon_e_selected.png" alt="">
            </p>
            <span class="txt">定时</span>
          </div>
          <div class="btns_item">
            <p class="pic">
              <!-- <img src="../../assets/images/tabbar/icon_f_default.png" alt=""> -->
              <img src="../../assets/images/tabbar/icon_f_selected.png" alt="">
            </p>
            <span class="txt">重置红外</span>
          </div>
          <div class="btns_item">
            <p class="pic">
              <!-- <img src="../../assets/images/tabbar/icon_g_default.png" alt=""> -->
              <img src="../../assets/images/tabbar/icon_g_selected.png" alt="">
            </p>
            <span class="txt">大风</span>
          </div>
          <div class="btns_item">
            <p class="pic">
              <img src="../../assets/images/tabbar/icon_h_default.png" alt="">
            </p>
            <span class="txt">中风</span>
          </div>
          <div class="btns_item">
            <p class="pic">
              <img src="../../assets/images/tabbar/icon_I_default.png" alt="">
            </p>
            <span class="txt">小风</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '../Common/Headers.vue'
export default {
  name: 'tabbar',
  data () {
    return {
      flag: true,
      isActive1: true,
      isActive2: false,
      isopen: true
    }
  },
  components: {
    Headers
  },
  methods: {
    isopenBtn () {
      if (this.isopen) {
        this.isopen = false
      } else {
        this.isopen = true
      }
      console.log(this.isopen)
    },
    show1 () {
      console.log(1)
      this.flag = true
      this.isActive1 = true
      this.isActive2 = false
    },
    show2 () {
      console.log(2)
      this.flag = false
      this.isActive1 = false
      this.isActive2 = true
    },
    reduce () {
      console.log('-')
    },
    add () {
      console.log('+')
    }
  }
}
</script>

<style scoped lang='less'>
.tab_title {
  padding-left: 67px;
  padding-right: 67px;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding-top: 8px;
  .btnBox {
    width: 100%;
    display: flex;
    height: 28px;
    background: pink;
    line-height: 28px;
    background: url('../../assets/images/tabbar/tabber_a.png')no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    p {
      flex: 1;
      text-align: center;
      font-size: 12px;
    }
    .isActive {
      background: url('../../assets/images/tabbar/tabber_b.png')no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      color: #407df2;
    }
  }
}
.telecontroller {
  .wrap {
    background: #fff;
  }
  .box {
    width: 100%;
    height: 236px;
    background: url('../../assets/images/tabbar/pic_home_02.png')no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    padding-top: 49px;
    box-sizing: border-box;
    position: relative;
    .right {
      position: absolute;
      top: 21px;
      right: 12px;
      width: 52px;
      height: 52px;
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
    .left {
      position: absolute;
      width: 72px;
      height: 50px;
      left: 16px;
      top: 23px;
      text-align: center;
      color: #fff;
      dt {
        font-size: 12px;
        .pic {
          display: inline-block;
          width: 15px;
          height: 15px;
          float: left;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .left_txt {
          line-height: 15px;
          padding-left: 2px;
          padding-bottom: 8px;
          float: left;
          display: inline-block;
        }
      }
      dd {
        font-size: 13px;
        font-weight: bold;
      }
    }
    .txt {
      font-size: 10px;
      color: #fff;
      text-align: center;
    }
    .num {
      color: #fff;
      text-align: center;
      padding-top: 10px;
      padding-bottom: 10px;
      .number {
        font-size: 60px;
      }
    }
    .state {
      width: 75px;
      height: 20px;
      line-height: 20px;
      margin: 0 auto;
      text-align: center;
      border-radius: 20px;
      border: 1px solid #fff;
      font-size: 10px;
      color: #fff;
      margin-top: 5px;
      padding-bottom: 1px;
      box-sizing: border-box;
    }
  }
  .btnsBox {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: auto;
    background: #fff;
    display: flex;
    flex-flow: wrap;
    .btns_item {
      width: 33.33%;
      text-align: center;
      padding-top: 13px;
      padding-bottom: 13px;
      height: 90px;
      box-sizing: border-box;
      border: 1px solid #eee;
      .pic {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .txt {
        padding-top: 11px;
        font-size: 13px;
        color: #aaa;
      }
    }
  }
  .regulate {
    width: 100%;
    height: 90px;
    background: #fff;
    padding: 15px 52px;
    display: flex;
    box-sizing: border-box;
    span {
      display: inline-block;
    }
    .btn {
      width: 60px;
      height: 60px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .reduce {
      background: url('../../assets/images/tabbar/btn_reduce.png')no-repeat;
      background-size: 100% 100%;
    }
    .reduce:active {
      background: url('../../assets/images/tabbar/btn_reduce_pre.png')no-repeat;
      background-size: 100% 100%;
    }
    .add {
      background: url('../../assets/images/tabbar/btn_add.png')no-repeat;
      background-size: 100% 100%;
    }
    .add:active {
      background: url('../../assets/images/tabbar/btn_add_pre.png')no-repeat;
      background-size: 100% 100%;
    }
    .txt {
      flex: 1;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #64676a;
      font-size: 15px;
    }
  }
}
.contBox {
  width: 100%;
  height: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  overflow: hidden;
  .box {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 5px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 30px;
    box-sizing: border-box;
    .title {
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      color: #2c2d2e;
      margin-bottom: 21px;
    }
    .state {
      height: 24px;
      width: 68px;
      margin: 0 auto;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .stateTxt {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        text-align: center;
        color: #fff;
        line-height: 24px;
        font-size: 13px;
      }
    }
    .switch {
      width: 195px;
      height: 90px;
      margin: 33px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .infoBox {
      .info_title {
        padding-top: 12px;
        padding-bottom: 10px;
        width: 100%;
        span {
          display: inline-block;
          border-left: 2px solid #4086f5;
          padding-left: 8px;
          box-sizing: border-box;
          color: #2c2d2e;
          font-size: 14px;
          font-weight: bold;
        }
      }
      .info_list {
        .list_item {
          line-height: 45px;
          border-bottom: 1px solid #eee;
          display: flex;
          span {
            flex: 1;
            font-size: 14px;
          }
          .list_name {
            text-align: left;
            color: #666;
          }
          .list_cont {
            text-align: right;
            color: #2c2d2e;
            .color {
              color: #ff963d;
            }
          }
        }
        .list_item:last-child {
          border: 0;
        }
      }
    }
  }
}
</style>
