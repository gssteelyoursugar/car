<template>
    <div class="change-file">
        <van-cell-group v-if="!is_upload">
            <van-field v-model="datas" :placeholder="placeHolder" clearable/>
        </van-cell-group>

        <van-uploader v-model="fileList" multiple v-if="is_upload"/>
        <div class="save-btn" @click="saveData">保存</div>
        <!--{{detail}} {{curPop}} {{placeHolder}}-->
    </div>
</template>

<script>
  export default {
    name: "InputItem",
    data() {
      return {
        name: '',
        datas: this.detail,
        is_upload: false,
        fileList: [
          { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
          // Uploader 根据文件后缀来判断是否为图片文件
        ]
      }
    },
    methods: {
      saveData() {
        let data ={
          datas: this.datas,
          status: false,
          curPop:this.curPop
        }
        this.$emit('changeStatus', data)
      }
    },
    computed: {
      placeHolder() {
        if (this.curPop === 'name') {
          return this.pHolder = '请输入店铺名'
        }
        if (this.curPop === 'addrDetail') {
          return this.pHolder = '请输入详细地址'
        }
        if (this.curPop === 'user') {
          return this.pHolder = '请输入联系人'
        }
        if (this.curPop === 'phone') {
          return this.pHolder = '请输入联系人号码'
        }
        if (this.curPop === 'desc') {
          return this.pHolder = '请输入店铺简介'
        }
        if(this.curPop === 'photo' || this.curPop === 'license') {
          return this.is_upload = true
        }
      }
    },
    props: {
      detail: {
        type: String
      },
      curPop: {
        type: String
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .change-file {
        position fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background #f4f4f4
    }

    .save-btn {
        width: 60%;
        margin: 0 auto;
        border-radius: 40px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        padding: 10px;
        background: #ea3756;
        box-shadow: 0 0 3px 0 #ea3756;
        position: fixed;
        left:0;
        right:0;
        bottom: 40px;
    }

    .change-file .van-uploader {
        padding: 30px 16px;
    }
</style>