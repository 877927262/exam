let connection = require('./getConnection');

//获取题目类型
function getAllSubjectType(){
    let sql = "select * from tbl_exam_subjecttype";
    return changeDB(sql)
}
//获取难易程度
function getAllSubjectLevel(id){
    let sql = "select * from tbl_exam_subjectlevel";
    return changeDB(sql);
}
//获取方向
function getAllDepartmentes(id){
    let sql = "select * from tbl_exam_epartment";
    return changeDB(sql);
}
//获取知识点
function getAllTopics(id){
    let sql = "select * from tbl_exam_topic";
    return changeDB(sql);
}
//根据选中的选项，动态显示题目
function showSubject(department_id,subjectLevel_id,subjectType_id,topic_id){
    let sql = "select * from tbl_exam_subject where department_id="+department_id+" and subjectLevel_id="+subjectLevel_id+" and subjectType_id = "+subjectType_id+" and topic_id = "+topic_id+";"
    return changeDB(sql);
}
//根据题目显示答案
function showAnswer(subject_id){
    let sql = "select * from tbl_exam_choice where subject_id="+subject_id;
    return changeDB(sql);
}
//审核通过
function checked(id){
    let sql="update tbl_exam_subject set checkState ='审核通过' where id="+id;
    return changeDB(sql);
}
//审核不通过
function unchecked(id){
    let sql="update tbl_exam_subject set checkState ='审核不通过' where id="+id;
    return changeDB(sql);
}
//删除题目
function delSubject(id){
    let sql="delete from tbl_exam_subject where id="+id;
    changeDB(sql);
    let sql1="delete from tbl_exam_choice where subject_id="+id;
    return changeDB(sql1);
}
//保存题目
function saveSubject(subjectTypeId,subjectLevelId,departmentId,topicId,stem,answer){
    let sql = "insert tbl_exam_subject(subjectType_id,subjectLevel_id,department_id,topic_id,stem,answer) values("+subjectTypeId+","+subjectLevelId+","+departmentId+","+topicId+",'"+stem+"','"+answer+"')";
    return changeDB(sql);

}
//保存答案
function saveAnswer(choiceContent,choiceCorrect,subject_id){
    for (var i = 0;i < choiceContent.length ; i++){
        var sql1 = "insert tbl_exam_choice(content,correct,subject_id) values('"+choiceContent[i]+"',"+choiceCorrect[i]+","+subject_id+")";
        if(i==3){
            return changeDB(sql1);
        }
        else {
            changeDB(sql1);
        }

    }


}

//操作数据库
function changeDB(sql){
    return new Promise((resolve,reject)=>{
        connection().then((connection)=>{
            connection.query(sql,(err,result)=>{
                if(!err){
                    resolve(result);
                    //释放链接
                    connection.release();
                }
                else{
                    reject(err);
                    connection.release();

                }
            })
        }).catch((err)=>{
            reject(err);
        })
    })
}
//测试

// showSubject(1,1,1,1).then((result)=>{
//     console.log(result);
// })
module.exports={
    getAllSubjectType,
    getAllSubjectLevel,
    getAllDepartmentes,
    getAllTopics,
    showSubject,
    showAnswer,
    checked,
    unchecked,
    delSubject,
    saveSubject,
    saveAnswer

}
