const ROLE_OPTIONS = [
  { value: "jiangsu_civil_service", label: "江苏省考" },
  { value: "public_institution", label: "事业编" },
  { value: "selected_graduate", label: "选调生" }
];

const LEVEL_OPTIONS = [
  { value: "foundation", label: "基础训练" },
  { value: "advanced", label: "进阶训练" },
  { value: "sprint", label: "冲刺模考" }
];

const QUESTION_BANK = {
  jiangsu_civil_service: {
    foundation: [
      {
        id: "js-f-1",
        questionType: "综合分析",
        prompt: "有人说“基层工作要讲速度”，也有人说“基层工作要讲温度”。你怎么看？",
        keywords: ["表态", "辩证", "群众需求", "效率", "平衡"],
        followUps: [
          "如果你在窗口岗位，如何同时保证速度和温度？",
          "请给出一个可操作的改进动作。",
          "如何避免“口号化表达”？"
        ]
      },
      {
        id: "js-f-2",
        questionType: "组织管理",
        prompt: "单位准备开展“反诈进社区”宣传活动，由你负责，你怎么组织？",
        keywords: ["目标对象", "分工", "流程", "重点人群", "复盘"],
        followUps: [
          "如何提升老年群体参与度？",
          "如果到场率不高，你如何补救？",
          "活动效果如何评估？"
        ]
      },
      {
        id: "js-f-3",
        questionType: "应急应变",
        prompt: "政务大厅网络中断，群众排队情绪激动，你作为值班人员怎么办？",
        keywords: ["先稳控", "解释", "分流", "抢修", "回访"],
        followUps: [
          "第一句话你会怎么说？",
          "如何防止现场冲突升级？",
          "恢复后你会如何复盘？"
        ]
      },
      {
        id: "js-f-4",
        questionType: "人际关系",
        prompt: "老同事觉得你“按流程办事太死板”，公开质疑你的工作方式，你怎么办？",
        keywords: ["尊重", "沟通", "目标一致", "试点", "改进"],
        followUps: [
          "如何在坚持原则下维护关系？",
          "如果对方持续不配合怎么办？",
          "你会如何达成团队共识？"
        ]
      },
      {
        id: "js-f-5",
        questionType: "岗位匹配",
        prompt: "你为什么报考江苏省考？请谈谈你的优势和短板。",
        keywords: ["报考动机", "岗位认知", "优势", "短板", "计划"],
        followUps: [
          "如何证明你的优势是可验证的？",
          "短板准备如何补齐？",
          "入职初期你最想做成什么事？"
        ]
      }
    ],
    advanced: [
      {
        id: "js-a-1",
        questionType: "综合分析",
        prompt: "当前基层治理中“填表留痕多、服务时间少”现象仍然存在，你怎么看？",
        keywords: ["问题本质", "形式主义", "减负", "服务导向", "机制"],
        followUps: [
          "你会先改哪类低效留痕？",
          "如何防止整改后反弹？",
          "如何平衡监督与减负？"
        ]
      },
      {
        id: "js-a-2",
        questionType: "组织管理",
        prompt: "你负责一次老旧小区改造民意调研，居民诉求差异大，怎么推进？",
        keywords: ["分层调研", "协商", "共识", "排序", "公示"],
        followUps: [
          "如何处理少数强烈反对意见？",
          "预算不足时如何排序诉求？",
          "如何把调研结果转化为实施方案？"
        ]
      },
      {
        id: "js-a-3",
        questionType: "应急应变",
        prompt: "新政策实施首日引发网民质疑“办理更麻烦”，舆情升温，你怎么办？",
        keywords: ["研判", "回应", "证据", "优化", "复盘"],
        followUps: [
          "谁来发声更合适？",
          "如何做到回应快又口径稳？",
          "如何把舆情转化为优化契机？"
        ]
      },
      {
        id: "js-a-4",
        questionType: "人际关系",
        prompt: "两位领导对同一事项意见不一致，都让你先按自己意见推进，你怎么办？",
        keywords: ["请示", "事实依据", "方案比较", "统筹", "留痕"],
        followUps: [
          "如何避免推进停滞？",
          "时间紧迫时如何先动起来？",
          "如何向双方解释你的处理逻辑？"
        ]
      },
      {
        id: "js-a-5",
        questionType: "政策理解",
        prompt: "请谈谈你对“高效办成一件事”改革要求的理解和落地抓手。",
        keywords: ["目标", "流程再造", "协同", "数据共享", "体验"],
        followUps: [
          "你认为最大的落地难点是什么？",
          "如何从群众角度定义“高效”？",
          "请给出一个量化指标。"
        ]
      }
    ],
    sprint: [
      {
        id: "js-s-1",
        questionType: "综合分析",
        prompt: "面对网络“快问快办”的诉求，你怎么看“快”和“准”的关系？",
        keywords: ["效率", "准确", "流程", "风险", "平衡"],
        followUps: [
          "如何避免“快而不准”？",
          "你会设置哪些质量校验点？",
          "如何在高压下保持服务稳定？"
        ]
      },
      {
        id: "js-s-2",
        questionType: "组织管理",
        prompt: "你要牵头跨部门专项整治，参与单位多、周期短，如何统筹？",
        keywords: ["目标拆解", "责任矩阵", "进度机制", "风险预案", "评估"],
        followUps: [
          "如何处理部门间口径不一致？",
          "如何避免会议空转？",
          "关键节点延误时如何兜底？"
        ]
      },
      {
        id: "js-s-3",
        questionType: "应急应变",
        prompt: "台风预警升级，社区需在4小时内完成重点人群转移，你怎么组织？",
        keywords: ["研判", "分组", "重点人群", "联动", "复核"],
        followUps: [
          "如何识别遗漏人员？",
          "资源不足时如何分配优先级？",
          "转移后如何做信息回传？"
        ]
      },
      {
        id: "js-s-4",
        questionType: "人际关系",
        prompt: "群众在窗口拍视频投诉“态度差”，你作为现场负责人怎么办？",
        keywords: ["安抚", "核查", "公开透明", "整改", "回访"],
        followUps: [
          "如何既维护群众权益又稳定团队？",
          "是否需要公开致歉，依据是什么？",
          "如何把个案转化为机制改进？"
        ]
      },
      {
        id: "js-s-5",
        questionType: "岗位匹配",
        prompt: "你如何看待江苏省考岗位“任务重、节奏快、要求高”的工作特点？",
        keywords: ["认知", "抗压", "执行", "复盘", "成长"],
        followUps: [
          "请举一个高压推进任务的例子。",
          "如果连续加班效率下降你怎么调整？",
          "如何做到“忙而不乱”？"
        ]
      }
    ]
  },
  public_institution: {
    foundation: [
      {
        id: "sy-f-1",
        questionType: "岗位匹配",
        prompt: "你为什么报考事业编？你如何理解“公益属性”与“服务效率”？",
        keywords: ["动机", "公益", "责任", "服务", "效率"],
        followUps: [
          "如何体现“以群众为中心”？",
          "效率与规范冲突时你怎么取舍？",
          "你将如何快速适应岗位？"
        ]
      },
      {
        id: "sy-f-2",
        questionType: "综合分析",
        prompt: "有人说“事业单位工作稳定但创新不足”，你怎么看？",
        keywords: ["辩证", "稳定", "创新", "改进", "价值"],
        followUps: [
          "你如何在稳定环境中保持主动性？",
          "请给出一个创新改进的小切口。",
          "如何让创新可落地？"
        ]
      },
      {
        id: "sy-f-3",
        questionType: "组织管理",
        prompt: "你负责一次“便民服务进社区”活动，如何确保群众真正受益？",
        keywords: ["需求摸排", "服务清单", "分工", "现场保障", "评估"],
        followUps: [
          "如何覆盖行动不便群体？",
          "如果现场秩序混乱怎么处理？",
          "活动后如何持续跟进？"
        ]
      },
      {
        id: "sy-f-4",
        questionType: "应急应变",
        prompt: "办事系统异常导致业务积压，群众持续投诉，你怎么办？",
        keywords: ["先处置", "解释", "分流", "协调", "复盘"],
        followUps: [
          "第一时间你会协调哪些人？",
          "如何稳定群众情绪？",
          "系统恢复后如何补救？"
        ]
      },
      {
        id: "sy-f-5",
        questionType: "人际关系",
        prompt: "同事认为你的工作标准“太严格”，影响了整体推进速度，你怎么办？",
        keywords: ["沟通", "标准", "协同", "试运行", "统一"],
        followUps: [
          "如何解释“标准化”的必要性？",
          "如何平衡质量和速度？",
          "如何形成团队共识？"
        ]
      }
    ],
    advanced: [
      {
        id: "sy-a-1",
        questionType: "政策理解",
        prompt: "你如何理解事业单位“放管服”改革中的“放”和“管”？",
        keywords: ["简政", "规范", "风险", "监督", "服务体验"],
        followUps: [
          "哪些事项可以下放，哪些不能？",
          "如何防止“放而不管”？",
          "如何衡量改革成效？"
        ]
      },
      {
        id: "sy-a-2",
        questionType: "组织管理",
        prompt: "你需要组织一次面向群众的政策宣讲会，参会对象复杂，如何设计方案？",
        keywords: ["对象分层", "内容设计", "触达渠道", "互动答疑", "复盘"],
        followUps: [
          "如何让政策语言更易懂？",
          "现场突发质疑如何回应？",
          "如何验证宣讲有效？"
        ]
      },
      {
        id: "sy-a-3",
        questionType: "综合分析",
        prompt: "在公共服务中，群众“主观满意”与“客观合规”不一致时，你怎么看？",
        keywords: ["合规", "体验", "解释", "平衡", "改进"],
        followUps: [
          "如何把规则讲到群众能理解？",
          "如何提升群众感受度？",
          "请举一个可落地动作。"
        ]
      },
      {
        id: "sy-a-4",
        questionType: "应急应变",
        prompt: "服务窗口出现网络舆情，指责你单位“推诿”，你作为经办人如何应对？",
        keywords: ["核实", "回应", "证据", "改进", "跟踪"],
        followUps: [
          "如何统一对外口径？",
          "如何避免二次舆情发酵？",
          "如何把舆情问题转化为流程优化？"
        ]
      },
      {
        id: "sy-a-5",
        questionType: "人际关系",
        prompt: "跨科室协作时，对方总是拖延反馈，影响你负责事项进度，你怎么办？",
        keywords: ["沟通", "节点管理", "协同机制", "提醒", "升级"],
        followUps: [
          "如何避免关系僵化？",
          "如果多次沟通无效怎么办？",
          "如何建立长期协作机制？"
        ]
      }
    ],
    sprint: [
      {
        id: "sy-s-1",
        questionType: "综合分析",
        prompt: "“数字化服务让办事更快，但也让部分老年人更难办事”，你怎么看？",
        keywords: ["数字鸿沟", "便民", "适老化", "兜底", "平衡"],
        followUps: [
          "如何做好线上线下协同？",
          "适老化最优先改哪块？",
          "如何评估改造效果？"
        ]
      },
      {
        id: "sy-s-2",
        questionType: "组织管理",
        prompt: "你负责年度服务质量提升项目，请给出推进方案。",
        keywords: ["目标", "基线", "措施", "监督", "评估"],
        followUps: [
          "如何识别最影响满意度的环节？",
          "如何推动一线执行？",
          "如何避免项目“重形式轻效果”？"
        ]
      },
      {
        id: "sy-s-3",
        questionType: "应急应变",
        prompt: "考试当天报名系统突发故障，热线被打爆，你如何处置？",
        keywords: ["应急分级", "信息发布", "分流", "补偿", "复盘"],
        followUps: [
          "如何防止投诉集中升级？",
          "是否需要延长报名时间，依据是什么？",
          "后续如何修复公信力？"
        ]
      },
      {
        id: "sy-s-4",
        questionType: "人际关系",
        prompt: "领导临时增加任务，但你手头重点工作马上到截止时间，你怎么办？",
        keywords: ["优先级", "沟通", "资源协调", "节点", "结果"],
        followUps: [
          "你会如何向领导汇报取舍依据？",
          "如何确保两项工作都不失控？",
          "事后如何优化任务承接机制？"
        ]
      },
      {
        id: "sy-s-5",
        questionType: "政策理解",
        prompt: "你如何理解事业单位“规范管理与激发活力并重”的要求？",
        keywords: ["规范", "激励", "绩效", "公平", "导向"],
        followUps: [
          "如何设计“有激励、可落地”的机制？",
          "如何避免激励失衡？",
          "你认为最难的执行点是什么？"
        ]
      }
    ]
  },
  selected_graduate: {
    foundation: [
      {
        id: "xd-f-1",
        questionType: "岗位匹配",
        prompt: "你为什么报考选调生？你对“到基层去、到一线去”如何理解？",
        keywords: ["初心", "基层", "历练", "责任", "成长"],
        followUps: [
          "你如何证明自己能扎根基层？",
          "基层琐碎事务多，你如何保持动力？",
          "你未来3年的成长目标是什么？"
        ]
      },
      {
        id: "xd-f-2",
        questionType: "综合分析",
        prompt: "有人说“年轻干部要敢闯”，也有人说“年轻干部要稳妥”，你怎么看？",
        keywords: ["辩证", "原则", "担当", "稳妥", "边界"],
        followUps: [
          "什么情况下该“快”，什么情况下该“稳”？",
          "如何避免“盲目冒进”？",
          "请结合基层场景说明。"
        ]
      },
      {
        id: "xd-f-3",
        questionType: "组织管理",
        prompt: "你要组织青年干部学习交流活动，如何提高参与质量？",
        keywords: ["目标", "议题", "互动", "产出", "跟踪"],
        followUps: [
          "如何避免活动流于形式？",
          "如何沉淀可复用成果？",
          "如何让活动与实际工作结合？"
        ]
      },
      {
        id: "xd-f-4",
        questionType: "人际关系",
        prompt: "你作为年轻干部提出新想法，被资深同事认为“不接地气”，你怎么办？",
        keywords: ["尊重", "请教", "试点", "迭代", "共识"],
        followUps: [
          "如何处理“代际认知差异”？",
          "如何让新方案更接地气？",
          "如何推进而不激化矛盾？"
        ]
      },
      {
        id: "xd-f-5",
        questionType: "应急应变",
        prompt: "你在村里走访时，群众对历史遗留问题集中表达不满，现场气氛紧张，你怎么办？",
        keywords: ["安抚", "倾听", "分类", "上报", "反馈"],
        followUps: [
          "如何避免承诺过度？",
          "如何让群众看到推进进展？",
          "如何形成后续跟进机制？"
        ]
      }
    ],
    advanced: [
      {
        id: "xd-a-1",
        questionType: "政策理解",
        prompt: "请谈谈你对“调查研究是做好工作的基本功”的理解。",
        keywords: ["问题导向", "实地调研", "数据", "转化", "闭环"],
        followUps: [
          "如何避免“为了调研而调研”？",
          "如何把调研结论转成可执行措施？",
          "调研报告如何让领导可决策？"
        ]
      },
      {
        id: "xd-a-2",
        questionType: "综合分析",
        prompt: "基层治理中“既要守住底线，又要激发活力”，你怎么看？",
        keywords: ["底线思维", "创新", "风险", "机制", "平衡"],
        followUps: [
          "哪些事情必须严格按规矩办？",
          "哪些事情可以先试点再推广？",
          "如何构建可控创新机制？"
        ]
      },
      {
        id: "xd-a-3",
        questionType: "组织管理",
        prompt: "你负责一次“村情民意走访周”，如何确保走访真实有效？",
        keywords: ["样本覆盖", "问题清单", "分类处理", "时限", "回访"],
        followUps: [
          "如何避免只听“熟人意见”？",
          "如何推动问题快速闭环？",
          "如何向群众反馈处理进度？"
        ]
      },
      {
        id: "xd-a-4",
        questionType: "应急应变",
        prompt: "突发暴雨导致村道积水，群众在群里持续质疑“处置慢”，你怎么办？",
        keywords: ["现场核实", "联动处置", "信息发布", "安抚", "复盘"],
        followUps: [
          "你会优先处置哪些风险点？",
          "如何回应网民质疑？",
          "如何把应急经验沉淀成预案？"
        ]
      },
      {
        id: "xd-a-5",
        questionType: "人际关系",
        prompt: "你推动的一项便民举措推进缓慢，村干部认为“没必要折腾”，你怎么办？",
        keywords: ["沟通", "证据", "试点", "协同", "固化"],
        followUps: [
          "如何让对方看到实际收益？",
          "如果仍有阻力你如何推进？",
          "如何形成长效机制？"
        ]
      }
    ],
    sprint: [
      {
        id: "xd-s-1",
        questionType: "综合分析",
        prompt: "你怎么看“选调生要在基层‘墩苗’，不能只做‘履历式成长’”？",
        keywords: ["基层历练", "实践能力", "长期主义", "作风", "实绩"],
        followUps: [
          "如何判断自己是真成长还是“忙而无效”？",
          "你会如何设计自己的能力提升路径？",
          "如何把“墩苗”成果转化为治理能力？"
        ]
      },
      {
        id: "xd-s-2",
        questionType: "组织管理",
        prompt: "你负责牵头一项党建引领基层治理试点工作，请给出推进方案。",
        keywords: ["目标", "机制", "联动", "群众参与", "评估"],
        followUps: [
          "如何调动村民参与积极性？",
          "如何处理跨部门协同摩擦？",
          "如何评估试点是否可复制？"
        ]
      },
      {
        id: "xd-s-3",
        questionType: "应急应变",
        prompt: "节假日返乡高峰，乡镇政务窗口人流激增、投诉增加，你怎么应对？",
        keywords: ["预判", "增援", "分流", "公开提示", "回访"],
        followUps: [
          "如何提前做好资源配置？",
          "如何兼顾效率与服务体验？",
          "你会如何进行节后复盘？"
        ]
      },
      {
        id: "xd-s-4",
        questionType: "人际关系",
        prompt: "你在推进重点任务时与另一名年轻干部产生分歧，影响工作节奏，你怎么办？",
        keywords: ["共同目标", "事实依据", "分工", "协同", "复盘"],
        followUps: [
          "如何避免分歧升级为对立？",
          "时间紧时如何快速统一行动？",
          "事后如何优化协作方式？"
        ]
      },
      {
        id: "xd-s-5",
        questionType: "政策理解",
        prompt: "请结合基层实践谈谈你对“全过程人民民主”在基层治理中的理解。",
        keywords: ["参与", "协商", "公开", "反馈", "落实"],
        followUps: [
          "如何避免“参与形式化”？",
          "群众意见分歧大时如何决策？",
          "如何让参与结果可见可感？"
        ]
      }
    ]
  }
};

