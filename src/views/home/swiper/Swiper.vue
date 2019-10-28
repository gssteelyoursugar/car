<template>
    <div class="home-swiper">
        <el-carousel :interval="4000" type="card" height="88px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <img :src="item.url" class="swiper-img">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      imgList: {
        type: Array
      }
    }
  }
</script>

<style lang="stylus" scoped>



    .home-swiper {
        margin-top: 25.5px;
    }

    .home-swiper >>> .el-carousel__indicator--horizontal {
        display: inline-block;
        padding: 6px 4px;
    }
    .swiper-img {
        width: 100%
    }
    .el-carousel__item{
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>