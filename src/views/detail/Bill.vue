<template>
    <div class="bill-container">
        <div class="search-bill">
            <van-search placeholder="请输入搜索关键词" shape="round" v-model="value"/>
        </div>
        <div class="date-pick">
            <div class="pick-icon" @click="showTimePick">
                <span>2019-08</span>
                <van-icon name="arrow-down" class="arrow-icon"/>
            </div>
            <div class="in-out-come">
                <p class="in-come">收入¥5000.00</p>
                <p class="out-come">支出¥5000.00</p>
            </div>
            <!--日期弹出框-->
            <van-popup v-model="showPick" position="bottom">
                <van-datetime-picker
                        v-model="currentDate"
                        type="year-month"
                        :min-date="minDate"
                        :formatter="formatter"
                        @cancel="showTimePick"
                        @confirm="getValues"
                />
            </van-popup>
        </div>
        <div class="bill-list">
            <div class="list-item border-bottom">
                <div class="item-left">
                    <p>安装费</p>
                    <p>订单结算-9527</p>
                    <p>2019-08-18 12:00</p>
                </div>
                <div class="item-right">
                    <p class="in"><span>+</span><span>500.00</span></p>
                    <p><span>余额5500.00</span></p>
                </div>
            </div>
            <div class="list-item border-bottom">
                <div class="item-left">
                    <p>安装费</p>
                    <p>订单结算-9527</p>
                    <p>2019-08-18 12:00</p>
                </div>
                <div class="item-right">
                    <p class="out"><span>-</span><span>500.00</span></p>
                    <p><span>余额5500.00</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Bill",
    data() {
      return {
        value: '',
        currentDate: new Date(),
        minDate: new Date(2018, 0),
        showPick: false
      }
    },
    methods: {
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        }
        return value;
      },
      showTimePick() {
        this.showPick = !this.showPick
      },
      getValues(e) {
        console.log(e);
        this.showTimePick()
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //  时间选择
    .date-pick {
        background: #eee;
        padding: 10px 3%;
        display: flex;
    }

    .pick-icon {
        position: relative;
        border: 1px solid #e5e5e5;
        background #fff;
        padding: 5px 9px;
        font-size: 12px;
        border-radius: 30px;
        width: 15%;
        line-height: 14px;
        max-height: 24px;
        min-width: 56px;
    }

    .pick-icon .arrow-icon {
        position: absolute;
        top: 5px;
    }

    .in-out-come {
        width: 85%;
        text-align right;
    }

    .in-out-come p {
        margin: 0;
        font-size: 12px;
        color: #666;
    }

    //  账单明细
    .list-item {
        display: flex;
        font-size: 12px;
        padding: 15px 3%;
    }

    .item-left p, .item-right p {
        margin: 0;
    }

    .item-left {
        width: 70%;
        color: #2b2b2b;
    }

    .item-left p:first-child {
        font-size: 14px;
    }

    .item-left p:nth-child(2) {
        margin: 7px 0;
    }

    .item-left p:last-child {
        color: #666;
    }

    .item-right {
        width: 30%;
        text-align right;
        padding-top: 6px;
    }

    .item-right p:first-child.in {
        font-size: 18px;
        color: #CD4B4C
    }
    .item-right p:first-child.out {
        font-size: 18px;
        color: #333;
    }

    .item-right p:first-child span:first-child {
        font-size: 14px;
        margin-right: 2px;
    }
    .item-right p:last-child span {
        font-size: 12px;
        color: #666;
    }

</style>