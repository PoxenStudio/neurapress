import type { WechatTemplate } from '../types'

export const pressTemplates: WechatTemplate[] = [
  {
    id: "wechat-press-times",
    name: "都市日报",
    description: "经典报刊排版风格，衬线字体搭配黑白灰色调，适合深度报道与时事评论",
    category: "press",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1c1c1c","description":"主色调（深黑）"},{"name":"textColor","type":"color","defaultValue":"#2c2c2c","description":"正文颜色"},{"name":"backgroundColor","type":"color","defaultValue":"#fcfcfa","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#1c1c1c","fontSize":16,"lineHeight":1.9,"textAlign":"justify"},
    css: `/* 都市日报模板 - Press Times Template */
.wechat-article {
  font-family: "Georgia", "Noto Serif SC", "Source Han Serif SC", "Songti SC", serif;
  background: #fcfcfa;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #1c1c1c;
  position: relative;
}

/* 顶部双线装饰 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  border-top: 3px solid #1c1c1c;
  border-bottom: 1px solid #1c1c1c;
}

/* 段落 */
.wechat-article p {
  font-size: 16.5px;
  line-height: 1.9;
  margin: 18px 0;
  color: #2c2c2c;
  text-align: justify;
  text-indent: 2em;
  letter-spacing: 0.2px;
}

/* 一级标题 - 报纸头条风格 */
.wechat-article h1 {
  font-size: 32px;
  font-weight: 900;
  color: #0f0f0f;
  margin: 0 0 8px;
  padding: 20px 0 16px;
  line-height: 1.25;
  letter-spacing: -0.5px;
  border-bottom: 2px solid #1c1c1c;
  text-align: left;
}

/* 二级标题 - 栏目标题 */
.wechat-article h2 {
  font-size: 22px;
  font-weight: 700;
  color: #1c1c1c;
  margin: 40px 0 16px;
  padding: 0 0 10px;
  border-bottom: 1px solid #d0d0d0;
  letter-spacing: 0.5px;
  text-transform: none;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1c1c1c;
  margin: 32px 0 12px;
  letter-spacing: 0.3px;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 16px;
  font-weight: 600;
  color: #3a3a3a;
  margin: 24px 0 10px;
  font-style: italic;
}

/* 强调 */
.wechat-article strong {
  font-weight: 700;
  color: #0f0f0f;
}

.wechat-article em {
  font-style: italic;
  color: #2c2c2c;
}

/* 引用 - 报纸社论引语 */
.wechat-article blockquote {
  border: none;
  border-left: 3px solid #1c1c1c;
  padding: 16px 24px;
  margin: 28px 0;
  background: #f7f7f5;
  position: relative;
}

.wechat-article blockquote p {
  font-size: 15.5px;
  line-height: 1.8;
  text-indent: 0;
  color: #3a3a3a;
  font-style: italic;
  margin: 8px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 20px 0;
  padding: 16px 20px;
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 1.8;
  color: #2c2c2c;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '■';
  color: #1c1c1c;
  font-size: 6px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol {
  counter-reset: times-counter;
}

.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: times-counter;
  content: counter(times-counter) '.';
  font-weight: 700;
  color: #1c1c1c;
  font-family: Georgia, serif;
  display: inline-block;
  width: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 2px;
  text-align: center;
  font-size: 15px;
}

/* 链接 */
.wechat-article a {
  color: #1c1c1c;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
}

/* 行内代码 */
.wechat-article code {
  background: #f0f0ec;
  color: #2c2c2c;
  padding: 2px 6px;
  border-radius: 2px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.88em;
}

/* 代码块 */
.wechat-article pre {
  background: #2a2a28;
  color: #e8e8e4;
  padding: 20px 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.65;
  border-left: 3px solid #1c1c1c;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

/* 表格 - 经典报纸表格 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  font-size: 14.5px;
}

.wechat-article th {
  background: #1c1c1c;
  color: #fff;
  font-weight: 700;
  padding: 12px 14px;
  text-align: left;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.wechat-article td {
  padding: 11px 14px;
  border-bottom: 1px solid #ddd;
  color: #2c2c2c;
}

.wechat-article tr:last-child td {
  border-bottom: 2px solid #1c1c1c;
}

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.wechat-article figcaption {
  font-size: 13px;
  color: #777;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: auto;
  margin: 36px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '— ◆ —';
  color: #aaa;
  font-size: 12px;
  letter-spacing: 4px;
}

/* 高亮 */
.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 60%, rgba(28, 28, 28, 0.1) 60%);
}

/* 响应式 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 32px 20px;
  }

  .wechat-article h1 {
    font-size: 26px;
  }

  .wechat-article h2 {
    font-size: 20px;
  }

  .wechat-article p {
    font-size: 15.5px;
  }
}
`
  },
  {
    id: "wechat-press-financial",
    name: "商业周刊",
    description: "金融商业资讯风格，粉色三文鱼底色搭配衬线字体，适合财经分析与行业洞察",
    category: "press",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#9e7654","description":"主色调（古铜色）"},{"name":"textColor","type":"color","defaultValue":"#33302e","description":"正文颜色"},{"name":"backgroundColor","type":"color","defaultValue":"#fff1e6","description":"背景颜色（三文鱼粉）"}],
    defaultStyleSettings: {"themeColor":"#9e7654","fontSize":16,"lineHeight":1.85,"textAlign":"justify"},
    css: `/* 商业周刊模板 - Financial Press Template */
.wechat-article {
  font-family: "Georgia", "Noto Serif SC", "Source Han Serif SC", "Songti SC", serif;
  background: #fff1e6;
  padding: 44px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #33302e;
  position: relative;
}

/* 顶部装饰 - 经典金融刊物风格 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #9e7654;
}

/* 段落 */
.wechat-article p {
  font-size: 16px;
  line-height: 1.85;
  margin: 18px 0;
  color: #33302e;
  text-align: justify;
  letter-spacing: 0.15px;
}

/* 一级标题 - 封面报道 */
.wechat-article h1 {
  font-size: 30px;
  font-weight: 700;
  color: #2a2522;
  margin: 0 0 12px;
  padding: 16px 0 14px;
  line-height: 1.3;
  letter-spacing: -0.3px;
  border-bottom: 1px solid #c9a882;
  position: relative;
}

.wechat-article h1::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #9e7654;
}

/* 二级标题 */
.wechat-article h2 {
  font-size: 21px;
  font-weight: 700;
  color: #2a2522;
  margin: 36px 0 14px;
  padding: 0 0 10px;
  border-bottom: 1px solid #e0cebc;
  letter-spacing: 0.3px;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 18px;
  font-weight: 600;
  color: #3d3632;
  margin: 28px 0 12px;
  padding-left: 14px;
  border-left: 3px solid #9e7654;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 16px;
  font-weight: 600;
  color: #4a4340;
  margin: 24px 0 10px;
}

/* 强调 */
.wechat-article strong {
  font-weight: 700;
  color: #2a2522;
}

.wechat-article em {
  font-style: italic;
  color: #3d3632;
}

/* 引用 - 商业引言 */
.wechat-article blockquote {
  border: none;
  border-left: 4px solid #9e7654;
  padding: 18px 24px;
  margin: 28px 0;
  background: rgba(158, 118, 84, 0.08);
  position: relative;
}

.wechat-article blockquote p {
  font-size: 15.5px;
  line-height: 1.8;
  color: #4a4340;
  font-style: italic;
  margin: 6px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 20px 0;
  padding: 16px 20px;
  background: rgba(158, 118, 84, 0.06);
  border: none;
  border-left: 2px solid #c9a882;
  font-size: 16px;
  line-height: 1.8;
  color: #33302e;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '▸';
  color: #9e7654;
  font-size: 12px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol {
  counter-reset: fin-counter;
}

.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: fin-counter;
  content: counter(fin-counter);
  font-weight: 700;
  color: #fff;
  background: #9e7654;
  font-family: Georgia, serif;
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
  border-radius: 2px;
}

/* 链接 */
.wechat-article a {
  color: #9e7654;
  text-decoration: none;
  border-bottom: 1px solid #c9a882;
  transition: border-color 0.2s;
}

/* 行内代码 */
.wechat-article code {
  background: rgba(158, 118, 84, 0.1);
  color: #5a4a3a;
  padding: 2px 6px;
  border-radius: 2px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.88em;
}

/* 代码块 */
.wechat-article pre {
  background: #2a2522;
  color: #ede4da;
  padding: 20px 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.65;
  border-top: 3px solid #9e7654;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

/* 表格 - 财经数据风格 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  font-size: 14.5px;
}

.wechat-article th {
  background: #9e7654;
  color: #fff;
  font-weight: 600;
  padding: 12px 14px;
  text-align: left;
  font-size: 13px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.wechat-article td {
  padding: 11px 14px;
  border-bottom: 1px solid #e0cebc;
  color: #33302e;
}

.wechat-article tr:nth-child(even) {
  background: rgba(158, 118, 84, 0.04);
}

.wechat-article tr:last-child td {
  border-bottom: 2px solid #9e7654;
}

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border: none;
  border-radius: 0;
  box-shadow: 0 2px 12px rgba(42, 37, 34, 0.1);
}

.wechat-article figcaption {
  font-size: 13px;
  color: #8a7e74;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: 1px;
  background: #c9a882;
  margin: 36px 0;
}

/* 高亮 */
.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 60%, rgba(158, 118, 84, 0.2) 60%);
}

/* 响应式 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 32px 20px;
  }

  .wechat-article h1 {
    font-size: 25px;
  }

  .wechat-article h2 {
    font-size: 19px;
  }

  .wechat-article p {
    font-size: 15.5px;
  }
}
`
  },
  {
    id: "wechat-press-column",
    name: "深度专栏",
    description: "杂志深度报道风格，大标题配精致小标签，适合长文深度分析、人物专访与特稿写作",
    category: "press",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#c0392b","description":"主色调（砖红）"},{"name":"textColor","type":"color","defaultValue":"#333333","description":"正文颜色"}],
    defaultStyleSettings: {"themeColor":"#c0392b","fontSize":16,"lineHeight":2,"textAlign":"justify"},
    css: `/* 深度专栏模板 - Press Column Template */
.wechat-article {
  font-family: "Georgia", "Noto Serif SC", "Source Han Serif SC", "Songti SC", serif;
  background: #ffffff;
  padding: 44px 36px 48px;
  max-width: 677px;
  margin: 0 auto;
  color: #2b2b2b;
  position: relative;
}

/* 左侧装饰线 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #c0392b 0%, #c0392b 120px, #e8e8e8 120px, #e8e8e8 100%);
}

/* 段落 */
.wechat-article p {
  font-size: 16px;
  line-height: 2;
  margin: 18px 0;
  color: #333333;
  text-align: justify;
  letter-spacing: 0.3px;
}

/* 一级标题 - 特稿大标题 */
.wechat-article h1 {
  font-size: 34px;
  font-weight: 900;
  color: #1a1a1a;
  margin: 0 0 16px;
  padding: 0;
  line-height: 1.25;
  letter-spacing: -0.5px;
  border: none;
}

.wechat-article h1::after {
  content: 'FEATURE';
  display: block;
  font-family: -apple-system, "Helvetica Neue", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #ffffff;
  background: #c0392b;
  padding: 4px 12px;
  margin-top: 14px;
  display: inline-block;
}

/* 二级标题 */
.wechat-article h2 {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 44px 0 16px;
  padding: 0 0 12px;

  border: none;

  background-image:
    linear-gradient(90deg, #c0392b, #c0392b), /* 上层：短粗红线 (原 ::before) */
    linear-gradient(90deg, #e0e0e0, #e0e0e0); /* 下层：长细灰线 (原 border) */


  background-size:
    40px 3px, /* 红线：宽 40px，高 3px */
    100% 1px; /* 灰线：宽 100%，高 1px */


  background-position:
    left bottom,
    left bottom;

  background-repeat: no-repeat;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 18px;
  font-weight: 700;
  color: #2b2b2b;
  margin: 32px 0 12px;
  padding-left: 14px;
  border-left: 3px solid #c0392b;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 16px;
  font-weight: 600;
  color: #444444;
  margin: 24px 0 10px;
  font-style: italic;
}

/* 强调 */
.wechat-article strong {
  font-weight: 700;
  color: #1a1a1a;
}

.wechat-article em {
  font-style: italic;
  color: #444444;
}

/* 引用 - 拉引语/采访引言 */
.wechat-article blockquote {
  border: none;
  padding: 28px 32px;
  margin: 36px 0;
  background: #f9f5f3;
  position: relative;
  border-left: 4px solid #c0392b;
}

.wechat-article blockquote::before {
  content: '"';
  position: absolute;
  top: 8px;
  left: 14px;
  font-size: 48px;
  color: rgba(192, 57, 43, 0.2);
  font-family: Georgia, serif;
  line-height: 1;
}

.wechat-article blockquote p {
  font-size: 17px;
  line-height: 1.85;
  color: #2b2b2b;
  font-style: italic;
  margin: 4px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 22px 0;
  padding: 0 0 0 4px;
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 1.9;
  color: #333333;
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
  border: 2px solid #c0392b;
  border-radius: 50%;
  background: transparent;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol {
  counter-reset: column-counter;
}

.wechat-article ol li {
  padding: 5px 0 5px 34px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: column-counter;
  content: counter(column-counter);
  display: inline-block;
  width: 24px;
  margin-left: -34px;
  vertical-align: top;
  margin-top: 2px;
  text-align: center;
  font-size: 14px;
  font-weight: 900;
  color: #c0392b;
  font-family: Georgia, serif;
}



.wechat-article li span,
.wechat-article li code,
.wechat-article li pre {
  display: inline;
}

/* 链接 */
.wechat-article a {
  color: #c0392b;
  text-decoration: none;
  border-bottom: 1px solid rgba(192, 57, 43, 0.3);
}

/* 行内代码 */
.wechat-article code {
  background: #f5f2f0;
  color: #8b3a2f;
  padding: 2px 6px;
  border-radius: 2px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.88em;
}

/* 代码块 */
.wechat-article pre {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 22px 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.65;
  border-top: 3px solid #c0392b;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

/* 表格 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  font-size: 14.5px;
}

.wechat-article th {
  background: #c0392b;
  color: #ffffff;
  font-weight: 600;
  padding: 12px 14px;
  text-align: left;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.wechat-article td {
  padding: 12px 14px;
  border-bottom: 1px solid #eeeeee;
  color: #333333;
}

.wechat-article tr:nth-child(even) {
  background: #faf8f7;
}

.wechat-article tr:last-child td {
  border-bottom: 2px solid #c0392b;
}

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 32px auto;
  border-radius: 0;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.wechat-article figcaption {
  font-size: 13px;
  color: #888888;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: auto;
  margin: 40px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '■ ■ ■';
  color: #c0392b;
  font-size: 6px;
  letter-spacing: 6px;
}

/* 高亮 */
.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(192, 57, 43, 0.12) 55%);
}

/* 响应式 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 36px 20px;
  }

  .wechat-article h1 {
    font-size: 28px;
  }

  .wechat-article h2 {
    font-size: 20px;
  }

  .wechat-article p {
    font-size: 15.5px;
  }
}
`
  },
  {
    id: "wechat-press-morning",
    name: "晨间快报",
    description: "现代新闻速递风格，无衬线字体搭配蓝色信息层级，适合行业早报、资讯摘要与要闻速览",
    category: "press",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1a56db","description":"主色调（新闻蓝）"},{"name":"accentColor","type":"color","defaultValue":"#dc2626","description":"强调色（速报红）"}],
    defaultStyleSettings: {"themeColor":"#1a56db","fontSize":15,"lineHeight":1.8,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #ffffff;
  padding: 36px 32px;
  max-width: 677px;
  margin: 0 auto;
  color: #2c3e50;
  position: relative;
}

/* 顶部日期栏 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #1a56db;
}

/* 段落 */
.wechat-article p {
  font-size: 15px;
  line-height: 1.8;
  margin: 14px 0;
  color: #374151;
  text-align: justify;
}

/* 一级标题 — 头条 */
.wechat-article h1 {
  font-size: 28px;
  font-weight: 800;
  color: #111827;
  margin: 28px 0 12px;
  padding: 0;
  line-height: 1.3;
  letter-spacing: -0.3px;
  border: none;
}

.wechat-article h1::before {
  content: 'BREAKING';
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
  background: #dc2626;
  padding: 3px 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  vertical-align: top;
}

/* 二级标题 */
.wechat-article h2 {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 36px 0 12px;
  padding: 12px 0 10px;
  border-top: 3px solid #1a56db;
  border-bottom: 1px solid #e5e7eb;
  letter-spacing: -0.2px;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 17px;
  font-weight: 600;
  color: #1a56db;
  margin: 28px 0 10px;
}

.wechat-article h3::before {
  content: '▎';
  color: #1a56db;
  margin-right: 6px;
  display: inline-block;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #4b5563;
  margin: 22px 0 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13px;
}

.wechat-article strong { font-weight: 700; color: #111827; }
.wechat-article em { font-style: italic; color: #6b7280; }

/* 引用 — 要点摘要 */
.wechat-article blockquote {
  border: none;
  padding: 16px 20px;
  margin: 20px 0;
  background: #eff6ff;
  border-left: 4px solid #1a56db;
  border-radius: 0 6px 6px 0;
}

.wechat-article blockquote::before {
  content: 'KEY POINT';
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #1a56db;
  margin-bottom: 8px;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.7;
  color: #1e40af;
  margin: 4px 0;
  font-weight: 500;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 16px 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 15px;
  line-height: 1.75;
  color: #374151;
}

.wechat-article ul li {
  padding: 6px 0 6px 22px;
  position: relative;
  border-bottom: 1px solid #f3f4f6;
}

.wechat-article ul li:last-child { border-bottom: none; }

.wechat-article ul li::before {
  content: '';
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  width: 8px;
  height: 8px;
  background: #1a56db;
  border-radius: 2px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: morning-c; }
.wechat-article ol li {
  padding: 6px 0 6px 32px;
  position: relative;
  border-bottom: 1px solid #f3f4f6;
}

.wechat-article ol li:last-child { border-bottom: none; }

.wechat-article ol li::before {
  counter-increment: morning-c;
  content: counter(morning-c);
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: -32px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  background: #1a56db;
  border-radius: 4px;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #1a56db;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid rgba(26, 86, 219, 0.3);
}

.wechat-article code {
  background: #f3f4f6;
  color: #374151;
  padding: 2px 7px;
  border-radius: 4px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #111827;
  color: #e5e7eb;
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
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 14px;
}

.wechat-article th {
  background: #1a56db;
  color: #fff;
  font-weight: 600;
  padding: 10px 14px;
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
}

.wechat-article tr:nth-child(even) { background: #f9fafb; }
.wechat-article tr:last-child td { border-bottom: 2px solid #1a56db; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}

.wechat-article figcaption {
  font-size: 12px;
  color: #9ca3af;
  text-align: left;
  margin-top: 6px;
  padding-left: 4px;
  border-left: 2px solid #1a56db;
}

.wechat-article hr {
  border: none;
  height: 2px;
  background: #e5e7eb;
  margin: 32px 0;
}

.wechat-article .highlight {
  background: rgba(26, 86, 219, 0.08);
  padding: 1px 4px;
  border-radius: 2px;
}

@media (max-width: 480px) {
  .wechat-article { padding: 28px 18px; }
  .wechat-article h1 { font-size: 24px; }
}
`
  },
  {
    id: "wechat-press-weekend",
    name: "周末副刊",
    description: "优雅文化版面风格，墨绿色调搭配衬线字体，适合书评影评、文化观察与艺术鉴赏",
    category: "press",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#2d5a3d","description":"主色调（墨绿）"},{"name":"accentColor","type":"color","defaultValue":"#6a8a6a","description":"辅助色（灰绿）"},{"name":"backgroundColor","type":"color","defaultValue":"#fafdf8","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#2d5a3d","fontSize":16,"lineHeight":2,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: "Georgia", "Noto Serif SC", "Source Han Serif SC", "Songti SC", serif;
  background: #fafdf8;
  padding: 48px 40px;
  max-width: 677px;
  margin: 0 auto;
  color: #2d3b2d;
  position: relative;
}

/* 顶部文化版装饰 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 40px;
  right: 40px;
  height: 1px;
  background: #2d5a3d;
}

.wechat-article::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 40px;
  right: 40px;
  height: 1px;
  background: #2d5a3d;
}

/* 段落 */
.wechat-article p {
  font-size: 16px;
  line-height: 2;
  margin: 18px 0;
  color: #2d3b2d;
  text-align: justify;
  text-indent: 2em;
  letter-spacing: 0.3px;
}

/* 一级标题 — 副刊题名 */
.wechat-article h1 {
  font-size: 30px;
  font-weight: 700;
  color: #1a3020;
  margin: 16px 0 20px;
  padding: 20px 0 16px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: 2px;
  border: none;
  position: relative;
}

.wechat-article h1::before {
  content: 'WEEKEND SUPPLEMENT';
  display: block;
  font-family: -apple-system, "Helvetica Neue", sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 5px;
  color: #6a8a6a;
  margin-bottom: 12px;
}

.wechat-article h1::after {
  content: ' ';
  display: block;
  width: 80px;
  height: 1px;
  background: #2d5a3d;
  margin: 16px auto 0;
}

/* 二级标题 — 微信完美兼容版 (森系双线) */
.wechat-article h2 {
  /* --- 保留原有的精美排版 --- */
  font-size: 21px;
  font-weight: 600;
  color: #1a3020;
  margin: 44px 0 16px;
  padding: 0 0 12px;
  letter-spacing: 1px;

  /* 1. 扫地出门：删掉无用的绝对定位和原有边框 */
  border: none;
  /* position: relative; 删掉这行 */

  /* 2. 多重背景魔法：同时渲染长短两条线 */
  background-image:
    linear-gradient(90deg, #2d5a3d, #2d5a3d), /* 上层：短粗的深绿线 (原 ::after) */
    linear-gradient(90deg, #c8d8c8, #c8d8c8); /* 下层：长细的浅绿线 (原 border) */

  /* 3. 尺寸控制：完美还原你原本设计的宽高 */
  background-size:
    48px 2px, /* 深绿线：宽度 48px，高度 2px */
    100% 1px; /* 浅绿线：宽度 100%，高度 1px */

  /* 4. 底部对齐：让两根线在左下角严丝合缝 */
  background-position:
    left bottom,
    left bottom;

  background-repeat: no-repeat;
}
/* 三级标题 */
.wechat-article h3 {
  font-size: 18px;
  font-weight: 600;
  color: #2d5a3d;
  margin: 32px 0 12px;
  font-style: italic;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 16px;
  font-weight: 600;
  color: #4a6a4a;
  margin: 24px 0 10px;
}

.wechat-article strong { font-weight: 700; color: #1a3020; }
.wechat-article em { font-style: italic; color: #4a6a4a; }

/* 引用 — 名句/书摘 */
.wechat-article blockquote {
  border: none;
  border-top: 1px solid #c8d8c8;
  border-bottom: 1px solid #c8d8c8;
  padding: 0 24px 28px 24px;
  margin: 36px 0;
  background: transparent;
}

.wechat-article blockquote::before {
  content: '❝';
  display: block;
  width: 56px;
  margin: -14px auto 16px auto;
  text-align: center;
  font-size: 28px;
  color: #6a8a6a;
  background: #fafdf8;
  line-height: 1;
}

.wechat-article blockquote p {
  font-size: 17px;
  line-height: 1.9;
  color: #2d3b2d;
  text-align: center;
  text-indent: 0;
  font-style: italic;
  margin: 4px 0;
  letter-spacing: 0.5px;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 22px 0;
  padding: 16px 24px;
  background: rgba(45, 90, 61, 0.03);
  border: none;
  border-left: 2px solid #a0c0a0;
  font-size: 15.5px;
  line-height: 1.9;
  color: #2d3b2d;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '—';
  color: #6a8a6a;
  font-size: 14px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: weekend-c; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: weekend-c;
  content: counter(weekend-c);
  display: inline-block;
  width: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 2px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #2d5a3d;
  font-family: Georgia, serif;
  font-style: italic;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #2d5a3d;
  text-decoration: none;
  border-bottom: 1px solid #a0c0a0;
}

.wechat-article code {
  background: #eef4ee;
  color: #2d5a3d;
  padding: 2px 6px;
  border-radius: 2px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #1a2a1e;
  color: #c8dcc8;
  padding: 22px 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-left: 3px solid #2d5a3d;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  font-size: 14.5px;
}

.wechat-article th {
  background: #2d5a3d;
  color: #f0f8f0;
  font-weight: 600;
  padding: 12px 14px;
  text-align: left;
  font-size: 13px;
  letter-spacing: 1px;
}

.wechat-article td {
  padding: 12px 14px;
  border-bottom: 1px solid #d8e4d8;
  color: #2d3b2d;
}

.wechat-article tr:nth-child(even) { background: rgba(45, 90, 61, 0.03); }
.wechat-article tr:last-child td { border-bottom: 2px solid #2d5a3d; }

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
  font-size: 13px;
  color: #6a8a6a;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
  letter-spacing: 0.5px;
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 40px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '§';
  color: #a0c0a0;
  font-size: 16px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 60%, rgba(45, 90, 61, 0.1) 60%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 36px 22px; }
  .wechat-article::before, .wechat-article::after { left: 22px; right: 22px; }
  .wechat-article h1 { font-size: 25px; }
  .wechat-article h2 { font-size: 19px; }
  .wechat-article p { font-size: 15px; }
}
`
  },
  {
    id: "wechat-press-global",
    name: "环球视野",
    description: "国际大刊排版风格，深蓝庄重基调搭配金线点缀，适合国际时事、政策解读与宏观分析",
    category: "press",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1b2a4a","description":"主色调（深蓝）"},{"name":"accentColor","type":"color","defaultValue":"#c5a55a","description":"强调色（金线）"},{"name":"backgroundColor","type":"color","defaultValue":"#f8f9fb","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#1b2a4a","fontSize":16,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: "Georgia", "Noto Serif SC", "Source Han Serif SC", "Songti SC", serif;
  background: #f8f9fb;
  padding: 44px 38px;
  max-width: 677px;
  margin: 0 auto;
  color: #2a3040;
  position: relative;
}

/* 顶部双色装饰 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(180deg, #1b2a4a 0%, #1b2a4a 60%, #c5a55a 60%, #c5a55a 100%);
}

/* 段落 */
.wechat-article p {
  font-size: 16px;
  line-height: 1.9;
  margin: 16px 0;
  color: #303848;
  text-align: justify;
  letter-spacing: 0.2px;
}

/* 一级标题 — 封面头条 */
.wechat-article h1 {
  font-size: 30px;
  font-weight: 800;
  color: #0f1a30;
  margin: 12px 0 16px;
  padding: 16px 0;
  line-height: 1.25;
  letter-spacing: -0.3px;
  border: none;
  position: relative;
}

.wechat-article h1::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #1b2a4a 0%, #1b2a4a 70%, #c5a55a 70%, #c5a55a 100%);
  margin-top: 16px;
}

/* 二级标题 */
/* 二级标题 — 微信完美兼容版 */
.wechat-article h2 {
  font-size: 22px;
  font-weight: 700;
  color: #1b2a4a;
  margin: 40px 0 16px;
  padding: 0 0 12px;

  /* 1. 彻底去掉原本的边框和无用的定位 */
  border: none;
  /* position: relative; 删掉 */

  /* 2. 用多重背景“画”出两条线 (写在前面的在最上层) */
  background-image:
    linear-gradient(90deg, #c5a55a, #c5a55a), /* 上层短粗线：也就是你原本的 ::before */
    linear-gradient(90deg, #d8dce4, #d8dce4); /* 下层长细线：也就是你原本的 border */

  /* 3. 分别定义这两条线的尺寸 */
  background-size:
    36px 3px, /* 短粗线：宽 36px，高 3px */
    100% 1px; /* 长细线：宽 100%（占满全宽），高 1px */

  /* 4. 让它们都乖乖贴在左下角 */
  background-position:
    left bottom,
    left bottom;

  /* 5. 防止背景像瓷砖一样平铺重复 */
  background-repeat: no-repeat;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1b2a4a;
  margin: 32px 0 12px;
  padding-left: 16px;
  border-left: 3px solid #c5a55a;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 16px;
  font-weight: 600;
  color: #3a4a60;
  margin: 24px 0 10px;
}

.wechat-article strong { font-weight: 700; color: #0f1a30; }
.wechat-article em { font-style: italic; color: #4a5a70; }

/* 引用 — 分析师观点 */
.wechat-article blockquote {
  border: none;
  padding: 20px 24px;
  margin: 28px 0;
  background: #f0f2f6;
  border-left: 4px solid #1b2a4a;
  position: relative;
}

.wechat-article blockquote::before {
  content: '';
  display: block;
  font-family: -apple-system, "Helvetica Neue", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #c5a55a;
  margin-bottom: 10px;
}

.wechat-article blockquote p {
  font-size: 15.5px;
  line-height: 1.85;
  color: #2a3040;
  margin: 4px 0;
  font-style: italic;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 20px 0;
  padding: 0 0 0 4px;
  background: transparent;
  border: none;
  font-size: 15.5px;
  line-height: 1.85;
  color: #303848;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
  border-bottom: 1px solid #f0f2f4;
}

.wechat-article ul li:last-child { border-bottom: none; }

.wechat-article ul li::before {
  content: '■';
  color: #c5a55a;
  font-size: 6px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: global-c; }
.wechat-article ol li {
  padding: 5px 0 5px 32px;
  position: relative;
  border-bottom: 1px solid #f0f2f4;
}

.wechat-article ol li:last-child { border-bottom: none; }

.wechat-article ol li::before {
  counter-increment: global-c;
  content: counter(global-c);
  display: inline-block;
  width: 22px;
  margin-left: -32px;
  vertical-align: top;
  margin-top: 2px;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  color: #1b2a4a;
  font-family: Georgia, serif;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #1b2a4a;
  text-decoration: none;
  border-bottom: 1px solid #c5a55a;
}

.wechat-article code {
  background: #eef0f4;
  color: #2a3a50;
  padding: 2px 7px;
  border-radius: 2px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #0f1a30;
  color: #c8d0e0;
  padding: 22px 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-top: 3px solid #c5a55a;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

/* 表格 — 数据面板 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  font-size: 14.5px;
}

.wechat-article th {
  background: #1b2a4a;
  color: #e8ecf0;
  font-weight: 600;
  padding: 12px 14px;
  text-align: left;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.wechat-article td {
  padding: 12px 14px;
  border-bottom: 1px solid #e0e4ea;
  color: #2a3040;
}

.wechat-article tr:nth-child(even) { background: #f4f5f8; }
.wechat-article tr:last-child td { border-bottom: 2px solid #c5a55a; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border: none;
  border-radius: 0;
  box-shadow: 0 2px 12px rgba(15, 26, 48, 0.08);
}

.wechat-article figcaption {
  font-size: 12px;
  color: #8090a0;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}

.wechat-article hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c5a55a, transparent);
  margin: 36px 0;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 60%, rgba(197, 165, 90, 0.15) 60%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 36px 20px; }
  .wechat-article h1 { font-size: 25px; }
  .wechat-article h2 { font-size: 20px; }
  .wechat-article p { font-size: 15px; }
}
`
  }
]
