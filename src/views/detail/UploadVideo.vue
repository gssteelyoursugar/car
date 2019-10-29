<template>
    <div class="upload-container">
        <!--彩色底层背景-->
        <div class="color-bg"></div>
        <div class="order-wrap">
            <div class="upload-item">
                <div class="upload-title"><span>上传视频（1）</span></div>
                <div class="upload-content">
                    <van-uploader>
                        <van-button icon="video">上传视频</van-button>
                    </van-uploader>
                    <p>点击进入相册选择需要上传的视频</p>
                </div>
            </div>
            <div class="upload-item">
                <div class="upload-title"><span>上传视频（2）</span></div>
                <div class="upload-content">
                    <van-uploader>
                        <van-button icon="video">上传视频</van-button>
                    </van-uploader>
                    <p>点击进入相册选择需要上传的视频</p>
                </div>
            </div>
            <div class="continue">
                <van-icon name="add-o" class="add-item"/>
                继续添加视频
            </div>
            <div class="add-tips">最多可上传5段视频(2/5)</div>
            <div class="confirm-upload" @click="clickToUpload">确认上传视频</div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "UploadVideo",
    methods: {
      clickToUpload () {
        this.$router.push('/upload-succ')
      }
    }
  }
</script>

<style lang="stylus" scoped>

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
        padding-top: 30px;
    }

    .upload-item {
        padding: 0 10px;
        overflow hidden;
    }

    .upload-title span {
        border-left: 2px solid #F08109;
        padding-left: 14px;
        color: #333;
        font-size: 15px;
    }

    .upload-content {
        text-align: center;
        margin: 20px auto;
    }

    .van-uploader__input-wrapper .van-button {
        width: 240px;
        height: 120px;
        color: #666;
    }

    .upload-content p {
        color: #333;
        font-size: 12px;
    }

    .continue {
        border: 1px solid #F08109;
        width: 40%;
        text-align: center;
        padding: 6px 0;
        font-size 14px;
        border-radius 40px;
        margin: 20px auto 0;
        color: #F08109;
        position: relative;
        padding-left: 15px;
    }

    .continue .add-item {
        position: absolute;
        top: 6px;
        left: 30px;
    }

    .add-tips {
        font-size: 12px;
        color: #333;
        text-align center;
        margin-top: 4px;
    }
    .confirm-upload {
        font-size:12px;
        color #fff;
        background: #EA3756;
        width: 90%;
        margin:20px auto 10px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        padding: 10px 0;
        text-align center;
    }
</style>