const Router = require('@koa/router')
const mongoose = require('mongoose');

const Students = mongoose.model('student')

// 创建路由实例并设置路由基本路径: students
const router = new Router({
  prefix: '/students'
})

// 添加学生
router.post('/add', async (ctx) => {
  // 获取post请求参数
  const {
    // 姓名
    studentName,
    // 学号
    studentNum,
    // 班级
    studentClass,
    // 专业必修 26个
    //C语言程序设计
    Clanguage,
    // 大学物理（一） 
    CollegePhysics1,
    // 大学物理（二） 
    CollegePhysics2,
    // 复变函数与数理方程
    FunctionOfComplex,
    // 概率统计 
    probabilityStatistics,
    // 大学物理实验 
    PhysicsExperiment,
    // 电磁场理论 
    ElectromagneticTheory,
    // 电路分析 
    circuitAnalysis,
    // 电路分析实验 
    CircuitExperiment,
    // 模拟电子技术 
    AnalogTechnology,
    // 模拟电子技术实验 
    ExperimentOfAnalogTechnology,
    // 数字电子技术 
    DigitalTechnology,
    // 数字电子技术实验 
    ExperimentOfDigitalTechnology,
    // 高频电子线路 
    HighCircuit,
    // 高频电子线路实验 
    ExperimentOfHigh,
    // 信号与系统 
    Signal,
    // 信号与系统实验 
    SignalExperiment,
    // 微机原理 
    Microcomputer,
    // 微机原理实验 
    MicrocomputerExperiment,
    // 数字信号处理 
    DsignalProcessing,
    // 通信原理 
    CommunicationPrinciple,
    // 通信原理实验 
    CommunicationExperiment,
    // 高等数学（一）
    AdvancedMathematics1,
    // 高等数学（二）
    AdvancedMathematics2,
    // 线性代数 
    linear,
    // 新生研讨课
    FreshmanSeminar,

    // 公共必修 9个
    // 英语一级 
    English1,
    // 英语二级
    English2,
    // 英语三级 
    English3,
    // 英语四级
    English4,
    //思想道德修养与法律基础 
    Ideological,
    //马克思主义基本原理 
    Marxism,
    //毛中特
    MaoZedong,
    //中国近现代史纲要
    ChineseHistory,
    // 形势与政策
    Situation,

    // 专业实践 6个
    //社会调查 
    Social,
    //专业见习
    ProfessionalProbation,
    //专业实习
    ProfessionalPractice,
    //毕业实习
    GraduationPractice,
    //专业研习
    ProfessionalStudy,
    //毕业论文（设计）
    GraduationThesis,

    //通识必选 6个
    //单片机技术 
    SingleChip,
    //电子线路课程设计
    designOfElectronic,
    //大学生就业指导
    EmploymentStudents,
    //大学生创业指导 
    EntrepreneurshipStudents,
    //军事理论
    Military,
    //民族理论与民族政策 
    EthnicTheory,

    // 体测
    firstYear,
    secondYear,
    thirdYear,
    fourthYear

  } = ctx.request.body

  // 表单验证
  //查看是否有空字段
  if (studentName === '' || studentNum === '' || studentClass === '') {
    ctx.body = {
      meta: {
        msg: '姓名、学号或者班级不可以为空',
        code: 0
      }
    }
    return
  }
  //查看是否学号是否存在
  const NumRes = await Students.findOne({
    "basicInfo.studentNum": studentNum
  })
  // 如果存在
  if (NumRes) {
    ctx.body = {
      meta: {
        msg: '学号已经存在',
        code: 0
      }
    }
    return
  }

  // 创建学生实例
  const student = new Students({
    basicInfo: {
      studentName,
      studentNum,
      studentClass,
    },

    // 专业必修 26个
    ProfessionalRequired: [{
        courseName: "C语言程序设计",
        courseValue: Clanguage ? Clanguage : 0,
        Clanguage: Clanguage ? Clanguage : 0,
        creditHour: 4,
        GPA: 0,
      },
      {
        courseName: "大学物理（一）",
        courseValue: CollegePhysics1 ? CollegePhysics1 : 0,
        CollegePhysics1: CollegePhysics1 ? CollegePhysics1 : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "大学物理（二）",
        courseValue: CollegePhysics2 ? CollegePhysics2 : 0,
        CollegePhysics2: CollegePhysics2 ? CollegePhysics2 : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "复变函数与数理方程",
        courseValue: FunctionOfComplex ? FunctionOfComplex : 0,
        FunctionOfComplex: FunctionOfComplex ? FunctionOfComplex : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "概率统计",
        courseValue: probabilityStatistics ? probabilityStatistics : 0,
        probabilityStatistics: probabilityStatistics ? probabilityStatistics : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "大学物理实验",
        courseValue: PhysicsExperiment ? PhysicsExperiment : 0,
        PhysicsExperiment: PhysicsExperiment ? PhysicsExperiment : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "电磁场理论",
        courseValue: ElectromagneticTheory ? ElectromagneticTheory : 0,
        ElectromagneticTheory: ElectromagneticTheory ? ElectromagneticTheory : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "电路分析",
        courseValue: circuitAnalysis ? circuitAnalysis : 0,
        circuitAnalysis: circuitAnalysis ? circuitAnalysis : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "电路分析实验",
        courseValue: CircuitExperiment ? CircuitExperiment : 0,
        CircuitExperiment: CircuitExperiment ? CircuitExperiment : 0,
        creditHour: 0.5,
        GPA: 0,
      },
      {
        courseName: "模拟电子技术",
        courseValue: AnalogTechnology ? AnalogTechnology : 0,
        AnalogTechnology: AnalogTechnology ? AnalogTechnology : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "模拟电子技术实验",
        courseValue: ExperimentOfAnalogTechnology ? ExperimentOfAnalogTechnology : 0,
        ExperimentOfAnalogTechnology: ExperimentOfAnalogTechnology ? ExperimentOfAnalogTechnology : 0,
        creditHour: 0.5,
        GPA: 0,
      },
      {
        courseName: "数字电子技术",
        courseValue: DigitalTechnology ? DigitalTechnology : 0,
        DigitalTechnology: DigitalTechnology ? DigitalTechnology : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "数字电子技术实验",
        courseValue: ExperimentOfDigitalTechnology ? ExperimentOfDigitalTechnology : 0,
        ExperimentOfDigitalTechnology: ExperimentOfDigitalTechnology ? ExperimentOfDigitalTechnology : 0,
        creditHour: 0.5,
        GPA: 0,
      },
      {
        courseName: "高频电子线路",
        courseValue: HighCircuit ? HighCircuit : 0,
        HighCircuit: HighCircuit ? HighCircuit : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "高频电子线路实验",
        courseValue: ExperimentOfHigh ? ExperimentOfHigh : 0,
        ExperimentOfHigh: ExperimentOfHigh ? ExperimentOfHigh : 0,
        creditHour: 0.5,
        GPA: 0,
      },
      {
        courseName: "信号与系统",
        courseValue: Signal ? Signal : 0,
        Signal: Signal ? Signal : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "信号与系统实验",
        courseValue: SignalExperiment ? SignalExperiment : 0,
        SignalExperiment: SignalExperiment ? SignalExperiment : 0,
        creditHour: 0.5,
        GPA: 0,
      },
      {
        courseName: "微机原理",
        courseValue: Microcomputer ? Microcomputer : 0,
        Microcomputer: Microcomputer ? Microcomputer : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "微机原理实验",
        courseValue: MicrocomputerExperiment ? MicrocomputerExperiment : 0,
        MicrocomputerExperiment: MicrocomputerExperiment ? MicrocomputerExperiment : 0,
        creditHour: 0.5,
        GPA: 0,
      },
      {
        courseName: "数字信号处理",
        courseValue: DsignalProcessing ? DsignalProcessing : 0,
        DsignalProcessing: DsignalProcessing ? DsignalProcessing : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "通信原理",
        courseValue: CommunicationPrinciple ? CommunicationPrinciple : 0,
        CommunicationPrinciple: CommunicationPrinciple ? CommunicationPrinciple : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "通信原理实验",
        courseValue: CommunicationExperiment ? CommunicationExperiment : 0,
        CommunicationExperiment: CommunicationExperiment ? CommunicationExperiment : 0,
        creditHour: 0.5,
        GPA: 0,
      },
      {
        courseName: "高等数学（一）",
        courseValue: AdvancedMathematics1 ? AdvancedMathematics1 : 0,
        AdvancedMathematics1: AdvancedMathematics1 ? AdvancedMathematics1 : 0,
        creditHour: 4,
        GPA: 0,
      },
      {
        courseName: "高等数学（二）",
        courseValue: AdvancedMathematics2 ? AdvancedMathematics2 : 0,
        AdvancedMathematics2: AdvancedMathematics2 ? AdvancedMathematics2 : 0,
        creditHour: 4,
        GPA: 0,
      },
      {
        courseName: "线性代数",
        courseValue: linear ? linear : 0,
        linear: linear ? linear : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "新生研讨课",
        courseValue: FreshmanSeminar ? FreshmanSeminar : 0,
        FreshmanSeminar: FreshmanSeminar ? FreshmanSeminar : 0,
        creditHour: 1,
        GPA: 0,
      },
    ],
    // 公共必修 9个
    PublicCompulsory: [{
        courseName: "英语一级",
        courseValue: English1 ? English1 : 0,
        English1: English1 ? English1 : 0,
        creditHour: 2,
        GPA: 0,
      },
      {
        courseName: "英语二级",
        courseValue: English2 ? English2 : 0,
        English2: English2 ? English2 : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "英语三级",
        courseValue: English3 ? English3 : 0,
        English3: English3 ? English3 : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "英语四级",
        courseValue: English4 ? English4 : 0,
        English4: English4 ? English4 : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "思想道德修养与法律基础",
        courseValue: Ideological ? Ideological : 0,
        Ideological: Ideological ? Ideological : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "马克思主义基本原理",
        courseValue: Marxism ? Marxism : 0,
        Marxism: Marxism ? Marxism : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "毛中特",
        courseValue: MaoZedong ? MaoZedong : 0,
        MaoZedong: MaoZedong ? MaoZedong : 0,
        creditHour: 6,
        GPA: 0,
      },
      {
        courseName: "中国近现代史纲要",
        courseValue: ChineseHistory ? ChineseHistory : 0,
        ChineseHistory: ChineseHistory ? ChineseHistory : 0,
        creditHour: 2,
        GPA: 0,
      },
      {
        courseName: "形势与政策",
        courseValue: Situation ? Situation : 0,
        Situation: Situation ? Situation : 0,
        creditHour: 2,
        GPA: 0,
      }
    ],
    // 专业实践 6个
    ProfessionalPractice: [{
        courseName: "社会调查",
        courseValue: Social ? Social : 0,
        Social: Social ? Social : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "专业见习",
        courseValue: ProfessionalProbation ? ProfessionalProbation : 0,
        ProfessionalProbation: ProfessionalProbation ? ProfessionalProbation : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "专业实习",
        courseValue: ProfessionalPractice ? ProfessionalPractice : 0,
        ProfessionalPractice: ProfessionalPractice ? ProfessionalPractice : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "毕业实习",
        courseValue: GraduationPractice ? GraduationPractice : 0,
        GraduationPractice: GraduationPractice ? GraduationPractice : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "专业研习",
        courseValue: ProfessionalStudy ? ProfessionalStudy : 0,
        ProfessionalStudy: ProfessionalStudy ? ProfessionalStudy : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "毕业论文（设计）",
        courseValue: GraduationThesis ? GraduationThesis : 0,
        GraduationThesis: GraduationThesis ? GraduationThesis : 0,
        creditHour: 3,
        GPA: 0,
      },

    ],
    //通识必选 6个
    Generalknowledge: [{
        courseName: "单片机技术",
        courseValue: SingleChip ? SingleChip : 0,
        SingleChip: SingleChip ? SingleChip : 0,
        creditHour: 3,
        GPA: 0,
      },
      {
        courseName: "电子线路课程设计",
        courseValue: designOfElectronic ? designOfElectronic : 0,
        designOfElectronic: designOfElectronic ? designOfElectronic : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "大学生就业指导",
        courseValue: EmploymentStudents ? EmploymentStudents : 0,
        EmploymentStudents: EmploymentStudents ? EmploymentStudents : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "大学生创业指导",
        courseValue: EntrepreneurshipStudents ? EntrepreneurshipStudents : 0,
        EntrepreneurshipStudents: EntrepreneurshipStudents ? EntrepreneurshipStudents : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "军事理论",
        courseValue: Military ? Military : 0,
        Military: Military ? Military : 0,
        creditHour: 1,
        GPA: 0,
      },
      {
        courseName: "民族理论与民族政策",
        courseValue: EthnicTheory ? EthnicTheory : 0,
        EthnicTheory: EthnicTheory ? EthnicTheory : 0,
        creditHour: 1,
        GPA: 0,
      }
    ],
    physicalTest: [{
        courseName: "第一学年",
        courseValue: firstYear ? firstYear : 0,
        firstYear: firstYear ? firstYear : 0,
      },
      {
        courseName: "第二学年",
        courseValue: secondYear ? secondYear : 0,
        secondYear: secondYear ? secondYear : 0,
      },
      {
        courseName: "第三学年",
        courseValue: thirdYear ? thirdYear : 0,
        thirdYear: thirdYear ? thirdYear : 0
      },
      {
        courseName: "第四学年",
        courseValue: fourthYear ? fourthYear : 0,
        fourthYear: fourthYear ? fourthYear : 0
      },
    ]


  })
  // 保存实例
  const res = await student.save()
  // 返回数据
  ctx.body = {
    data: res,
    meta: {
      msg: '添加学生信息成功',
      code: 1
    }
  }
})

