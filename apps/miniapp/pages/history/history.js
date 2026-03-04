const HISTORY_KEY = "INTERVIEW_HISTORY";

function toDisplayTime(isoString) {
  if (!isoString) {
    return "";
  }
  const d = new Date(isoString);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${day} ${h}:${min}`;
}

Page({
  data: {
    history: []
  },

  onShow() {
    const history = wx.getStorageSync(HISTORY_KEY) || [];
    const mapped = history.map((item) => ({
      ...item,
      createdAtText: toDisplayTime(item.createdAt)
    }));
    this.setData({ history: mapped });
  },

  openResult(event) {
    const id = Number(event.currentTarget.dataset.id);
    const app = getApp();
    const selected = this.data.history.find((x) => x.id === id) || null;
    app.globalData.latestResult = selected;

    wx.navigateTo({
      url: `/pages/result/result?id=${id}`
    });
  },

  clearHistory() {
    wx.showModal({
      title: "确认清空",
      content: "将删除全部历史记录，是否继续？",
      success: (res) => {
        if (!res.confirm) {
          return;
        }
        wx.removeStorageSync(HISTORY_KEY);
        this.setData({ history: [] });
      }
    });
  }
});
