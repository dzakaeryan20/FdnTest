var express = require('express');
var router = express.Router();
var Pool = require('../models/db')

/* GET home page. */
router.get('/', function(req, res) {
    var name =[]
    Pool.query("SELECT * FROM datafd",(err,ress)=>{
        console.log(ress.rowCount)
        res.render('index', { title: 'Express',data:ress.rows,pivot:false });
      })
});

router.get('/pivot',(req,res)=>{
    var query="SELECT DISTINCT fullname as Fullname,email as Email"+
    ",sum(case when item = 'Barang1' then quantity end) as Barang1"+ 
    ",sum(case when item = 'Barang2' then quantity end) as Barang2"+
    ",sum(case when item = 'Barang3' then quantity end) as Barang3,"+
    "sum(case when item = 'Barang5' then quantity end) as Barang5,"+
    "sum(case when item = 'Barang6' then quantity end) as Barang6,"+
    "sum(case when item = 'Barang9' then quantity end) as Barang9,"+
    "sum(case when item = 'Barang10' then quantity end) as Barang10 "+
    "FROM datafd as fd "+
    "GROUP BY fullname,email "+
    "ORDER BY fullname";
    Pool.query(query,(err,ress)=>{
        
        console.log(ress.rows)
        res.render('pivot', { title: 'Express',data:ress.rows,fields:ress.fields });
      })
})
module.exports = router;
