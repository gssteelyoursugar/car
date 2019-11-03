<template>
    <!--https://kedand.oss-cn-beijing.aliyuncs.com/uploads/add.png-->
    <div class="add-shop">
        <div class="user-info">
            <div class="user-avatar">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpeg" alt="">
            </div>
            <div class="user-name">阿斯顿改</div>
        </div>
        <div class="apply-info">
            <van-cell-group>
                <van-field
                        v-model="username"
                        label="用户名"
                        placeholder="请输入用户名"
                        clearable
                        clickable
                />
                <van-cell class="special" clickable title="门店地址" :value="cityName" @click="toggleAddr">
                    <van-icon
                            slot="right-icon"
                            name="arrow-down"
                            style="margin-left: 10px;line-height: inherit;color:#fff;"
                    />
                </van-cell>
                <van-field v-model="value" clickable placeholder="请输入具体地址" label="  "/>
                <van-field
                        v-model="contact"
                        label="联系人"
                        placeholder="请输入联系人姓名"
                        clearable
                />
                <van-field
                        v-model="phone"
                        label="联系电话"
                        placeholder="请输入联系号码"
                        clearable
                        clickable

                />
            </van-cell-group>
            <div class="upload-pic">
                <p>门店环境照片</p>
                <van-uploader
                        v-model="fileList"
                        multiple
                        :max-count="3"
                />
            </div>
            <div class="shop-font-license">
                <div class="shop-font">
                    <p>门店正面照片</p>
                    <van-uploader :after-read="afterRead"/>
                </div>
                <div class="shop-license">
                    <p>营业执照</p>
                    <van-uploader :after-read="afterRead"/>
                </div>
            </div>

        </div>
        <div class="action-btn">
            <div class="confirm-btn">确认申请</div>
            <p>取消</p>
        </div>


        <!--弹出层-->
        <van-popup v-model="showAddr" position="bottom">
            <van-area :area-list="areaList" @confirm="pickAddr" @cancel="toggleAddr"/>
        </van-popup>
    </div>
</template>

<script>
  import areaList from '@/assets/js/area.js'

  export default {
    name: "AddShop",
    data() {
      return {
        username: '',
        contact: '',
        phone: '',
        value: '',
        fileList: [
          {url: 'https://img.yzcdn.cn/vant/leaf.jpg'},
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          // { url: 'https://cloud-image', isImage: true }
        ],
        showAddr: false,
        areaList,
        cityName: '北京市-北京市-东城区'
      }
    },
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      },
      toggleAddr() {
        this.showAddr = !this.showAddr
      },
      pickAddr(e) {
        console.log(e);
        let datas = e
        let result = []

        datas.map((item,index)=> {
          console.log(item, index);
          result.push(item.name)
        })
        this.cityName = result.join('-')
        console.log(result);
        this.toggleAddr()

      }
    }
  }
</script>


<!--background url("https://kedand.oss-cn-beijing.aliyuncs.com/uploads/add.png")-->

<style lang="stylus" scoped>
    .add-shop {
        background url("https://kedand.oss-cn-beijing.aliyuncs.com/uploads/add.png")
        background: linear-gradient(-45deg, #e73770, #f1a463);
        background-size cover;
        background-position 0 0;
        background-repeat no-repeat;
    }

    .user-info {
        padding: 30px 0;
    }

    .user-avatar {
        width: 18%;
        margin: 0 auto;
    }

    .user-avatar img {
        width: 100%;
        border-radius: 50%;
    }

    .user-name {
        text-align: center;
        margin-top: 5px;
        color: #fff;
    }

    .special >>> .van-cell__title {
        flex: none;
        width: 90px;
    }

    .special >>> .van-cell__value {
        text-align left;
    }

    .apply-info >>> .van-cell-group {
        background transparent;
    }

    .apply-info >>> .van-cell {
        background transparent;
    }

    .apply-info >>> .van-field__label, .apply-info >>> .van-cell__title {
        color: #e8e8e8;
    }

    .apply-info >>> .van-field__body input::placeholder, .apply-info >>> .van-cell__value, .apply-info >>> .van-field__body input, .special >>> .van-icon-arrow-down {
        color: #fff;
    }

    // 图片上传
    .upload-pic {
        padding: 0 16px;
        margin: 20px 0;
    }

    .upload-pic p, .shop-font p, .shop-license p {
        margin: 4px 0 14px;
        font-size: 13px;
        color: #E8E8E8;
    }

    .shop-font-license {
        display flex;
        padding-bottom: 20px;
    }

    .shop-font, .shop-license {
        margin-left: 16px;
    }

    .confirm-btn {
        width: 90%;
        margin: 0 auto;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        padding: 6px 0;
        font-size: 14px;
        color: #fff;
        border: 1px solid #F85911;
        text-align center;
        background #F85911;
    }

    .action-btn p {
        margin: 0;
        padding: 4px 0 10px;
        text-align center;
        font-size: 14px;
        color: #E2E2E2;
    }


</style>