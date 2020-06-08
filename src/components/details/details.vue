<template>
    <div>
        <!-- 返回按钮 -->
        <van-button class="arrowtop" @click="$router.go(-1)" icon="arrow-left" round type="default" />
        <!-- 轮播图 -->
        <!-- v-bind数据组件传参 -->
        <!-- 组件与数据分离，让组件复用 -->
        <swiper :imgs="Images"></swiper>

        <div class="panel">
            <h1>{{goods.name}}</h1>
            <div class="content">
                骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热  / 4500mAh大电量 / 多功能NFC
            </div>
            <div class="price">
                ￥{{goods.price}}
            </div>

            <img src="../../assets/img/bg22.webp" alt="">
        </div>
        <!-- 商品导航 -->
        <van-goods-action>
            <van-goods-action-icon 
                @click="$router.push('/')" 
                icon="wap-home-o" 
                color="#07c160" 
            />
            <van-goods-action-icon 
                @click="$router.push('/cart')" 
                icon="cart-o" 
                :info="num"
            />
            <van-goods-action-icon icon="star" color="#ff5000" />
            <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'

    const { mapState,mapMutations } = createNamespacedHelpers('cart')

    // 引入轮播图组件
    import swiper from "../public/swiper";
    export default {
        data:function(){
            return {
                Images:[
                    {
                         img:require("../../assets/img/22.jpg")
                    },
                    {
                        img:require("../../assets/img/11.jpg")
                    },
                    {
                        img:require("../../assets/img/22.jpg")
                    },
                    {
                        img:require("../../assets/img/11.jpg")
                    },
                ] ,
                // num:1,
                goods:{
                    id:1,
                    name:"小米10 Pro",
                    price:"3999",
                    num:1,
                }
            }
        },
        methods:{
            // getCart(){
            //     // 把数据添加入vuex购物车
            //     this.$store.commit("cart/add",this.goods);
            // }
            //add 直接调用vuex购物车里面add方法
            ...mapMutations(["add"])
        },
        components:{
            swiper,
        },
        computed:{
            ...mapState({
                num:state=>state.num
            })
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
    .panel{
        padding: 15px 15px 0px 15px;
        h1{
            font-size: 24px;
        }
        .content{
            font-size: 14px;
        }
        .price{
            float: right;
            color:#FF6B00;
            font-size: 28px;
        }
    }
    .arrowtop{
        position:fixed;
        top:5px;
        left:10px;
        z-index: 200;
        width: 42px;
        i{
            display: block;
            width: 42px;
            height: 42px;
            position: absolute;
            left: -2px;
            top: 6px;
            font-size: 24px;
        }
    }
</style>