var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'smsql',
})
con.connect();
/* GET home page. */
// router.get('/', function(req, res, ) {
//   res.render('index', { title: 'Express' });
// });

/* token密钥 */
const tokenkey = 'mykey';
//----------------------登录模块-------------------------//
router.post('/login', (req, res) => {
  var acc = req.body.acc;
  var pwd = req.body.pwd;
  var sql = `SELECT * FROM user WHERE account='${acc}'&&password='${pwd}'`
  con.query(sql, (err, data) => {
    if (err) throw err;
    if (data.length != 0) {//登录成功

      var token = jwt.sign({}, tokenkey, {
        expiresIn: 60 * 30
      })
      res.send({
        msg: 'ok',
        token,
        userGroup: data[0].userGroup,
        id: data[0].id,
        pwd: data[0].password,
      })
    } else {
      res.send({
        msg: 'fail',
      })
    }
  })

})

//-----------------------token---------------------------//
//验证token
router.get('/verifytoken', (req, res) => {
  jwt.verify(req.query.token, tokenkey, (err, decode) => {
    if (err) {//token过期
      res.send('timeout')
    } else {//token还有效
      res.send('vaild')

    }
  })
})


//-----------------------账号模块-----------------------//
//添加账号
router.post('/addacc', (req, res) => {
  var acc = req.body.acc;
  var pwd = req.body.pwd;
  var userGroup = req.body.userGroup;
  var sql = `INSERT INTO user(account,password,userGroup) VALUES('${acc}',${pwd},${userGroup})`
  con.query(sql, (err) => {
    if (err) throw err;
    res.send('ok')
  })

})
//账号管理
router.get('/acc', (req, res) => {
  var sql = `SELECT * FROM user`;
  con.query(sql, (err, data) => {
    if (err) throw err;
    if (data != 0) {
      res.send(data)
    } else {
      res.send('无数据')
    }
  })
})
//删除账号
router.get('/delacc', (req, res) => {
  var id = req.query.id
  var sql = `DELETE FROM user WHERE id=${id}`;
  con.query(sql, (err) => {
    if (err) throw err;
    res.send('ok')
  })
})
//修改密码
router.post('/changepwd', (req, res) => {
  var id = req.body.id;
  var newpwd = req.body.newpwd;
  var sql = `UPDATE user SET PASSWORD=${newpwd} WHERE id=${id}`
  con.query(sql, (err) => {
    if (err) throw err;
    res.send('ok')
  })
})




//--------------------商品管理模块-----------------------//
//商品管理
//分页查询+数据总条数
router.get('/product', (req, res) => {
  var pageNum = req.query.pageNum
  var currentPage = req.query.currentPage
  var searchname = req.query.searchname//搜索商品名
  var searchcategory = req.query.searchcategory//搜索的分类
  let sql;
  let totalsql;
  if (searchname && searchname != '') {//如果进行了搜索,就执行搜索之后的sql
    if (searchcategory == '' || searchcategory == "全部分类") {//如果是全部分类输入商品名
      sql = `select * from commodity where name like '%${searchname}%' LIMIT ${(currentPage - 1) * pageNum},${pageNum}`;
      totalsql = `SELECT COUNT(*) from commodity where name like '%${searchname}%'`;
    } else {
      sql = `select * from commodity where name like '%${searchname}%' AND category='${searchcategory}' LIMIT ${(currentPage - 1) * pageNum},${pageNum}`;
      totalsql = `SELECT COUNT(*) from commodity where name like '%${searchname}%' AND category='${searchcategory}'`;
    }

  } else if (searchname == '' && searchcategory) {//如果只选中了分类,没有输入商品搜索的sql
    if (searchcategory == '全部分类') {
      sql = `SELECT * FROM commodity LIMIT ${(currentPage - 1) * pageNum},${pageNum}`;
      totalsql = `SELECT COUNT(*) FROM commodity`;
    } else {
      sql = `select * from commodity where category='${searchcategory}' LIMIT ${(currentPage - 1) * pageNum},${pageNum}`;
      totalsql = `SELECT COUNT(*) from commodity where category='${searchcategory}'`;
    }

  } else {//如果没有进行搜索,进行正常sql
    sql = `SELECT * FROM commodity LIMIT ${(currentPage - 1) * pageNum},${pageNum}`;
    totalsql = `SELECT COUNT(*) FROM commodity`;
  }


  con.query(sql, (err, data) => {
    if (err) throw err;
    //res.send(data);

    con.query(totalsql, (totalerr, totaldata) => {
      if (totalerr) throw totalerr;
      res.send({
        data,//返回当前页的数据数组
        total: totaldata[0]['COUNT(*)']//返回数据条数
      });

    })

  })
})
//添加商品
router.post('/addproduct', (req, res) => {
  var category = req.body.category;//分类
  var name = req.body.name;//商品名
  var barCode = req.body.barCode;//商品条形码
  var salePrice = req.body.salePrice;//商品售价
  var marketPrice = req.body.marketPrice;//市场价
  var stockPrice = req.body.stockPrice;//进价
  var stockCount = req.body.stockCount;//入库数量
  var commodityWeight = req.body.commodityWeight;//商品重量
  var commodityUnit = req.body.commodityUnit;//商品单位
  var vipDiscount = req.body.vipDiscount;//会员优惠
  var promotion = req.body.promotion;//是否促销
  var goodsDesc = req.body.goodsDesc;//商品简介
  var sql = `INSERT INTO commodity(category,name,barCode,salePrice,marketPrice,stockPrice,stockCount,commodityWeight,commodityUnit,vipDiscount,promotion,goodsDesc) VALUES('${category}','${name}','${barCode}',${salePrice},${marketPrice},${stockPrice},${stockCount},${commodityWeight},'${commodityUnit}',${vipDiscount},${promotion},'${goodsDesc}')`;
  con.query(sql, (err) => {
    if (err) throw err;
    res.send('ok')
  })
})













module.exports = router;
