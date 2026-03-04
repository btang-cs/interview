const ROLE_OPTIONS = [
  { value: "frontend", label: "前端工程师" },
  { value: "backend", label: "后端工程师" },
  { value: "product", label: "产品经理" }
];

const LEVEL_OPTIONS = [
  { value: "junior", label: "初级" },
  { value: "middle", label: "中级" },
  { value: "senior", label: "高级" }
];

const QUESTION_BANK = {
  frontend: {
    junior: [
      {
        id: "fe-j-1",
        prompt: "解释一下浏览器从输入 URL 到页面展示的大致过程。",
        keywords: ["DNS", "TCP", "HTTP", "渲染", "解析"],
        followUps: [
          "如果首屏慢，你会优先排查哪三个环节？",
          "渲染阻塞资源通常有哪些？",
          "你在项目里做过哪些首屏优化？"
        ]
      },
      {
        id: "fe-j-2",
        prompt: "请对比 var、let、const 的区别，并举例说明。",
        keywords: ["块级作用域", "变量提升", "暂时性死区", "不可变"],
        followUps: [
          "为什么说 const 不是绝对不可变？",
          "在团队规范中你会如何约束变量声明？",
          "有没有因为作用域导致的线上问题案例？"
        ]
      },
      {
        id: "fe-j-3",
        prompt: "什么是事件冒泡与事件捕获？实际开发中怎么用？",
        keywords: ["事件流", "捕获", "冒泡", "阻止传播", "事件委托"],
        followUps: [
          "什么时候应该用事件委托？",
          "stopPropagation 和 preventDefault 区别是什么？",
          "你处理过复杂交互事件冲突吗？"
        ]
      },
      {
        id: "fe-j-4",
        prompt: "请描述你理解的组件化开发。",
        keywords: ["复用", "职责单一", "状态", "通信", "可维护"],
        followUps: [
          "你会如何划分一个页面的组件边界？",
          "组件复用失控时怎么治理？",
          "你如何设计通用组件的 API？"
        ]
      },
      {
        id: "fe-j-5",
        prompt: "在小程序里 setData 使用时需要注意什么？",
        keywords: ["性能", "数据量", "频率", "diff", "最小更新"],
        followUps: [
          "如何减少不必要的 setData？",
          "如果页面卡顿你会如何定位？",
          "你是否做过数据分片更新？"
        ]
      }
    ],
    middle: [
      {
        id: "fe-m-1",
        prompt: "谈谈你对前端状态管理的理解，以及何时需要全局状态。",
        keywords: ["单向数据流", "可预测", "共享状态", "解耦", "调试"],
        followUps: [
          "什么情况下不建议引入全局状态？",
          "如何避免状态过度设计？",
          "你做过哪些状态层的性能优化？"
        ]
      },
      {
        id: "fe-m-2",
        prompt: "如何做前端性能监控？你会关注哪些核心指标？",
        keywords: ["FCP", "LCP", "TTFB", "CLS", "埋点"],
        followUps: [
          "你会如何区分网络慢还是渲染慢？",
          "异常波动出现后你的排查路径是什么？",
          "如何把监控数据用于迭代优先级？"
        ]
      },
      {
        id: "fe-m-3",
        prompt: "请讲一个你主导过的前端重构案例。",
        keywords: ["背景", "方案", "收益", "风险", "迁移"],
        followUps: [
          "你如何控制重构期间的业务风险？",
          "如何衡量重构效果？",
          "回头看有什么决策会改？"
        ]
      },
      {
        id: "fe-m-4",
        prompt: "你如何设计一个可扩展的前端工程化体系？",
        keywords: ["构建", "CI", "规范", "模块化", "自动化"],
        followUps: [
          "你会先做哪三件事？",
          "如何推动团队接受新规范？",
          "你如何处理历史包袱？"
        ]
      },
      {
        id: "fe-m-5",
        prompt: "多人协作时，如何保障前端代码质量？",
        keywords: ["Code Review", "Lint", "测试", "门禁", "规范"],
        followUps: [
          "你会设置哪些 CI 阻断规则？",
          "如何让 Code Review 不流于形式？",
          "如何平衡质量与迭代速度？"
        ]
      }
    ],
    senior: [
      {
        id: "fe-s-1",
        prompt: "如果让你从 0 到 1 设计前端架构，你的关键决策点有哪些？",
        keywords: ["边界", "可扩展", "稳定性", "监控", "治理"],
        followUps: [
          "如何在早期避免架构过度？",
          "架构演进如何与组织规模匹配？",
          "你怎么定义架构成功？"
        ]
      },
      {
        id: "fe-s-2",
        prompt: "谈谈你如何建设跨团队前端技术影响力。",
        keywords: ["标准化", "赋能", "平台化", "度量", "协同"],
        followUps: [
          "你如何处理团队间技术分歧？",
          "哪些指标能证明影响力有效？",
          "失败过的推动案例是什么？"
        ]
      },
      {
        id: "fe-s-3",
        prompt: "如何制定一个年度前端技术规划？",
        keywords: ["目标", "优先级", "ROI", "风险", "里程碑"],
        followUps: [
          "你怎么争取资源和预算？",
          "业务短期需求和长期建设冲突怎么办？",
          "如何保证规划可落地？"
        ]
      },
      {
        id: "fe-s-4",
        prompt: "在性能、稳定性、研发效率冲突时，你如何做技术取舍？",
        keywords: ["权衡", "收益", "成本", "阶段性", "复盘"],
        followUps: [
          "有没有一个你做错的取舍案例？",
          "怎么说服业务接受技术投入？",
          "如何设计可回滚方案？"
        ]
      },
      {
        id: "fe-s-5",
        prompt: "你如何评估并引入新技术栈，避免团队被技术潮流裹挟？",
        keywords: ["试点", "评估", "迁移成本", "培训", "退出机制"],
        followUps: [
          "试点失败时你会如何止损？",
          "你会设置哪些准入门槛？",
          "如何管理多技术栈并存的复杂度？"
        ]
      }
    ]
  },
  backend: {
    junior: [
      {
        id: "be-j-1",
        prompt: "请解释 HTTP 和 HTTPS 的区别。",
        keywords: ["TLS", "加密", "证书", "握手", "安全"],
        followUps: [
          "HTTPS 为什么还能被中间人攻击？",
          "证书过期会发生什么？",
          "你在项目里如何配置 HTTPS？"
        ]
      },
      {
        id: "be-j-2",
        prompt: "什么是数据库索引？什么时候应该加索引？",
        keywords: ["查询", "B+树", "回表", "选择性", "写入开销"],
        followUps: [
          "哪些情况加索引反而更慢？",
          "联合索引最左匹配怎么理解？",
          "你如何分析慢查询？"
        ]
      },
      {
        id: "be-j-3",
        prompt: "请说说你理解的事务和 ACID。",
        keywords: ["原子性", "一致性", "隔离性", "持久性", "回滚"],
        followUps: [
          "隔离级别如何影响并发问题？",
          "你遇到过死锁吗？如何处理？",
          "分布式事务你了解哪些方案？"
        ]
      },
      {
        id: "be-j-4",
        prompt: "Redis 常见使用场景有哪些？",
        keywords: ["缓存", "过期", "高并发", "分布式锁", "限流"],
        followUps: [
          "缓存穿透和击穿怎么处理？",
          "你如何做缓存一致性？",
          "Redis 持久化策略了解吗？"
        ]
      },
      {
        id: "be-j-5",
        prompt: "描述一次你排查线上问题的流程。",
        keywords: ["定位", "日志", "复现", "回滚", "复盘"],
        followUps: [
          "你如何缩小问题范围？",
          "如何避免类似问题再次发生？",
          "在高压场景下你如何做沟通？"
        ]
      }
    ],
    middle: [
      {
        id: "be-m-1",
        prompt: "你如何设计一个高并发下的下单系统？",
        keywords: ["幂等", "削峰", "事务", "库存", "一致性"],
        followUps: [
          "如何防止超卖？",
          "消息重复消费如何处理？",
          "关键指标你会看哪些？"
        ]
      },
      {
        id: "be-m-2",
        prompt: "谈谈你对微服务拆分原则的理解。",
        keywords: ["领域边界", "独立部署", "通信", "治理", "观测"],
        followUps: [
          "拆分过细会有什么问题？",
          "你如何处理跨服务事务？",
          "服务治理平台你会怎么做？"
        ]
      },
      {
        id: "be-m-3",
        prompt: "你做过哪些数据库层面的性能优化？",
        keywords: ["索引", "SQL", "分库分表", "连接池", "慢查询"],
        followUps: [
          "如何判断是否要分库分表？",
          "你会如何评估优化收益？",
          "你如何防止回归？"
        ]
      },
      {
        id: "be-m-4",
        prompt: "如何设计一个可观测性体系？",
        keywords: ["日志", "指标", "链路追踪", "告警", "SLO"],
        followUps: [
          "告警噪音如何控制？",
          "如何定义核心业务 SLI？",
          "排障链路你会如何标准化？"
        ]
      },
      {
        id: "be-m-5",
        prompt: "你如何做接口的向后兼容与版本管理？",
        keywords: ["版本", "兼容", "灰度", "契约", "弃用"],
        followUps: [
          "哪些改动会破坏兼容性？",
          "你如何推动客户端升级？",
          "废弃接口如何治理？"
        ]
      }
    ],
    senior: [
      {
        id: "be-s-1",
        prompt: "请描述你设计大型分布式系统的核心方法论。",
        keywords: ["一致性", "可用性", "扩展性", "容错", "治理"],
        followUps: [
          "CAP 在你实际项目里如何权衡？",
          "系统边界如何定义？",
          "怎样避免系统复杂度失控？"
        ]
      },
      {
        id: "be-s-2",
        prompt: "如何主导一次核心链路的稳定性治理项目？",
        keywords: ["基线", "演练", "降级", "预案", "复盘"],
        followUps: [
          "你会先做哪三个治理动作？",
          "如何推动跨团队共识？",
          "如何量化稳定性提升？"
        ]
      },
      {
        id: "be-s-3",
        prompt: "你如何做技术债管理与偿还优先级排序？",
        keywords: ["风险", "收益", "成本", "排期", "可见性"],
        followUps: [
          "业务不买账时怎么办？",
          "你如何说明不还债的代价？",
          "技术债如何持续治理而非一次性行动？"
        ]
      },
      {
        id: "be-s-4",
        prompt: "你如何建设后端团队工程生产力平台？",
        keywords: ["模板化", "自动化", "自助化", "标准", "度量"],
        followUps: [
          "平台建设如何避免变成负担？",
          "哪些能力优先级最高？",
          "如何衡量平台 ROI？"
        ]
      },
      {
        id: "be-s-5",
        prompt: "当系统出现重大事故时，你如何组织技术与沟通？",
        keywords: ["指挥", "分工", "止损", "透明沟通", "复盘"],
        followUps: [
          "你如何平衡快速恢复和根因定位？",
          "对外沟通你会怎么做？",
          "事故后治理怎么防止形式化？"
        ]
      }
    ]
  },
  product: {
    junior: [
      {
        id: "pm-j-1",
        prompt: "你如何理解一个产品需求从提出到上线的流程？",
        keywords: ["调研", "需求分析", "PRD", "评审", "验收"],
        followUps: [
          "你会如何定义验收标准？",
          "需求变更时你怎么处理？",
          "你如何和研发协作排期？"
        ]
      },
      {
        id: "pm-j-2",
        prompt: "如何判断一个需求值不值得做？",
        keywords: ["用户价值", "业务价值", "成本", "优先级", "数据"],
        followUps: [
          "你会用哪些框架做优先级？",
          "缺少数据时怎么决策？",
          "怎么避免拍脑袋需求？"
        ]
      },
      {
        id: "pm-j-3",
        prompt: "你如何做竞品分析？",
        keywords: ["目标", "维度", "差异", "机会点", "结论"],
        followUps: [
          "竞品分析如何避免流于表面？",
          "你如何把结论落成需求？",
          "竞品强于我们时你会怎么应对？"
        ]
      },
      {
        id: "pm-j-4",
        prompt: "描述一次你处理跨部门协作冲突的经历。",
        keywords: ["目标对齐", "沟通", "取舍", "推动", "复盘"],
        followUps: [
          "你如何定义冲突的根因？",
          "怎么推动达成一致？",
          "事后你做了哪些机制优化？"
        ]
      },
      {
        id: "pm-j-5",
        prompt: "你如何设计一个新手引导流程？",
        keywords: ["路径", "转化", "反馈", "A/B 测试", "迭代"],
        followUps: [
          "关键转化漏斗怎么定义？",
          "你会埋哪些点？",
          "如何判断引导是否有效？"
        ]
      }
    ],
    middle: [
      {
        id: "pm-m-1",
        prompt: "如何从业务目标拆解到可执行的产品路线图？",
        keywords: ["目标", "里程碑", "优先级", "资源", "风险"],
        followUps: [
          "路线图和版本计划有什么区别？",
          "如何处理高层临时插单？",
          "你如何对齐多方预期？"
        ]
      },
      {
        id: "pm-m-2",
        prompt: "你如何搭建产品指标体系并驱动增长？",
        keywords: ["北极星", "漏斗", "留存", "转化", "实验"],
        followUps: [
          "指标冲突时如何取舍？",
          "实验失败后你怎么复盘？",
          "如何避免只看短期指标？"
        ]
      },
      {
        id: "pm-m-3",
        prompt: "请讲一个你主导的复杂项目，重点说决策过程。",
        keywords: ["背景", "方案", "权衡", "落地", "结果"],
        followUps: [
          "你如何处理不确定性？",
          "关键决策依据是什么？",
          "如果重来你会改什么？"
        ]
      },
      {
        id: "pm-m-4",
        prompt: "当用户反馈与业务目标冲突时你如何决策？",
        keywords: ["分层", "影响面", "长期价值", "实验", "平衡"],
        followUps: [
          "如何处理高价值客户的个性化诉求？",
          "你如何避免被噪音反馈带偏？",
          "决策后如何验证正确性？"
        ]
      },
      {
        id: "pm-m-5",
        prompt: "你如何建设需求评审机制，提高交付质量？",
        keywords: ["标准化", "评审清单", "风险前置", "验收", "复盘"],
        followUps: [
          "评审机制如何避免走形式？",
          "你会定义哪些强制项？",
          "如何持续优化评审效率？"
        ]
      }
    ],
    senior: [
      {
        id: "pm-s-1",
        prompt: "你如何制定 1 年产品战略并确保组织执行？",
        keywords: ["战略", "目标", "组织协同", "资源", "复盘"],
        followUps: [
          "战略如何层层拆解到团队目标？",
          "你如何应对外部环境变化？",
          "如何避免战略口号化？"
        ]
      },
      {
        id: "pm-s-2",
        prompt: "当增长见顶时，你会如何寻找第二增长曲线？",
        keywords: ["用户洞察", "新场景", "试点", "商业模式", "验证"],
        followUps: [
          "你如何降低试错成本？",
          "什么信号代表方向可行？",
          "失败方向如何及时止损？"
        ]
      },
      {
        id: "pm-s-3",
        prompt: "如何在多产品线之间做资源分配？",
        keywords: ["ROI", "战略价值", "阶段", "协同", "机会成本"],
        followUps: [
          "你如何处理内部竞争？",
          "短期收入与长期布局冲突怎么办？",
          "如何提升资源决策透明度？"
        ]
      },
      {
        id: "pm-s-4",
        prompt: "你如何建设高绩效产品团队？",
        keywords: ["人才梯队", "机制", "授权", "反馈", "文化"],
        followUps: [
          "如何平衡流程和创新？",
          "你如何培养中层 PM？",
          "团队低谷期你怎么带？"
        ]
      },
      {
        id: "pm-s-5",
        prompt: "如果你接手一个增长停滞产品，前 90 天计划是什么？",
        keywords: ["诊断", "优先级", "快赢", "中期布局", "里程碑"],
        followUps: [
          "你会先看哪些核心数据？",
          "如何判断是产品问题还是渠道问题？",
          "90 天后如何延续节奏？"
        ]
      }
    ]
  }
};

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