// 获取学生信息 
router.get('/', async (ctx) => {
  // 获取get请求参数 姓名/学号/班级/总页数/当前页
  const {
    size,
    page
  } = ctx.query



  // 从数据库中查找学生
  const gotStudents = await Students.find()
    .skip((page - 1) * size)
    .limit(size - 0)
    .exec()

  // 获取学生列表失败
  if (!gotStudents) {
    ctx.body = {
      meta: {
        msg: '获取学生信息失败',
        code: 0
      }
    }
    return
  }
  // 返回数据
  ctx.body = {
    data: gotStudents,
    meta: {
      msg: '获取学生信息成功',
      code: 1
    }
  }
})
// 通过学号获取学生信息 
router.get('/byNum', async (ctx) => {
  // 获取get请求参数 姓名/学号/班级/总页数/当前页
  const {
    studentNum
  } = ctx.query

  const query = {
    "basicInfo.studentNum": studentNum
  }

  // 从数据库中查找学生
  const gotStudents = await Students.find(query).exec()

  // 获取学生列表失败
  if (!gotStudents) {
    ctx.body = {
      meta: {
        msg: '获取学生信息失败',
        code: 0
      }
    }
    return
  }
  // 返回数据
  ctx.body = {
    data: gotStudents,
    meta: {
      msg: '获取学生信息成功',
      code: 1
    }
  }
})
// 通过姓名获取学生信息 
router.get('/byName', async (ctx) => {
  // 获取get请求参数 姓名/学号/班级/总页数/当前页
  const {
    studentName
  } = ctx.query

  const query = {
    "basicInfo.studentName": studentName
  }

  // 从数据库中查找学生
  const gotStudents = await Students.find(query).exec()

  // 获取学生列表失败
  if (!gotStudents) {
    ctx.body = {
      meta: {
        msg: '获取学生信息失败',
        code: 0
      }
    }
    return
  }
  // 返回数据
  ctx.body = {
    data: gotStudents,
    meta: {
      msg: '获取学生信息成功',
      code: 1
    }
  }
})
// 通过班级获取学生信息 
router.get('/byClass', async (ctx) => {
  // 获取get请求参数 姓名/学号/班级/总页数/当前页
  const {
    studentClass
  } = ctx.query

  const query = {
    "basicInfo.studentClass": studentClass
  }

  // 从数据库中查找学生
  const gotStudents = await Students.find(query).exec()

  // 获取学生列表失败
  if (!gotStudents) {
    ctx.body = {
      meta: {
        msg: '获取学生信息失败',
        code: 0
      }
    }
    return
  }
  // 返回数据
  ctx.body = {
    data: gotStudents,
    meta: {
      msg: '获取学生信息成功',
      code: 1
    }
  }
})

