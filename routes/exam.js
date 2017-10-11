var express = require('express');
var router = express.Router();
let examDB = require('../db/examDB');

router.get('/getAllSubjectType', function(req, res, next) {
    examDB.getAllSubjectType().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错啦！！！")
    });
});
router.get('/getAllSubjectLevel', function(req, res, next) {
    examDB.getAllSubjectLevel().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错啦！！！")
    });
});
router.get('/getAllDepartmentes', function(req, res, next) {
    examDB.getAllDepartmentes().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错啦！！！")
    });
});
router.get('/getAllTopics', function(req, res, next) {
    examDB.getAllTopics().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错啦！！！")
    });
});

router.get('/showSubject', function(req, res, next) {
    let department_id= req.query.department_id;
    let subjectLevel_id=req.query.subjectLevel_id;
    let subjectType_id=req.query.subjectType_id;
    let topic_id=req.query.topic_id;

    examDB.showSubject(department_id,subjectLevel_id,subjectType_id,topic_id).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错啦！！！")
    });

});

router.get('/showAnswer', function(req, res, next) {
    var subjectid=req.query.subjectid;
    examDB.showAnswer(subjectid).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错啦！！！")
    });

});

router.get('/checked', function(req, res, next) {
    var id=req.query.id;
    examDB.checked(id).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错啦！！！")
    });
});
router.get('/unchecked', function(req, res, next) {
    var id=req.query.id;
    
    examDB.unchecked(id).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错啦！！！")
    });
});


module.exports = router;
