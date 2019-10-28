<template>
    <div class="content-box">
        <div v-for="(list,index) of tabs" :key="index" v-if="index === curIndex">
            <template v-for="(item,idx) of list.list">
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
                    </div>
                    <div class="re-reason" v-if="item.status==='4'">
                        <span class="type">*驳回原因：</span> <span>{{item.re_msg}}</span> <span class="type">{{item.re_type}}</span>
                    </div>
                    <div class="rate" v-if="item.status==='5'" @click="clickRate(idx)">评价</div>
                </div>
                <div class="rate-content" v-if="curRate===idx && showRate">
                    <div class="star">
                        <el-rate
                                v-model="rate"
                                disabled
                                show-score
                                text-color="#FF5861">
                        </el-rate>
                    </div>
                    <div class="rate-text">
                        <span>买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车,直到前几天晚上回家，因为对向车道车</span>
                    </div>
                    <div class="img-list">
                        <div class="img-item">
                            <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg"
                                 alt="">
                        </div>
                        <div class="img-item">
                            <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg"
                                 alt="">
                        </div>
                        <div class="img-item">
                            <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg"
                                 alt="">
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Card",
    data () {
      return {
        showRate: false,
        rate: 3.5,
        value: '',
        curRate: 0
      }
    },
    methods: {
      clickRate(index) {
        console.log(index);
        this.curRate = index
        this.showRate = !this.showRate
      }
    },
    props: {
      tabs: {
        type: Array
      },
      curIndex: {
        type: Number
      }
    }

  }
</script>

<style lang="stylus" scoped>
    //   卡片信息
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

    //
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

    //  产品信息
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

    //评价
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

    .rate-content {
        border: 1px solid #e5e5e5;
        padding: 0 15px 13px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
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
        height:43px;
    }
</style>