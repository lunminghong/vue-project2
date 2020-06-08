<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        />

        <h1 v-show="lists.length == 0">
            <p>购物车为空</p>
             <router-link to="/home/recommend" tag="button">去逛逛</router-link>
        </h1>

        <div v-for="(item,index) in lists" :key="index">
            
            <van-card
                :price="item.price"
                desc="描述信息"
                :title="item.name"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                >
                
                <div slot="tags">
                    
                    <van-tag plain @click="item.num <=1?1:item.num--" >-</van-tag>
                    <input type="text" v-model="item.num" class="num" >
                    <van-tag plain @click="item.num++" >+</van-tag>
                </div>
                <div slot="footer">
                    <div class="checkboxselect" @click="inputselect(index)">
                        <van-icon name="success" v-show="item.isSelect" />
                    </div>  
                    <!-- <input type="checkbox" class="checkboxbutton" :checked="item.isSelect" @click="inputselect(index)"> -->
                    <van-button size="mini" class="delbutton" @click="del(index)">删除</van-button>
                </div>
            </van-card>
        </div>

        <div v-show="lists.length == 0">
            <van-divider dashed>猜你喜欢</van-divider>
            <div class="guess">
                <router-link to="/details" tag="a">
                    <div>
                        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                        <p>小米</p>
                        <span>￥1644</span>
                    </div>
                </router-link>
                <router-link to="/details" tag="a">
                    <div>
                        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                        <p>华为</p>
                        <span>￥1644</span>
                    </div>
                </router-link>
            </div>
        </div>
    

        <van-submit-bar
            :price="totals * 100"
            button-text="提交订单"
            @submit="$router.push('/order')"
            v-show="lists.length != 0"
            >
            <van-checkbox @click="checkAll" :value="checked"  >全选</van-checkbox>
        </van-submit-bar>
        
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                lists:[],
                totals:0, //总价格
                checked:true,//默认全选
            }
        },
        methods:{
            del(index){
                this.lists.splice(index,1);
            },
            // 控制全选与反选
            checkAll(){
                this.lists.forEach((data)=>{
                    data.isSelect = !this.checked;
                })
                this.checked = !this.checked;
            },
            checkboxclick(){
                //第一次页面加载过程中，判断数据中isSelet状态，如果全部为true，那么返回true
                this.checked =  this.lists.every((item)=>{
                    return item.isSelect; //只有选项中全部为true，返回true。只要有一个false，返回false
                }) 
            },
            // 单击商品列表选项操作
            inputselect(index){
                // 修改商品列表数据
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick();
                this.sum();
            },
            // 总价格计算
            sum(){
                // 总价格计算
                // reduce()返回计算总价格
                // total 总价格累加
                // item 数据中对象
                this.totals =  this.lists.reduce((total,item)=>{
                    // 判断选项
                    if(!item.isSelect) return total; //false不让计算总价格
                    return total + parseInt(item.price) * parseInt(item.num);//总价格
                },0);//总价格默认参数值为0
            }
        },
        created(){
            this.lists = this.$store.state.cart.lists;
            this.sum();//执行计算总价格
            this.checkboxclick();
        },
        beforeUpdate() {
            this.sum();//执行计算总价格
        },
    }
</script>

<style lang="scss" scoped>
    .van-submit-bar{
        bottom:50px;
    }
    .checkboxbutton{
        position: absolute;
        top:50%;
        left:5px;
        margin-top:-20px;
    }
    .delbutton{
        position: absolute;
        right:20px;
        bottom: 5px;
    }
    .num{
        width: 30px;
        text-align: center;
        font-size: 16px;
    }
    .checkboxselect{
        position: absolute;
        top:50%;
        left:5px;
        margin-top:-10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #C8C9CC;
        i{
            display: block;
            width: 20px;
            height: 20px;
            background: #1989FA;
            border-radius: 50%;
            text-align: center;
            line-height: 22px;
            font-size: 16px;
            color:#fff;
        }
    }
    .guess{
        width: 100%;
        margin: 0 auto;
       a{
            display: block;
            float: left;
            width: 50%;
            text-align: center;
            div{
                width: 200px;
                height: 200px;
                text-align: center;
                margin: 0 auto;
                p{
                    font-size: 18px;
                }
                span{
                    color: #ff6b00;
                    font-size: 14px;
                    float: left;
                    padding-left: 30px;
                }
                img{
                    // padding-left: 14px;
                    width: 90px;
                    height: 90px;
                    margin: 0 auto;
                }
            }
        }
    }
    h1{
        text-align: center;
        p{
            color: #ccc;
        }
        button{
            border: 0px;
            background-color: #ff6b00;
            color: white;
            padding: 10px;
            border-radius: 40px;
        }
    }
</style>