// 根据id获取学生
router.get('/:id', async (ctx) => {
  // 获取传过来的id
  const {
    id
  } = ctx.params
  // 根据id查找学生
  const gotStudent = await Students.findOne({
    _id: id
  })
  // 查找失败
  if (!gotStudent) {
    ctx.body = {
      meta: {
        msg: '查找失败',
        code: 0
      }
    }
    return
  }
  // 返回数据
  ctx.body = {
    data: gotStudent,
    meta: {
      msg: '查找成功',
      code: 1
    }
  }
})

// 删除学生
router.delete('/:id', async (ctx) => {
  // 获取id参数
  const {
    id
  } = ctx.params
  // 根据id删除学生
  const deletedStudent = await Students.deleteOne({
    _id: id
  })
  // 返回结果
  ctx.body = {
    data: deletedStudent,
    meta: {
      msg: '删除成功',
      code: 1,
    },
  }
})

// 更新学生信息
router.post('/update', async (ctx) => {
  // 获取post请求参数
  const {
    // id
    id,
    // 姓名
    studentName,
    // 学号
    studentNum,
    // 班级
    studentClass,
    // 专业必修 26个
    //C语言程序设计
    Clanguage,
    // 大学物理（一） 
    CollegePhysics1,
    // 大学物理（二） 
    CollegePhysics2,
    // 复变函数与数理方程
    FunctionOfComplex,
    // 概率统计 
    probabilityStatistics,
    // 大学物理实验 
    PhysicsExperiment,
    // 电磁场理论 
    ElectromagneticTheory,
    // 电路分析 
    circuitAnalysis,
    // 电路分析实验 
    CircuitExperiment,
    // 模拟电子技术 
    AnalogTechnology,
    // 模拟电子技术实验 
    ExperimentOfAnalogTechnology,
    // 数字电子技术 
    DigitalTechnology,
    // 数字电子技术实验 
    ExperimentOfDigitalTechnology,
    // 高频电子线路 
    HighCircuit,
    // 高频电子线路实验 
    ExperimentOfHigh,
    // 信号与系统 
    Signal,
    // 信号与系统实验 
    SignalExperiment,
    // 微机原理 
    Microcomputer,
    // 微机原理实验 
    MicrocomputerExperiment,
    // 数字信号处理 
    DsignalProcessing,
    // 通信原理 
    CommunicationPrinciple,
    // 通信原理实验 
    CommunicationExperiment,
    // 高等数学（一）
    AdvancedMathematics1,
    // 高等数学（二）
    AdvancedMathematics2,
    // 线性代数 
    linear,
    // 新生研讨课
    FreshmanSeminar,

    // 公共必修 9个
    // 英语一级 
    English1,
    // 英语二级
    English2,
    // 英语三级 
    English3,
    // 英语四级
    English4,
    //思想道德修养与法律基础 
    Ideological,
    //马克思主义基本原理 
    Marxism,
    //毛中特
    MaoZedong,
    //中国近现代史纲要
    ChineseHistory,
    // 形势与政策
    Situation,

    // 专业实践 6个
    //社会调查 
    Social,
    //专业见习
    ProfessionalProbation,
    //专业实习
    ProfessionalPractice,
    //毕业实习
    GraduationPractice,
    //专业研习
    ProfessionalStudy,
    //毕业论文（设计）
    GraduationThesis,

    //通识必选 6个
    //单片机技术 
    SingleChip,
    //电子线路课程设计
    designOfElectronic,
    //大学生就业指导
    EmploymentStudents,
    //大学生创业指导 
    EntrepreneurshipStudents,
    //军事理论
    Military,
    //民族理论与民族政策 
    EthnicTheory,

    // 体测
    firstYear,
    secondYear,
    thirdYear,
    fourthYear

  } = ctx.request.body
  // 根据id查找学生
  const gotStudent = await Students.findOne({
    _id: id
  })

  // 查找失败
  if (!gotStudent) {
    ctx.body = {
      meta: {
        msg: '没有找到学生',
        code: 0,
      }

    }
    return
  }
  // 找到对应学生后 创建新的学生对象
  const newStudent = {
    basicInfo: {
      studentName,
      studentNum,
      studentClass,
    },

    // 专业必修 26个
    ProfessionalRequired: [{
      courseName: "C语言程序设计",
      courseValue: Clanguage ? Clanguage : 0,
      Clanguage: Clanguage ? Clanguage : 0,
      creditHour: 4,
      GPA: 0,
    },
    {
      courseName: "大学物理（一）",
      courseValue: CollegePhysics1 ? CollegePhysics1 : 0,
      CollegePhysics1: CollegePhysics1 ? CollegePhysics1 : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "大学物理（二）",
      courseValue: CollegePhysics2 ? CollegePhysics2 : 0,
      CollegePhysics2: CollegePhysics2 ? CollegePhysics2 : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "复变函数与数理方程",
      courseValue: FunctionOfComplex ? FunctionOfComplex : 0,
      FunctionOfComplex: FunctionOfComplex ? FunctionOfComplex : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "概率统计",
      courseValue: probabilityStatistics ? probabilityStatistics : 0,
      probabilityStatistics: probabilityStatistics ? probabilityStatistics : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "大学物理实验",
      courseValue: PhysicsExperiment ? PhysicsExperiment : 0,
      PhysicsExperiment: PhysicsExperiment ? PhysicsExperiment : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "电磁场理论",
      courseValue: ElectromagneticTheory ? ElectromagneticTheory : 0,
      ElectromagneticTheory: ElectromagneticTheory ? ElectromagneticTheory : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "电路分析",
      courseValue: circuitAnalysis ? circuitAnalysis : 0,
      circuitAnalysis: circuitAnalysis ? circuitAnalysis : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "电路分析实验",
      courseValue: CircuitExperiment ? CircuitExperiment : 0,
      CircuitExperiment: CircuitExperiment ? CircuitExperiment : 0,
      creditHour: 0.5,
      GPA: 0,
    },
    {
      courseName: "模拟电子技术",
      courseValue: AnalogTechnology ? AnalogTechnology : 0,
      AnalogTechnology: AnalogTechnology ? AnalogTechnology : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "模拟电子技术实验",
      courseValue: ExperimentOfAnalogTechnology ? ExperimentOfAnalogTechnology : 0,
      ExperimentOfAnalogTechnology: ExperimentOfAnalogTechnology ? ExperimentOfAnalogTechnology : 0,
      creditHour: 0.5,
      GPA: 0,
    },
    {
      courseName: "数字电子技术",
      courseValue: DigitalTechnology ? DigitalTechnology : 0,
      DigitalTechnology: DigitalTechnology ? DigitalTechnology : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "数字电子技术实验",
      courseValue: ExperimentOfDigitalTechnology ? ExperimentOfDigitalTechnology : 0,
      ExperimentOfDigitalTechnology: ExperimentOfDigitalTechnology ? ExperimentOfDigitalTechnology : 0,
      creditHour: 0.5,
      GPA: 0,
    },
    {
      courseName: "高频电子线路",
      courseValue: HighCircuit ? HighCircuit : 0,
      HighCircuit: HighCircuit ? HighCircuit : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "高频电子线路实验",
      courseValue: ExperimentOfHigh ? ExperimentOfHigh : 0,
      ExperimentOfHigh: ExperimentOfHigh ? ExperimentOfHigh : 0,
      creditHour: 0.5,
      GPA: 0,
    },
    {
      courseName: "信号与系统",
      courseValue: Signal ? Signal : 0,
      Signal: Signal ? Signal : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "信号与系统实验",
      courseValue: SignalExperiment ? SignalExperiment : 0,
      SignalExperiment: SignalExperiment ? SignalExperiment : 0,
      creditHour: 0.5,
      GPA: 0,
    },
    {
      courseName: "微机原理",
      courseValue: Microcomputer ? Microcomputer : 0,
      Microcomputer: Microcomputer ? Microcomputer : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "微机原理实验",
      courseValue: MicrocomputerExperiment ? MicrocomputerExperiment : 0,
      MicrocomputerExperiment: MicrocomputerExperiment ? MicrocomputerExperiment : 0,
      creditHour: 0.5,
      GPA: 0,
    },
    {
      courseName: "数字信号处理",
      courseValue: DsignalProcessing ? DsignalProcessing : 0,
      DsignalProcessing: DsignalProcessing ? DsignalProcessing : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "通信原理",
      courseValue: CommunicationPrinciple ? CommunicationPrinciple : 0,
      CommunicationPrinciple: CommunicationPrinciple ? CommunicationPrinciple : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "通信原理实验",
      courseValue: CommunicationExperiment ? CommunicationExperiment : 0,
      CommunicationExperiment: CommunicationExperiment ? CommunicationExperiment : 0,
      creditHour: 0.5,
      GPA: 0,
    },
    {
      courseName: "高等数学（一）",
      courseValue: AdvancedMathematics1 ? AdvancedMathematics1 : 0,
      AdvancedMathematics1: AdvancedMathematics1 ? AdvancedMathematics1 : 0,
      creditHour: 4,
      GPA: 0,
    },
    {
      courseName: "高等数学（二）",
      courseValue: AdvancedMathematics2 ? AdvancedMathematics2 : 0,
      AdvancedMathematics2: AdvancedMathematics2 ? AdvancedMathematics2 : 0,
      creditHour: 4,
      GPA: 0,
    },
    {
      courseName: "线性代数",
      courseValue: linear ? linear : 0,
      linear: linear ? linear : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "新生研讨课",
      courseValue: FreshmanSeminar ? FreshmanSeminar : 0,
      FreshmanSeminar: FreshmanSeminar ? FreshmanSeminar : 0,
      creditHour: 1,
      GPA: 0,
    },
  ],
  // 公共必修 9个
  PublicCompulsory: [{
      courseName: "英语一级",
      courseValue: English1 ? English1 : 0,
      English1: English1 ? English1 : 0,
      creditHour: 2,
      GPA: 0,
    },
    {
      courseName: "英语二级",
      courseValue: English2 ? English2 : 0,
      English2: English2 ? English2 : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "英语三级",
      courseValue: English3 ? English3 : 0,
      English3: English3 ? English3 : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "英语四级",
      courseValue: English4 ? English4 : 0,
      English4: English4 ? English4 : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "思想道德修养与法律基础",
      courseValue: Ideological ? Ideological : 0,
      Ideological: Ideological ? Ideological : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "马克思主义基本原理",
      courseValue: Marxism ? Marxism : 0,
      Marxism: Marxism ? Marxism : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "毛中特",
      courseValue: MaoZedong ? MaoZedong : 0,
      MaoZedong: MaoZedong ? MaoZedong : 0,
      creditHour: 6,
      GPA: 0,
    },
    {
      courseName: "中国近现代史纲要",
      courseValue: ChineseHistory ? ChineseHistory : 0,
      ChineseHistory: ChineseHistory ? ChineseHistory : 0,
      creditHour: 2,
      GPA: 0,
    },
    {
      courseName: "形势与政策",
      courseValue: Situation ? Situation : 0,
      Situation: Situation ? Situation : 0,
      creditHour: 2,
      GPA: 0,
    }
  ],
  // 专业实践 6个
  ProfessionalPractice: [{
      courseName: "社会调查",
      courseValue: Social ? Social : 0,
      Social: Social ? Social : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "专业见习",
      courseValue: ProfessionalProbation ? ProfessionalProbation : 0,
      ProfessionalProbation: ProfessionalProbation ? ProfessionalProbation : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "专业实习",
      courseValue: ProfessionalPractice ? ProfessionalPractice : 0,
      ProfessionalPractice: ProfessionalPractice ? ProfessionalPractice : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "毕业实习",
      courseValue: GraduationPractice ? GraduationPractice : 0,
      GraduationPractice: GraduationPractice ? GraduationPractice : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "专业研习",
      courseValue: ProfessionalStudy ? ProfessionalStudy : 0,
      ProfessionalStudy: ProfessionalStudy ? ProfessionalStudy : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "毕业论文（设计）",
      courseValue: GraduationThesis ? GraduationThesis : 0,
      GraduationThesis: GraduationThesis ? GraduationThesis : 0,
      creditHour: 3,
      GPA: 0,
    },

  ],
  //通识必选 6个
  Generalknowledge: [{
      courseName: "单片机技术",
      courseValue: SingleChip ? SingleChip : 0,
      SingleChip: SingleChip ? SingleChip : 0,
      creditHour: 3,
      GPA: 0,
    },
    {
      courseName: "电子线路课程设计",
      courseValue: designOfElectronic ? designOfElectronic : 0,
      designOfElectronic: designOfElectronic ? designOfElectronic : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "大学生就业指导",
      courseValue: EmploymentStudents ? EmploymentStudents : 0,
      EmploymentStudents: EmploymentStudents ? EmploymentStudents : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "大学生创业指导",
      courseValue: EntrepreneurshipStudents ? EntrepreneurshipStudents : 0,
      EntrepreneurshipStudents: EntrepreneurshipStudents ? EntrepreneurshipStudents : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "军事理论",
      courseValue: Military ? Military : 0,
      Military: Military ? Military : 0,
      creditHour: 1,
      GPA: 0,
    },
    {
      courseName: "民族理论与民族政策",
      courseValue: EthnicTheory ? EthnicTheory : 0,
      EthnicTheory: EthnicTheory ? EthnicTheory : 0,
      creditHour: 1,
      GPA: 0,
    }
  ],
    physicalTest: [{
        courseName: "第一学年",
        courseValue: firstYear ? firstYear : 0,
        firstYear: firstYear ? firstYear : 0,
      },
      {
        courseName: "第二学年",
        courseValue: secondYear ? secondYear : 0,
        secondYear: secondYear ? secondYear : 0,
      },
      {
        courseName: "第三学年",
        courseValue: thirdYear ? thirdYear : 0,
        thirdYear: thirdYear ? thirdYear : 0
      },
      {
        courseName: "第四学年",
        courseValue: fourthYear ? fourthYear : 0,
        fourthYear: fourthYear ? fourthYear : 0
      },
    ]


  }

  // 将新的学生对象合并到旧的 实现更新
  Object.assign(gotStudent, newStudent)
  // 保存更新
  const res = await gotStudent.save()
  ctx.body = {
    data: res,
    meta: {
      msg: '更新成功',
      code: 1
    }

  }


})

module.exports = router