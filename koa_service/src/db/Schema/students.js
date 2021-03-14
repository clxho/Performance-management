const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  // 基本信息
  basicInfo: {
    // 姓名
    studentName: {
      type: String,
      required: true
    },
    // 学号
    studentNum: {
      type: String,
      required: true,
      unique: true
    },
    // 班级
    studentClass: {
      type: String,
      required: true
    },
  },
  // 成绩信息

    // 专业必修
    ProfessionalRequired: [],
    // 公共必修
    PublicCompulsory: [],
    // 专业实践
    ProfessionalPractice: [],
    //通识必选
    Generalknowledge: [],
    //综合创新实践 
    ComprehensiveInnovationPractice: [],
    // 体测
    physicalTest: []


})

mongoose.model('student', studentSchema);