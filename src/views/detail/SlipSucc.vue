<template>
    <div class="slip-succ-container">
        <div class="succ-logo">
            <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/succ.png" alt="">
        </div>
        <div class="succ-text">核销成功</div>

        <div class="action-btns">
            <div class="go-back" @click="goBack">返回</div>
            <div class="check-order">查看</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SlipSucc",
    methods: {
      goBack() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .slip-succ-container {
        overflow: hidden;
    }

    .succ-logo {
        width: 60px;
        height: 60px;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        background: #00a0e9;
        margin: 60px auto 0;
    }

    .succ-logo img {
        width: 30px;
        height: 20px;
        margin: 20px 16px;
    }

    .succ-text {
        text-align center;
        margin-top: 20px;
    }

    .action-btns {
        display: flex;
        margin-top: 40px
    }

    .go-back, .check-order {
        width: 30%;
        margin: 0 auto;
        text-align center;
        padding: 6px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border: 1px solid #e5e5e5;
        border-radius: 6px;
        font-size: 14px;
        color: #333;
    }

    .check-order {
        color: #74c6ef;
        border-color: #74c6ef;
    }
</style>