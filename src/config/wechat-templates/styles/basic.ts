import type { WechatTemplate } from '../types'

export const basicTemplates: WechatTemplate[] = [
  {
    id: "wechat-basic-simple",
    name: "极简主义",
    description: "极简主义风格，黑白配色，专注于内容阅读",
    category: "basic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#000000","description":"主色调"}],
    defaultStyleSettings: {"themeColor":"#000000","fontSize":16,"lineHeight":1.8,"textAlign":"justify"},
    css: `/* Simple Basic 模板 */
.wechat-article {
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #2c3e50;
  background-color: #fff;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 40px 0 20px;
  font-size: 24px;
  font-weight: 800;
  color: #000;
  text-align: left;
  line-height: 1.4;
  letter-spacing: -0.5px;
}

.wechat-article h2 {
  margin: 30px 0 15px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
  display: inline-block;
}

.wechat-article h3 {
  margin: 25px 0 12px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  padding-left: 10px;
  border-left: 3px solid #000;
}

/* 段落样式 */
.wechat-article p {
  margin: 16px 0;
  text-align: justify;
}

/* 链接样式 */
.wechat-article a {
  color: #000;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 20px 0;
  padding: 15px 20px;
  border-left: 4px solid #000;
  background-color: #f9f9f9;
  color: #555;
  font-style: italic;
}

/* 列表样式 */
.wechat-article ul, .wechat-article ol {
  margin: 20px 0;
  padding-left: 28px;
}

.wechat-article ul {
  list-style-type: disc;
}

.wechat-article ol {
  list-style-type: decimal;
}

.wechat-article li {
  margin: 8px 0;
  line-height: 1.8;
  text-align: justify;
}

/* 嵌套列表样式 */
.wechat-article ul ul,
.wechat-article ol ul,
.wechat-article ul ol,
.wechat-article ol ol {
  margin: 5px 0;
  padding-left: 20px;
}

.wechat-article ul li::marker {
  color: #000;
}

.wechat-article ol li::marker {
  color: #000;
  font-weight: bold;
}
.wechat-article li span {
  display: inline;
}
`
  },
  {
    id: "wechat-heading-ribbon",
    name: "彩带标题",
    description: "醒目的彩带式标题设计，h2 带倾斜色块背景、h3 带圆角标签，视觉层级分明，适合教程步骤与知识梳理",
    category: "basic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#667eea","description":"主色调（靛蓝紫）"},{"name":"accentColor","type":"color","defaultValue":"#764ba2","description":"强调色（深紫）"}],
    defaultStyleSettings: {"themeColor":"","fontSize":15,"lineHeight":1.85,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #ffffff;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #333333;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.85;
  margin: 14px 0;
  color: #444444;
  text-align: justify;
}

/* h1 — 大标题带底部渐变条 */
.wechat-article h1 {
  font-size: 26px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 28px;
  padding: 0 0 14px;
  text-align: center;
  border: none;
  position: relative;
}

.wechat-article h1::after {
  content: ' ';
  display: block;
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;     /* 圆角完美保留 */
  margin: 0 auto 28px;    /* 核心：左右 auto 实现完美居中，下边距 28px 还原你原本的设计 */
}

/* h2 — 倾斜色块彩带 */
.wechat-article h2 {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 36px 0 18px;
  padding: 12px 20px 12px 24px; /* 记住这里的 padding-bottom 是 12px，左侧是 24px */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px 4px 4px 0;
  display: block;
  line-height: 1.4;
  /* position: relative; 删掉这行 */
}

.wechat-article h2::after {
  content: ' ';
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 12px 0 0;
  border-color: #5a3d8a transparent transparent transparent;

  /* --- 核心魔法：文档流位移 --- */
  margin-top: 12px;     /* 1. 往下推：数值等于 h2 的 padding-bottom，让折角刚好离开紫色背景 */
  margin-left: -24px;   /* 2. 往左拉：数值等于 h2 的 padding-left 的负数，让折角紧贴最左侧边缘 */
  margin-bottom: -20px; /* 3. 往回拽：-(margin-top 12px + 自身高度 8px)，把被撑开的父元素底部拉回原位 */

  /* 防止微信出现幽灵空白 */
  line-height: 0;
  font-size: 0;
}

