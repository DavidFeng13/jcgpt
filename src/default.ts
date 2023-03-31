export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "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",
  openaiAPITemperature: 60,
  systemRule: ""
}

export const defaultMessage = `
- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。
- 回复 **ApiKey** 获取最新的ApiKey。
- <kbd>Shift</kbd> + <kbd>Enter</kbd> 换行。开头输入 <kbd>/</kbd> 或者 <kbd>空格</kbd> 搜索 Prompt 预设。点击输入框滚动到底部。`
