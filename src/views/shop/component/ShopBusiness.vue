<template>
    <div class="business">
        <div class="bus-wrap">
            <div class="bus-title">
                <span>幻影车灯音响<van-icon name="arrow-down"/></span>
            </div>
            <router-link tag="div" to="/manage-shop" class="bus-item">
                <span class="shop-icon"></span>店铺管理
            </router-link>
            <router-link tag="div" to="/manage-business" class="bus-item">
                <span class="business-icon"></span>业务管理
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ShopBusiness"
  }
</script>

<style lang="stylus" scoped>
    .bus-item {
        width: 70%;
        margin: 30px auto;
        border: 1px solid #e5e5e5;
        padding: 40px 0px;
        border-radius: 10px;
        box-shadow: 0 0 4px 0 #e5e5e5;
        color: #333;

    }
    .bus-item span.shop-icon {
        width 17px;
        height: 17px;
        display: inline-block;
        background url("https://kedand.oss-cn-beijing.aliyuncs.com/uploads/shop.png")
        background-position 0 0;
        background-size cover;
        background-repeat no-repeat;
        margin-right: 4px;
        margin-bottom: -2px;
    }

    .bus-item span.business-icon {
        width 17px;
        height: 17px;
        display: inline-block;
        background url("https://kedand.oss-cn-beijing.aliyuncs.com/uploads/business.png")
        background-position 0 0;
        background-size cover;
        background-repeat no-repeat;
        margin-right: 4px;
        margin-bottom: -2px;
    }

    .bus-wrap {
        text-align center;
        font-size: 18px;
    }

    .bus-title {
        margin-bottom: 50px;
    }

    .bus-title span {
        border-bottom: 1px solid #e5e5e5;
        padding: 40px 0 5px;
        display: inline-block;
    }
</style>