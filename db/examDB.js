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
    unchecked
}

