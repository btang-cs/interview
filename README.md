# 模拟面试微信小程序 MVP

这是一个可以直接在微信开发者工具中运行的微信小程序骨架，包含以下 MVP 能力：

- 岗位与难度选择
- 日常训练固定 2 题
- 每题强制“一答 + 二答（3种专项模式）”
- 倒计时作答（超时自动提交）
- 可解释评分：任务拆解、缺失要点模板、疑似跑题句
- 报告两屏：最该改 3 点 + 6维雷达 + 逐题详解
- 结果页与历史记录（本地缓存）

## 目录结构

```text
.
├─ project.config.json
├─ project.private.config.json
├─ docs/
│  └─ mvp-scope.md
├─ services/
│  └─ api/
│     └─ README.md
└─ apps/
   └─ miniapp/
      ├─ app.js
      ├─ app.json
      ├─ app.wxss
      ├─ sitemap.json
      ├─ utils/
      │  └─ interview.js
      └─ pages/
         ├─ index/
         ├─ interview/
         ├─ result/
         └─ history/
```

## 运行方式（微信开发者工具）

1. 打开微信开发者工具。
2. 选择“导入项目”。
3. 项目目录选择：
   - `/Users/tangbin/SynologyDrive/MacBook-M1-Max/Codex-Project/interview`
4. AppID 可使用 `touristappid`（体验版调试）。
5. 导入后直接点击“编译”。
6. 进入首页后，选择岗位/难度并开始模拟面试。

## 可选：开启真 AI 评分

当前是本地规则评分，便于离线快速迭代。后续可在 `services/api` 接入你的 LLM API，并在小程序中改为请求后端。

## 下一步建议

1. 把题库拆成 JSON 文件并扩充到每岗位 100+ 题。
2. 接入语音识别（录音转文字）。
3. 接入真实大模型评分与追问。
4. 增加“岗位专项”与“错题重练”模块。
