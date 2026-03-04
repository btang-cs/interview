const {
  getQuestions,
  evaluateAnswer,
  generateFollowUp,
  buildSummary,
  getRoleLabel,
  getLevelLabel,
  SECOND_ANSWER_MODES,
  getSecondModeByValue,
  DEFAULT_SET_SECONDS,
  DAILY_QUESTION_COUNT
} = require("../../utils/interview");

const HISTORY_KEY = "INTERVIEW_HISTORY";

function buildFirstFeedback(evaluation, followUp) {
  return {
    score: evaluation.score,
    questionType: evaluation.questionType,
    coverageText: `应有 ${evaluation.coverage.shouldHave} 点 / 覆盖 ${evaluation.coverage.covered} 点`,
    taskBreakdown: evaluation.taskBreakdown || [],
    missingPointTemplates: evaluation.missingPointTemplates || [],
    offTopicSentences: (evaluation.evidence && evaluation.evidence.offTopicSentences) || [],
    suggestions: evaluation.suggestions || [],
    followUp
  };
}

Page({
  data: {
    role: "frontend",
    level: "junior",
    roleLabel: "前端工程师",
    levelLabel: "初级",
    questionCount: DAILY_QUESTION_COUNT,
    questions: [],
    currentIndex: 0,
    currentQuestion: {},
    phase: "first",
    phaseLabel: "一答",
    answer: "",
    remainingSeconds: DEFAULT_SET_SECONDS,
    isSubmitting: false,
    secondModeOptions: SECOND_ANSWER_MODES,
    selectedSecondMode: SECOND_ANSWER_MODES[0].value,
    selectedSecondModeLabel: SECOND_ANSWER_MODES[0].label,
    secondModeTip: SECOND_ANSWER_MODES[0].tip,
    firstFeedback: null
  },

  onLoad(options) {
    const role = options.role || "frontend";
    const level = options.level || "junior";
    const count = Math.max(1, Math.min(5, Number(options.count) || DAILY_QUESTION_COUNT));

    const questions = getQuestions(role, level, count);
    const mode = getSecondModeByValue(this.data.selectedSecondMode);

    this.records = [];
    this.currentQuestionWork = null;
    this.submitting = false;
    this.questionStartAt = Date.now();

    this.setData({
      role,
      level,
      roleLabel: getRoleLabel(role),
      levelLabel: getLevelLabel(level),
      questionCount: questions.length,
      questions,
      currentIndex: 0,
      currentQuestion: questions[0] || {},
      phase: "first",
      phaseLabel: "一答",
      answer: "",
      remainingSeconds: DEFAULT_SET_SECONDS,
      selectedSecondMode: mode.value,
      selectedSecondModeLabel: mode.label,
      secondModeTip: mode.tip,
      firstFeedback: null,
      isSubmitting: false
    });

    this.startTimer();
  },

  onUnload() {
    this.stopTimer();
  },

  onHide() {
    this.stopTimer();
  },

  onShow() {
    if (this.data.questions.length > 0 && this.data.remainingSeconds > 0 && !this.timer) {
      this.startTimer();
    }
  },

  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => {
      const next = this.data.remainingSeconds - 1;
      if (next <= 0) {
        this.setData({ remainingSeconds: 0 });
        this.submitCurrent(true, "");
        return;
      }
      this.setData({ remainingSeconds: next });
    }, 1000);
  },

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  onAnswerInput(event) {
    this.setData({
      answer: event.detail.value || ""
    });
  },

  onSelectSecondMode(event) {
    const value = event.currentTarget.dataset.value;
    const mode = getSecondModeByValue(value);
    this.setData({
      selectedSecondMode: mode.value,
      selectedSecondModeLabel: mode.label,
      secondModeTip: mode.tip
    });
  },

  submitCurrent(isTimeout, forcedAnswer) {
    if (this.submitting) {
      return;
    }

    if (this.data.phase === "first") {
      this.submitFirstAttempt(isTimeout, forcedAnswer);
      return;
    }

    this.submitSecondAttempt(isTimeout, forcedAnswer);
  },

  submitFirstAttempt(isTimeout, forcedAnswer) {
    this.stopTimer();
    this.submitting = true;
    this.setData({ isSubmitting: true });

    const index = this.data.currentIndex;
    const question = this.data.questions[index];
    if (!question) {
      this.submitting = false;
      this.setData({ isSubmitting: false });
      return;
    }

    const rawAnswer = typeof forcedAnswer === "string" ? forcedAnswer : this.data.answer || "";
    const answer = String(rawAnswer).trim();
    const secondsUsed = Math.max(1, Math.floor((Date.now() - this.questionStartAt) / 1000));

    const evaluation = evaluateAnswer(question, answer, secondsUsed, DEFAULT_SET_SECONDS, null);
    const followUp = generateFollowUp(question, evaluation);

    this.currentQuestionWork = {
      question,
      firstAttempt: {
        answer,
        score: evaluation.score,
        secondsUsed,
        isTimeout: Boolean(isTimeout),
        evaluation
      },
      followUp
    };

    const mode = getSecondModeByValue(this.data.selectedSecondMode);

    this.questionStartAt = Date.now();
    this.submitting = false;

    this.setData({
      phase: "second",
      phaseLabel: "二答",
      answer: "",
      remainingSeconds: DEFAULT_SET_SECONDS,
      selectedSecondMode: mode.value,
      selectedSecondModeLabel: mode.label,
      secondModeTip: mode.tip,
      firstFeedback: buildFirstFeedback(evaluation, followUp),
      isSubmitting: false
    });

    this.startTimer();
  },

  submitSecondAttempt(isTimeout, forcedAnswer) {
    this.stopTimer();
    this.submitting = true;
    this.setData({ isSubmitting: true });

    const index = this.data.currentIndex;
    const question = this.data.questions[index];
    const mode = getSecondModeByValue(this.data.selectedSecondMode);

    if (!question || !this.currentQuestionWork || !this.currentQuestionWork.firstAttempt) {
      this.submitting = false;
      this.setData({ isSubmitting: false });
      return;
    }

    const rawAnswer = typeof forcedAnswer === "string" ? forcedAnswer : this.data.answer || "";
    const answer = String(rawAnswer).trim();
    const secondsUsed = Math.max(1, Math.floor((Date.now() - this.questionStartAt) / 1000));

    const evaluation = evaluateAnswer(
      question,
      answer,
      secondsUsed,
      DEFAULT_SET_SECONDS,
      mode.value
    );

    const firstAttempt = this.currentQuestionWork.firstAttempt;
    const progressValue = evaluation.score - firstAttempt.score;

    this.records.push({
      questionId: question.id,
      prompt: question.prompt,
      questionType: question.questionType,
      followUp: this.currentQuestionWork.followUp,
      progressValue,
      firstAttempt,
      secondAttempt: {
        mode: mode.value,
        modeLabel: mode.label,
        answer,
        score: evaluation.score,
        secondsUsed,
        isTimeout: Boolean(isTimeout),
        evaluation
      },
      localMaterialTips: evaluation.localMaterialTips || []
    });

    const isLast = index >= this.data.questions.length - 1;
    if (isLast) {
      this.finishInterview();
      return;
    }

    const nextIndex = index + 1;
    const nextQuestion = this.data.questions[nextIndex];
    const defaultMode = getSecondModeByValue(SECOND_ANSWER_MODES[0].value);

    this.currentQuestionWork = null;
    this.questionStartAt = Date.now();
    this.submitting = false;

    this.setData({
      currentIndex: nextIndex,
      currentQuestion: nextQuestion,
      phase: "first",
      phaseLabel: "一答",
      answer: "",
      remainingSeconds: DEFAULT_SET_SECONDS,
      selectedSecondMode: defaultMode.value,
      selectedSecondModeLabel: defaultMode.label,
      secondModeTip: defaultMode.tip,
      firstFeedback: null,
      isSubmitting: false
    });

    this.startTimer();
  },

  finishInterview() {
    this.stopTimer();

    const summary = buildSummary({
      role: this.data.role,
      level: this.data.level,
      records: this.records
    });

    const history = wx.getStorageSync(HISTORY_KEY) || [];
    const nextHistory = [summary].concat(history).slice(0, 30);

    wx.setStorageSync(HISTORY_KEY, nextHistory);

    const app = getApp();
    app.globalData.latestResult = summary;

    this.submitting = false;
    this.currentQuestionWork = null;
    this.setData({ isSubmitting: false });

    wx.redirectTo({
      url: `/pages/result/result?id=${summary.id}`
    });
  }
});
