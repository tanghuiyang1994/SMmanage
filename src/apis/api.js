import axios from 'axios';
const api=axios.create({
    baseURL:'http://localhost:3000'//定义请求地址
})
export function loginApi(acc,pwd){//登录接口
    return api.post('/login',{acc,pwd})
}
export function addAccApi(acc,pwd,userGroup){//添加账号接口
    return api.post('/addacc',{acc,pwd,userGroup})
}
export function accApi(){//查询所有人员
    return api.get('/acc')
}
export function delaccApi(id){//删除账号
    return api.get('/delacc?id='+id)
}
export function changepwd(id,newpwd){//修改密码
    return api.post('/changepwd',{id,newpwd})
}
export function addProductApi(category,name,barCode,salePrice,marketPrice,stockPrice,stockCount,commodityWeight,commodityUnit,vipDiscount,promotion,goodsDesc){//添加商品
    return api.post('/addproduct',{category,name,barCode,salePrice,marketPrice,stockPrice,stockCount,commodityWeight,commodityUnit,vipDiscount,promotion,goodsDesc})
}
export function productApi(currentPage,pageNum,searchname,searchcategory){//分页查询接口+模糊查询+数据条数
    return api.get('/product',{params:{currentPage,pageNum,searchname,searchcategory}});
}

export function verifytoken(token){//验证token是否过期接口
    return api.get('/verifytoken',{params:{token}})
}