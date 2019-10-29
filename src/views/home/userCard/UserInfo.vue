<template>
    <div class="home-container">
        <div class="choose-shop" v-if="showShop">
            <div class="choose-item">
                <div class="item-title">请选择门店</div>
                <div class="item-content">
                    <div class="item" @click="toggleShop">幻影车灯音响 王龙飞</div>
                    <div class="item" @click="toggleShop">钟祥启程车灯服务店</div>
                    <div class="item" @click="toggleShop">亮途汽车灯光升级服务店</div>
                </div>
            </div>
        </div>
        <div class="header-content">
            <div class="shop-info">
                <div class="shop-avatar-name" @click="toggleShop">
                    <!--<div class="shop-avatar">-->
                    <!--<img src="@/assets/image/0.jpg" alt="">-->
                    <!--</div>-->
                    <div class="shop-name">阿帕旗舰店（广州）
                        <van-icon name="arrow-down" class="arrow-icon"/>
                        <p>旗下共有3家门店</p>
                    </div>
                </div>
                <div class="message">
                    <div class="msg-img" @click="goToMsg('/message')">
                        <img src="@/assets/image/msg@2x.png" alt="">
                    </div>

                </div>
            </div>
            <div class="total">
                <p class="total-title">总金额</p>
                <p class="total-price">
                    <span class="price-unit">¥</span>
                    <span>{{ money | money}}</span>
                    <span class="price-unit">元</span>
                </p>
            </div>
            <div class="active-cards">
                <div class="card-item">
                    <p>待结算</p>
                    <p><span class="price-unit">¥</span>200.00</p>
                </div>
                <div class="card-item">

                    <p class="special">可提现</p>

                    <p><span class="price-unit">¥</span>200.00</p>
                </div>
                <div class="card-item">
                    <p>本月金额</p>
                    <p><span class="price-unit">¥</span>200.00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        money: 9000,
        showShop: false
      }
    },
    methods: {
      goToMsg(data) {
        console.log(data);
      },
      toggleShop() {
        this.showShop = !this.showShop
      }
    }
  }
</script>

<style lang="stylus" scoped>


    .home-container {
        background-color #f4f4f4;
    }

    .choose-shop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background #fff;
        z-index: 9;
    }

    .choose-item .item-title {
        text-align center;
        font-size: 18px;
        color: #000;
        margin: 30px 0 50px;
    }

    .choose-item .item-content .item {
        width: 80%;
        margin: 20px auto;
        text-align: center;
        border: 1px solid #e5e5e5;
        padding: 18px 0;
        border-radius: 8px;
        box-shadow: 0 0 4px 1px #e5e5e5;

    }

    .header-content {
        overflow hidden;
        height 0;
        padding-bottom: 53%;
        background: url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bj.png);
        background-position: 0 -25px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        background-color #f4f4f4;
    }

    .shop-info {
        display: flex;
        margin-top: 17px;
        padding: 0 16px;
    }

    .shop-avatar-name {
        width: 80%;
        display: flex;
    }

    .message {
        width: 20%;
        text-align: center;
    }

    .shop-avatar-name .shop-avatar img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .shop-name {
        font-size: 15px;
        font-weight: 400;
        color: #fff;
        line-height 30px;
        margin-left: 13px;
        position: relative;
    }

    .arrow-icon {
        position: absolute;
        top: 6px;
        right: -10px;

    }

    .shop-name p {
        margin: 0;
        line-height 10px;
        font-size: 12px;
    }

    .msg-img img {
        width: 20px;
        height: 20px;
        margin-top: 7px;
    }

    .total {
        margin-top: 9.5px;
    }

    .total p {
        margin: 0;
        padding: 0;
        text-align: center;
        color: #fff;
    }

    .total .total-title {
        font-size 15px;
        font-weight: 400;
    }

    .total .total-price {
        font-size: 30px;
        margin-top: 7px;
    }

    .total .total-price span.price-unit {
        font-size: 15px;
        margin: 0 3.5px;
    }

    .active-cards {
        display: flex;
        position: absolute;
        width: 100%;
        bottom: 3px;
    }

    .card-item {
        flex 1;
        text-align center;
        border: 1px solid #fff;
        margin: 0 9px;
        border-radius: 10px;
        padding: 9px 0;
        background #fff;
        box-shadow 0 0 7px 2px rgba(234, 234, 234, 0.63)
        overflow: hidden;
    }

    .card-item p {
        margin 0;
        font-size: 18px;
        color: #333;
    }

    .card-item p:first-child {
        text-align left;
        font-size: 12px;
        color: #666666;
        margin-left: 4px;
    }

    .card-item p.special {
        width: 50%;
        background: linear-gradient(to right, #F6C794, #F2AD6A);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding-top: 2px;
        padding-bottom: 2px;
        text-align: center;
        color: #fff;
        margin-left: 0;
    }

    .card-item p:last-child {
        font-size 18px;
        margin-top: 7.5px;
    }

    .card-item p:last-child span.price-unit {
        font-size 12px;
        margin-top: 13px;
        padding-right: 2px;
    }

</style>