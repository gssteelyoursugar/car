<template>
    <div class="home-container">
        <div class="header-content">
            <div class="shop-info">
                <div class="shop-avatar-name">
                    <div class="shop-avatar">
                        <img src="@/assets/image/0.jpg" alt="">
                    </div>
                    <div class="shop-name">幸福车厂</div>
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
                    <span>90000.00</span>
                    <span class="price-unit">元</span>
                </p>
            </div>
            <div class="active-cards">
                <div class="card-item">
                    <p>待结算</p>
                    <p><span class="price-unit">¥</span>200.00</p>
                </div>
                <div class="card-item">

                    <p>可提现</p>

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
    methods: {
      goToMsg(data) {
        console.log(data);

      }
    }
  }
</script>

<style lang="stylus" scoped>
    .home-container {
        background-color #f4f4f4;
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
        width: 90%;
        display: flex;
    }

    .message {
        width: 10%;
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