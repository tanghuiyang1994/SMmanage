export const list=[
    //商品管理
    { index: 'product',icon:'',title:'商品管理',children:[{path:"/index/product",name:'商品管理'},{path:"/index/addproduct",name:'添加商品'},]},
    //进货管理
    { index: 'stock',icon:'',title:'进货管理',children:[{path:"/index/stock",name:'进货管理'},{path:"/index/addstock",name:'添加库存'},]},
    //出货管理
    { index: 'shipment',icon:'',title:'出货管理',children:[{path:"/index/shipment",name:'销售列表'},{path:"/index/shipmentproduct",name:'商品出库'},{path:"/index/productout",name:'商品退货'}]},
    //统计管理
    { index: 'statistics',icon:'',title:'统计管理',children:[{path:"/index/statistics",name:'销售统计'},{path:"/index/stockstatistics",name:'进货统计'},]},
    //账号管理
    { index: 'account',icon:'',title:'账号管理',children:[{path:"/index/account",name:'账号管理'},{path:"/index/addaccount",name:'添加账号'},{path:"/index/modify",name:'密码修改'},]},
    //会员管理
    { index: 'vip',icon:'',title:'会员管理',children:[{path:"/index/vip",name:'账号管理'},{path:"/index/addvip",name:'添加账号'},]},
   
    
]