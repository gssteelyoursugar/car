<template>
    <div class="home">
        <user-info/>
        <swiper :imgList="imgList"/>
        <category :cateList="cateList"/>
        <my-footer/>
    </div>
</template>

<script>
  import UserInfo from './userCard/UserInfo'
  import Swiper from './swiper/Swiper'
  import Category from './category/Category'
import MyFooter from './../../components/Footer/Footer'
  export default {
    name: 'home',
    data() {
      return {
        imgList: [
          {
            id: '01',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png'
          },
          {
            id: '02',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png'
          },
          {
            id: '03',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png'
          },
          {
            id: '04',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png'
          }
        ],
        cateList: [
          {
            id: '1',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/install%402x.png',
            name: '安装单',
            english: 'INSTALLATION LIST'
          },
          {
            id: '2',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bill%402x.png',
            name: '账单',
            english: 'BILL'
          },
          {
            id: '3',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/official.png',
            name: '官派单',
            english: 'OFFICIAL'
          },
          {
            id: '4',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/upload%402x.png',
            name: '视频上传',
            english: 'VIDEO UPLOAD'
          },
          {
            id: '5',
            url: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/install%402x.png',
            name: '核销',
            english: 'VERIFICARTION SLIP'
          },
        ]
      }
    },
    components: {
      UserInfo,
      Swiper,
      Category,
      MyFooter
    }
  }
</script>

<style scoped>
    .home {
        background: #f4f4f4;
    }
</style>