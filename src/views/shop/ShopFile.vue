<template>
    <div class="change-file">
        <template v-if="!showPop">
            <van-cell-group>
                <van-cell title="门店名称" @click="togglePop('name',shopInfo.name)" is-link :value="shopInfo.name"/>
                <van-cell title="门店地址" @click="togglePop('addr',shopInfo.addr)" is-link :value="shopInfo.addr"/>
                <van-cell title="    " @click="togglePop('addrDetail',shopInfo.addrDetail)" is-link :value="shopInfo.addrDetail"/>
                <van-cell title="联系人" @click="togglePop('user',shopInfo.user)" is-link :value="shopInfo.user"/>
                <van-cell title="联系电话" @click="togglePop('phone',shopInfo.phone)" is-link :value="shopInfo.phone"/>
                <van-cell title="店铺简介" @click="togglePop('desc',shopInfo.desc)" is-link :value="shopInfo.desc"/>
                <van-cell title="门店环境相片" is-link @click="togglePop('photo',shopInfo.photo)" value="修改相片"/>
                <van-cell title="营业执照" is-link @click="togglePop('license',shopInfo.license)" value="修改相片"/>
            </van-cell-group>
        </template>
        <template v-else>
            <input-item :detail="curValue" :curPop="curPop" @changeStatus="handleChange"/>
        </template>
    </div>
</template>

<script>
  import InputItem from "./component/InputItem";
  import detail from "../../router/detail";

  export default {
    name: "ShopFlie",
    components: {InputItem},
    data() {
      return {
        showPop: false,
        curPop: '',
        curValue: '',
        shopInfo: {
          name: '阿帕车灯（凯斯店）',
          addr: '广东省广州市白云区',
          addrDetail: '体育西路9号',
          user: '周某某',
          phone: '15878030909',
          desc:'啊打上句号九大世界黑压',
          photo: '',
          license:''
        }
      }
    },
    methods: {
      togglePop(e,detail) {
        this.curPop = e
        this.curValue = detail
        this.showPop = !this.showPop
      },
      handleChange (e) {
        console.log(e.curPop);
        this.showPop = e.status
        this.shopInfo[e.curPop] = e.datas
      }
    }
  }
</script>

<style scoped>

</style>