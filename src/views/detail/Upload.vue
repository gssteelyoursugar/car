<template>
    <div class="upload-container">
        <!-- 注意事项-->
        <div class="bg-wrap" v-if="showAds">
            <div class="bg-img">
                <div class="bg-title">注意！</div>
                <div class="bg-content">
                    <p>1.视频上传限2天内安装完成的订单</p>
                    <p>2.请提供电商派单产品的安装前后视频，视频内可内置门店信息。
                        视频将会推广到快手、抖音、优酷、土豆、微博、爱奇艺、懂车帝、汽车之家、淘宝。
                        视频要求15秒内，高清无码无压缩。
                    </p>
                </div>
            </div>
            <div class="close-btn" @click="toggleAds">
                <van-icon name="close"/>
            </div>
        </div>
        <!--彩色底层背景-->
        <div class="color-bg"></div>
        <div class="order-wrap">
            <p class="tips">*仅限上传2天内安装完成订单</p>
            <div class="order-card" @click="clickToUpload(item.id)" v-for="item of uploadList" :key="item.id">
                <div class="card-item">
                    <div class="order-num-time">
                        <div class="order-num">{{item.order_num}}</div>
                        <div class="order-time">{{item.time}}</div>
                    </div>
                    <div class="car-type">
                        <div class="item-left">车型:</div>
                        <div class="item-right">{{item.type}}</div>
                    </div>
                    <div class="order-product">
                        <div class="item-left">产品:</div>
                        <div class="item-right">{{item.prod}}</div>
                    </div>
                    <div class="shop-assit">
                        <div class="shop">{{item.shop}}</div>
                        <div class="assit">{{item.assit}}</div>
                    </div>
                    <div class="upload-btn">上传视频</div>
                </div>
            </div>
        </div>
        <div class="big-tips" v-if="showBigTips">
            <p>请提供电商派单产品的安装前后视频,视频内可内置门店信息。视频将会推广到快手、抖音、优酷等平台。视频要求15秒内,高清无码无压缩。</p>
            <van-icon name="cross" class="dismiss-btn" @click="toggleBigTips" />
        </div>
    </div>
</template>

<script>
  export default {
    name: "Upload",
    data() {
      return {
        showAds: false,
        showBigTips: true,
        uploadList: [
          {
            id:'1',
            order_num: '5502',
            type: '别克2017君威1.5t精英版',
            prod: '征服者S',
            shop: '阿帕车灯（凯斯店）',
            assit: '姜卫卫',
            time: '2019-09-08 12:00'
          },
          {
            id:'2',
            order_num: '5502',
            type: '别克2017君威1.5t精英版',
            prod: '征服者S',
            shop: '阿帕车灯（凯斯店）',
            assit: '姜卫卫',
            time: '2019-09-08 12:00'
          },
          {
            id:'3',
            order_num: '5502',
            type: '别克2017君威1.5t精英版',
            prod: '征服者S',
            shop: '阿帕车灯（凯斯店）',
            assit: '姜卫卫',
            time: '2019-09-08 12:00'
          },
          {
            id:'4',
            order_num: '5502',
            type: '别克2017君威1.5t精英版',
            prod: '征服者S',
            shop: '阿帕车灯（凯斯店）',
            assit: '姜卫卫',
            time: '2019-09-08 12:00'
          },
          {
            id:'5',
            order_num: '5502',
            type: '别克2017君威1.5t精英版',
            prod: '征服者S',
            shop: '阿帕车灯（凯斯店）',
            assit: '姜卫卫',
            time: '2019-09-08 12:00'
          },
          {
            id:'6',
            order_num: '5502',
            type: '别克2017君威1.5t精英版',
            prod: '征服者S',
            shop: '阿帕车灯（凯斯店）',
            assit: '姜卫卫',
            time: '2019-09-08 12:00'
          }
        ]
      }
    },
    methods: {
      toggleAds() {
        this.showAds = !this.showAds
      },
      toggleBigTips () {
        this.showBigTips = !this.showBigTips
      },
      clickToUpload (id) {
        this.$router.push('/upload-video/'+id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .upload-container {
        position: relative;
    }

    .bg-wrap {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000000 aa;
        z-index: 9;
    }

    .bg-img {
        width: 280px;
        margin: 110px auto 20px;
        background: url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/banner_bg.png);
        padding-bottom: 100%;
        height: 0;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .bg-img img {
        width: 100%;
    }

    .close-btn {
        text-align: center;
        font-size: 30px;
        color: #f5f5f5;
    }

    // 内容
    .bg-title {
        padding: 35px 0 10px;
        text-align: center;
        color: #fff;
        font-size: 22px;
    }

    .bg-content {
        padding: 0 15px;
        font-size: 16px;
        color: #fff;
        line-height: 25px;
    }

    // 彩色背景
    .color-bg {
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

    .order-wrap {
        position: absolute;
        top: 60px;
        min-height: 200px;
        background: #fff;
        width: 100%;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
    }

    .order-wrap p {
        padding-left: 20px;
        font-size: 12px;
        padding-top: 8px;
        color: #333;
    }

    .order-card {
        padding: 0 20px;
        margin: 20px 0;
    }

    .card-item {
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        padding: 10px 15px;
        position: relative;
    }

    .order-num-time, .car-type, .order-product, .shop-assit {
        display: flex;
    }

    .order-num {
        width: 60%;
        font-size: 24px;
        color: #000
    }

    .order-time {
        font-size: 12px;
        text-align: right;
        width: 40%;
        color: #666;
    }

    .car-type, .order-product {
        margin: 10px 0;
    }

    .item-left {
        font-size: 15px;
        color: #666;
        margin-right: 10px;
        min-width: 40px;
    }

    .item-right {
        font-size: 15px;
        color: #333;
        max-width: 250px;
    }

    .shop-assit {
        font-size: 12px;
        color: #666;
    }

    .upload-btn {
        border: 1px solid #E74F4E;
        color: #E74F4E;
        padding 4px;
        font-size: 14px;
        text-align: center;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        position: absolute;
        width: 21%;
        right: 20px;
        bottom: 10px;
    }

    .shop {
        max-width: 170px;
    }
    .shop, .item-right {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .big-tips {
        overflow: hidden;
        height: 0;
        padding-bottom: 23%;
        background: url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/robot_bg.png);
        background-position: 0 -20px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        position: fixed;
        left:0;
        right:0;
        bottom: 20px;
    }
    .big-tips p {
        font-size: 12px;
        padding: 17px 20px 18px 100px;
        color: #333;
    }
    .dismiss-btn {
        position: absolute;
        right: 12px;
        top: 24px;
        font-size: 12px;
    }
</style>