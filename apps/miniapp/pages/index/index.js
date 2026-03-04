const {
  ROLE_OPTIONS,
  LEVEL_OPTIONS,
  DAILY_QUESTION_COUNT
} = require("../../utils/interview");

Page({
  data: {
    roleOptions: ROLE_OPTIONS,
    levelOptions: LEVEL_OPTIONS,
    roleLabels: ROLE_OPTIONS.map((x) => x.label),
    levelLabels: LEVEL_OPTIONS.map((x) => x.label),
    roleIndex: 0,
    levelIndex: 0,
    questionCount: DAILY_QUESTION_COUNT
  },

  onRoleChange(event) {
    this.setData({ roleIndex: Number(event.detail.value) || 0 });
  },

  onLevelChange(event) {
    this.setData({ levelIndex: Number(event.detail.value) || 0 });
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
