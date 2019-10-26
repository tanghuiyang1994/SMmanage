var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'smsql',
})
con.connect();
/* GET home page. */
// router.get('/', function(req, res, ) {
//   res.render('index', { title: 'Express' });
// });

//----------------------登录模块-------------------------//
router.post('/login',(req,res)=>{
  var acc=req.body.acc;
  var pwd=req.body.pwd;
  var sql=`SELECT * FROM user WHERE account='${acc}'&&password='${pwd}'`
  con.query(sql,(err,data)=>{
    if (err) throw err;
    if(data.length!=0){
      res.send('ok')
    }else{
      res.send('fail')
    }
  })
 
})


//-----------------------账号模块-----------------------//
//添加账号
router.post('/addacc',(req,res)=>{
  var acc=req.body.acc;
  var pwd=req.body.pwd;
  var userGroup=req.body.userGroup;
  var sql=`INSERT INTO user(account,password,userGroup) VALUES('${acc}',${pwd},${userGroup})`
  con.query(sql,(err)=>{
    if(err) throw err;
     res.send('ok')
  })

})
//账号管理
router.get('/acc',(req,res)=>{
  var sql=`SELECT * FROM user`;
  con.query(sql,(err,data)=>{
    if(err) throw err;
    if(data!=0){
      res.send(data)
    }else{
      res.send('无数据')
    }
  })
})

module.exports = router;