const DAILY_QUESTION_COUNT = 2;
const DEFAULT_SET_SECONDS = 180;

const SECOND_ANSWER_MODES = [
  {
    value: "focus_topic",
    label: "只练扣题",
    targetDimension: "topic",
    tip: "二答只做一件事：句句围绕题干任务，不说无关背景。"
  },
  {
    value: "focus_keypoints",
    label: "只补要点",
    targetDimension: "keypoints",
    tip: "二答优先补齐缺失要点，建议用“一是、二是、三是”展开。"
  },
  {
    value: "focus_structure",
    label: "只练结构",
    targetDimension: "structure",
    tip: "二答固定四段：表态-分析-对策-落地，突出层次感。"
  }
];

const DIMENSION_META = [
  { key: "topic", label: "扣题" },
  { key: "keypoints", label: "要点" },
  { key: "structure", label: "结构" },
  { key: "logic", label: "逻辑" },
  { key: "expression", label: "表达" },
  { key: "rhythm", label: "节奏" }
];

const DIMENSION_ADVICE = {
  topic: "先拆题干任务句，再逐段回扣核心词。",
  keypoints: "按“应有要点”逐点补齐，避免泛泛而谈。",
  structure: "使用“表态-分析-对策-落地”固定骨架。",
  logic: "多用因果与并列连接词，减少跳跃叙述。",
  expression: "短句化、动作化表达，少空话套话。",
  rhythm: "控制节奏，避免前松后紧或过早结束。"
};

