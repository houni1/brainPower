<template>
    <div id="family" class="family">
        <div class="titleBox" @click="toElecount">
            <p class="titleTxt">家庭能效</p>
            <p class="titlePic">
            <img src="../../assets/images/home/icon_word.png" alt="">
            </p>
        </div>
        <div class="electricList">
            <div class="ele_item">
            <p class="ele_title">
                <span class="ele_icon">
                <img src="../../assets/images/home/icon_electricity.png" alt="">
                </span>
                <span class="ele_txt">本月已使用电量</span>
            </p>
            <p class="ele_num">
                <span class="ele_number">32</span>
                <span class="ele_unit">度</span>
            </p>
            </div>
            <div class="ele_item day_item">
            <p class="ele_title">
                <span class="ele_icon">
                <img src="../../assets/images/home/icon_electricity.png" alt="">
                </span>
                <span class="ele_txt">今日已使用电量</span>
            </p>
            <p class="ele_num">
                <span class="ele_number">45</span>
                <span class="ele_unit">度</span>
            </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'family',
  methods: {
    toElecount () {
      this.$router.push('/elecount')
    }
  }
}
</script>

<style lang='less' scoped>
.family {
    width: 100%;
    height: 152px;
    background: #fff;
    margin-bottom: 10px;
    .electricList {
        padding-top: 10px;
        padding-bottom: 30px;
        width: 100%;
        height: 108px;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        .ele_item {
        flex: 1;
        text-align: center;
        height: 68px;
        .ele_title {
            height: 15px;
            width: 105px;
            margin: 0 auto;
            span {
            display: inline-block;
            }
            .ele_txt {
            line-height: 15px;
            font-size: 11px;
            color: #515256;
            float: left;
            padding-left: 5px;
            }
            .ele_icon {
            width: 15px;
            height: 15px;
            float: left;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
            }
        }
        .ele_num {
            padding-top: 17px;
            .ele_number {
            font-size: 29px;
            color: #ff963d;
            font-weight: bold;
            }
            .ele_unit {
            font-size: 11px;
            color: #515256;
            }
        }
        }
        .day_item {
        border-left: 1px solid #eeeff1;
        }
    }
    .titleBox {
        height: 44px;
        width: 100%;
        background: #fff;
        padding: 14px 12px;
        box-sizing: border-box;
        position: relative;
        .titleTxt {
        border-left: 2px solid #4086f5;
        padding-left: 13px;
        font-size: 14px;
        font-weight: bold;
        color: #2c2d2e;
        line-height: 16px;
        }
        .titlePic {
        width: 75px;
        height: 20px;
        position: absolute;
        right: 12px;
        top: 11px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
        }
    }
}
</style>
