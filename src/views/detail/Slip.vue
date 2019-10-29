<template>
    <div class="slip-container">
        <div class="slip-title">
            <span class="line"></span>
            <span class="text">请核销</span>
            <span class="line"></span>
        </div>
        <div class="slip-box">
            <div class="box-title">
                <i class="iconfont">&#xe62d;</i>核销码
            </div>
            <div class="box-input">
                <van-search input-align="center" placeholder="请输入核销码" v-model="value" class="slip-input"/>
                <p class="err-msg" v-if="is_err_msg">*暂无此核销码信息,请重新输入</p>
            </div>
            <div class="confirm-btn" :class="{active: isActive}" @click="doSlip">
                核销
            </div>
            <div class="confirm-box" v-if="showConfirm" @click="toggleShow">
                <div class="box-wrap">
                    <div class="slip-title">
                        <span class="line"></span>
                        <span class="text">确认核销此官派单</span>
                        <span class="line"></span>
                    </div>
                    <div class="slip-info">
                        <div class="info-item">
                            <div class="info-left">单号</div>
                            <div class="info-right">9527</div>
                        </div>
                        <div class="info-item">
                            <div class="info-left">车型</div>
                            <div class="info-right">别克2017君威1.5t精英版</div>
                        </div>
                        <div class="info-item">
                            <div class="info-left">抵扣券</div>
                            <div class="info-right">200抵400，到店还有精美礼品一份</div>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div class="cancel-btn" @click.stop="toggleShow">取消</div>
                        <div class="slip-btn" @click.stop="clickToSlip" >核销</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
  export default {
    name: "Slip",
    data() {
      return {
        value: '',
        is_err_msg: false,
        showConfirm: false
      }
    },
    computed: {
      isActive() {
        if (this.value === '') {
          this.is_err_msg = false
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      doSlip() {
        this.is_err_msg = !this.is_err_msg
        if (this.value === '9527') {
          this.is_err_msg = false
          this.showConfirm = true
        }
      },
      toggleShow() {
        this.showConfirm = !this.showConfirm
      },
      testR() {
        console.log(124);
      },
      clickToSlip () {
        this.$router.push('/slip-succ')
      }
    }
  }
</script>

<style scoped>
    .slip-title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0 50px;
    }

    .slip-title .text {
        display: inline-block;
        padding: 0 10px;
    }

    .slip-title .line:first-child {
        height: 2px;
        -ms-flex-positive: 1;
        background-color: #000;
        width: 14%;
        border-top-left-radius: 40%;
        border-bottom-left-radius: 40%;
    }

    .slip-title .line:last-child {
        height: 2px;
        -ms-flex-positive: 1;
        background-color: #000;
        width: 14%;
        border-top-right-radius: 40%;
        border-bottom-right-radius: 40%;
    }

    .box-input {
        overflow: hidden;
    }

    .box-title {
        font-size: 16px;
        color: #666;
        padding-left: 15%;
    }

    .box-title i {
        margin-right: 10px;
    }

    .err-msg {
        margin: 0;
        text-align: center;
        font-size: 12px;
        padding: 10px 0;
        color: #E9375B;
    }

    .confirm-btn {
        background: #d2d2d2;
        color: #999;
        padding: 10px 0;
        font-size: 16px;
        width: 40%;
        text-align: center;
        margin: 50px auto;
        border-radius: 40px;
    }

    .confirm-btn.active {
        background: #E9375B;
        color: #fff;
    }

    .slip-input {
        width: 60%;
        margin: 25px auto 0;
        padding: 0;
    }

    .box-input >>> .van-field__left-icon {
        display: none;
    }

    .box-input >>> .van-cell__value {
        padding: 6px;
    }

    .confirm-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000000cc;
    }

    /* 弹出层*/
    .box-wrap {
        padding: 10px;
        background: #fff;
        color: #000;
        width: 85%;
        margin: 30% auto;
        border-radius: 4px;
    }

    .box-wrap .slip-title {
        margin: 20px 0 10px;
    }

    .slip-info {
        margin: 20px 0;
    }

    .info-item {
        margin: 20px 0;
        padding: 0 10px;
    }

    .action-btns {
        padding: 20px 0;
    }
    .info-item, .action-btns {
        display: flex;
    }

    .info-left {
        font-size: 15px;
        color: #666;
        margin-right: 16px;
        min-width: 45px;
    }

    .info-right {
        font-size: 15px;
        color: #010101;
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .cancel-btn, .slip-btn {
        width: 40%;
        margin: 0 5%;
        border-radius: 40px;
        border: 1px solid #e5e5e5;
        text-align: center;
        padding: 7px 0;
        font-size: 15px;
    }
    .cancel-btn {
        box-shadow: 0 0 3px 0 #F0F0F0;
        border-color: #F0F0F0;
    }
    .slip-btn {
        color: #fff;
        background: #E9375B;
        box-shadow: 0 0 3px 0 #E9375B;
        border-color: #E9375B;
    }
</style>