const TRACK_MATERIAL_LIBRARY = {
  jiangsu_civil_service: [
    "可结合江苏政务服务、基层治理协同等场景增强贴合度。",
    "建议加入“高效办成一件事”或基层减负相关抓手。"
  ],
  public_institution: [
    "可结合事业单位公共服务流程优化、群众满意度提升案例。",
    "建议强调“规范管理 + 服务体验”双目标。"
  ],
  selected_graduate: [
    "可结合基层走访、村情民意、组织协同等一线场景。",
    "建议体现“到基层去、在实践中成长”的导向。"
  ]
};

const QUESTION_TYPE_PATTERNS = [
  { type: "综合分析", regex: /(怎么看|如何看待|谈谈看法|现象|观点)/ },
  { type: "组织管理", regex: /(组织|策划|开展|安排|宣传|活动|调研|推进)/ },
  { type: "应急应变", regex: /(突发|应急|故障|舆情|冲突|情绪激动|被困|投诉)/ },
  { type: "人际关系", regex: /(同事|领导|群众|协作|矛盾|沟通|配合)/ },
  { type: "岗位匹配", regex: /(报考|为什么|优势|短板|自我介绍|职业规划|岗位|选调生|省考|事业编)/ },
  { type: "政策理解", regex: /(政策|改革|落实|执行|制度|规范|减负|振兴|民主)/ }
];