const DAILY_QUESTION_COUNT = 2;
const DEFAULT_SET_SECONDS = 180;

const SECOND_ANSWER_MODES = [
  {
    value: "focus_topic",
    label: "只练扣题",
    targetDimension: "topic",
    tip: "二答只做一件事：每段都回扣题干关键词，避免空泛延展。"
  },
  {
    value: "focus_keypoints",
    label: "只补要点",
    targetDimension: "keypoints",
    tip: "二答优先补齐缺失要点，建议按“要点1/要点2/要点3”展开。"
  },
  {
    value: "focus_structure",
    label: "只练结构",
    targetDimension: "structure",
    tip: "二答固定四段：表态-分析-对策-落地，段间用过渡句连接。"
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
  topic: "先明确题干任务句，再逐段回扣关键词。",
  keypoints: "围绕本题核心要点逐点补齐，避免只讲观点不讲动作。",
  structure: "采用固定结构作答，先结论后展开。",
  logic: "多用因果和并列连接词，减少跳跃式表达。",
  expression: "短句化表达并给出具体动作词，减少口头禅。",
  rhythm: "按时长均匀分配内容，避免前松后紧或过早结束。"
};

const QUESTION_TYPE_PATTERNS = [
  { type: "原理阐释", regex: /(解释|区别|定义|理解|是什么|对比|原理)/ },
  { type: "方案设计", regex: /(如何|设计|建设|搭建|制定|规划|体系|优化)/ },
  { type: "案例复盘", regex: /(案例|经历|主导|复盘|做过|项目|90 天)/ },
  { type: "应急排障", regex: /(故障|问题|应急|事故|高压|排查|冲突|止损)/ }
];

const QUESTION_TYPE_KEYPOINTS = {
  原理阐释: ["先给定义", "说明边界", "对比差异", "给出应用场景"],
  方案设计: ["目标与约束", "步骤与分工", "风险与预案", "验收指标"],
  案例复盘: ["背景", "关键动作", "结果数据", "复盘改进"],
  应急排障: ["先止损", "再定位", "再恢复", "最后复盘"],
  通用: ["结论先行", "核心要点", "可执行动作", "闭环复盘"]
};

const LOCAL_MATERIAL_LIBRARY = {
  原理阐释: [
    "可借盐城政务服务中心提效案例，说明“原理-动作-结果”的对应关系。",
    "可补充江苏基层窗口场景，用来解释概念在实务中的落点。"
  ],
  方案设计: [
    "可结合盐城基层治理场景，展示“目标-路径-验收”闭环。",
    "可加入营商环境优化案例，强化方案的执行性与可衡量性。"
  ],
  案例复盘: [
    "可引用江苏本地民生服务改进案例，补充量化结果。",
    "可用“问题-动作-成效”三句式描述本地化实践。"
  ],
  应急排障: [
    "可用窗口突发舆情或系统故障处置场景，强调先稳态再溯源。",
    "可补充盐城基层应急协同案例，体现分工与复盘机制。"
  ],
  通用: [
    "可优先选江苏本地窗口服务、基层治理、营商环境素材增强真实感。"
  ]
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
  return (
    SECOND_ANSWER_MODES.find((x) => x.value === value) ||
    SECOND_ANSWER_MODES[0]
  );
}

function getQuestions(role, level, count) {
  const roleBank = QUESTION_BANK[role] || QUESTION_BANK.frontend;
  const levelBank = roleBank[level] || roleBank.junior;
  const targetCount = Math.max(
    1,
    Math.min(count || DAILY_QUESTION_COUNT, levelBank.length)
  );
  return shuffle(levelBank)
    .slice(0, targetCount)
    .map((q) => enrichQuestion(q));
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
  const hits = wordList.filter((k) =>
    normalized.includes(String(k).toLowerCase())
  );
  const misses = wordList.filter((k) => !hits.includes(k));
  return {
    hits,
    misses,
    rate: hits.length / keywords.length
  };
}

function getTaskBreakdown(question) {
  const prompt = String((question || {}).prompt || "");
  const object = prompt.includes("你")
    ? "作答对象：你本人/你所在团队"
    : "作答对象：围绕题干中的核心主体";

  let task = "任务：先给结论，再给分析和可执行动作。";
  if (/解释|对比|区别|理解|定义|是什么/.test(prompt)) {
    task = "任务：先解释核心概念，再补差异与应用场景。";
  } else if (/如何|设计|建设|制定|规划|搭建|优化/.test(prompt)) {
    task = "任务：给出可执行方案，覆盖步骤、风险与验收。";
  } else if (/案例|经历|主导|复盘|做过/.test(prompt)) {
    task = "任务：按背景-动作-结果-复盘讲清一个真实案例。";
  }

  const boundary = "边界：必须围绕题干关键词，不展开无关背景。";
  const tension = "矛盾：在有限时间里兼顾完整性和重点突出。";
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
  const questionType = question.questionType || "通用";
  const expectedPoints = question.expectedKeypoints || QUESTION_TYPE_KEYPOINTS.通用;

  (missKeywords || []).slice(0, 3).forEach((item) => {
    templates.push({
      point: item,
      template: `可补一句：围绕“${item}”给出1个明确动作和1个可验证结果。`
    });
  });

  expectedPoints.forEach((item) => {
    if (templates.length >= 3) {
      return;
    }
    if (!String(answerText || "").includes(item)) {
      templates.push({
        point: item,
        template: `可补一句：本题请补充“${item}”，并给出可落地细节。`
      });
    }
  });

  if (templates.length === 0) {
    templates.push({
      point: "量化结果",
      template: "可补一句：给出1个数字化结果，提升说服力。"
    });
  }

  return templates;
}

function evaluateAnswer(question, answer, secondsUsed, totalSeconds, focusMode) {
  const enrichedQuestion = enrichQuestion(question);
  const text = String(answer || "").trim();
  const length = text.length;
  const sentences = splitSentences(text);

  const hit = keywordHitRate(text, enrichedQuestion.keywords || []);
  const evidence = getSentenceEvidence(sentences, enrichedQuestion.keywords || []);
  const structureMarkers = ["首先", "其次", "然后", "最后", "第一", "第二", "第三", "综上", "总之"];
  const logicMarkers = ["因为", "所以", "因此", "同时", "另外", "如果", "那么", "但是"];
  const fillerWords = ["这个", "那个", "然后呢", "就是", "嗯", "啊"];

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
      suggestions: ["当前回答为空，建议先用“结论一句话+三个要点”完成最小作答。"],
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
      localMaterialTips:
        LOCAL_MATERIAL_LIBRARY[enrichedQuestion.questionType] ||
        LOCAL_MATERIAL_LIBRARY.通用
    };
  }

  const structureCount = countContains(text, structureMarkers);
  const logicCount = countContains(text, logicMarkers);
  const fillerCount = countContains(text, fillerWords);
  const timeRatio = totalSeconds > 0 ? secondsUsed / totalSeconds : 0;

  const topicScore = clampScore(
    32 + hit.rate * 56 + (length >= 50 ? 8 : -6) - evidence.offTopicSentences.length * 8
  );
  const keypointScore = clampScore(24 + hit.rate * 72);
  const structureScore = clampScore(
    20 +
      structureCount * 13 +
      (sentences.length >= 3 ? 16 : 0) +
      (text.includes("首先") && (text.includes("最后") || text.includes("综上")) ? 8 : 0)
  );
  const logicScore = clampScore(
    24 + logicCount * 11 + (sentences.length >= 3 ? 14 : 0) - fillerCount * 4
  );
  const expressionScore = clampScore(
    30 + Math.min(34, length / 4) - fillerCount * 5
  );
  const rhythmScore = clampScore(
    25 +
      (timeRatio >= 0.45 && timeRatio <= 0.9 ? 40 : timeRatio >= 0.25 ? 25 : 8) +
      (length >= 60 && length <= 500 ? 20 : length < 30 ? -10 : 10)
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
    suggestions.push("本题要点覆盖偏低，建议按“应有要点X条/已覆盖Y条”逐点补齐。");
  }
  if (length < 60) {
    suggestions.push("内容偏短，建议二答至少补充到 3 段并加入 1 个具体案例。");
  }

  const modeInfo = getSecondModeByValue(focusMode);
  if (focusMode && dimensions[modeInfo.targetDimension] < 70) {
    suggestions.unshift(`本轮“${modeInfo.label}”目标未达标，建议继续针对该维度重练一次。`);
  }

  const finalSuggestions = dedupe(suggestions).slice(0, 3);
  const missingPointTemplates = buildMissingPointTemplates(
    enrichedQuestion,
    text,
    hit.misses
  );

  return {
    score,
    length,
    keywordHits: hit.hits,
    keywordRate: hit.rate,
    focusMode: focusMode || null,
    dimensions,
    dimensionList,
    suggestions: finalSuggestions,
    taskBreakdown: getTaskBreakdown(enrichedQuestion),
    missingPointTemplates,
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
    localMaterialTips:
      LOCAL_MATERIAL_LIBRARY[enrichedQuestion.questionType] ||
      LOCAL_MATERIAL_LIBRARY.通用
  };
}

function generateFollowUp(question, answerEval) {
  const enrichedQuestion = enrichQuestion(question);
  const followUps = enrichedQuestion.followUps || [];
  if (followUps.length === 0) {
    return "请结合一个真实项目，再展开说明你的思路与结果。";
  }

  if ((answerEval.length || 0) < 40) {
    return followUps[0];
  }

  if ((answerEval.keywordRate || 0) < 0.5) {
    return followUps[Math.min(1, followUps.length - 1)];
  }

  if (answerEval.dimensions && answerEval.dimensions.structure < 65) {
    return "请你按“结论-分析-行动-复盘”四段重述一次，突出逻辑顺序。";
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

  const totalProgress = records.reduce(
    (acc, item) => acc + Number(item.progressValue || 0),
    0
  );
  const progressScore =
    records.length > 0 ? Math.round(totalProgress / records.length) : 0;

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
    value:
      dimensionSamples > 0
        ? Math.round(dimensionTotals[item.key] / dimensionSamples)
        : 0
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
    (selected && selected.suggestions ? selected.suggestions : []).forEach((s) =>
      allSuggestions.push(s)
    );
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
