import type { WechatTemplate } from '../types'

export const techTemplates: WechatTemplate[] = [
  {
    id: "wechat-tech-blueprint",
    name: "技术蓝图",
    description: "工程师风格技术模板，蓝灰色调搭配清晰的信息层级，适合技术教程、架构分析与开源项目介绍",
    category: "tech",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#3b82f6","description":"主色调（蓝色）"},{"name":"accentColor","type":"color","defaultValue":"#06b6d4","description":"辅助色（青色）"},{"name":"textColor","type":"color","defaultValue":"#374151","description":"正文颜色"},{"name":"backgroundColor","type":"color","defaultValue":"#f8fafc","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#3b82f6","fontSize":15,"lineHeight":1.85,"textAlign":"justify"},
    css: `/* 技术蓝图模板 - Tech Blueprint Template */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #f8fafc;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #334155;
  position: relative;
}

/* 顶部渐变装饰条 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
}

/* 段落 */
.wechat-article p {
  font-size: 15.5px;
  line-height: 1.85;
  margin: 16px 0;
  color: #374151;
  text-align: justify;
  letter-spacing: 0.1px;
}

/* 一级标题 - 项目名/主题 */
.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 24px;
  padding: 20px 0 16px;
  line-height: 1.35;
  letter-spacing: -0.3px;
  border-bottom: 2px solid #e2e8f0;
  position: relative;
}

.wechat-article h1::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
}

/* 二级标题 - 章节 */
.wechat-article h2 {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin: 36px 0 16px;
  padding: 10px 0 10px 16px;
  border-left: 4px solid #3b82f6;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.06) 0%, transparent 100%);
  letter-spacing: 0.2px;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 17px;
  font-weight: 600;
  color: #1e293b;
  margin: 28px 0 12px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #cbd5e1;
}

.wechat-article h3::before {
  content: '#';
  color: #3b82f6;
  margin-right: 8px;
  font-weight: 700;
  font-family: "SF Mono", Menlo, monospace;
  font-size: 15px;
  display: inline-block;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 15.5px;
  font-weight: 600;
  color: #334155;
  margin: 24px 0 10px;
  display: flex !important;
}

/* 强调 */
.wechat-article strong {
  font-weight: 600;
  color: #0f172a;
}

.wechat-article em {
  font-style: italic;
  color: #475569;
}

/* 引用 - 提示框风格 */
.wechat-article blockquote {
  border: none;
  border-left: 4px solid #3b82f6;
  padding: 16px 20px;
  margin: 24px 0;
  background: #eff6ff;
  border-radius: 0 8px 8px 0;
  position: relative;
}

.wechat-article blockquote::before {
  content: '💡';
  position: absolute;
  top: -10px;
  left: -2px;
  font-size: 16px;
  background: #f8fafc;
  padding: 0 4px;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.75;
  color: #1e40af;
  margin: 6px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 20px 0;
  padding: 14px 18px;
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.75;
  color: #374151;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: ' ';
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 2px;
  transform: rotate(45deg);
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 8px;
}

.wechat-article ol {
  counter-reset: blueprint-counter;
}

.wechat-article ol li {
  padding: 5px 0 5px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: blueprint-counter;
  content: counter(blueprint-counter);
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  font-family: -apple-system, sans-serif;
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
  border-radius: 6px;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre {
  display: inline;
}

/* 链接 */
.wechat-article a {
  color: #2563eb;
  text-decoration: none;
  border-bottom: 1px solid rgba(37, 99, 235, 0.3);
  font-weight: 500;
}

/* 行内代码 - 技术标签风格 */
.wechat-article code {
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  color: #4338ca;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: "SF Mono", "Fira Code", Menlo, Consolas, monospace;
  font-size: 0.88em;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.15);
}

/* 代码块 */
.wechat-article pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 20px 24px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", "Fira Code", Menlo, Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.7;
  border-radius: 10px;
  border: 1px solid #334155;
  position: relative;
}

.wechat-article pre::before {
  content: '';
  position: absolute;
  top: 12px;
  left: 16px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ef4444;
  box-shadow: 16px 0 0 #eab308, 32px 0 0 #22c55e;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
  border: none;
  font-weight: normal;
}

/* 表格 - 数据面板风格 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 14px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.wechat-article th {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: #f1f5f9;
  font-weight: 600;
  padding: 12px 14px;
  text-align: left;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.wechat-article td {
  padding: 11px 14px;
  border-bottom: 1px solid #e2e8f0;
  color: #374151;
}

.wechat-article tr:nth-child(even) {
  background: #f8fafc;
}

.wechat-article tr:last-child td {
  border-bottom: none;
}

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
}

.wechat-article figcaption {
  font-size: 13px;
  color: #94a3b8;
  text-align: center;
  margin-top: 8px;
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #cbd5e1, transparent);
  margin: 32px 0;
}

/* 高亮 */
.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 60%, rgba(59, 130, 246, 0.15) 60%);
}

/* 响应式 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 32px 20px;
  }

  .wechat-article h1 {
    font-size: 22px;
  }

  .wechat-article h2 {
    font-size: 18px;
  }

  .wechat-article p {
    font-size: 15px;
  }

  .wechat-article pre {
    padding: 16px;
    font-size: 13px;
  }
}
`
  },
  {
    id: "wechat-tech-modern-white",
    name: "Modern Professional",
    description: "现代极简风格，类似 Vercel/Stripe 开发文档，高可读性、优雅留白",
    category: "tech",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#0070f3","description":"主色调（链接色）"},{"name":"headingColor","type":"color","defaultValue":"#000000","description":"标题颜色"},{"name":"backgroundColor","type":"color","defaultValue":"#ffffff","description":"页面背景"}],
    css: `/* Modern Professional 模板 */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: #1a1a1a;
  background-color: #ffffff;
  padding: 20px 15px;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 40px 0 24px;
  font-size: 28px;
  font-weight: 800;
  color: #000;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.wechat-article h2 {
  margin: 36px 0 16px;
  font-size: 22px;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
  padding-bottom: 8px;
  border-bottom: 1px solid #eaeaea;
}

.wechat-article h3 {
  margin: 28px 0 12px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

/* 段落样式 */
.wechat-article p {
  margin: 16px 0;
  color: #444;
}

.wechat-article strong {
  color: #000;
  font-weight: 600;
}

/* 链接样式 */
.wechat-article a {
  color: #0070f3;
  text-decoration: none;
  font-weight: 500;
}

.wechat-article a:hover {
  text-decoration: underline;
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 24px 0;
  padding: 16px 24px;
  background: #f9f9f9;
  border: 1px solid #eaeaea;
  border-left: 4px solid #000;
  color: #666;
  font-style: italic;
  font-size: 0.95em;
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

/* 代码块样式 */
.wechat-article pre {
  background: #fafafa;
  color: #111;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  margin: 24px 0;
  font-size: 14px;
}

.wechat-article code {
  color: #eb5757;
  background: #f7f2f2;
  padding: 3px 6px;
  border-radius: 5px;
  font-family: inherit;
  font-size: 0.85em;
  font-weight: 500;
}

.wechat-article pre code {
  color: inherit;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: "SF Mono", Menlo, Consolas, monospace;
}

/* 分割线 */
.wechat-article hr {
  border: 0;
  height: 1px;
  background: #eaeaea;
  margin: 48px 0;
}

/* 强调框 - 自定义扩展 */
.wechat-article-callout {
    margin: 24px 0;
    padding: 16px;
    border-radius: 8px;
    background: #ebf5ff;
    border: 1px solid #cce4ff;
    color: #0056b3;
}
`
  },
  {
    id: "wechat-notebooklm",
    name: "NotebookLM",
    description: "Google NotebookLM 风格，智能清爽，卡片化排版，适合读书笔记与硬核知识科普",
    category: "tech",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1a73e8","description":"主色调（Google蓝）"},{"name":"backgroundColor","type":"color","defaultValue":"#f8f9fa","description":"背景色"}],
    defaultStyleSettings: {"themeColor":"#1a73e8","fontSize":16,"lineHeight":1.8,"textAlign":"justify"},
    css: `/* NotebookLM 智能清爽模板 */
.wechat-article {
  font-family: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #1f1f1f;
  background-color: #f8f9fa;
  padding: 20px 15px;
  letter-spacing: 0.5px;
}

/* 标题样式 */
.wechat-article h1 {
  font-size: 24px;
  font-weight: 700;
  color: #1a73e8;
  margin-bottom: 24px;
  line-height: 1.4;
  text-align: left;
}

.wechat-article h2 {
  font-size: 20px;
  font-weight: 600;
  color: #202124;
  margin: 32px 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #e8eaed;
}

.wechat-article h3 {
  font-size: 18px;
  font-weight: 600;
  color: #202124;
  margin: 24px 0 12px 0;
}

/* 段落样式 */
.wechat-article p {
  margin: 0 0 20px 0;
  color: #3c4043;
  font-size: 16px;
  text-align: justify;
}

/* 强调文字（重点） */
.wechat-article strong {
  font-weight: 600;
  color: #1a73e8; /* Google Blue */
}

/* 把段落开头的或者单独的 strong 视为小标题效果 */
.wechat-article p > strong {
  font-size: 17px;
}

/* 无序列表（制作为卡片效果） */
.wechat-article ul {
  list-style-type: disc;
  padding: 24px 24px 24px 40px;
  margin-bottom: 24px;
  color: #3c4043;
  background-color: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(60, 64, 67, 0.04);
}

.wechat-article ul li {
  margin-bottom: 12px;
}

.wechat-article ul li::marker {
  color: #1a73e8;
}

/* 有序列表 */
.wechat-article ol {
  padding: 24px 24px 24px 40px;
  margin-bottom: 24px;
  color: #3c4043;
  background-color: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(60, 64, 67, 0.04);
}

.wechat-article ol li {
  margin-bottom: 12px;
  padding-left: 4px;
}

.wechat-article ol li::marker {
  color: #1a73e8;
  font-weight: 600;
}

/* 引用块（模拟 AI Summary / Audio Overview 区域） */
.wechat-article blockquote {
  background: linear-gradient(145deg, #f4f8fb 0%, #f1f3f4 100%);
  border-left: 4px solid #1a73e8;
  border-radius: 0 12px 12px 0;
  padding: 20px;
  margin: 24px 0;
  color: #3c4043;
  font-size: 15px;
  position: relative;
}

.wechat-article blockquote p {
  margin-bottom: 0;
}

.wechat-article blockquote p:not(:last-child) {
  margin-bottom: 12px;
}

/* 引用文字前的图标示意 */
.wechat-article blockquote::before {
  content: "✦";
  color: #1a73e8;
  font-size: 20px;
  position: absolute;
  top: 15px;
  left: -20px;
  background: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* 图片样式 */
.wechat-article img {
  width: 100%;
  border-radius: 12px;
  margin: 16px 0;
  display: block;
  border: 1px solid #e8eaed;
}

/* 分割线 */
.wechat-article hr {
  border: none;
  height: 1px;
  background-color: #e8eaed;
  margin: 32px 0;
}

/* 链接样式 */
.wechat-article a {
  color: #1a73e8;
  text-decoration: none;
  border-bottom: 1px solid rgba(26, 115, 232, 0.3);
  padding-bottom: 1px;
}
`
  }
]