const QUESTION_TYPE_KEYPOINTS = {
  综合分析: ["明确立场", "分析原因", "指出影响", "提出对策"],
  组织管理: ["目标对象", "步骤分工", "风险预案", "评估复盘"],
  应急应变: ["先稳控", "再研判", "再处置", "后复盘"],
  人际关系: ["尊重沟通", "统一目标", "协同推进", "机制改进"],
  岗位匹配: ["报考动机", "岗位认知", "能力匹配", "改进计划"],
  政策理解: ["政策目标", "落地路径", "难点风险", "监督评估"],
  通用: ["结论先行", "核心要点", "可执行动作", "闭环复盘"]
};

const LOCAL_MATERIAL_LIBRARY = {
  综合分析: [
    "建议加入本地治理案例，体现“观点-行动-结果”。",
    "可补充群众感受与公共价值，避免空泛议论。"
  ],
  组织管理: [
    "建议覆盖“对象分层+过程管控+效果评估”三段式。",
    "可加入跨部门联动与应急预案，提升可执行性。"
  ],
  应急应变: [
    "建议突出“先稳控再处置”，并交代信息发布机制。",
    "可补充事后复盘与机制优化，形成闭环。"
  ],
  人际关系: [
    "建议先稳情绪、再谈目标一致，最后落到协同机制。",
    "避免只讲态度，需交代推进动作和结果。"
  ],
  岗位匹配: [
    "建议用“动机-能力-计划”三段式作答。",
    "短板部分要给时间节点和改进路径。"
  ],
  政策理解: [
    "建议先讲政策目标，再讲落地抓手和评价指标。",
    "可加入执行难点及风险防控方案。"
  ],
  通用: ["可优先用基层治理、民生服务、营商环境场景增强真实感。"]
};

