const {
  ROLE_OPTIONS,
  LEVEL_OPTIONS,
  DAILY_QUESTION_COUNT
} = require("../../utils/interview");

const ROLE_DESC = {
  jiangsu_civil_service: "重综合分析与基层治理执行力",
  public_institution: "重公共服务与规范化办事能力",
  selected_graduate: "重基层实践与组织协调能力"
};

const LEVEL_DESC = {
  foundation: "搭建答题骨架，稳住扣题和要点",
  advanced: "强化应变、协同与政策理解深度",
  sprint: "按模考节奏训练时限与临场表达"
};

Page({
  data: {
    roleOptions: ROLE_OPTIONS,
    levelOptions: LEVEL_OPTIONS,
    roleIndex: 0,
    levelIndex: 0,
    questionCount: DAILY_QUESTION_COUNT,
    roleDescMap: ROLE_DESC,
    levelDescMap: LEVEL_DESC
  },

  onRoleSelect(event) {
    const idx = Number(event.currentTarget.dataset.index);
    if (Number.isNaN(idx)) {
      return;
    }
    this.setData({ roleIndex: idx });
  },

  onLevelSelect(event) {
    const idx = Number(event.currentTarget.dataset.index);
    if (Number.isNaN(idx)) {
      return;
    }
    this.setData({ levelIndex: idx });
  },

  startInterview() {
    const role = this.data.roleOptions[this.data.roleIndex].value;
    const level = this.data.levelOptions[this.data.levelIndex].value;
    const count = DAILY_QUESTION_COUNT;

    wx.navigateTo({
      url: `/pages/interview/interview?role=${role}&level=${level}&count=${count}`
    });
  },

  toHistory() {
    wx.navigateTo({
      url: "/pages/history/history"
    });
  }
});
