var express = require('express');
var sequelize = require('sequelize');
var moment = require('moment');
var connection = require('../mysql/connection/index');
var CmsArticle = require('../model/CmsArticle');
var formResult = require('../utils/formResult');
var router = express.Router();
var article = CmsArticle(connection,sequelize)

router.post('/articleList', async (req, res, next) => {
    var id = req.body.id;
    if(id){
        try{
            let result = await article.findOne({'where':{'id':id}});
            res.send(formResult.success(result))
        }catch(err){
            res.send(formResult.error('获取失败', err))
        }
    }else{
        let currentPage = req.body.currentPage || 1;
        let pageSize = req.body.pageSize || 9999;
        try {
            let result = await article.findAndCountAll(
                {
                  where:{
                    'title':{ $like: '%'+(req.body.title||'')+'%'}
                  },
                  order:[['gmtCreate','DESC']],
                  offset:(currentPage/1 - 1) * pageSize/1,
                  limit:pageSize/1
                });
                res.send(formResult.success(result));
                
        }catch(err) {
            res.send(formResult.error('获取失败',err));
        }
        

    }
})

module.exports = router;