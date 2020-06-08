<template>
    <div id="appview">
        <!-- van-sticky 吸顶 -->
        <van-sticky>
            <!-- 顶部搜索导航 -->
            <van-row class="topSearchNav">
                <van-col span="3" id="box">
                    <span class="logo">乐购</span>
                </van-col>
                <van-col span="18">
                    <van-search @focus="getSearch"  placeholder="搜索商品名称" />
                </van-col>
                <van-col span="3">
                    <router-link to="../my">
                        <van-icon name="user-o" />
                    </router-link>
                </van-col>
            </van-row>
            <!-- 顶部搜索导航 end -->
            <!-- 首页导航 -->
            <div class="swiper-container swiperHomeNav">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link to="/home/recommend">推荐</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/home/phone">手机</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/home/intelligence">智能</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/home/television">电视</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/home/notebook">笔记本</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/home/appliances">家电</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/home/around">生活周边</router-link>
                    </div>
                </div>
            </div>
            <!-- 首页导航 end -->
        </van-sticky>
        <!-- 过渡效果与路由器结合 -->
		<transition mode="out-in" name="routerview">
            <router-view></router-view>
		</transition>
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        methods:{
            getSearch(){
                // 跳转路由
                this.$router.push("/search");
            }
        },
        //注意： swiper 必须要在页面渲染到浏览器后mounted钩子函数中才能执行
        mounted(){
            // 注意：.swiper-container swiper中实例化对象第一值，是swiper显示最外面对象容器。这个类在重复使用swiper容易冲突，重新定义类名解决 
            new Swiper('.swiperHomeNav', {
                slidesPerView: 6, //显示可视轮播图个数
                freeMode: true
            });
        }
    }
</script>

<style lang="scss" scoped>
    // 解决滚动条效果
    #appview{
        overflow: hidden;
    }

    // 路由过度效果
	.routerview-enter,
	.routerview-leave-to{
		opacity: 0;
		transform: translateX(200px);
	}
	.routerview-enter-active,
	.routerview-leave-active{
		transition: all 2s ease;
	}

    .topSearchNav{
        background-color: #F2F2F2;
        .icon-mi{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#FF6B00;
        }
        .van-search{
            padding: 5px;
        }
        .van-icon{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#484848;
        }
    }
    .swiperHomeNav{
        a{
            &.router-link-active{
                color:#FF6B00;
                font-weight: bold;
            }
        }
    }

    // swiper公共样式
        .swiper-container {
        width: 100%;
        height: 100%;
        }
        .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        }
        #box{
            position: relative;
            height: 44px;
            .logo{
                display: inline-block;
                position: absolute;
                top: 28%;
                left: 18%;
                font-size: 16px;
            }
        }
</style>