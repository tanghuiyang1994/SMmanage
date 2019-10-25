import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './pages/Login.vue';
// import Account from './pages/account/Account.vue';
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        /* login */
        { path: '/', component: Login },
        /* 首页 */

        {
            path: '/index', component: () => import('./pages/Index.vue'),
            children: [
                { path: '/index',component: () => import('./pages/account/Account.vue')},
                /* 账号管理 */
                { path: '/index/account', component: () => import('./pages/account/Account.vue') },//账户管理
                { path: '/index/addaccount', component: () => import('./pages/account/AddAccount.vue') },//添加账号
                { path: '/index/modify', component: () => import('./pages/account/Modify.vue') },//密码修改

                /* 商品管理 */
                { path: '/index/product', component: () => import('./pages/product/Product.vue') },//商品管理
                { path: '/index/addproduct', component: () => import('./pages/product/AddProduct.vue') },//添加商品

                /* 进货管理 */
                { path: '/index/stock', component: () => import('./pages/stock/Stock.vue') },//进货管理
                { path: '/index/addstock', component: () => import('./pages/stock/AddStock.vue') },//添加库存

                /* 出货管理 */
                { path: '/index/shipment', component: () => import('./pages/shipment/Shipment.vue') },//销售列表
                { path: '/index/shipmentproduct', component: () => import('./pages/shipment/ShipmentProduct.vue') },//商品出库
                { path: '/index/productout', component: () => import('./pages/shipment/ProductOut.vue') },//商品退货

                /* 统计管理 */
                { path: '/index/statistics', component: () => import('./pages/statistics/Statistics.vue') },//销售统计
                { path: '/index/stockstatistics', component: () => import('./pages/statistics/StockStatistics.vue') },//进货统计

                /* 会员管理 */
                { path: '/index/vip', component: () => import('./pages/vip/Vip.vue') },//账号管理
                { path: '/index/addvip', component: () => import('./pages/vip/AddVip.vue') },//添加账号
            ]
        },



    ]
})