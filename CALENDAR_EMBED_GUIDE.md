# Google Calendar 嵌入指南

## 🎯 目标
在网站上直接嵌入 Google Calendar 预约系统，而不是跳转到新页面。

## 📋 获取正确嵌入链接的步骤

### 方案 1：嵌入 Appointment Schedule（预约系统）

如果你创建了 Google Calendar 的 **Appointment Schedule**：

1. 打开 [Google Calendar](https://calendar.google.com) (网页端)
2. 点击左上角的 ☰ (菜单)
3. 找到并点击你的 **Appointment Schedule**
4. 点击右上角的 **⋮** (更多选项)
5. 选择 **"嵌入代码"** 或 **"Embed code"**
6. 复制完整的 `<iframe>` 代码
7. 提取 `src="..."` 中的 URL

**正确的格式应该类似：**
```
https://calendar.google.com/calendar/appointments/schedules/AcZssZ...
```

### 方案 2：嵌入普通日历

如果你想嵌入整个日历视图：

1. 打开 [Google Calendar](https://calendar.google.com) (网页端)
2. 在左侧列表中找到你要分享的日历
3. 点击日历名称旁边的 **⋮** (三个点)
4. 选择 **"Settings and sharing"** (设置和共享)
5. 向下滚动到 **"Integrate calendar"** (整合日历) 部分
6. 复制 **"Embed code"** (嵌入代码) 中的 iframe src 链接

**正确的格式应该类似：**
```
https://calendar.google.com/calendar/embed?src=YOUR_EMAIL%40gmail.com&ctz=America%2FNew_York
```

## ⚠️ 重要提示

### 隐私设置
- 日历必须设置为 **"公开"** 或 **"公开可见"**
- 在 Settings → "Access permissions" → 勾选 **"Make available to public"**

### 当前问题
- `calendar.app.google/xxxxx` 这种**短链接格式不支持 iframe 嵌入**
- 需要使用上面提到的完整 URL 格式

## 🔧 如何更新网站代码

找到正确的嵌入链接后，替换 `src/pages/appointments.astro` 中的 URL：

```typescript
// 当前：
const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.app.google/nZ7uaDZsnU472oTQA";

// 改为（使用你获取的链接）：
const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID";
```

## 🎨 自定义选项

如果你使用普通日历嵌入，可以添加参数自定义外观：

```
https://calendar.google.com/calendar/embed?
  src=YOUR_EMAIL@gmail.com
  &ctz=America/New_York           // 时区
  &mode=WEEK                       // 显示模式：WEEK, MONTH, AGENDA
  &showTitle=0                     // 隐藏标题
  &showNav=1                       // 显示导航
  &showDate=1                      // 显示日期
  &showPrint=0                     // 隐藏打印按钮
  &showTabs=0                      // 隐藏标签
  &showCalendars=0                 // 隐藏日历列表
  &showTz=0                        // 隐藏时区
```

## 🚀 测试

1. 获取正确的嵌入 URL
2. 更新 `src/pages/appointments.astro`
3. 提交并推送代码
4. 等待 GitHub Actions 部署完成
5. 访问 https://jinchengrao.com/appointments

如果嵌入成功，你会看到日历直接显示在页面上！
如果嵌入失败（5秒后），会自动显示"在新标签页打开"的按钮。

