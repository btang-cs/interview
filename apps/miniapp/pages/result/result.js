const HISTORY_KEY = "INTERVIEW_HISTORY";

function normalizeResult(raw) {
  if (!raw) {
    return null;
  }

  const result = {
    ...raw
  };

  const radar = result.dimensionRadar || [];
  result.dimensionRadarView = radar.map((item) => ({
    ...item,
    barWidth: `${Math.max(6, Number(item.value || 0))}%`
  }));

  result.reportTop3 =
    result.reportTop3 && result.reportTop3.length > 0
      ? result.reportTop3
      : result.topSuggestions || [];

  result.recordsView = (result.records || []).map((record) => {
    const firstAttempt = record.firstAttempt || null;
    const secondAttempt = record.secondAttempt || null;
    const evalData =
      (secondAttempt && secondAttempt.evaluation) ||
      (firstAttempt && firstAttempt.evaluation) ||
      null;
    const evidence = (evalData && evalData.evidence) || {};

    return {
      ...record,
      questionType: record.questionType || (evalData ? evalData.questionType : "通用"),
      firstScore: firstAttempt ? firstAttempt.score : 0,
      secondScore: secondAttempt ? secondAttempt.score : 0,
      firstAnswer: firstAttempt ? firstAttempt.answer : "",
      secondAnswer: secondAttempt ? secondAttempt.answer : "",
      secondModeLabel: secondAttempt ? secondAttempt.modeLabel : "",
      progressValue: Number(record.progressValue || 0),
      taskBreakdown: (evalData && evalData.taskBreakdown) || [],
      suggestions: (evalData && evalData.suggestions) || [],
      missingPointTemplates: (evalData && evalData.missingPointTemplates) || [],
      hitSentences: evidence.hitSentences || [],
      offTopicSentences: evidence.offTopicSentences || [],
      localMaterialTips:
        (record.localMaterialTips && record.localMaterialTips.length > 0
          ? record.localMaterialTips
          : (evalData && evalData.localMaterialTips) || [])
    };
  });

  return result;
}

Page({
  data: {
    result: null,
    reportTab: 0
  },

  onLoad(options) {
    this.resultId = Number(options.id) || null;
  },

  onShow() {
    const app = getApp();
    let result = app.globalData.latestResult || null;

    if (!result || (this.resultId && result.id !== this.resultId)) {
      const history = wx.getStorageSync(HISTORY_KEY) || [];
      if (this.resultId) {
        result = history.find((x) => x.id === this.resultId) || null;
      } else {
        result = history[0] || null;
      }
    }

    this.setData({
      result: normalizeResult(result),
      reportTab: 0
    });
  },

  switchTab(event) {
    const index = Number(event.currentTarget.dataset.index) || 0;
    this.setData({ reportTab: index });
  },

  restart() {
    wx.reLaunch({
      url: "/pages/index/index"
    });
  },

  toHistory() {
    wx.navigateTo({
      url: "/pages/history/history"
    });
  }
});
