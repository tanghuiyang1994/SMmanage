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