function clampScore(n) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

function dedupe(list) {
  const seen = {};
  return (list || []).filter((item) => {
    if (!item || seen[item]) {
      return false;
    }
    seen[item] = true;
    return true;
  });
}

function splitSentences(text) {
  return String(text || "")
    .split(/[\n。！？；]/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function countContains(text, phrases) {
  const source = String(text || "");
  return (phrases || []).reduce((acc, item) => (source.includes(item) ? acc + 1 : acc), 0);
}

function inferQuestionType(prompt) {
  const text = String(prompt || "");
  const hit = QUESTION_TYPE_PATTERNS.find((x) => x.regex.test(text));
  return hit ? hit.type : "通用";
}

function enrichQuestion(question) {
  const q = question || {};
  const questionType = q.questionType || inferQuestionType(q.prompt);
  const expectedKeypoints = QUESTION_TYPE_KEYPOINTS[questionType] || QUESTION_TYPE_KEYPOINTS.通用;
  return {
    ...q,
    questionType,
    expectedKeypoints
  };
}

function getSecondModeByValue(value) {
  return SECOND_ANSWER_MODES.find((x) => x.value === value) || SECOND_ANSWER_MODES[0];
}

function shuffle(list) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function getQuestions(role, level, count) {
  const roleBank = QUESTION_BANK[role] || QUESTION_BANK.jiangsu_civil_service;
  const levelBank = roleBank[level] || roleBank.foundation;
  const targetCount = Math.max(1, Math.min(count || DAILY_QUESTION_COUNT, levelBank.length));
  return shuffle(levelBank)
    .slice(0, targetCount)
    .map((q) => enrichQuestion({ ...q, role }));
}

function keywordHitRate(answer, keywords) {
  const wordList = keywords || [];
  if (wordList.length === 0) {
    return {
      hits: [],
      misses: [],
      rate: 0
    };
  }
  const normalized = String(answer || "").toLowerCase();
  const hits = wordList.filter((k) => normalized.includes(String(k).toLowerCase()));
  const misses = wordList.filter((k) => !hits.includes(k));
  return {
    hits,
    misses,
    rate: hits.length / wordList.length
  };
}

function getTaskBreakdown(question) {
  const q = enrichQuestion(question);
  const object = "对象：题干中的群众/同事/部门等关键主体。";
  let task = "任务：先给结论，再给原因与行动方案。";

  if (q.questionType === "综合分析") {
    task = "任务：先表态，再分析原因与影响，最后提出可执行建议。";
  } else if (q.questionType === "组织管理") {
    task = "任务：讲清目标对象、步骤分工、风险预案和评估方式。";
  } else if (q.questionType === "应急应变") {
    task = "任务：先稳控现场，再研判，再处置，最后复盘。";
  } else if (q.questionType === "人际关系") {
    task = "任务：先稳情绪，再沟通协同，最后机制改进。";
  } else if (q.questionType === "岗位匹配") {
    task = "任务：讲清动机、岗位匹配和短板改进计划。";
  } else if (q.questionType === "政策理解") {
    task = "任务：讲清政策目标、落地路径、难点及监督评估。";
  }

  const boundary = "边界：避免空泛口号，必须结合具体场景和动作。";
  const tension = "矛盾：在有限时间里兼顾完整性与重点突出。";
  return [object, task, boundary, tension];
}

function getSentenceEvidence(sentences, keywords) {
  const keywordList = keywords || [];
  const hitSentences = [];
  const offTopicSentences = [];

  sentences.forEach((s) => {
    const lower = String(s).toLowerCase();
    const hit = keywordList.some((k) => lower.includes(String(k).toLowerCase()));
    if (hit && hitSentences.length < 3) {
      hitSentences.push(s);
      return;
    }
    if (!hit && s.length >= 10 && offTopicSentences.length < 3) {
      offTopicSentences.push(s);
    }
  });

  return {
    hitSentences,
    offTopicSentences
  };
}

function buildMissingPointTemplates(question, answerText, missKeywords) {
  const templates = [];
  const q = enrichQuestion(question);
  const expectedPoints = q.expectedKeypoints || QUESTION_TYPE_KEYPOINTS.通用;

  (missKeywords || []).slice(0, 3).forEach((item) => {
    templates.push({
      point: item,
      template: `可补一句：围绕“${item}”给出1个具体动作和1个结果。`
    });
  });

  expectedPoints.forEach((item) => {
    if (templates.length >= 3) {
      return;
    }
    if (!String(answerText || "").includes(item)) {
      templates.push({
        point: item,
        template: `可补一句：本题请补充“${item}”，并写出执行细节。`
      });
    }
  });

  if (templates.length === 0) {
    templates.push({
      point: "可量化结果",
      template: "可补一句：说明预期提升指标（如满意度、办理时效）。"
    });
  }

  return templates;
}

function getLocalMaterialTips(questionType, role) {
  const typeTips = LOCAL_MATERIAL_LIBRARY[questionType] || LOCAL_MATERIAL_LIBRARY.通用;
  const trackTips = TRACK_MATERIAL_LIBRARY[role] || [];
  return dedupe(trackTips.concat(typeTips)).slice(0, 3);
}

function evaluateAnswer(question, answer, secondsUsed, totalSeconds, focusMode) {
  const enrichedQuestion = enrichQuestion(question);
  const text = String(answer || "").trim();
  const length = text.length;
  const sentences = splitSentences(text);
  const hit = keywordHitRate(text, enrichedQuestion.keywords || []);
  const evidence = getSentenceEvidence(sentences, enrichedQuestion.keywords || []);

  if (!text) {
    const emptyDimensions = {
      topic: 0,
      keypoints: 0,
      structure: 0,
      logic: 0,
      expression: 0,
      rhythm: 0
    };
    return {
      score: 0,
      length: 0,
      keywordHits: [],
      keywordRate: 0,
      focusMode: focusMode || null,
      dimensions: emptyDimensions,
      dimensionList: DIMENSION_META.map((x) => ({ ...x, value: 0 })),
      suggestions: ["当前回答为空，建议先给结论，再列三条要点。"],
      taskBreakdown: getTaskBreakdown(enrichedQuestion),
      missingPointTemplates: buildMissingPointTemplates(
        enrichedQuestion,
        "",
        (enrichedQuestion.keywords || []).slice(0, 3)
      ),
      coverage: {
        shouldHave: (enrichedQuestion.keywords || []).length,
        covered: 0,
        rate: 0
      },
      evidence: {
        hitSentences: [],
        offTopicSentences: [],
        missingKeywords: (enrichedQuestion.keywords || []).slice(0, 3)
      },
      questionType: enrichedQuestion.questionType,
      localMaterialTips: getLocalMaterialTips(enrichedQuestion.questionType, enrichedQuestion.role)
    };
  }

  const structureMarkers = ["一是", "二是", "三是", "首先", "其次", "最后", "综上", "总之"];
  const logicMarkers = ["因为", "所以", "因此", "同时", "另外", "如果", "那么", "但是"];
  const fillerWords = ["这个", "那个", "就是", "然后呢", "嗯", "啊"];

  const structureCount = countContains(text, structureMarkers);
  const logicCount = countContains(text, logicMarkers);
  const fillerCount = countContains(text, fillerWords);
  const timeRatio = totalSeconds > 0 ? secondsUsed / totalSeconds : 0;

  const topicScore = clampScore(
    32 + hit.rate * 56 + (length >= 60 ? 8 : -6) - evidence.offTopicSentences.length * 8
  );
  const keypointScore = clampScore(24 + hit.rate * 72);
  const structureScore = clampScore(
    20 +
      structureCount * 13 +
      (sentences.length >= 3 ? 16 : 0) +
      (text.includes("一是") || text.includes("首先") ? 8 : 0)
  );
  const logicScore = clampScore(
    24 + logicCount * 11 + (sentences.length >= 3 ? 14 : 0) - fillerCount * 4
  );
  const expressionScore = clampScore(30 + Math.min(34, length / 4) - fillerCount * 5);
  const rhythmScore = clampScore(
    25 +
      (timeRatio >= 0.45 && timeRatio <= 0.9 ? 40 : timeRatio >= 0.25 ? 25 : 8) +
      (length >= 80 && length <= 650 ? 20 : length < 40 ? -10 : 10)
  );

  const dimensions = {
    topic: topicScore,
    keypoints: keypointScore,
    structure: structureScore,
    logic: logicScore,
    expression: expressionScore,
    rhythm: rhythmScore
  };

  const score = clampScore(
    dimensions.topic * 0.23 +
      dimensions.keypoints * 0.24 +
      dimensions.structure * 0.18 +
      dimensions.logic * 0.15 +
      dimensions.expression * 0.12 +
      dimensions.rhythm * 0.08
  );

  const dimensionList = DIMENSION_META.map((item) => ({
    key: item.key,
    label: item.label,
    value: dimensions[item.key]
  }));

  const weakDimensions = dimensionList
    .slice()
    .sort((a, b) => a.value - b.value)
    .slice(0, 2);

  const suggestions = weakDimensions.map((item) => DIMENSION_ADVICE[item.key]);
  if (hit.rate < 0.5) {
    suggestions.push("要点覆盖偏低，建议按“应有要点X条/已覆盖Y条”逐点补齐。");
  }
  if (length < 80) {
    suggestions.push("内容偏短，建议补充场景细节与落地动作。");
  }

  const modeInfo = getSecondModeByValue(focusMode);
  if (focusMode && dimensions[modeInfo.targetDimension] < 70) {
    suggestions.unshift(`本轮“${modeInfo.label}”目标未达标，建议继续针对该维度重练。`);
  }

  return {
    score,
    length,
    keywordHits: hit.hits,
    keywordRate: hit.rate,
    focusMode: focusMode || null,
    dimensions,
    dimensionList,
    suggestions: dedupe(suggestions).slice(0, 3),
    taskBreakdown: getTaskBreakdown(enrichedQuestion),
    missingPointTemplates: buildMissingPointTemplates(enrichedQuestion, text, hit.misses),
    coverage: {
      shouldHave: (enrichedQuestion.keywords || []).length,
      covered: hit.hits.length,
      rate: hit.rate
    },
    evidence: {
      hitSentences: evidence.hitSentences,
      offTopicSentences: evidence.offTopicSentences,
      missingKeywords: hit.misses.slice(0, 3)
    },
    questionType: enrichedQuestion.questionType,
    localMaterialTips: getLocalMaterialTips(enrichedQuestion.questionType, enrichedQuestion.role)
  };
}

function generateFollowUp(question, answerEval) {
  const enrichedQuestion = enrichQuestion(question);
  const followUps = enrichedQuestion.followUps || [];
  if (followUps.length === 0) {
    return "请结合一个真实场景，补充你的行动步骤与结果。";
  }

  if ((answerEval.length || 0) < 80) {
    return followUps[0];
  }

  if ((answerEval.keywordRate || 0) < 0.5) {
    return followUps[Math.min(1, followUps.length - 1)];
  }

  if (answerEval.dimensions && answerEval.dimensions.structure < 65) {
    return "请按“表态-分析-对策-落地”四段重答一次，突出层次。";
  }

  return followUps[Math.min(2, followUps.length - 1)];
}

function getRoleLabel(role) {
  const item = ROLE_OPTIONS.find((x) => x.value === role);
  return item ? item.label : role;
}

function getLevelLabel(level) {
  const item = LEVEL_OPTIONS.find((x) => x.value === level);
  return item ? item.label : level;
}

function buildSummary(session) {
  const records = session.records || [];
  const totalScore = records.reduce(
    (acc, item) =>
      acc +
      (item.secondAttempt
        ? item.secondAttempt.score
        : item.firstAttempt
          ? item.firstAttempt.score
          : 0),
    0
  );
  const average = records.length > 0 ? Math.round(totalScore / records.length) : 0;

  const totalProgress = records.reduce((acc, item) => acc + Number(item.progressValue || 0), 0);
  const progressScore = records.length > 0 ? Math.round(totalProgress / records.length) : 0;

  const dimensionTotals = {
    topic: 0,
    keypoints: 0,
    structure: 0,
    logic: 0,
    expression: 0,
    rhythm: 0
  };
  let dimensionSamples = 0;

  records.forEach((item) => {
    const evalData = item.secondAttempt
      ? item.secondAttempt.evaluation
      : item.firstAttempt
        ? item.firstAttempt.evaluation
        : null;
    if (!evalData || !evalData.dimensions) {
      return;
    }
    dimensionSamples += 1;
    Object.keys(dimensionTotals).forEach((k) => {
      dimensionTotals[k] += Number(evalData.dimensions[k] || 0);
    });
  });

  const dimensionRadar = DIMENSION_META.map((item) => ({
    key: item.key,
    label: item.label,
    value: dimensionSamples > 0 ? Math.round(dimensionTotals[item.key] / dimensionSamples) : 0
  }));

  let levelTag = "待提升";
  if (average >= 85) {
    levelTag = "表现优秀";
  } else if (average >= 70) {
    levelTag = "表现良好";
  } else if (average >= 55) {
    levelTag = "基础可用";
  }

  const allSuggestions = [];
  records.forEach((r) => {
    const second = r.secondAttempt ? r.secondAttempt.evaluation : null;
    const first = r.firstAttempt ? r.firstAttempt.evaluation : null;
    const selected = second || first;
    (selected && selected.suggestions ? selected.suggestions : []).forEach((s) => allSuggestions.push(s));
  });

  const suggestionCount = {};
  allSuggestions.forEach((s) => {
    suggestionCount[s] = (suggestionCount[s] || 0) + 1;
  });

  const topSuggestions = Object.keys(suggestionCount)
    .sort((a, b) => suggestionCount[b] - suggestionCount[a])
    .slice(0, 3);

  const reportTop3 = dimensionRadar
    .slice()
    .sort((a, b) => a.value - b.value)
    .slice(0, 3)
    .map((item) => `${item.label}：${DIMENSION_ADVICE[item.key]}`);

  return {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    role: session.role,
    level: session.level,
    roleLabel: getRoleLabel(session.role),
    levelLabel: getLevelLabel(session.level),
    questionCount: records.length,
    averageScore: average,
    progressScore,
    levelTag,
    records,
    topSuggestions,
    reportTop3,
    dimensionRadar
  };
}

module.exports = {
  ROLE_OPTIONS,
  LEVEL_OPTIONS,
  DAILY_QUESTION_COUNT,
  DEFAULT_SET_SECONDS,
  SECOND_ANSWER_MODES,
  getSecondModeByValue,
  getQuestions,
  evaluateAnswer,
  generateFollowUp,
  buildSummary,
  getRoleLabel,
  getLevelLabel
};
