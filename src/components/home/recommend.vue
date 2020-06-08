<template>
    <div>
        <!-- 轮播图 -->
        <swiper :imgs="Images" ></swiper>

        <!-- 分类 -->
        <van-grid>
            <van-grid-item to="/category?id=0" icon="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1948111640,616923069&fm=26&gp=0.jpg" text="爆款新品" />
            <van-grid-item to="/category?id=1" icon="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4214146197,1587018872&fm=26&gp=0.jpg" text="众筹" />
            <van-grid-item to="/category?id=2" icon="https://m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png" text="手机" />
            <van-grid-item to="/category?id=3" icon="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1631343711,1764255509&fm=26&gp=0.jpg" text="Redmi" />
            <van-grid-item to="/category?id=4" icon="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554051908,2049820725&fm=26&gp=0.jpg" text="黑鲨" />
            <van-grid-item to="/category?id=5" icon="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584182535942&di=8292d88db2f0ba17097a1c08b04a1f94&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F44%2F82%2F5814c08ac97e6_610.jpg" text="电视" />
            <van-grid-item to="/category?id=6" icon="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584182779536&di=4288dc0f483b9f340763090dbafb1a90&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F37%2F83%2F581221763c2ca_610.jpg" text="手环手表" />
            <van-grid-item to="/category?id=7" icon="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584182936417&di=96a2ad6ea2926537a34106940c124d5f&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F50%2F05%2F58163e05eb60d_610.jpg" text="耳机音箱" />
        </van-grid>
        <!-- 分类 end -->

        <!-- 商品列表 -->
        <div class="goodslist">
            <img src="../../assets/img/33.webp" alt="">
        </div>
        <div class="bigList">
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>小米</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>华为</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>opoon</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>一加</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>360</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>小米</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>小米</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>华为</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>一加</p>
                    <span>￥1688</span>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div>
                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                    <p>opoon</p>
                    <span>￥1688</span>
                </div>
            </router-link>
        </div>
       
        <!-- 商品列表 end -->
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
        }
    }
</script>

<style lang="scss" scoped>
    .bigList{
        width: 100%;
        margin: 0 auto;
        a{
            display: block;
            float: left;
            width: 50%;
            text-align: center;
            margin-top: 20px;
            div{
                width: 200px;
                height: 200px;
                text-align: center;
                margin: 0 auto;
                img{
                    // padding-left: 14px;
                    width: 130px;
                    height: 130px;
                    margin: 0 auto;
                }
                p{
                    font-size: 18px;
                }
                span{
                    color: #ff6b00;
                    font-size: 14px;
                    float: left;
                    padding-left: 30px;
                }
            }
        }
        a:nth-child(7n){
            margin-right: 0;
        }
    }

</style>