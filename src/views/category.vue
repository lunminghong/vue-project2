<template>
    <div>
        
        <van-nav-bar
        :title="$route.name"
        />
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :key="index"  :class="{current:index==currentIndex}" @click="selectItem(index,$event)">
                        <span class="left-item">{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <!-- 循环嵌套 -->
                    <li v-for="(item,index) in right" :key="index" class="right-item right-item-hook">
                        <h2>{{item.name}}</h2>
                        <ul class="mb10">
                            <li v-for="num in item.content" :key="num">
                                <router-link to="/details" tag="a">
                                    <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                                    <p>{{item.product}}</p>
                                    <span>{{item.commodities}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";
    export default {
        data:function(){
            return {
                left:["爆款新品","众筹","手机","Redmi","黑鲨","电视","手环手表","耳机音响"],
                right:[
                    {name:"爆款新品",content:[1,2,3,4,5,6],product:"小米",commodities:"￥1644"},
                    {name:"众筹",content:[1,2,3,4,5,6],product:"华为",commodities:"￥1644"},
                    {name:"手机",content:[1,2,3,4,5,6],product:"一加",commodities:"￥1644"},
                    {name:"Redmi",content:[1,2,3,4,5,6],product:"opoon",commodities:"￥1644"},
                    {name:"黑鲨",content:[1,2,3,4,5,6],product:"黑鲨",commodities:"￥1644"},
                    {name:"电视",content:[1,2,3,4,5,6],product:"电视",commodities:"￥1644"},
                    {name:"手环手表",content:[1,2,3,4,5,6],product:"手环手表",commodities:"￥1644"},
                    {name:"耳机音箱",content:[1,2,3,4,5,6],product:"耳机音箱",commodities:"￥1644"},
                ],
                scrollY:0,
                listHeight:[]  //存储右边每一项li高度
            }
        },
        methods: {
                _initScroll(){
                    // 联动实例化插件对象
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });
                    this.rights = new BScroll(this.$refs.right,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });

                    // right这个对象监听滚动事件，
                    this.rights.on("scroll",(pos)=>{
                        this.scrollY = Math.abs(Math.round(pos.y));
                    })
                },
                _getHeight(){
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0;//默认高度
                    this.listHeight.push(height); //添加高度数组中
                    // 循环对象
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; // 对象高度
                        this.listHeight.push(height);
                    }
                    
                },
                // 左侧点击效果
                // index 下标
                // event 点击对象事件
                selectItem(index,event){
                    // 在better-scroll指派事件的event和普通浏览器的点击事件event有个属性区别_constructed
                    // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];
                        // scrollToElement()//滚动到指定的目标元素
                        this.rights.scrollToElement(el);

                        // 左边联动
                        let leftItems = this.$refs.left.getElementsByTagName("li");
                        let elLi = leftItems[index];
                        this.lefts.scrollToElement(elLi);


                    }
                }
            },
            // 生命周期函数
            mounted() {  //页面渲染到浏览器时候
                // 生命周期函数执行代码速度比页面渲染浏览器执行速度快。html代码没有渲染成功？
                // 保证页面代码浏览器正常执行后，在执行当前生命周期函数代码段
                // $nextTick() 让所有DOM执行完后，回调执行方法
                
                this.$nextTick(()=>{
                    this._initScroll();//调用初始化联动效果
                    this._getHeight(); //获取右边每一项高度

                    // 跳转效果
                    if("id" in this.$route.query){
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[this.$route.query.id];
                        this.rights.scrollToElement(el);
                    }

                })
                    

            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0; i < this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        // height2不存在时候，或落在height和height2之间时候，直接放回索引值
                        if(!height2 || (this.scrollY >=height && this.scrollY < height2) ){
                        
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLi = leftItems[i];
                            this.lefts.scrollToElement(elLi);
                            return i;
                        }
                    }
                    // 如果this.listHeight没有值，返回0
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
// scoped 样式覆盖
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写定义左右样式，不写高度，自动获取高度 */
            top:46px;
            bottom: 50px;
            background-color: #eeeeee;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex:0 0 80px;
            width: 80px;
            background-color: #C8EBFA;
        }
        .left li{
            width:100%;
            height: 100%;
            font-size:14px;
        }
        .left li.current{
            background-color: #007AAE;
            color:#fff;
            font-weight: bold;
        }
        .left-item{
            display: block;
            width: 100%;
            height: 100%;
            line-height: 50px;
            height: 50px;
            text-align: center;
        }
        .right{
            flex:1;
            background-color: azure;
        }
        .right-item li{
            width: 100%;
            height: 100px;
            line-height: 100px;
            text-align: center;
            // margin-bottom: 100px;
            // background-color: red;
        }
        .mb10{
            width: 100%;
            height: 600px;
            // margin-bottom: 0px;
            text-align: center;
            li{
                width: 128px;
                height: 200px;
                float: left;
                padding: 0 9px ;
                line-height: 100%;
                p{
                    width: 100%;
                    // font-size: 24px;
                    font-size: 18px;
                    margin: 0;
                }
               span{
                    color: #ff6b00;
                    font-size: 14px;
                    float: left;
                    padding-left: 30px;
               }
            }
        }
        h2{
            text-align: center;
        }
</style>