/* h3 — 圆角标签+底部虚线 */
.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #667eea;
  margin: 28px 0 14px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #eef0ff 0%, #f5f0ff 100%);
  border-radius: 20px;
  display: inline-block;
  border: 1px solid #ddd8f8;
}

/* h4 — 左侧小圆点 */
.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #555;
  margin: 22px 0 10px;
  padding-left: 16px;
  position: relative;
}

.wechat-article h4::before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #764ba2;
  border-radius: 50%;
}

.wechat-article strong { font-weight: 600; color: #1a1a1a; }
.wechat-article em { font-style: italic; color: #777; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: linear-gradient(135deg, #f0edff 0%, #eef0ff 100%);
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #555;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #f8f7ff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  line-height: 1.85;
  color: #444;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
}

.wechat-article ul li::before {
  content: '◆';         /* 直接输入 Unicode 菱形字符 */
  display: inline-flex;
  width: 20px;          /* 宽度与父元素的 padding-left 保持一致 */
  margin-left: -20px;   /* 负边距大法：把菱形精准拉回到左侧空白处 */
  font-size: 14px;      /* 调整菱形大小 */
  /* --- 微信支持的文字渐变魔法 --- */
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.wechat-article ol { counter-reset: ribbon-c; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
 counter-increment: ribbon-c;
  content: counter(ribbon-c);

  /* --- 微信兼容排版魔法 --- */
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: -30px;    /* 核心！向左拉 30px，刚好填入 li 留出的空白处 */
  vertical-align: top;   /* 让色块与第一行文字顶部对齐 */
  margin-top: 2px;       /* 稍微往下推一点，让它在视觉上和文字中心对齐（可根据具体字体微调） */
  margin-right: 8px;     /* 可选：确保即使排版出意外，色块右侧也有 8px 缓冲 */

  /* --- 替代 flex 的完美居中法 --- */
  text-align: center;    /* 左右居中 */
  line-height: 22px;     /* 上下居中：只要 line-height 等于 height，文字就绝对垂直居中！ */

  /* --- 视觉样式（保留你原本的设计） --- */
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-size: 11px;
  border-radius: 6px;
}

.wechat-article li section,
.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #667eea;
  text-decoration: none;
  border-bottom: 1px solid rgba(102, 126, 234, 0.3);
  font-weight: 500;
}

.wechat-article code {
  background: #f0edff;
  color: #5a4d8a;
  padding: 2px 7px;
  border-radius: 4px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #1e1b2e;
  color: #d8d0f0;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 10px;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

.wechat-article table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;
  font-size: 14px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e8e4f8;
}

.wechat-article th {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #f0edff;
  color: #444;
}

.wechat-article tr:nth-child(even) { background: #faf9ff; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.1);
}

.wechat-article hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ddd8f8, transparent);
  margin: 32px 0;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(102, 126, 234, 0.15) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; }
  .wechat-article h2 { font-size: 16px; padding: 10px 16px 10px 20px; }
}
`
  },
  {
    id: "wechat-heading-bracket",
    name: "方括号标题",
    description: "个性方括号标题装饰，h2 左右方括号环绕、h3 带编号序号，结构感强烈，适合课程大纲与清单类文章",
    category: "basic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#2d8cf0","description":"主色调（天蓝）"}],
    defaultStyleSettings: {"themeColor":"#2d8cf0","fontSize":15,"lineHeight":1.85,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #fafbfc;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #333333;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.85;
  margin: 14px 0;
  color: #444444;
  text-align: justify;
}

/* h1 — 居中大标题+上下双线 */
.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 28px;
  padding: 20px 0;
  text-align: center;
  letter-spacing: 2px;
  border-top: 2px solid #2d8cf0;
  border-bottom: 2px solid #2d8cf0;
  border-left: none;
  border-right: none;
  position: relative;
}

/* h2 — 方括号环绕 */
.wechat-article h2 {
  font-size: 18px;
  font-weight: 700;
  color: #2d8cf0;
  margin: 36px 0 16px;
  padding: 10px 0;
  text-align: center;
  border: none;
  position: relative;
}

.wechat-article h2::before {
  content: '【';
  color: #2d8cf0;
  font-weight: 400;
  margin-right: 4px;
  display: inline;
}

.wechat-article h2::after {
  content: '】';
  color: #2d8cf0;
  font-weight: 400;
  margin-left: 4px;
  display: inline;
}

/* h3 — 编号圆标+底色条 */
.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 28px 0 14px;
  padding: 8px 14px;
  background: #f0f7ff;
  border-radius: 6px;
  line-height: 1.5; /* 建议加上行高，让文字看起来更透气 */
}

/* 这里的 ::before 会被你的工具转换为真实标签 */
.wechat-article h3::before {
  content: counter(h3-counter, decimal-leading-zero);


  /* --- 尺寸和外观（清理了重复写的宽高） --- */
  width: 24px;
  height: 24px;
  background: #2d8cf0;
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  border-radius: 6px;

  /* --- 微信最稳的内部居中方式 --- */
  display: inline-block;
  text-align: center;
  line-height: 24px;

  /* --- 🚀 核心修改 3：替代原先 left 和 top 的外部对齐方式 --- */
  margin-right: 8px;      /* 替代原本的 left，把它和右边的文字推开 8px 的距离 */
  vertical-align: middle; /* 替代原本的 top: 50%，让数字块和右侧的文字整体垂直居中 */
  margin-top: -2px;       /* 微调魔法：因为不同字体基线不同，往上提 2px 通常能让视觉中心完美对齐 */
}

/* h4 — 虚线前缀 */
.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #555;
  margin: 22px 0 10px;
}

.wechat-article h4::before {
  content: '--- ';
  color: #2d8cf0;
  font-weight: 400;
  letter-spacing: -1px;
  display: inline;
}

.wechat-article strong { font-weight: 600; color: #1a1a1a; }
.wechat-article em { font-style: italic; color: #777; }

.wechat-article blockquote {
  border: none;
  padding: 16px 20px;
  margin: 24px 0;
  background: #f0f7ff;
  border-left: 4px solid #2d8cf0;
  border-radius: 0 8px 8px 0;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #4a6a8a;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #f8fafc;
  border: 1px solid #e8f0f8;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.85;
  color: #444;
}

/* 去掉微信自带的列表圆点，给排版打好基础 */
.wechat-article ul {
  list-style: none;
  padding-left: 0;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px; /* 保留原本的内边距，给图标留出 22px 的“停车位” */
  line-height: 1.6;
}

.wechat-article ul li::before {
  content: '▪';
  color: #2d8cf0;
  font-size: 10px;

  /* --- 微信安全排版 --- */
  display: inline-block;
  width: 18px;          /* 22px的空间，我们占18px */
  margin-left: 8px;   /* 往左拉 18px。因为一共只有22px空位，拉18px后，距离最左边刚好剩下 4px，完美等效于原来的 left: 4px！ */

  vertical-align: middle; /* 垂直居中对齐 */
  margin-top: -2px;       /* 视觉微调：如果发现方块偏下，可以调节这个数值 */

}
  .wechat-article ol {
  counter-reset: bracket-c;
  list-style: none; /* 隐藏系统自带的 1. 2. 3. */
  padding-left: 0;
}

.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}
.wechat-article ol li section{
  padding: 4px 0 4px 30px; /* 左侧留出 30px 的安全区 */
  line-height: 1.6;
}

.wechat-article ol li::before {
  counter-increment: bracket-c;
  content: counter(bracket-c);

  font-weight: 700;
  color: #fff;
  background: #2d8cf0;
  font-size: 11px;
  width: 22px;
  height: 22px;
  border-radius: 50%;

  display: inline-block;
  margin-left: -10px;   /* 完美等效于 left: 0。由于父元素左侧有30px空位，往回拉30px刚好贴住最左边缘 */
  margin-right: 8px;    /* 保证数字和右侧文字的安全距离 */

  text-align: center;     /* 水平居中 */
  line-height: 22px;      /* 垂直居中（行高等于高度） */
  vertical-align: middle; /* 让整个圆圈和右侧文字整体居中对齐 */

}
.wechat-article li section,
.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #2d8cf0;
  text-decoration: none;
  border-bottom: 1px solid rgba(45, 140, 240, 0.3);
  font-weight: 500;
}

.wechat-article code {
  background: #f0f7ff;
  color: #2868b0;
  padding: 2px 7px;
  border-radius: 4px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #1a2536;
  color: #c8d8e8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 8px;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

.wechat-article table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;
  font-size: 14px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #d8e8f8;
}

.wechat-article th {
  background: #2d8cf0;
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #e8f0f8;
  color: #444;
}

.wechat-article tr:nth-child(even) { background: #f8fafc; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 8px;
  border: 1px solid #e8f0f8;
}

.wechat-article hr {
  border: none;
  height: 2px;
  background: #e8f0f8;
  margin: 32px 0;
}

.wechat-article .highlight {
  background: rgba(45, 140, 240, 0.08);
  padding: 1px 4px;
  border-radius: 3px;
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; }
}
`
  },
  {
    id: "wechat-heading-center-red",
    name: "居中红",
    description: "端正大气的居中标题设计，红纯色系，h2 居中红底白字、h3 居中红色下划线，适合政策解读与官方通告",
    category: "basic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#cc2936","description":"主色调（中国红）"}],
    defaultStyleSettings: {"themeColor":"","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #ffffff;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #333333;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #444444;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 800;
  color: #cc2936;
  margin: 0 0 32px;
  padding: 20px 0;
  text-align: center;
  letter-spacing: 2px;
  border: none;
  border-top: 3px solid #cc2936;
  border-bottom: 3px solid #cc2936;
}

