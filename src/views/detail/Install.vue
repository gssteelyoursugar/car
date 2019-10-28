<template>
    <div class="install-container">
        <div class="seach-bar">
            <van-search placeholder="请输入搜索关键词" v-model="value"/>
        </div>
        <div class="content-tabs">
            <div class="cate-bar">
                <div class="bar-item" :class="{active: curIndex === index}" @click="changeBar(index)"
                     v-for="(item,index) of actionBar" :key="item.id">
                    <span>{{ item.name }}</span>
                </div>
            </div>
            <div class="content-box">
                <div v-for="(list,index) of tabContents" :key="index" v-if="index === curIndex">
                    <template v-for="item of list.list">
                        <div class="box-item">
                            <div class="price-date">
                                <div class="bill-price">
                                    <span>{{item.price}}</span><span>RMB</span>
                                </div>
                                <div class="bill-date">
                                    {{item.order_date}}
                                </div>
                            </div>
                            <div class="bill-order-status">
                                <div class="bill-order">{{item.order_num}}</div>
                                <div class="bill-status">
                                    状态：<span v-if="!item.status">未知</span>
                                    <span v-if="item.status==='1'">待确认</span>
                                    <span v-if="item.status==='2'">待安装</span>
                                    <span v-if="item.status==='3'">待审核</span>
                                    <span v-if="item.status==='4'">驳回</span>
                                    <span v-if="item.status==='5'">已结算</span>
                                </div>
                            </div>
                            <div class="bill-info">
                                <div class="info-item"><span class="info-title">产品：</span><span class="info-content">{{item.name}}</span>
                                </div>
                                <div class="info-item"><span class="info-title">车型：</span><span class="info-content">{{item.type}}</span>
                                </div>
                                <div class="info-item"><span class="info-title">客服：</span><span class="info-content">{{item.servicer}}</span>
                                </div>
                                <div class="info-item"><span class="info-title">安装店：</span><span class="info-content">{{item.shop}} {{item.shop_assit}}</span>
                                </div>
                                <div class="info-item"><span class="info-title">说明：</span><span
                                        class="info-content">客服留言</span>
                                </div>
                                <div class="re-msg">
                                </div>
                            </div>
                            <div class="re-reason" v-if="item.status==='4'">
                                <span class="type">*驳回原因：</span> <span>{{item.re_msg}}</span> <span class="type">{{item.re_type}}</span>
                            </div>
                            <div class="rate" v-if="item.status==='5'">评价</div>
                        </div>
                        <div class="rate-content" v-if="item.statu==='5' && showRate">
                            <el-rate
                                    v-model="rate"
                                    disabled
                                    show-score
                                    text-color="#ff9900">
                            </el-rate>
                        </div>
                    </template>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  /**
   * status: 1待确认，2待安装，3待审核，4驳回，5已结算
   */
  export default {
    name: "Install",
    data() {
      return {
        showRate: false,
        rate:'3',
        value: '',
        actionBar: [
          {
            id: '1',
            name: '全部'
          },
          {
            id: '2',
            name: '待确认'
          },
          {
            id: '3',
            name: '待安装'
          },
          {
            id: '4',
            name: '待审核'
          },
          {
            id: '5',
            name: '驳回'
          },
          {
            id: '6',
            name: '已结算'
          },
        ],
        tabContents: [
          {
            list: [
              {
                id: '1',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '1',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              },
              {
                id: '2',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '1',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              }
            ]
          },
          {
            list: [
              {
                id: '2',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '前途车灯升级服务店',
                shop_assit: '朱汉振',
                status: '1',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              },
              {
                id: '3',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '1',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              },

              {
                id: '4',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '1',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              }
            ]
          },
          {
            list: [
              {
                id: '4',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '2',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              },
              {
                id: '5',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '2',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              },
              {
                id: '6',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '2',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              }
            ]
          },
          {
            list: [
              {
                id: '4',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '3',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              },
              {
                id: '5',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '3',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              },
              {
                id: '6',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '3',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: ''
              }
            ]
          },
          {
            list: [
              {
                id: '7',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '4',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '未安装',
                re_type: '已安装被驳回'
              },
              {
                id: '8',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '4',
                price: 800,
                order_num: 3201,
                order_date: '2019.09.08',
                msg: '客服发送说明要求',
                re_msg: '客户要求临时取消安装',
                re_type: '待安装被驳回'
              },
              {
                id: '9',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '朱汉振',
                status: '4',
                price: 800,
                order_num: 6208,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '未安装',
                re_type: '已安装被驳回'
              }
            ]
          },
          {
            list: [
              {
                id: '10',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '5',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: '',
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
                id: '11',
                name: '征服者',
                type: '别克2017君威1.5t精英版',
                servicer: '安亿仕13755555555',
                shop: '阿帕斯灯(凯斯店)',
                shop_assit: '姜卫卫',
                status: '5',
                price: 800,
                order_num: 5502,
                order_date: '2019.09.08',
                msg: '客服留言',
                re_msg: '',
                re_type: '',
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
              }
            ],
          }
        ],
        curIndex: 0
      }
    },

    methods: {
      changeBar(idx) {
        this.curIndex = idx
      },
      onChange() {

      }
    }
  }
</script>

<style lang="stylus" scoped>
    .cate-bar {
        padding: 10px 14px;
        display: flex;
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
        color: #666;
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

    .content-box {
        padding: 15px 16px;
    }

    .box-item {
        padding 0 15px 12px;
        border-radius: 10px;
        border: 1px solid #e5e5e5;
        margin-bottom: 15px;
        position: relative;
    }

    .price-date, .bill-order-status {
        display flex;
    }

    .price-date {
        padding: 10px 0 0;

    }

    .bill-price {
        color: #CD4B4C;
        font-size: 36px;
        width 60%;
    }

    .bill-price span:last-child {
        font-size: 12px;
        margin-left: 11px;
    }

    .bill-date {
        color: #2B2B2B;
        font-size: 12px;
        text-align right;
        width: 40%;
    }

    .bill-order-status {
        margin-top: 4px;
        margin-bottom: 12px;
    }

    .bill-order {
        font-size: 15px;
        width: 50%;
    }

    .bill-status {
        font-size: 12px;
        color #666;
    }

    .bill-status span:last-child {
        color: #CD4B4C
    }

    .bill-info {
        color: #666;
        font-size 12px;
        overflow hidden;
    }

    .bill-info .info-item {
        margin: 10px 0 0;
    }

    .bill-info .info-item .info-content {
        color: #333;
        margin-left: 4px;
    }

    .re-reason {
        margin: 10px 0 0;
    }

    .re-reason .type {
        color: #CD4B4C;
        font-size: 12px;
    }

    .re-reason span:nth-child(2) {
        color: #333;
        font-size: 12px;
    }

    .rate {
        position: absolute;
        right: 15px;
        bottom 12px;
        font-size: 12px;
        color: #000;
        border-bottom: 3px solid #cd4b4c;
        padding: 0 2px;
        border-radius: 2px;
        line-height: 8px;
    }

    .rate:hover {
        cursor: pointer;

    }
</style>