<template>
    <div class="official-container">
        <div class="cate-bar">
            <template v-if="searchValue === ''">
                <div class="bar-item" :class="{active: curIndex === index}" @click="changeBar(index)"
                     v-for="(item,index) of actionBar" :key="item.id">
                    <span>{{ item.name }}</span>
                </div>
                <van-icon name="search" class="search-icon" @click="showSearch"/>
            </template>
            <template v-else>
                <van-search
                        v-model="searchValue"
                        placeholder="请输入搜索关键词"
                        show-action
                        shape="round"
                        @search="onSearch"
                >
                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </template>
        </div>

        <!--全局搜索-->
        <div class="whole-search" v-if="showSearchBar">
            <van-search
                    v-model="searchValue"
                    placeholder="请输入搜索关键词"
                    show-action
                    shape="round"
                    @search="onSearch"
            >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <!--全局搜索-->
        <div class="bar-content">
            <div v-for="(list,index) of tabs" :key="index" v-if="index=== curIndex">
                <template v-for="(item,idx) of list.list">
                    <div class="content-item">
                        <div class="item-bg-left">
                            <p>{{item.condition}}抵</p>
                            <p><span>¥</span>{{item.sub_price}}</p>
                            <p>到店还有精美礼品一份</p>
                        </div>
                        <div class="item-info-right">
                            <p>{{item.order_num}} / {{item.type}}</p>
                            <div class="owner-info">
                                <span class="info-left">车主:</span><span>{{item.owner}}</span>
                            </div>
                            <div class="owner-info">
                                <span class="info-left">电话:</span><span>{{item.phone}}</span>
                            </div>
                            <div class="date-action">
                                <div class="da date">{{item.order_date}}</div>
                                <div class="da status">
                                    <span v-if="item.status==='1'">待核销</span>
                                    <span v-if="item.status==='2'">已核销</span>
                                    <span v-if="item.status==='3'">已退货</span>
                                    <span v-if="item.status==='4'">已评价</span>
                                </div>
                                <div class="da action" v-if="item.status==='1'" @click="toggleShowCode">确认核销</div>
                                <div class="da rate" v-if="item.status==='4'" @click="clickRate(idx)"><span>评价</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="rate-content" v-if="curRate===idx && showRate" v-for="rate of item.rate" :key="item.id">
                        <div class="star">
                            <el-rate
                                    v-model="rate.rate_star"
                                    disabled
                                    show-score
                                    text-color="#FF5861">
                            </el-rate>
                        </div>
                        <div class="rate-text">
                            <span>{{rate.content}}</span>
                        </div>
                        <div class="img-list">
                            <div class="img-item" v-for="pic of rate.imgList">
                                <img :src="pic"
                                     alt="">
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="code-input" v-if="showCode">
            <div class="code-wrap">
                <template v-if="!slipSucc">
                    <h6 class="code-title">请输入核销码</h6>
                    <h6 class="code-desc">为订单5501进行核销</h6>
                    <van-search placeholder="请输入核销码" input-align="center" v-model="value"/>
                    <div class="action-btn">
                        <span @click="toggleShowCode">取消</span>
                        <span @click="clickToSlip">确认</span>
                    </div>
                </template>
                <template v-else>
                    <h6 class="code-title">核销提示</h6>
                    <h6 class="status-msg">核销成功</h6>
                    <div class="action-btn" @click="goBack"><span>返回</span></div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Official",
    data() {
      return {
        curIndex: 0,
        curRate: 0,
        showSearchBar: false,
        actionBar: [
          {
            id: '1',
            name: '全部'
          },
          {
            id: '2',
            name: '待核销'
          },
          {
            id: '3',
            name: '已核销'
          },
          {
            id: '4',
            name: '已退货'
          },
          {
            id: '5',
            name: '已评价'
          }
        ],
        showCode: false,
        slipSucc: false,
        value: '',
        tabs: [
          {
            list: [
              {
                id: '1',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈启勇',
                status: '1',
                condition: '100',
                sub_price: '600',
                order_num: 5502,
                order_date: '2019.09.08'
              },
              {
                id: '2',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈东梅',
                status: '4',
                condition: '200',
                sub_price: '400',
                order_num: 9527,
                order_date: '2019.09.08',
                rate: [
                  {
                    id: '1',
                    rate_star: 4.5,
                    content: '买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车',
                    imgList: [
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png',
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png',
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png'
                    ],
                  }
                ]
              },
            ]
          },
          {
            list: [
              {
                id: '1',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈启勇',
                status: '1',
                condition: '100',
                sub_price: '600',
                order_num: 5502,
                order_date: '2019.09.08'
              },
              {
                id: '2',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈东梅',
                status: '1',
                condition: '200',
                sub_price: '400',
                order_num: 9527,
                order_date: '2019.09.08'
              },
            ]
          },
          {
            list: [
              {
                id: '1',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈启勇',
                status: '2',
                condition: '100',
                sub_price: '600',
                order_num: 5502,
                order_date: '2019.09.08'
              },
              {
                id: '2',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈东梅',
                status: '2',
                condition: '200',
                sub_price: '400',
                order_num: 9527,
                order_date: '2019.09.08'
              },
            ]
          },
          {
            list: [
              {
                id: '1',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈启勇',
                status: '3',
                condition: '100',
                sub_price: '600',
                order_num: 5502,
                order_date: '2019.09.08'
              },
              {
                id: '2',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈东梅',
                status: '3',
                condition: '200',
                sub_price: '400',
                order_num: 9527,
                order_date: '2019.09.08'
              },
            ]
          },
          {
            list: [
              {
                id: '1',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈启勇',
                status: '4',
                condition: '100',
                sub_price: '600',
                order_num: 5502,
                order_date: '2019.09.08',
                rate: [
                  {
                    id: '1',
                    rate_star: 4.5,
                    content: '买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车',
                    imgList: [
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png',
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png',
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png'
                    ],
                  }
                ]
              },
              {
                id: '2',
                type: '别克2017君威1.5t精英版',
                phone: '18665431625',
                owner: '陈东梅',
                status: '4',
                condition: '200',
                sub_price: '400',
                order_num: 9527,
                order_date: '2019.09.08',
                rate: [
                  {
                    id: '1',
                    rate_star: 4.5,
                    content: '买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车',
                    imgList: [
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png',
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png',
                      'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png'
                    ],
                  }
                ]
              },
            ]
          },
        ],
        showRate: false,
        searchValue: ''
      }
    },
    methods: {
      changeBar(idx) {
        this.curIndex = idx
      },
      clickRate(index) {
        console.log(index);
        this.curRate = index
        this.showRate = !this.showRate
      },
      toggleShowCode() {
        this.showCode = !this.showCode
      },
      clickToSlip() {
        this.slipSucc = !this.slipSucc
      },
      goBack() {
        this.toggleShowCode()
        this.$router.push('/official')
      },
      showSearch() {
        this.showSearchBar = !this.showSearchBar
      },
      onSearch() {
        this.showSearch()
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .cate-bar {
        padding: 10px 14px;
        display: flex;
        width: 93%;
    }

    .search-icon {
        padding: 0 10px;
        font-weight: 600;
        color: #333;
    }

    .cate-bar .van-search {
        width: 100%;
        margin-top 0
    }

    .whole-search {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f4f4f4;
        z-index: 9;
    }

    .whole-search >>> .van-search {
        background #f4f4f4 !important;
        margin-top:0
    }

    .bar-item {
        flex: 1;
        text-align center;
        color: #666;
        font-size 15px;
    }

    .bar-item span {
        flex: 1;
        text-align center;
        color: #999;
        /*font-size 15px;*/
        font-size 14px;
        padding: 4px;
        border: 1px solid transparent;
        transition: color 1.2s, border 1.2s;
        -webkit-transition: color .7s, border .7s;
    }

    .cate-bar .bar-item.active span {
        padding: 4px;
        border-bottom: 2px solid #434343;
        /*font-size 18px;*/
        /*font-size 16px;*/
        color: #333;
        border-radius: 2px;
    }

    //   卡片内容
    .content-item {
        display: flex;
        margin: 20px 10px;
        border: 1px solid #e5e5e5;
        border-radius: 13px;
        overflow: hidden;
        box-shadow: 0 0 3px 0 #e5e5e5;
    }

    .item-bg-left {
        overflow: hidden;
        height: 0;
        padding-bottom: 100px;
        background: url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/coupon.png);
        width: 40%;
        background-size: cover;
        background-position: 0 0px;
        background-repeat: no-repeat;
        padding: 10px 6px 100px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .item-bg-left p {
        margin: 0;
        color: #fff;
    }

    .item-bg-left p:first-child {
        font-size: 18px;
        padding-left: 4px;
        font-weight: 300;
    }

    .item-bg-left p:nth-child(2) {
        font-size: 36px;
        text-align: center;
        margin-top: 5px;
    }

    .item-bg-left p:nth-child(2) span {
        font-size: 18px;
        margin-right: 5px;
    }

    .item-bg-left p:last-child {
        font-size: 12px;
        margin-top: 12px;
    }

    .item-info-right {
        width: 60%;
        font-size: 12px;
        padding: 0 10px;
        color: #333;
    }

    .item-info-right p {
        margin: 9px 0;
    }

    .owner-info {
        padding: 0 0 10px;
        color: #999;

    }

    .owner-info .info-left {
        margin-right: 10px;
    }

    .date-action {
        display: flex;
        border-top: 1px solid #e5e5e5;
    }

    .da {
        width: 33.33%;
        text-align center;
        color: #999;
    }

    .date-action {
        padding-top: 10px;
    }

    .date-action .action {
        color: #FF7F58;
    }

    .date-action .rate span {
        border-bottom: 1px solid #E88403;
        color: #333;
    }

    .rate-content {
        border: 1px solid #e5e5e5;
        padding: 0 15px 13px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        margin: 0 10px 15px;

    }

    .rate-content .star {
        margin: 10px 0;
    }

    .rate-text {
        color: #000;
        font-weight 500;
        font-size: 12px;
        overflow hidden;
        width: 99%;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display -webkit-box;
        -webkit-box-orient vertical;
        -webkit-line-clamp: 3;
    }

    .img-list {

    }

    .img-list .img-item {
        display: inline-block;
        margin-top: 13px;
        margin-right: 14px;
    }

    .img-list .img-item img {
        width: 43px;
        height: 43px;
    }

    // 弹出框
    .code-input {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background #000000aa;
    }

    .code-wrap {
        background #fff;
        width: 80%;
        margin 40% 10%;
        border-radius: 10px;
        text-align: center;
        overflow hidden;
    }

    .code-title {
        font-size 16px;
        font-weight: 400;
        color: #333;
        margin 14px 0;
    }

    .code-desc {
        font-size 14px;
        color: #666;
        font-weight: 400;
        margin 0;
    }

    .action-btn {
        margin-top: 30px;
        display: flex;
        border-top: 1px solid #e5e5e5;
    }

    .action-btn span {
        flex 1;
        font-size: 16px;
        color: #999;
        padding 15px 0;
    }

    .action-btn span:last-child {
        border-left: 1px solid #e5e5e5;
        color: #000;
    }

    .code-wrap >>> .van-field__left-icon {
        display none;
    }

    .van-search {
        margin-top: 20px;
    }

    .status-msg {
        color #EF705C;
        font-size 16px;
        font-weight: 400;
    }
</style>