.wechat-article h2 {
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  margin: 36px auto 18px;
  padding: 10px 28px;
  text-align: center;
  background: #cc2936;
  display: table;
  border-radius: 0;
  letter-spacing: 1px;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #cc2936;
  margin: 28px 0 14px;
  padding: 0 0 8px;
  text-align: center;
  position: relative;
}

.wechat-article h3::after {
  content: ' ';
  display: block;
  width: 40px;
  height: 2px;
  background: #cc2936;
  margin: 8px auto 0;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #8a1a24;
  margin: 22px 0 10px;
  text-align: center;
  letter-spacing: 1px;
}

.wechat-article strong { font-weight: 600; color: #cc2936; }
.wechat-article em { font-style: italic; color: #888; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: #fdf2f2;
  border-left: 4px solid #cc2936;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #6a3a3a;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #fdf8f8;
  border: none;
  border-radius: 0;
  font-size: 15px;
  line-height: 1.85;
  color: #444;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '■';
  color: #cc2936;
  font-size: 6px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: cred-c; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: cred-c;
  content: counter(cred-c);
  font-weight: 700;
  color: #fff;
  background: #cc2936;
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  text-align: center;
  line-height: 22px;
  font-size: 11px;
}

.wechat-article li span, .wechat-article li code, .wechat-article li pre { display: inline; }

.wechat-article a { color: #cc2936; text-decoration: none; border-bottom: 1px solid rgba(204,41,54,0.3); }

.wechat-article code {
  background: #fdf2f2;
  color: #a02030;
  padding: 2px 7px;
  border-radius: 0;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #2a1418;
  color: #e8c8c8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-top: 3px solid #cc2936;
}

.wechat-article pre code { background: none; color: inherit; padding: 0; }

.wechat-article table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }
.wechat-article th { background: #cc2936; color: #fff; font-weight: 600; padding: 10px 14px; text-align: left; font-size: 13px; }
.wechat-article td { padding: 10px 14px; border-bottom: 1px solid #f0e0e0; color: #444; }
.wechat-article tr:nth-child(even) { background: #fdf8f8; }
.wechat-article tr:last-child td { border-bottom: 2px solid #cc2936; }

.wechat-article img { max-width: 100%; height: auto !important; display: block; margin: 24px auto; }
.wechat-article hr { border: none; height: 1px; background: #e8d0d0; margin: 32px 0; }
.wechat-article .highlight { background: rgba(204,41,54,0.08); padding: 1px 4px; }

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; }
}
`
  },
  {
    id: "wechat-heading-center-red-1",
    name: "大红",
    description: "端正大气的居中标题设计，大红纯色系，h2 居中红底白字、h3 居中红色下划线，适合政策解读与官方通告",
    category: "basic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#cc2936","description":"主色调（中国红）"}],
    defaultStyleSettings: {"themeColor":"#cc2936","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #ffffff;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #333333;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #444444;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 800;
  color: #cc2936;
  margin: 0 0 32px;
  padding: 20px 0;
  text-align: center;
  letter-spacing: 2px;
  border: none;
  border-top: 3px solid #cc2936;
  border-bottom: 3px solid #cc2936;
}

.wechat-article h2 {
  font-size: 17px;
  font-weight: 700;
  color: #cc2936;
  margin: 36px 0 18px;
  padding: 10px 0;
  text-align: center;
  background: transparent;
  border: none;
  border-top: 1px solid #cc2936;
  border-bottom: 1px solid #cc2936;
  letter-spacing: 1px;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #cc2936;
  margin: 28px 0 14px;
  padding: 0 0 8px;
  text-align: center;
  position: relative;
}

.wechat-article h3::after {
  content: ' ';
  display: block;
  width: 40px;
  height: 2px;
  background: #cc2936;
  margin: 8px auto 0;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #8a1a24;
  margin: 22px 0 10px;
  text-align: center;
  letter-spacing: 1px;
}

.wechat-article strong { font-weight: 600; color: #cc2936; }
.wechat-article em { font-style: italic; color: #888; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: #fdf2f2;
  border-left: 4px solid #cc2936;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #6a3a3a;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #fdf8f8;
  border: none;
  border-radius: 0;
  font-size: 15px;
  line-height: 1.85;
  color: #444;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '■';
  color: #cc2936;
  font-size: 6px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
}

.wechat-article ol { counter-reset: cred-c; }
.wechat-article ol li {
  padding: 4px 0 4px 28px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: cred-c;
  content: counter(cred-c);
  font-weight: 700;
  color: #fff;
  background: #cc2936;
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 2px;
  text-align: center;
  line-height: 22px;
  font-size: 11px;
  margin-right: 8px;
}

.wechat-article li span, .wechat-article li code, .wechat-article li pre { display: inline; }

.wechat-article a { color: #cc2936; text-decoration: none; border-bottom: 1px solid rgba(204,41,54,0.3); }

.wechat-article code {
  background: #fdf2f2;
  color: #a02030;
  padding: 2px 7px;
  border-radius: 0;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #2a1418;
  color: #e8c8c8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-top: 3px solid #cc2936;
}

.wechat-article pre code { background: none; color: inherit; padding: 0; }

.wechat-article table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }
.wechat-article th { background: #cc2936; color: #fff; font-weight: 600; padding: 10px 14px; text-align: left; font-size: 13px; }
.wechat-article td { padding: 10px 14px; border-bottom: 1px solid #f0e0e0; color: #444; }
.wechat-article tr:nth-child(even) { background: #fdf8f8; }
.wechat-article tr:last-child td { border-bottom: 2px solid #cc2936; }

.wechat-article img { max-width: 100%; height: auto !important; display: block; margin: 24px auto; }
.wechat-article hr { border: none; height: 1px; background: #e8d0d0; margin: 32px 0; }
.wechat-article .highlight { background: rgba(204,41,54,0.08); padding: 1px 4px; }

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; }
}
`
  },
  {
    id: "wechat-heading-center-teal-1",
    name: "青碧",
    description: "清新沉稳的居中标题设计，青碧色纯色系，h2 居中圆角色块、h3 居中点线装饰，适合健康科普与自然主题",
    category: "basic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#0d9488","description":"主色调（青碧）"}],
    defaultStyleSettings: {"themeColor":"#0d9488","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #f9fdfb;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #2d4a40;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #3a5a4e;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #0d9488;
  margin: 0 0 32px;
  padding: 16px 0;
  text-align: center;
  letter-spacing: 4px;
  border: none;
  position: relative;
}

.wechat-article h1::before {
  content: '—— ';
  color: #5eead4;
  font-weight: 300;
  letter-spacing: 0;
}

.wechat-article h1::after {
  content: ' ——';
  color: #5eead4;
  font-weight: 300;
  letter-spacing: 0;
}

.wechat-article h2 {
  font-size: 16px;
  font-weight: 600;
  color: #0d9488;
  margin: 36px 0 18px;
  padding: 10px 0;
  text-align: center;
  background: #f0fdf9;
  border: none;
  border-radius: 8px;
  letter-spacing: 1px;
}

.wechat-article h3 {
  font-size: 15.5px;
  font-weight: 600;
  color: #0d9488;
  margin: 28px 0 14px;
  text-align: center;
  position: relative;
  padding: 0 20px;
}

.wechat-article h3::before {
  content: '· · ·  ';
  color: #5eead4;
  font-size: 14px;
  letter-spacing: 4px;
}

.wechat-article h3::after {
  content: '  · · ·';
  color: #5eead4;
  font-size: 14px;
  letter-spacing: 4px;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #2d7a6e;
  margin: 22px 0 10px;
  text-align: center;
}

.wechat-article strong { font-weight: 600; color: #0d7a70; }
.wechat-article em { font-style: italic; color: #6a8a80; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: #f0fdf9;
  border-left: 4px solid #5eead4;
  border-radius: 0 10px 10px 0;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #2d6a5e;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #f0fdf9;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  line-height: 1.85;
  color: #2d4a40;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '●';
  color: #0d9488;
  font-size: 7px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
}

.wechat-article ol { counter-reset: cteal-c; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: cteal-c;
  content: counter(cteal-c);
  font-weight: 700;
  color: #fff;
  background: #0d9488;
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  text-align: center;
  line-height: 22px;
  font-size: 11px;
  border-radius: 50%;
}

.wechat-article li span, .wechat-article li code, .wechat-article li pre { display: inline; }

.wechat-article a { color: #0d9488; text-decoration: none; border-bottom: 1px dashed #5eead4; }

.wechat-article code {
  background: #f0fdf9;
  color: #0d7a70;
  padding: 2px 7px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #14292a;
  color: #b8e8d8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 10px;
}

.wechat-article pre code { background: none; color: inherit; padding: 0; border-radius: 0; }

.wechat-article table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 24px 0; font-size: 14px; border-radius: 10px; overflow: hidden; border: 1px solid #d0f0e8; }
.wechat-article th { background: #0d9488; color: #fff; font-weight: 600; padding: 10px 14px; text-align: left; font-size: 13px; }
.wechat-article td { padding: 10px 14px; border-bottom: 1px solid #e0f5f0; color: #2d4a40; }
.wechat-article tr:nth-child(even) { background: #f5fdfb; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img { max-width: 100%; height: auto !important; display: block; margin: 24px auto; border-radius: 10px; }
.wechat-article hr { border: none; height: auto; margin: 32px 0; text-align: center; }
.wechat-article hr::before { content: '●'; color: #5eead4; font-size: 8px; }
.wechat-article .highlight { background: rgba(13,148,136,0.08); padding: 1px 4px; border-radius: 3px; }

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; letter-spacing: 2px; }
}
`
  },
  {
    id: "wechat-heading-center-teal",
    name: "居中·青碧",
    description: "清新沉稳的居中标题设计，青碧色纯色系，h2 居中圆角色块、h3 居中点线装饰，适合健康科普与自然主题",
    category: "basic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#0d9488","description":"主色调（青碧）"}],
    defaultStyleSettings: {"themeColor":"","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #f9fdfb;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #2d4a40;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #3a5a4e;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #0d9488;
  margin: 0 0 32px;
  padding: 16px 0;
  text-align: center;
  letter-spacing: 4px;
  border: none;
  position: relative;
}

.wechat-article h1::before {
  content: '—— ';
  color: #5eead4;
  font-weight: 300;
  letter-spacing: 0;
}

.wechat-article h1::after {
  content: ' ——';
  color: #5eead4;
  font-weight: 300;
  letter-spacing: 0;
}

.wechat-article h2 {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 36px auto 18px;
  padding: 10px 32px;
  text-align: center;
  background: #0d9488;
  display: table;
  border-radius: 24px;
  letter-spacing: 1px;
}

.wechat-article h3 {
  font-size: 15.5px;
  font-weight: 600;
  color: #0d9488;
  margin: 28px 0 14px;
  text-align: center;
  position: relative;
  padding: 0 20px;
}

.wechat-article h3::before {
  content: '· · ·  ';
  color: #5eead4;
  font-size: 14px;
  letter-spacing: 4px;
}

.wechat-article h3::after {
  content: '  · · ·';
  color: #5eead4;
  font-size: 14px;
  letter-spacing: 4px;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #2d7a6e;
  margin: 22px 0 10px;
  text-align: center;
}

.wechat-article strong { font-weight: 600; color: #0d7a70; }
.wechat-article em { font-style: italic; color: #6a8a80; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: #f0fdf9;
  border-left: 4px solid #5eead4;
  border-radius: 0 10px 10px 0;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #2d6a5e;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #f0fdf9;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  line-height: 1.85;
  color: #2d4a40;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '●';
  color: #0d9488;
  font-size: 7px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
}

.wechat-article ol { counter-reset: cteal-c; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: cteal-c;
  content: counter(cteal-c);
  font-weight: 700;
  color: #fff;
  background: #0d9488;
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  text-align: center;
  line-height: 22px;
  font-size: 11px;
  border-radius: 50%;
}

.wechat-article li span, .wechat-article li code, .wechat-article li pre { display: inline; }

.wechat-article a { color: #0d9488; text-decoration: none; border-bottom: 1px dashed #5eead4; }

.wechat-article code {
  background: #f0fdf9;
  color: #0d7a70;
  padding: 2px 7px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #14292a;
  color: #b8e8d8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 10px;
}

.wechat-article pre code { background: none; color: inherit; padding: 0; border-radius: 0; }

.wechat-article table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 24px 0; font-size: 14px; border-radius: 10px; overflow: hidden; border: 1px solid #d0f0e8; }
.wechat-article th { background: #0d9488; color: #fff; font-weight: 600; padding: 10px 14px; text-align: left; font-size: 13px; }
.wechat-article td { padding: 10px 14px; border-bottom: 1px solid #e0f5f0; color: #2d4a40; }
.wechat-article tr:nth-child(even) { background: #f5fdfb; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img { max-width: 100%; height: auto !important; display: block; margin: 24px auto; border-radius: 10px; }
.wechat-article hr { border: none; height: auto; margin: 32px 0; text-align: center; }
.wechat-article hr::before { content: '●'; color: #5eead4; font-size: 8px; }
.wechat-article .highlight { background: rgba(13,148,136,0.08); padding: 1px 4px; border-radius: 3px; }

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; letter-spacing: 2px; }
}
`
  },
  {
    id: "wechat-heading-center-indigo",
    name: "居中·靛蓝",
    description: "沉稳专业的居中标题设计，靛蓝纯色系，h2 居中双横线夹文字、h3 居中菱形点缀，适合行业分析与专业报告",
    category: "basic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#3730a3","description":"主色调（靛蓝）"}],
    defaultStyleSettings: {"themeColor":"#3730a3","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #fafaff;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #2e3448;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #3a4058;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #3730a3;
  margin: 0 0 32px;
  padding: 24px 0 20px;
  text-align: center;
  letter-spacing: 3px;
  border: none;
  position: relative;
}

.wechat-article h1::after {
  content: ' ';
  display: block;
  width: 48px;
  height: 3px;
  background: #3730a3;
  margin: 16px auto 0;
}

/* h2 — 居中，左右横线夹文字 */
.wechat-article h2 {
  font-size: 17px;
  font-weight: 700;
  color: #3730a3;
  margin: 40px 0 18px;
  padding: 0;
  text-align: center;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.wechat-article h2::before,
.wechat-article h2::after {
  content: ' ';
  flex: 1;
  max-width: 80px;
  height: 1px;
  background: #3730a3;
}

/* h3 — 居中，菱形装饰 */
.wechat-article h3 {
  font-size: 15.5px;
  font-weight: 600;
  color: #4338ca;
  margin: 28px 0 14px;
  text-align: center;
  letter-spacing: 1px;
}

.wechat-article h3::before {
  content: '◇ ';
  color: #818cf8;
  font-size: 10px;
}

.wechat-article h3::after {
  content: ' ◇';
  color: #818cf8;
  font-size: 10px;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #4a4a80;
  margin: 22px 0 10px;
  text-align: center;
  font-style: italic;
}

.wechat-article strong { font-weight: 600; color: #3730a3; }
.wechat-article em { font-style: italic; color: #6a6a90; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: #f0f0ff;
  border-left: 4px solid #818cf8;
  border-radius: 0 8px 8px 0;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #4a4a78;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #f5f5ff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.85;
  color: #2e3448;
}

.wechat-article ul li {
  padding: 4px 0 4px 20px;
  position: relative;
}

.wechat-article ul li::before {
  content: '◆';
  color: #818cf8;
  font-size: 6px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -1px;
}

.wechat-article ol { counter-reset: cindigo-c; }
.wechat-article ol li {
  padding: 4px 0 4px 28px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: cindigo-c;
  content: counter(cindigo-c);
  font-weight: 700;
  color: #fff;
  background: #3730a3;
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 1px;
  margin-right: 8px;
  text-align: center;
  line-height: 22px;
  font-size: 11px;
  border-radius: 50%;
}

.wechat-article li span, .wechat-article li code, .wechat-article li pre { display: inline; }

.wechat-article a { color: #4338ca; text-decoration: none; border-bottom: 1px solid rgba(67,56,202,0.3); }

.wechat-article code {
  background: #f0f0ff;
  color: #3730a3;
  padding: 2px 7px;
  border-radius: 4px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #1a1a30;
  color: #c8c8e8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 8px;
}

.wechat-article pre code { background: none; color: inherit; padding: 0; border-radius: 0; }

.wechat-article table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 24px 0; font-size: 14px; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0f0; }
.wechat-article th { background: #3730a3; color: #fff; font-weight: 600; padding: 10px 14px; text-align: left; font-size: 13px; }
.wechat-article td { padding: 10px 14px; border-bottom: 1px solid #ececf8; color: #2e3448; }
.wechat-article tr:nth-child(even) { background: #f8f8ff; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img { max-width: 100%; height: auto !important; display: block; margin: 24px auto; border-radius: 8px; }
.wechat-article hr { border: none; height: auto; margin: 32px 0; text-align: center; }
.wechat-article hr::before { content: '◆'; color: #c7c7f0; font-size: 8px; }
.wechat-article .highlight { background: rgba(55,48,163,0.08); padding: 1px 4px; border-radius: 3px; }

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; letter-spacing: 2px; }
}
`
  }
]
