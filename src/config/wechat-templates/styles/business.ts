import type { WechatTemplate } from '../types'

export const businessTemplates: WechatTemplate[] = [
  {
    id: "wechat-business-minimal",
    name: "极简商务",
    description: "克制而精致的商务风格，大量留白搭配细线条分隔，适合品牌通讯、产品公告与商业简报",
    category: "business",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#111111","description":"主色调"},{"name":"textColor","type":"color","defaultValue":"#444444","description":"正文颜色"}],
    defaultStyleSettings: {"themeColor":"#111111","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `/* 极简商务模板 - Business Minimal Template */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #ffffff;
  padding: 48px 40px;
  max-width: 677px;
  margin: 0 auto;
  color: #222222;
}

/* 段落 */
.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 18px 0;
  color: #444444;
  text-align: justify;
  letter-spacing: 0.2px;
}

/* 一级标题 */
.wechat-article h1 {
  font-size: 28px;
  font-weight: 300;
  color: #111111;
  margin: 0 0 32px;
  padding: 0 0 20px;
  line-height: 1.35;
  letter-spacing: 2px;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
}

/* 二级标题 */
.wechat-article h2 {
  font-size: 18px;
  font-weight: 600;
  color: #111111;
  margin: 44px 0 16px;
  padding: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
}

.wechat-article h2::after {
  content: '';
  display: block;
  width: 32px;
  height: 2px;
  background: #111111;
  margin-top: 10px;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #222222;
  margin: 32px 0 12px;
  letter-spacing: 0.5px;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 14px;
  font-weight: 600;
  color: #555555;
  margin: 24px 0 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* 强调 */
.wechat-article strong {
  font-weight: 600;
  color: #111111;
}

.wechat-article em {
  font-style: italic;
  color: #555555;
}

/* 引用 */
.wechat-article blockquote {
  border: none;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 24px 0;
  margin: 32px 0;
  background: transparent;
}

.wechat-article blockquote p {
  font-size: 16px;
  line-height: 1.8;
  color: #222222;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 20px 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 15px;
  line-height: 1.8;
  color: #444444;
}

.wechat-article ul li {
  padding: 6px 0 6px 22px;
  position: relative;
  border-bottom: 1px solid #f5f5f5;
}

.wechat-article ul li:last-child {
  border-bottom: none;
}

.wechat-article ul li::before {
  content: '';
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  width: 6px;
  height: 1px;
  background: #111111;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol {
  counter-reset: minimal-counter;
}

.wechat-article ol li {
  padding: 6px 0 6px 32px;
  position: relative;
  border-bottom: 1px solid #f5f5f5;
}

.wechat-article ol li:last-child {
  border-bottom: none;
}

.wechat-article ol li::before {
  counter-increment: minimal-counter;
  content: counter(minimal-counter);
  display: inline-block;
  width: 24px;
  margin-left: -32px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  font-size: 13px;
  font-weight: 300;
  color: #999999;
  text-align: right;
}



.wechat-article li span,
.wechat-article li code,
.wechat-article li pre {
  display: inline;
}

/* 链接 */
.wechat-article a {
  color: #111111;
  text-decoration: none;
  border-bottom: 1px solid #cccccc;
}

/* 行内代码 */
.wechat-article code {
  background: #f8f8f8;
  color: #333333;
  padding: 2px 8px;
  border-radius: 0;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.85em;
  border: 1px solid #eeeeee;
}

/* 代码块 */
.wechat-article pre {
  background: #fafafa;
  color: #333333;
  padding: 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border: 1px solid #eeeeee;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border: none;
}

/* 表格 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  font-size: 14px;
}

.wechat-article th {
  background: transparent;
  color: #999999;
  font-weight: 400;
  padding: 10px 14px;
  text-align: left;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid #111111;
}

.wechat-article td {
  padding: 12px 14px;
  border-bottom: 1px solid #f0f0f0;
  color: #333333;
}

.wechat-article tr:last-child td {
  border-bottom: 1px solid #e5e5e5;
}

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 32px auto;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.wechat-article figcaption {
  font-size: 12px;
  color: #999999;
  text-align: center;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: 1px;
  background: #e5e5e5;
  margin: 40px 0;
}

/* 高亮 */
.wechat-article .highlight {
  background: #f5f5f5;
  padding: 1px 4px;
}

/* 响应式 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 36px 20px;
  }

  .wechat-article h1 {
    font-size: 24px;
  }
}
`
  },
  {
    id: "wechat-business-pro",
    name: "商务风",
    description: "高端商务风格，金蓝配色，稳重专业",
    category: "business",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1a237e","description":"主色调深蓝"},{"name":"accentColor","type":"color","defaultValue":"#c5a96f","description":"强调色金色"}],
    defaultStyleSettings: {"themeColor":"","fontSize":16,"lineHeight":1.8,"textAlign":"justify"},
    css: `/* Professional Business 模板 */
.wechat-article {
  font-family: "Optima", "Microsoft YaHei", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 40px 0 30px;
  font-size: 24px;
  font-weight: bold;
  color: #1a237e;
  text-align: center;
  border-top: 2px solid #c5a96f;
  border-bottom: 2px solid #c5a96f;
  padding: 15px 0;
}

.wechat-article h2 {
  margin: 35px 0 20px;
  font-size: 19px;
  font-weight: bold;
  color: #fff;
  background: #1a237e;
  padding: 8px 15px;
  border-left: 5px solid #c5a96f;
  display: inline-block;
}

.wechat-article h3 {
  margin: 25px 0 15px;
  font-size: 17px;
  font-weight: bold;
  color: #1a237e;
  padding-left: 10px;
  border-left: 3px solid #c5a96f;
}

/* 段落样式 */
.wechat-article p {
  margin: 16px 0;
  text-align: justify;
}

/* 链接样式 */
.wechat-article a {
  color: #1a237e;
  text-decoration: none;
  border-bottom: 1px solid #c5a96f;
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 25px 0;
  padding: 20px;
  border: 1px solid #c5a96f;
  background-color: rgba(197, 169, 111, 0.05);
  color: #555;
  position: relative;
}

.wechat-article blockquote::before {
  content: '"';
  font-size: 40px;
  color: #c5a96f;
  position: absolute;
  top: -10px;
  left: 10px;
  font-family: serif;
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
    id: "wechat-ali-orange",
    name: "橙色",
    description: "基于阿里橙色系的现代化微信公众号模板，适用于技术文章和产品介绍",
    category: "business",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#FF6A00","description":"主色调橙色"},{"name":"accentColor","type":"color","defaultValue":"rgb(255, 140, 0)","description":"强调色橙色"},{"name":"textColor","type":"color","defaultValue":"rgb(85, 85, 85)","description":"正文颜色"},{"name":"titleColor","type":"color","defaultValue":"#333333","description":"标题颜色"},{"name":"backgroundColor","type":"color","defaultValue":"rgb(255, 255, 255)","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"","fontSize":16,"lineHeight":1.8,"textAlign":"justify"},
    css: `/* 阿里橙模板 */
.wechat-article {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: rgb(36, 41, 46);
  background: rgb(255, 255, 255);
  overflow: hidden;
  max-width: 677px;
  margin: 0 auto;
  padding: 20px 16px;
  overflow-wrap: break-word;
}

/* 段落样式 */
.wechat-article p {
  margin: 16px 0;
  font-size: 16px;
  line-height: 2;
  color: rgb(85, 85, 85);
  text-align: justify;
}

/* 标题样式 */
.wechat-article h1 {
  font-size: 24px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  margin: 2em 0 0.8em;
  padding-left: 12px;
  border-left: 3px solid rgb(255, 140, 0);
  line-height: 1.5;
}

.wechat-article h2 {
  font-size: 20px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  margin: 2em 0 0.8em;
  padding-left: 12px;
  border-left: 3px solid rgb(255, 140, 0);
  line-height: 1.5;
}

.wechat-article h3 {
  font-size: 1.15em;
  font-weight: 600;
  color: rgb(51, 51, 51);
  margin: 2em 0 0.8em;
  padding-left: 12px;
  border-left: 3px solid rgb(255, 140, 0);
  line-height: 1.5;
}

.wechat-article h4 {
  font-size: 1.1em;
  font-weight: 600;
  color: rgb(51, 51, 51);
  margin: 1.8em 0 0.6em;
  padding-left: 10px;
  border-left: 2px solid rgb(255, 140, 0);
  line-height: 1.5;
}

/* 强调文本 */
.wechat-article strong {
  font-weight: 600;
  color: rgb(255, 106, 0);
}

/* 引用块样式 */
.wechat-article blockquote {
  font-style: italic;
  margin: 24px 0;
  padding: 15px 20px 15px 25px;
  background: rgb(255, 250, 245);
  border-left: 4px solid rgb(255, 106, 0);
  border-radius: 0 8px 8px 0;
  color: rgb(68, 68, 68);
}

.wechat-article blockquote p {
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
}

/* 列表样式 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 16px 0;
  padding: 10px;
  background: rgba(255, 106, 0, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 106, 0, 0.08);
  font-size: 16px;
  line-height: 1.75;
  color: #555555;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '•';
  color: #ff6a00;
  font-size: 18px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol {
  counter-reset: campus;
}

.wechat-article ol li {
  padding: 8px 0 8px 34px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: campus;
  content: counter(campus);
  background-color: rgb(255, 106, 0);
  color: white;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  width: 26px;
  height: 26px;
  margin-left: -34px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  text-align: center;
  line-height: 26px;
  border-radius: 50%;
}
.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }



/* 图片样式 */
.wechat-article img {
  max-width: 100%;
  width: 677px !important;
  height: auto !important;
  display: block;
  margin: 20px auto;
  border-radius: 4px;
}

.wechat-article .image-center {
  text-align: center;
  margin: 20px 0;
}

/* 链接样式 */
.wechat-article a {
  color: rgb(255, 106, 0);
  text-decoration: none;
  font-weight: 500;
}

.wechat-article a:hover {
  text-decoration: underline;
}

/* 代码样式 */
.wechat-article code {
  background: rgba(255, 106, 0, 0.1);
  color: rgb(255, 106, 0);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
  font-size: 0.9em;
}

/* 表格样式 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(255, 106, 0, 0.1);
}

.wechat-article th {
  background: rgb(255, 106, 0);
  color: white;
  font-weight: 600;
  padding: 12px;
  text-align: left;
  font-size: 15px;
}

.wechat-article td {
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 15px;
  color: rgb(85, 85, 85);
}

.wechat-article tr:last-child td {
  border-bottom: none;
}

.wechat-article tr:nth-child(even) {
  background-color: rgba(255, 106, 0, 0.02);
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 106, 0, 0.3), transparent);
  margin: 30px 0;
}

/* 工具类 */
.wechat-article .text-center {
  text-align: center;
}

.wechat-article .text-orange {
  color: rgb(255, 106, 0);
}

.wechat-article .highlight-orange {
  color: rgb(255, 106, 0);
  font-weight: 600;
}

.wechat-article .bg-orange-light {
  background: rgba(255, 106, 0, 0.05);
  padding: 12px;
  border-radius: 6px;
  border-left: 3px solid rgb(255, 106, 0);
}

/* 响应式调整 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 15px 12px;
    font-size: 15px;
  }

  .wechat-article h1 {
    font-size: 20px;
  }

  .wechat-article h2 {
    font-size: 18px;
  }

  .wechat-article h3 {
    font-size: 16px;
  }

  .wechat-article img {
    width: 100% !important;
  }

  .wechat-article .numbered-item,
  .wechat-article .bullet-item {
    font-size: 15px;
  }
}
`
  },
  {
    id: "wechat-orange-insight",
    name: "橙色洞察",
    description: "活力橙色风格，适合深度分析与行业报告",
    category: "business",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"rgb(255, 129, 36)","description":"主色调橙色"},{"name":"textColor","type":"color","defaultValue":"rgb(62, 62, 62)","description":"文字颜色"}],
    defaultStyleSettings: {"themeColor":"","fontSize":16,"lineHeight":1.75,"textAlign":"justify"},
    css: `/* Orange Insight 模板 */
.wechat-article {
  font-family: mp-quote, "PingFang SC", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: rgb(62, 62, 62);
  background-color: #fff;
  text-align: justify;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 30px 0 24px;
  font-size: 22px;
  font-weight: bold;
  color: rgb(62, 62, 62);
  text-align: center;
  line-height: 1.4;
}

.wechat-article h2 {
  margin: 40px auto 20px;
  padding: 3px 10px;
  font-size: 17px;
  font-weight: bold;
  color: rgb(255, 129, 36);
  border-bottom: 5px solid rgb(255, 129, 36);
  display: table;
  line-height: 1.4;
  text-align: center;
}

.wechat-article h3 {
  margin: 30px 0 15px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(62, 62, 62);
  display: flex;
  align-items: center;
  line-height: 1.4;
}

.wechat-article h3::before {
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: rgb(255, 129, 36);
  margin-right: 8px;
  flex-shrink: 0;
}

/* 段落样式 */
.wechat-article p {
  margin: 16px 0;
  font-size: 16px;
  line-height: 1.75;
  color: rgb(62, 62, 62);
  text-align: justify;
}

/* 链接样式 */
.wechat-article a {
  color: rgb(255, 129, 36);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 129, 36, 0.3);
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 20px 0;
  padding: 15px 20px;
  font-size: 15px;
  color: #666;
  background-color: rgba(255, 129, 36, 0.05);
  border-left: 4px solid rgb(255, 129, 36);
  border-radius: 4px;
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

/* 列表样式 */
.wechat-article ul, .wechat-article ol {
  margin: 20px 0;
  padding-left: 20px;
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
.wechat-article li span {
  display: inline;
}

/* 表格样式 */
.wechat-article table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  font-size: 14px;
}

.wechat-article th {
  background-color: rgb(255, 129, 36);
  color: #fff;
  padding: 10px;
  font-weight: bold;
}

.wechat-article td {
  padding: 10px;
  border: 1px solid #eee;
  color: rgb(62, 62, 62);
}

.wechat-article tr:nth-child(even) {
  background-color: rgba(255, 129, 36, 0.05);
}

/* 分割线 */
.wechat-article hr {
  margin: 30px 0;
  border: 0;
  height: 1px;
  background-color: rgba(255, 129, 36, 0.3);
}
`
  },
  {
    id: "wechat-orange-sunrise",
    name: "日出暖橙",
    description: "温暖渐变的日出橙色系，活力四射又不失专业感，适合创业故事、产品发布与品牌传播",
    category: "business",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#f7931e","description":"主色调（暖橙）"},{"name":"accentColor","type":"color","defaultValue":"#ff6b35","description":"强调色（亮橙红）"}],
    defaultStyleSettings: {"themeColor":"","fontSize":15,"lineHeight":1.85,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #fffaf5;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #3d2e1f;
  position: relative;
}

.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #ff6b35, #f7931e, #ffc857);
}

