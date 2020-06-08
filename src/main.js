import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 公共样式
import "./assets/css/base.css";
import "./assets/font/iconfont.css";
// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);

// swiper插件
import "swiper/css/swiper.min.css";

// 手动安装rem 
// $cnpm i -S amfe-flexible
// 注意：amfe-flexible js文件对rem结构划分，分为10份，结算公式：rem(显示比值) = width(设计图宽度) / 10;
// 移动端设计图：版心总宽度750px，640px
// 安装vscode转换插件 px-rem 插件名称：cssrem
// 配置：转换方式 640px/10 = 64rem
import Flexible from "amfe-flexible";
Vue.use(Flexible);
// 分类联动功能
// $cnpm install @better-scroll/core@next --save
// https://better-scroll.github.io/docs/zh-CN/guide/how-to-install.html#npm

// 动画第三方样式
// cnpm install animate.css --save
import "animate.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
