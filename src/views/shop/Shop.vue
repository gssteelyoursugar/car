<template>
    <div class="shop-container">
        <template v-if="!showBusiness">
            <div class="shop-file">
                <div class="file-title">
                    <p></p>
                    <p>请选择进入门店号</p>
                    <router-link tag="p" to="/add-shop"><span>添加新门店</span></router-link>
                </div>
            </div>
            <div class="shop-list">
                <div class="list-item" @click="pickShop">
                    <span>幻影车灯音响 王龙飞</span><span><van-icon name="arrow" class="right-arrow"/></span>
                </div>
                <div class="list-item" @click="pickShop">
                    <span>钟祥启程车灯服务店</span><span><van-icon name="arrow" class="right-arrow"/></span>
                </div>
                <div class="list-item" @click="pickShop">
                    <span>亮途汽车灯光升级服务店</span><span><van-icon name="arrow" class="right-arrow"/></span>
                </div>
            </div>
        </template>
        <template v-else>
            <business/>
        </template>
    </div>
</template>

<script>
  import Business from './component/ShopBusiness'

  export default {
    name: "Shop",
    data() {
      return {
        showBusiness: false
      }
    },
    methods: {
      pickShop () {
        this.showBusiness = !this.showBusiness
      }
    },
    components: {
      Business
    }
  }
</script>

<style lang="stylus" scoped>
    .shop-file {
        overflow hidden;
        height 0;
        padding-bottom: 36%;
        background: url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bj.png);
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        background-color #f4f4f4;
        border-radius: 100% 100% 100% 100% / 0% 0% 50px 50px;
    }

    .file-title {
        display: flex;
        height: 140px;
        line-height: 140px;
    }

    .file-title p {
        flex: 1;
        color: #fff;
        margin: 0;
    }

    .file-title p:nth-child(2) {
        flex: 2;
        text-align center;
        font-size 18px;
    }

    .file-title p:last-child span {
        font-size: 12px;
        color: #fff;
        padding: 2px;
        border-radius: 4px;
        border: 1px solid #fff;
    }

    .shop-list {
        overflow: hidden;
        position: absolute;
        width: 100%;
        margin-top: -50px;
    }

    .list-item {
        border: 1px solid #e5e5e5;
        width: 80%;
        margin: 30px auto;
        text-align: center;
        color: #333;
        font-size: 15px;
        padding: 18px 10px;
        border-radius: 10px;
        box-shadow: 0 0 4px 0 #d1d1d1;
        background #fff;
        position: relative;
        display: flex;
    }

    .list-item span:first-child {
        width: 80%;
        display: inline-block;
        text-align left;
    }

    .list-item .right-arrow {
        position: absolute;
        top: 18px;
        width: 20%;
        text-align right;
    }
</style>