.wechat-article p {
  font-size: 15.5px;
  line-height: 1.85;
  margin: 16px 0;
  color: #4a3828;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  margin: 8px 0 24px;
  padding: 18px 24px;
  text-align: center;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  border-radius: 14px;
  border: none;
  box-shadow: 0 6px 20px rgba(247, 147, 30, 0.25);
}

.wechat-article h2 {
  font-size: 19px;
  font-weight: 600;
  color: #e06820;
  margin: 36px 0 14px;
  padding: 10px 0 10px 16px;
  border-left: 4px solid #f7931e;
  background: linear-gradient(90deg, #fff3e6 0%, transparent 100%);
  border-radius: 0 8px 8px 0;
}

.wechat-article h3 {
  font-size: 17px;
  font-weight: 600;
  color: #d06020;
  margin: 28px 0 10px;
  position: relative;
  padding-left: 20px;
}

.wechat-article h3::before {
  content: '🔶';
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 11px;
  display: inline-block;
  margin-right: 8px;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #8a5a30;
  margin: 22px 0 8px;
}

.wechat-article strong { font-weight: 600; color: #c05820; }
.wechat-article em { font-style: italic; color: #6a5040; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: linear-gradient(135deg, #fff3e6 0%, #ffecd2 100%);
  border-radius: 12px;
  border-left: 4px solid #ffc857;
}

.wechat-article blockquote p {
  font-size: 15px;
  line-height: 1.8;
  color: #7a5a30;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #fff7f0;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #4a3828;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '';
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  border-radius: 50%;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: sunrise-c; }
.wechat-article ol li {
  padding: 5px 0 5px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: sunrise-c;
  content: counter(sunrise-c);
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
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

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #e06820;
  text-decoration: none;
  border-bottom: 1px solid rgba(247, 147, 30, 0.3);
  font-weight: 500;
}

.wechat-article code {
  background: #fff3e6;
  color: #c05820;
  padding: 2px 7px;
  border-radius: 5px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
  border: 1px solid #ffe4c8;
}

.wechat-article pre {
  background: #2a1e14;
  color: #f0dcc8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 12px;
  border-top: 3px solid #f7931e;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border: none;
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
  border: 1px solid #ffe4c8;
}

.wechat-article th {
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #ffecd2;
  color: #4a3828;
}

.wechat-article tr:nth-child(even) { background: #fff7f0; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(247, 147, 30, 0.12);
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '◆  ◆  ◆';
  color: #ffc857;
  font-size: 8px;
  letter-spacing: 6px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(247, 147, 30, 0.15) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; padding: 14px 20px; }
}
`
  },
  {
    id: "wechat-orange-ember",
    name: "琥珀余烬",
    description: "深沉内敛的琥珀橙色系，暗底亮橙的高级质感，适合深度复盘、战略思考与行业洞见",
    category: "business",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#d4790a","description":"主色调（琥珀橙）"},{"name":"accentColor","type":"color","defaultValue":"#e8a840","description":"强调色（暖金）"},{"name":"backgroundColor","type":"color","defaultValue":"#1c1410","description":"背景颜色（深棕）"}],
    defaultStyleSettings: {"themeColor":"#d4790a","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: "Georgia", "Noto Serif SC", "Source Han Serif SC", "PingFang SC", serif;
  background: #1c1410;
  padding: 44px 38px;
  max-width: 677px;
  margin: 0 auto;
  color: #c8b8a0;
  position: relative;
}

.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #d4790a, #e89830, #f0b860);
}

.wechat-article p {
  font-family: -apple-system, "PingFang SC", sans-serif;
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #b8a890;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #f0d0a0;
  margin: 8px 0 24px;
  padding: 18px 0 16px;
  text-align: left;
  border: none;
  border-bottom: 1px solid #3a2a1a;
  position: relative;
}

.wechat-article h1::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 50px;
  height: 3px;
  background: #d4790a;
}

.wechat-article h2 {
  font-size: 20px;
  font-weight: 600;
  color: #e8a840;
  margin: 40px 0 14px;
  padding: 0 0 10px;
  border-bottom: 1px solid #2a2018;
}

.wechat-article h3 {
  font-size: 17px;
  font-weight: 600;
  color: #d4960a;
  margin: 28px 0 10px;
  padding-left: 14px;
  border-left: 3px solid #d4790a;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #a08860;
  margin: 22px 0 8px;
}

.wechat-article strong { font-weight: 700; color: #f0d0a0; }
.wechat-article em { font-style: italic; color: #907858; }

.wechat-article blockquote {
  border: none;
  border-left: 3px solid #d4790a;
  padding: 16px 22px;
  margin: 28px 0;
  background: rgba(212, 121, 10, 0.06);
}

.wechat-article blockquote p {
  font-size: 15px;
  line-height: 1.8;
  color: #c0a070;
  font-style: italic;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 20px 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 15px;
  line-height: 1.85;
  color: #b8a890;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
  border-bottom: 1px solid #3a2a1a;
}

.wechat-article ul li::before {
  content: '◆';
  color: #d4790a;
  font-size: 6px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: ember-c; }
.wechat-article ol li {
  padding: 5px 0 5px 30px;
  position: relative;
  border-bottom: 1px solid #3a2a1a;
}

.wechat-article ol li::before {
  counter-increment: ember-c;
  content: counter(ember-c);
  display: inline-block;
  width: 22px;
  margin-left: -30px;
  font-size: 14px;
  font-weight: 700;
  color: #d4790a;
  font-family: Georgia, serif;
  vertical-align: top;
  margin-top: 2px;
  text-align: center;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #e8a840;
  text-decoration: none;
  border-bottom: 1px solid rgba(232, 168, 64, 0.3);
}

.wechat-article code {
  background: rgba(212, 121, 10, 0.12);
  color: #e8a840;
  padding: 2px 7px;
  border-radius: 3px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
  border: 1px solid #3a2a1a;
}

.wechat-article pre {
  background: #0e0a06;
  color: #c8b890;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border: 1px solid #2a2018;
  border-top: 2px solid #d4790a;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border: none;
  border-radius: 0;
}

.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 14px;
  border: 1px solid #2a2018;
}

.wechat-article th {
  background: #2a2018;
  color: #e8c880;
  font-weight: 600;
  padding: 10px 14px;
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #2a2018;
  color: #b8a890;
}

.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border-radius: 6px;
  border: 1px solid #2a2018;
}

.wechat-article hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #3a2a1a, transparent);
  margin: 36px 0;
}

.wechat-article .highlight {
  background: rgba(212, 121, 10, 0.15);
  padding: 1px 4px;
  border-radius: 2px;
}

@media (max-width: 480px) {
  .wechat-article { padding: 36px 20px; }
  .wechat-article h1 { font-size: 22px; }
}
`
  },
  {
    id: "wechat-orange-tangerine",
    name: "橘子汽水",
    description: "清新活泼的橘色系，白底搭配明快橙色卡片装饰，适合运营干货、社群分享与轻知识科普",
    category: "business",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#ff8c42","description":"主色调（橘橙）"},{"name":"accentColor","type":"color","defaultValue":"#ffaa5c","description":"辅助色（浅橙）"}],
    defaultStyleSettings: {"themeColor":"#ff8c42","fontSize":15,"lineHeight":1.85,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #ffffff;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #3a3a3a;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.85;
  margin: 14px 0;
  color: #444444;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 24px;
  font-weight: 700;
  color: #333333;
  margin: 0 0 24px;
  padding: 16px 20px 16px 24px;
  background: #fff;
  border: none;
  border-left: 5px solid #ff8c42;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 2px 12px rgba(255, 140, 66, 0.12);
}

.wechat-article h2 {
  font-size: 18px;
  font-weight: 700;
  color: #d05a10;
  margin: 32px 0 16px;
  padding: 10px 18px;
  background: #fff3ea;
  border-left: 4px solid #ff8c42;
  border-radius: 0 8px 8px 0;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #e07030;
  margin: 26px 0 10px;
  padding-bottom: 6px;
  border-bottom: 2px dashed #ffe0c8;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #a06030;
  margin: 20px 0 8px;
}

.wechat-article strong { font-weight: 600; color: #d06828; }
.wechat-article em { font-style: italic; color: #888888; }

/* 引用 — 划重点 */
.wechat-article blockquote {
  border: 2px dashed #ffc89e;
  padding: 18px 22px;
  margin: 24px 0;
  background: #fff8f2;
  border-radius: 12px;
  position: relative;
}

.wechat-article blockquote::before {
  content: '📌 划重点';
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #ff8c42;
  margin-bottom: 8px;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #6a5a4a;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #fff8f2;
  border: 1px solid #ffe8d4;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #444444;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '✔';
  color: #ff8c42;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: tang-c; }
.wechat-article ol li {
  padding: 5px 0 5px 32px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: tang-c;
  content: counter(tang-c);
  font-weight: 800;
  color: #fff;
  background: #ff8c42;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: -32px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  border-radius: 8px;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #ff8c42;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid #ffc89e;
}

.wechat-article code {
  background: #fff3ea;
  color: #d06828;
  padding: 2px 8px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
  border: 1px solid #ffe0c8;
}

.wechat-article pre {
  background: #2a1e14;
  color: #f0dcc8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 12px;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border: none;
  border-radius: 0;
}

.wechat-article table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;
  font-size: 14px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #ffe0c8;
}

.wechat-article th {
  background: linear-gradient(135deg, #ff8c42, #ffaa5c);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #fff0e4;
  color: #444444;
}

.wechat-article tr:nth-child(even) { background: #fff8f2; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(255, 140, 66, 0.1);
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 28px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '🍊  🍊  🍊';
  font-size: 10px;
  letter-spacing: 6px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(255, 140, 66, 0.18) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 21px; }
}
`
  }
]
