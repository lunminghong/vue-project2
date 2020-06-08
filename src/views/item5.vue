<template>
    <div>
        <h1>我的</h1>
        <div class="top ">
            <div></div>
            <van-button type="default">登陆</van-button>/
            <van-button type="default">注册</van-button>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
   div{
       h1{
           color: green;
       }
       .top{
           position: relative;
           div{
               width: 60px;
               height: 60px;
               border-radius:50%;
               background-color: #fff;
               position: absolute;
               bottom: 20%;
               left: 10%;
           }
       }
   }
</style>
