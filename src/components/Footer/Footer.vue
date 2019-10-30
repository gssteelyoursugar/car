<template>
    <div class="footer-container">
        <div class="footer-item">
            <div class="logo active">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo1.png" alt="">
            </div>
            <p>工作台</p>
        </div>
        <div class="footer-item" @click="clickToShop">
            <div class="logo">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo4.png" alt="">
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
        tabItem: ['','']
      }
    },
    methods: {
      clickToShop () {
        this.$router.push('/shop')
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .footer-container {
        display: flex;
        padding: 20px 0;
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