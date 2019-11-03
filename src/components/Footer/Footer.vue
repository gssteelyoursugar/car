<template>
    <div class="footer-container">
        <div class="footer-item">
            <div class="logo active" @click="clickToAdmin">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo1.png" alt="" v-if="!is_shop">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo2.png" alt="" v-if="is_shop">
            </div>
            <p>工作台</p>
        </div>
        <div class="footer-item" @click="clickToShop">
            <div class="logo">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo3.png" alt="" v-if="is_shop">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo4.png" alt="" v-if="!is_shop">
            </div>
            <p>店铺</p>
        </div>

    </div>
</template>

<script>
  export default {
    name: "Footer",
    data () {
      return {
        is_shop: true
      }
    },
    methods: {
      clickToAdmin () {
        this.is_shop = false
        this.$router.push('/')
      },
      clickToShop () {
        this.is_shop = true
        this.$router.push('/shop')
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .footer-container {
        display: flex;
        padding: 10px 0;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #f4f4f4;
    }
    .footer-item {
        flex:1;
        text-align center;
    }
    .logo {
        width: 10%;
        margin 0 auto;
    }
    .logo img {
        width:100%;
    }

    .footer-item p {
        margin: 0;
        font-size:12px;
        color: #333;
    }
</style>