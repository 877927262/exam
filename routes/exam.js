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
router.post('/saveSubject', function(req, res, next) {
    var subjectTypeId=req.body.subjectTypeId;
    var subjectLevelId=req.body.subjectLevelId;
    var departmentId=req.body.departmentId;
    var topicId=req.body.topicId;
    var stem=req.body.stem;
    var answer=req.body.answer;
    examDB.saveSubject(subjectTypeId,subjectLevelId,departmentId,topicId,stem,answer).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错！！！")
    });
});
router.post('/saveAnswer', function(req, res, next) {
    var choiceContent = req.body.choiceContent;
    var choiceCorrect =req.body.choiceCorrect;
    var subject_id =req.body.subject_id;
    examDB.saveAnswer(choiceContent,choiceCorrect,subject_id).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log("笨蛋，错le！！！")
    });
});

module.exports = router;
