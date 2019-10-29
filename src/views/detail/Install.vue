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
            <Card :tabs="tabs" :curIndex="curIndex"/>
        </div>
    </div>
</template>

<script>
    import Card from './component/InstallCard'
  /**
   * status: 1待确认，2待安装，3待审核，4驳回，5已结算
   */
  export default {
    name: "Install",
    data() {
      return {
        showRate: true,
        rate: 3.5,
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
        tabs: [
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
                      'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg',
                      'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg',
                      'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg'
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
    components: {
      Card
    },
    methods: {
      changeBar(idx) {
        this.curIndex = idx
      },
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

</style>