const Router = require('@koa/router')

const router = new Router()
// 获取课表
router.get('/form', async (ctx) => {
  ctx.body = {
    data: {
      // 基本信息
      basicInfo: [{
          key: "姓名",
          value: "studentName"
        },
        {
          key: "学号",
          value: "studentNum"
        },
        {
          key: "班级",
          value: "studentClass"
        }
      ],
      // 专业必修 26个
      ProfessionalRequired: [{
          key: "C语言程序设计",
          value: "Clanguage"
        },
        {
          key: "大学物理（一）",
          value: "CollegePhysics1"
        },
        {
          key: "大学物理（二）",
          value: "CollegePhysics2"
        },
        {
          key: "复变函数与数理方程",
          value: "FunctionOfComplex"
        },
        {
          key: "概率统计",
          value: "probabilityStatistics"
        },
        {
          key: "大学物理实验",
          value: "PhysicsExperiment"
        },
        {
          key: "电磁场理论",
          value: "ElectromagneticTheory"
        },
        {
          key: "电路分析",
          value: "circuitAnalysis"
        },
        {
          key: "电路分析实验",
          value: "CircuitExperiment"
        },
        {
          key: "模拟电子技术",
          value: "AnalogTechnology"
        },
        {
          key: "模拟电子技术实验",
          value: "ExperimentOfAnalogTechnology"
        },
        {
          key: "数字电子技术",
          value: "DigitalTechnology"
        },
        {
          key: "数字电子技术实验",
          value: "ExperimentOfDigitalTechnology"
        },
        {
          key: "高频电子线路",
          value: "HighCircuit"
        },
        {
          key: "高频电子线路实验",
          value: "ExperimentOfHigh"
        },
        {
          key: "信号与系统",
          value: "Signal"
        },
        {
          key: "信号与系统实验",
          value: "SignalExperiment"
        },
        {
          key: "微机原理",
          value: "Microcomputer"
        },
        {
          key: "微机原理实验",
          value: "MicrocomputerExperiment"
        },
        {
          key: "数字信号处理",
          value: "DsignalProcessing"
        },
        {
          key: "通信原理",
          value: "CommunicationPrinciple"
        },
        {
          key: "通信原理实验",
          value: "CommunicationExperiment"
        },
        {
          key: "高等数学（一）",
          value: "AdvancedMathematics1"
        },
        {
          key: "高等数学（二）",
          value: "AdvancedMathematics2"
        },
        {
          key: "线性代数",
          value: "linear"
        },
        {
          key: "新生研讨课",
          value: "FreshmanSeminar"
        },
      ],
      // 公共必修 9个
      PublicCompulsory: [{
          key: "英语一级",
          value: "English1"
        },
        {
          key: "英语二级",
          value: "English2"
        },
        {
          key: "英语三级",
          value: "English3"
        },
        {
          key: "英语四级",
          value: "English4"
        },
        {
          key: "思想道德修养与法律基础",
          value: "Ideological"
        },
        {
          key: "马克思主义基本原理",
          value: "Marxism"
        },
        {
          key: "毛中特",
          value: "MaoZedong"
        },
        {
          key: "中国近现代史纲要",
          value: "ChineseHistory"
        },
        {
          key: "形势与政策",
          value: "Situation"
        }
      ],
      // 专业实践 6个
      ProfessionalPractice: [{
          key: "社会调查",
          value: "Social"
        },
        {
          key: "专业见习",
          value: "ProfessionalProbation"
        },
        {
          key: "专业实习",
          value: "ProfessionalPractice"
        },
        {
          key: "毕业实习",
          value: "GraduationPractice"
        },
        {
          key: "专业研习",
          value: "ProfessionalStudy"
        },
        {
          key: "毕业论文（设计）",
          value: "GraduationThesis"
        },

      ],
      //通识必选 6个
      Generalknowledge: [{
          key: "单片机技术",
          value: "SingleChip"
        },
        {
          key: "电子线路课程设计",
          value: "designOfElectronic"
        },
        {
          key: "大学生就业指导",
          value: "EmploymentStudents"
        },
        {
          key: "大学生创业指导",
          value: "EntrepreneurshipStudents"
        },
        {
          key: "军事理论",
          value: "Military"
        },
        {
          key: "民族理论与民族政策",
          value: "EthnicTheory"
        }
      ],
      //综合创新实践 3个
      ComprehensiveInnovationPractice: [{
          key: "思想政治实践活动",
          value: "IdeologicalPolitical"
        },
        {
          key: "读书活动",
          value: "ReadingActivities"
        },
        {
          key: "创新创业实践",
          value: "InnovationEntrepreneurship"
        },
      ],
      // 体测
      physicalTest: [{
          key: "第一学年",
          value: "firstYear"
        },
        {
          key: "第二学年",
          value: "secondYear"
        },
        {
          key: "第三学年",
          value: "thirdYear"
        },
        {
          key: "第四学年",
          value: "fourthYear"
        },
      ]
    },
    meta: {
      msg: "获取课表成功",
      code: "1"
    }
  }
})

module.exports = router