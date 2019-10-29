<template>
    <div class="category-container">
        <div class="category-item"
             style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/install%402x.png');background-position: center;
background-size: cover;"
             @click="goToDetail('/install')"
        >
            <p class="cate-title">安装单</p>
            <p class="cate-eng">INSTALLATION LIST</p>
        </div>
        <div class="category-item"
             style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bill%402x.png');background-position: center;
background-size: cover;"
             @click="goToDetail('/bill')"
        >
            <p class="cate-title">账单</p>
            <p class="cate-eng">BILL</p>
        </div>
        <div class="category-item"
             style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/official.png');background-position: center;
background-size: cover;"
             @click="goToDetail('/official')"
        >
            <p class="cate-title">官派单</p>
            <p class="cate-eng">OFFICIAL</p>
        </div>
        <div class="category-item"
             style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/upload%402x.png');background-position: center;
background-size: cover;"
             @click="goToDetail('/upload')"
        >
            <p class="cate-title">视频上传</p>
            <p class="cate-eng">VIDEO UPLOAD</p>
        </div>
        <div class="category-item"
             style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/slip.png');background-position: center;
background-size: cover;"
             @click="goToDetail('/slip')"
        >
            <p class="cate-title">核销</p>
            <p class="cate-eng">VERIFICARTION SLIP</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Category",
    props: {
      cateList: {
        type: Array
      }
    },
    methods: {
      goToDetail(data) {
        console.log(data);
        this.$router.push(data)
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .category-container {
        margin-top: 18.5px;
        padding: 0 16px;
        display: flex;
        flex-wrap wrap;
    }

    .category-item {
        width: 45%;
        margin-right 3%;
        border: 1px solid #d1d1d1;
        border-radius 5px;
        margin-bottom: 14px;
        height: 0;
        padding-bottom: 15%;
        overflow: hidden;
        margin-left: 2px;
    }

    .category-item:nth-child(2n) {
        margin-right 0;
        margin-left: 14px;
    }

    .category-item p {
        margin 0;
        margin-left 13px;
    }

    .category-item p.cate-title {
        margin-top 9px;
        margin-bottom 4.5px;
        color: #333;
        font-size: 16px;
    }

    .category-item p.cate-eng {
        color: #333;
        font-size: 12px;
    }
</style>