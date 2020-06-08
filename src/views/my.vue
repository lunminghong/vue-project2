<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        />
        <div class="top">
            <van-row>
                <van-col span="4">
                    <van-image
                        round
                        width="80px"
                        height="80px"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </van-col>
                <van-col span="20" class="ml20">
                    <!-- <router-link to="/login">登陆</router-link>/
                    <router-link to="/register">注册</router-link> -->
                    <p>张三</p>
                </van-col>
            </van-row>
        </div>
        
        <van-cell-group>
            <van-cell title="我的订单" to="/orderList/orderAll"  is-link />
            <!-- <van-cell title="我的收藏"  is-link /> -->
            <van-cell title="我的地址" to="/address"  is-link />
           <!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<!-- 优惠券列表 -->
<van-popup
  v-model="showList"
  round
  position="bottom"
  style="height: 90%; padding-top: 4px;"
>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
            <!-- <van-cell title="优惠卷"  is-link /> -->
            <!-- <van-cell title="设置"  is-link /> -->
        </van-cell-group>
    </div>
</template>

<script>
import Vue from 'vue';
import { CouponCell, CouponList } from 'vant';
Vue.use(CouponCell);
Vue.use(CouponList);
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '1.5元优惠',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
    export default {
        data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList : false
    }
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.coupons.push(coupon);
    }
  }
    }
</script>

<style lang="scss" scoped>
    .top{
        background: #F37D0F url("../assets/img/bg11.png");
        background-size: 100% auto ;
        padding: .266667rem;
        .van-image{
            float: right;
        }
        .van-col{
            height: 80px;
            line-height: 80px;
            color:#fff;
            a{
                color:#fff;
            }
        }
            .ml20{
                width: 200px;
                margin-left: 40px;
                p{
                  font-size: 18px;
                }
            }
    }
</style>