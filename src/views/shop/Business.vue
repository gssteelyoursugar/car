<template>
    <div class="business">
        <div class="bus-wrap">
            <div class="bus-title" @click="togglePick">
                <span v-if="shopName===''">{{curShop}}<van-icon name="arrow-down"/></span>
                <span v-else>{{shopName}}<van-icon name="arrow-down"/></span>
            </div>

            <div class="pick-wrap" v-if="showItem">
                <div class="pick-item" v-for="item of shopList" :key="item.id" @click="pickItem(item.name)">{{item.name}}</div>
            </div>
            <!-- 背景需在 下面style 里面添加-->
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
    name: "Business",
    props: {
      curShop: {
        type: String
      },
      shopList: {
        type: Array
      }
    },
    data() {
      return {
        showItem: false,
        shopName: ''
      }
    },
    methods: {
      togglePick() {
        this.showItem = !this.showItem
      },
      pickItem (name) {
        console.log(name);
        this.shopName = name
        this.togglePick()
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .bus-item {
        width: 80%;
        margin: 30px auto;
        border: 1px solid #e5e5e5;
        padding: 15px 4px 15px 10px;
        border-radius: 10px;
        box-shadow: 0 0 4px 0 #e5e5e5;
        color: #333;
        font-size: 14px;
    }

    .bus-item span {
        width 16px;
        height: 16px;
        display: inline-block;
        margin-right: 10px;
        margin-bottom: -2px;
    }

    .bus-item span.shop-icon {
        background url("https://kedand.oss-cn-beijing.aliyuncs.com/uploads/shop.png")
        background-position 0 0;
        background-size cover;
        background-repeat no-repeat;
    }

    .bus-item span.business-icon {
        background url("https://kedand.oss-cn-beijing.aliyuncs.com/uploads/business.png")
        background-position 0 0;
        background-size cover;
        background-repeat no-repeat;
    }

    .bus-title {
        margin-bottom: 30px;
        padding-left: 20px;
        font-size: 14px;

    }

    .bus-title span {
        border-bottom: 1px solid #e5e5e5;
        padding: 40px 0 5px;
        display: inline-block;
    }
.bus-wrap {
    position: relative;
}
    .pick-wrap {
        width: 70%;
        margin: 0 auto;
        border: 1px solid #e5e5e5;
        padding: 10px 0;
        position: absolute;
        left: 16px;
        top: 70px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 0 8px 0 #e5e5e5;
    }
    .pick-item {
        font-size: 14px;
        padding-left: 10px;
        color: #666;
        margin: 10px 0;
    }
</style>