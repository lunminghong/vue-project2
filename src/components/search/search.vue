<template>
    <div>
        <!-- $router.go(-1) //-1表示返回上一级 -->
        <!-- $router.go(1) //1表示刷新当前页面，刷新页面，使用路由go刷新-->
        <!-- $router.go(2) //2表示返回下一级 -->
        <van-button @click="$router.go(-1)" type="default" class="but">返回</van-button>
        <input type="text" value="搜索">

        <swiper :imgs="Images" ></swiper>
            
    </div>
</template>

<script>
import swiper from "../public/swiper.vue";
    export default {
         data:function(){
            return {
                Images:[
                    {
                        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50f96c3637684d761cac93f3eecff10d.jpg"
                    },
                    {
                        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75519ce86ca28872e9f9b0150ac97a96.jpg"
                    }
                ]
            }
        },
        components:{
            swiper
        },
        created(){
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    .but{
        position: absolute;
        top: 0;
        left: 0;
        height: 35px;
    }
    input{
        border-radius: 4px;
        // border: 1px solid skyblue;
        height: 36px;
        width: 84%;
        float:right;
    }
</style>