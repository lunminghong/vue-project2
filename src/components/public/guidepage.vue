<template>
    <div>
        
        <!-- Swiper -->
        <div class="swiper-container containerguidepage">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div>
                    <img class="animated fadeInUpBig" src="../../assets/img/guidepage01.png" alt="">
                </div>
            </div>
            <div class="swiper-slide">
                <div>
                    <img class="animated fadeInUpBig" src="../../assets/img/guidepage02.png" alt="">
                </div>
            </div>
            <div class="swiper-slide">
                <div>
                    <img class="animated fadeInUpBig" src="../../assets/img/guidepage03.png" alt="">
                    <van-button class="animated fadeInUpBig delay-1s " id="test" plain hairline type="primary" size="small" to="/home/recommend">点击体验</van-button>
                </div>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination paginationguidepage"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        data(){
            return {
                flag:true
            }
        },
        created(){
            this.$store.state.vanTabbar = false;
        },
        mounted(){
            let _this = this;
            new Swiper('.containerguidepage', {
                pagination: {
                    el: '.paginationguidepage',
                },
                on: {
                    touchStart: function(){
                        // console.log(this.activeIndex);  
                    },
                    // 轮播图切换前效果
                    slideChangeTransitionStart:function(){
                        _this.flag = false; //隐藏
                    },
                    // 轮播图切换后效果
                    slideChangeTransitionEnd: function(){
                        // _this.flag[this.activeIndex] = true; //显示
                        _this.flag = true;
                    },
                },
            });
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    .swiper-container{
        position: fixed;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        text-align: center;
        img{
            margin-left:auto;
            margin-right:auto;
            width: 100%;
        }
        h3{
            color:#808080;
        }
    }
    #test{
        position: absolute;
        top: 500px;
        left: 240px;
    }
    
</style>