<template>
    <div class="detail-container">
        <!--彩色底层背景-->
        <div class="color-bg"></div>
        <div class="order-wrap">
            <div class="order-status">
                9527: 待确认
            </div>
            <div class="order-date">2019-09-08 12:00</div>
            <div class="cate-wrap">
                <div class="cate-item">
                    <div class="item-title"><span>车主信息</span></div>
                    <div class="item-content">
                        <div class="item">
                            <span class="item-left">产品：</span>
                            <span class="item-right">守护者S</span>
                        </div>
                        <div class="item">
                            <span class="item-left">车型：</span>
                            <span class="item-right">别克2017君威1.5t精英版</span>
                        </div>
                        <div class="item">
                            <span class="item-left">联系人：</span>
                            <span class="item-right">李某某</span>
                        </div>
                        <div class="item">
                            <span class="item-left">车牌：</span>
                            <span class="item-right">粤A·00000</span>
                        </div>
                        <div class="item">
                            <span class="item-left">备注：</span>
                            <span class="item-right">
                            122354545875457874</span>
                        </div>
                    </div>
                </div>
                <div class="cate-item">
                    <div class="item-title"><span>附带配件</span></div>
                    <div class="item-content">
                        <div class="item">
                            <span class="item-left">支架：</span>
                            <span class="item-right">随货发/供应商代发</span>
                        </div>
                        <div class="item">
                            <span class="item-left">易改件：</span>
                            <span class="item-right">随货发/供应商代发</span>
                        </div>
                        <div class="item">
                            <span class="item-left">解码器：</span>
                            <span class="item-right">有解码器/解码线组/宝典到店</span>
                        </div>
                    </div>
                </div>
                <div class="cate-item">
                    <div class="item-title"><span>门店信息</span></div>
                    <div class="item-content">
                        <div class="item">
                            <span class="item-left">门店：</span>
                            <span class="item-right">阿帕车灯（凯斯店） 姜卫卫</span>
                        </div>
                        <div class="item">
                            <span class="item-left">地址：</span>
                            <span class="item-right">广西省贵港市港北区盛世名门北门F25商铺</span>
                        </div>
                        <div class="item">
                            <span class="item-left">电话：</span>
                            <span class="item-right">15878030909</span>
                        </div>
                        <div class="item">
                            <span class="item-left">业务员：</span>
                            <span class="item-right">黄某某13755555555</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fee-detail">
                <div class="fee">
                    <span>安装费</span>
                    <span>¥800.00</span>
                </div>
                <div class="assit"><span class="item-left">客服：</span><span class="item-right">安亿仕</span></div>
                <div class="notes"><span class="item-left">备注：</span><span class="item-right">122354545875457874</span>
                </div>
            </div>
        </div>
        <div class="action-btn">
            <span>驳回</span>
            <span @click="clickToInstall">接单</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Detail",
    methods: {
      clickToInstall() {
        this.$router.push('/install')
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .detail-container {
        position: relative;
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
        filter: blur(5px);
        z-index: -1;
    }

    .order-wrap {
        min-height: 200px;
        background: #fff;
        width: 90%;
        margin: -100px 5% 20px;
        border-radius: 10px;
        box-shadow: 0 0 4px 0 #e5e5e5;
    }

    .order-status {
        top: 50px;
        position: absolute;
        width: 90%;
        text-align: center;
        font-size: 18px;
        color: #fff;
    }

    .order-date {
        text-align: right;
        padding: 10px 15px;
        font-size: 12px;
        color: #2B2B2B;
    }

    .cate-wrap {
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;
    }

    .cate-item {
        margin: 10px 0;
    }

    .item-title {
        margin: 10px 0;
    }

    .item-title span {
        border-left 2px solid #F3C066;
        padding-left: 10px;
        color: #333;
        font-size 15px;
    }

    .item-content .item {
        font-size: 12px;
        color: #666;
        margin: 10px;
    }

    .item-content .item span.item-right {
        color: #333;
    }

    .fee-detail {
        padding: 20px 10px;
    }

    .fee-detail .fee span {
        display: inline-block;
        width: 50%;
        font-size: 12px;
    }

    .fee-detail .fee span:last-child {
        text-align right;
        font-size: 24px;
        color: #CD4B4C
    }

    .assit {
        margin: 10px 0;
    }

    .assit .item-left, .notes .item-left {
        font-size: 12px;
        color #666;
        margin: 10px 0;
    }

    .assit .item-right, .notes .item-right {
        font-size: 12px;
        color #333;
        margin: 10px;
    }

    .action-btn {
        display: flex;
        margin-bottom: 20px;
    }

    .action-btn span {
        width: 30%;
        margin 0 auto;
        text-align: center;
        border-radius 10px;
        padding: 10px 0;
        border: 1px solid #DB4244;
        color: #DB4244;
        background-color #fff;

    }

    .action-btn span:last-child {
        color: #fff;
        background #DB4244;
    }
</style>