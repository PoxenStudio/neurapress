import type { WechatTemplate } from '../types'

export const literaryTemplates: WechatTemplate[] = [
  {
    id: "wechat-literary-poetic",
    name: "诗意留白",
    description: "极致留白的现代文学风格，大量呼吸空间搭配优雅字体，适合散文、诗歌与哲理短文",
    category: "literary",
    variables: [{"name":"textColor","type":"color","defaultValue":"#3a3a3a","description":"正文颜色"},{"name":"backgroundColor","type":"color","defaultValue":"#fdfdfc","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#1a1a1a","fontSize":16,"lineHeight":2.4,"textAlign":"justify"},
    css: `/* 诗意留白模板 - Poetic Whitespace Template */
.wechat-article {
  font-family: "Noto Serif SC", "Source Han Serif SC", "Songti SC", Georgia, serif;
  background: #fdfdfc;
  padding: 56px 48px;
  max-width: 677px;
  margin: 0 auto;
  color: #3a3a3a;
}

/* 段落 - 大行距，优雅呼吸感 */
.wechat-article p {
  font-size: 16.5px;
  line-height: 2.4;
  margin: 24px 0;
  color: #3a3a3a;
  text-align: justify;
  letter-spacing: 1px;
}

/* 一级标题 - 诗题 */
.wechat-article h1 {
  font-size: 30px;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 48px;
  padding: 32px 0;
  line-height: 1.5;
  letter-spacing: 8px;
  text-align: center;
  border: none;
  position: relative;
}

.wechat-article h1::before {
  content: ' ';
  display: block;
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, #bbb, transparent);
  margin: 0 auto 24px;
}

.wechat-article h1::after {
  content: ' ';
  display: block;
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, #bbb, transparent);
  margin: 24px auto 0;
}

/* 二级标题 */
.wechat-article h2 {
  font-size: 20px;
  font-weight: 400;
  color: #2a2a2a;
  margin: 56px 0 24px;
  padding: 0;
  letter-spacing: 6px;
  text-align: center;
  border: none;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 17px;
  font-weight: 600;
  color: #3a3a3a;
  margin: 40px 0 16px;
  letter-spacing: 3px;
  text-align: center;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 16px;
  font-weight: 400;
  color: #555555;
  margin: 32px 0 12px;
  letter-spacing: 2px;
  font-style: italic;
}

/* 强调 */
.wechat-article strong {
  font-weight: 600;
  color: #1a1a1a;
}

.wechat-article em {
  font-style: italic;
  color: #666666;
}

/* 引用 - 诗行/名句 */
.wechat-article blockquote {
  border: none;
  padding: 36px 24px;
  margin: 40px 0;
  background: transparent;
  text-align: center;
  position: relative;
}

.wechat-article blockquote::before {
  content: '';
  display: block;
  width: 40px;
  height: 1px;
  background: #ccc;
  margin: 0 auto 20px;
}

.wechat-article blockquote::after {
  content: '';
  display: block;
  width: 40px;
  height: 1px;
  background: #ccc;
  margin: 20px auto 0;
}

.wechat-article blockquote p {
  font-size: 18px;
  line-height: 2.2;
  color: #2a2a2a;
  text-align: center;
  letter-spacing: 2px;
  margin: 4px 0;
  font-weight: 400;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 28px 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 2.2;
  color: #3a3a3a;
}

.wechat-article ul li {
  padding: 6px 0 6px 24px;
  position: relative;
}

.wechat-article ul li::before {
  content: '—';
  color: #cccccc;
  font-size: 14px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
}

.wechat-article ol {
  counter-reset: poetic-counter;
}

.wechat-article ol li {
  padding: 6px 0 6px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: poetic-counter;
  content: counter(poetic-counter);
  color: #bbbbbb;
  display: inline-block;
  width: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 4px;
  margin-right: 8px;
  text-align: center;
  font-size: 13px;
  font-weight: 300;
  font-family: Georgia, serif;
}



.wechat-article li span,
.wechat-article li code,
.wechat-article li pre {
  display: inline;
}

/* 链接 */
.wechat-article a {
  color: #3a3a3a;
  text-decoration: none;
  border-bottom: 1px solid #ddd;
}

/* 行内代码 */
.wechat-article code {
  background: #f5f5f3;
  color: #555555;
  padding: 2px 8px;
  border-radius: 3px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.85em;
}

/* 代码块 */
.wechat-article pre {
  background: #f8f8f6;
  color: #3a3a3a;
  padding: 24px 28px;
  margin: 32px 0;
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
}

/* 表格 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  font-size: 14px;
}

.wechat-article th {
  background: transparent;
  color: #999999;
  font-weight: 400;
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  border-bottom: 1px solid #e5e5e5;
}

.wechat-article td {
  padding: 14px 16px;
  border-bottom: 1px solid #f0f0f0;
  color: #3a3a3a;
  font-size: 15px;
}

.wechat-article tr:last-child td {
  border-bottom: 1px solid #e5e5e5;
}

/* 图片 */
.wechat-article img {
  max-width: 90%;
  height: auto !important;
  display: block;
  margin: 40px auto;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.wechat-article figcaption {
  font-size: 13px;
  color: #bbbbbb;
  text-align: center;
  margin-top: 12px;
  letter-spacing: 2px;
}

/* 分隔线 - 极简竖线 */
.wechat-article hr {
  border: none;
  height: auto;
  margin: 48px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '';
  display: inline-block;
  width: 1px;
  height: 32px;
  background: linear-gradient(180deg, transparent, #ccc, transparent);
  vertical-align: middle;
}

/* 高亮 */
.wechat-article .highlight {
  background: transparent;
  border-bottom: 1px solid #ccc;
}

/* 响应式 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 40px 24px;
  }

  .wechat-article h1 {
    font-size: 24px;
    letter-spacing: 6px;
  }

  .wechat-article h2 {
    font-size: 18px;
  }

  .wechat-article p {
    font-size: 15.5px;
    line-height: 2.2;
  }

  .wechat-article blockquote p {
    font-size: 16px;
  }
}
`
  },
  {
    id: "wechat-literary-wabisabi",
    name: "侘寂之美",
    description: "日式侘寂美学风格，极度克制的灰调配大面积留白，适合冥想札记、设计美学与极简生活方式",
    category: "literary",
    variables: [{"name":"textColor","type":"color","defaultValue":"#5a5a58","description":"正文颜色"},{"name":"backgroundColor","type":"color","defaultValue":"#f7f6f3","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#5a5a58","fontSize":15,"lineHeight":2.2,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: "Noto Serif SC", "Source Han Serif SC", "Songti SC", "Hiragino Mincho ProN", Georgia, serif;
  background: #f7f6f3;
  padding: 56px 44px;
  max-width: 677px;
  margin: 0 auto;
  color: #5a5a58;
}

.wechat-article p {
  font-size: 15.5px;
  line-height: 2.2;
  margin: 22px 0;
  color: #5a5a58;
  text-align: justify;
  letter-spacing: 0.8px;
}

.wechat-article h1 {
  font-size: 24px;
  font-weight: 400;
  color: #3a3a38;
  margin: 0 0 48px;
  padding: 40px 0 24px;
  text-align: center;
  letter-spacing: 10px;
  border: none;
  position: relative;
}

.wechat-article h1::after {
  content: '';
  display: block;
  width: 60px;
  height: 1px;
  background: #c8c6c0;
  margin: 28px auto 0;
}

.wechat-article h2 {
  font-size: 18px;
  font-weight: 400;
  color: #4a4a48;
  margin: 52px 0 20px;
  padding: 0;
  letter-spacing: 5px;
  text-align: center;
  border: none;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 500;
  color: #5a5a58;
  margin: 36px 0 14px;
  letter-spacing: 2px;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 400;
  color: #7a7a78;
  margin: 28px 0 10px;
  font-style: italic;
}

.wechat-article strong { font-weight: 600; color: #3a3a38; }
.wechat-article em { font-style: italic; color: #7a7a78; }

.wechat-article blockquote {
  border: none;
  padding: 32px 20px;
  margin: 36px 0;
  background: transparent;
  text-align: center;
}

.wechat-article blockquote::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: #c8c6c0;
  margin: 0 auto 16px;
}

.wechat-article blockquote::after {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: #c8c6c0;
  margin: 16px auto 0;
}

.wechat-article blockquote p {
  font-size: 16px;
  line-height: 2;
  color: #6a6a68;
  text-align: center;
  margin: 4px 0;
  letter-spacing: 1.5px;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 24px 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 15px;
  line-height: 2.1;
  color: #5a5a58;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '·';
  color: #b0aea8;
  font-size: 20px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: wabi-c; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: wabi-c;
  content: counter(wabi-c);
  display: inline-block;
  width: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 4px;
  margin-right: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  color: #b0aea8;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #6a6a68;
  text-decoration: none;
  border-bottom: 1px solid #d8d6d0;
}

.wechat-article code {
  background: #efeeeb;
  color: #5a5a58;
  padding: 2px 6px;
  border-radius: 2px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.85em;
}

.wechat-article pre {
  background: #efeeeb;
  color: #4a4a48;
  padding: 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border: none;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
}

.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  font-size: 14px;
}

.wechat-article th {
  background: transparent;
  color: #8a8a88;
  font-weight: 400;
  padding: 12px 14px;
  text-align: left;
  font-size: 12px;
  letter-spacing: 3px;
  border-bottom: 1px solid #c8c6c0;
}

.wechat-article td {
  padding: 14px 14px;
  border-bottom: 1px solid #e8e6e0;
  color: #5a5a58;
}

.wechat-article tr:last-child td { border-bottom: 1px solid #c8c6c0; }

.wechat-article img {
  max-width: 88%;
  height: auto !important;
  display: block;
  margin: 36px auto;
  border: none;
  border-radius: 0;
  box-shadow: none;
  opacity: 0.95;
}

.wechat-article figcaption {
  font-size: 12px;
  color: #b0aea8;
  text-align: center;
  margin-top: 12px;
  letter-spacing: 3px;
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 48px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #c8c6c0;
  border-radius: 50%;
}

.wechat-article .highlight {
  background: transparent;
  border-bottom: 1px solid #c8c6c0;
}

@media (max-width: 480px) {
  .wechat-article { padding: 40px 24px; }
  .wechat-article h1 { font-size: 20px; letter-spacing: 6px; }
  .wechat-article p { font-size: 15px; line-height: 2; }
}
`
  },
  {
    id: "wechat-literary-garden",
    name: "文苑清韵",
    description: "素雅书卷气质的文学模板，淡墨绿配温润纸色，适合随笔、书评、生活感悟与文化评论",
    category: "literary",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#7c9a72","description":"主色调（苔绿）"},{"name":"accentColor","type":"color","defaultValue":"#a8c49c","description":"辅助色（嫩叶绿）"},{"name":"textColor","type":"color","defaultValue":"#3b3b3b","description":"正文颜色"},{"name":"titleColor","type":"color","defaultValue":"#2d3a29","description":"标题颜色（墨绿）"},{"name":"backgroundColor","type":"color","defaultValue":"#faf9f4","description":"背景颜色（米黄）"}],
    defaultStyleSettings: {"themeColor":"#2d3a29","fontSize":16,"lineHeight":2.1,"textAlign":"justify"},
    css: `/* 文苑清韵模板 - Literary Garden Template */
.wechat-article {
  font-family: "Noto Serif SC", "Source Han Serif SC", "Songti SC", Georgia, "Times New Roman", serif;
  background: #faf9f4;
  padding: 44px 40px;
  max-width: 677px;
  margin: 0 auto;
  color: #3b3b3b;
  position: relative;
}

/* 顶部书签装饰 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 48px;
  width: 2px;
  height: 32px;
  background: #7c9a72;
}

.wechat-article::after {
  content: ' ';
  position: absolute;
  top: 0;
  left: 52px;
  width: 2px;
  height: 24px;
  background: #a8c49c;
}

/* 段落 */
.wechat-article p {
  font-size: 16.5px;
  line-height: 2.1;
  margin: 20px 0;
  color: #3b3b3b;
  text-align: justify;
  text-indent: 2em;
  letter-spacing: 0.5px;
}

/* 一级标题 - 卷首题名 */
.wechat-article h1 {
  font-size: 28px;
  font-weight: 600;
  color: #2d3a29;
  margin: 0 0 36px;
  padding: 20px 0 20px;
  line-height: 1.4;
  letter-spacing: 6px;
  text-align: center;
  border: none;
  position: relative;
}

.wechat-article h1::after {
  content: ' ';
  display: block;
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #7c9a72, transparent);
  margin: 20px auto 0;
}

/* 二级标题 - 小辑 */
.wechat-article h2 {
  font-size: 21px;
  font-weight: 600;
  color: #2d3a29;
  margin: 44px 0 20px;
  padding: 0;
  letter-spacing: 3px;
  text-align: center;
  border: none;
  position: relative;
}

.wechat-article h2::before {
  content: '·';
  color: #7c9a72;
  margin-right: 12px;
  font-size: 24px;
  vertical-align: middle;
}

.wechat-article h2::after {
  content: '·';
  color: #7c9a72;
  margin-left: 12px;
  font-size: 24px;
  vertical-align: middle;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 18px;
  font-weight: 600;
  color: #3d4f38;
  margin: 32px 0 14px;
  padding-left: 16px;
  letter-spacing: 1.5px;
  border-left: 3px solid #a8c49c;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 16.5px;
  font-weight: 600;
  color: #4a5a44;
  margin: 24px 0 10px;
  font-style: italic;
}

/* 强调 */
.wechat-article strong {
  font-weight: 700;
  color: #2d3a29;
}

.wechat-article em {
  font-style: italic;
  color: #4a5a44;
}

/* 引用 - 书页批注 */
.wechat-article blockquote {
  border: none;
  padding: 24px 28px;
  margin: 32px 16px;
  background: linear-gradient(135deg, #f4f2ea 0%, #f0ede4 100%);
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(124, 154, 114, 0.15);
}

.wechat-article blockquote::before {
  content: '"';
  position: absolute;
  top: 4px;
  left: 12px;
  font-size: 40px;
  color: rgba(124, 154, 114, 0.4);
  font-family: Georgia, serif;
  line-height: 1;
}

.wechat-article blockquote::after {
  content: '"';
  position: absolute;
  bottom: -4px;
  right: 12px;
  font-size: 40px;
  color: rgba(124, 154, 114, 0.4);
  font-family: Georgia, serif;
  line-height: 1;
}

.wechat-article blockquote p {
  font-size: 15.5px;
  line-height: 2;
  text-indent: 0;
  color: #4a5a44;
  margin: 6px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 24px 0;
  padding: 16px 24px;
  background: rgba(168, 196, 156, 0.06);
  border: none;
  border-top: 1px solid rgba(124, 154, 114, 0.2);
  border-bottom: 1px solid rgba(124, 154, 114, 0.2);
  font-size: 16px;
  line-height: 1.9;
  color: #3b3b3b;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '○';
  color: #7c9a72;
  font-size: 8px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
}

.wechat-article ol {
  counter-reset: garden-counter;
}

.wechat-article ol li {
  padding: 5px 0 5px 32px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: garden-counter;
  content: counter(garden-counter, cjk-ideographic);
  color: #7c9a72;
  display: inline-block;
  width: 24px;
  margin-left: -32px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  font-family: "Noto Serif SC", serif;
}



.wechat-article li span,
.wechat-article li code,
.wechat-article li pre {
  display: inline;
}

/* 链接 */
.wechat-article a {
  color: #5a7a52;
  text-decoration: none;
  border-bottom: 1px dashed rgba(124, 154, 114, 0.5);
}

/* 行内代码 */
.wechat-article code {
  background: rgba(168, 196, 156, 0.12);
  color: #3d5a35;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.88em;
}

/* 代码块 */
.wechat-article pre {
  background: #2d3a29;
  color: #d4ddd0;
  padding: 22px 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.7;
  border-left: 3px solid #7c9a72;
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
  background: #4a5f44;
  color: #f4f2ea;
  font-weight: 600;
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  letter-spacing: 1px;
}

.wechat-article td {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(124, 154, 114, 0.15);
  color: #3b3b3b;
}

.wechat-article tr:nth-child(even) {
  background: rgba(168, 196, 156, 0.05);
}

.wechat-article tr:last-child td {
  border-bottom: 2px solid rgba(124, 154, 114, 0.3);
}

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 32px auto;
  border: 6px solid #fff;
  box-shadow: 0 3px 16px rgba(45, 58, 41, 0.08);
  border-radius: 0;
}

.wechat-article figcaption {
  font-size: 13px;
  color: #8a8a7a;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
  letter-spacing: 1px;
}

/* 分隔线 - 花草纹饰 */
.wechat-article hr {
  border: none;
  height: auto;
  margin: 40px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '❦';
  color: rgba(124, 154, 114, 0.5);
  font-size: 18px;
}

/* 高亮 */
.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(168, 196, 156, 0.25) 55%);
}

/* 响应式 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 36px 20px;
  }

  .wechat-article h1 {
    font-size: 24px;
    letter-spacing: 4px;
  }

  .wechat-article h2 {
    font-size: 19px;
  }

  .wechat-article p {
    font-size: 15.5px;
    line-height: 2;
  }

  .wechat-article blockquote {
    margin: 24px 0;
    padding: 20px 22px;
  }
}
`
  },
  {
    id: "wechat-literary-ink",
    name: "水墨文学",
    description: "水墨国风质感的文学模板，适合散文、诗歌与古典文学",
    category: "literary",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"rgba(139, 69, 19, 1)","description":"主色调（赭石色）"},{"name":"accentColor","type":"color","defaultValue":"rgba(180, 50, 50, 0.85)","description":"强调色（印章红）"},{"name":"textColor","type":"color","defaultValue":"#3a3a3a","description":"正文颜色"},{"name":"titleColor","type":"color","defaultValue":"#1a1a1a","description":"标题颜色"},{"name":"backgroundColor","type":"color","defaultValue":"#fafaf8","description":"背景颜色（宣纸色）"},{"name":"borderColor","type":"color","defaultValue":"rgba(80, 60, 40, 0.3)","description":"边框/装饰色"}],
    defaultStyleSettings: {"themeColor":"#1a1a1a","fontSize":17,"lineHeight":2.2,"textAlign":"justify"},
    css: `/* 水墨文学模板 - Ink Literary Template */
.wechat-article {
  font-family: "LXGW WenKai", "Noto Serif SC", "Source Han Serif SC", "Songti SC", "SimSun", serif;
  background: linear-gradient(180deg, #fafaf8 0%, #f5f5f0 50%, #f0efe8 100%);
  border-radius: 0;
  padding: 0 36px 48px 36px;
  position: relative;
  color: #2c2c2c;
  max-width: 677px;
  margin: 0 auto;
}

/* 水墨纹理背景 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    url('data:image/svg+xml,%3Csvg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" opacity="0.03"/%3E%3C/svg%3E'),
    url('data:image/svg+xml,%3Csvg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 280 Q80 200 120 220 T200 180 T280 200 T360 140" stroke="rgba(60,60,60,0.06)" stroke-width="20" fill="none" stroke-linecap="round"/%3E%3Cpath d="M40 260 Q100 180 160 200 T240 160 T320 180 T380 120" stroke="rgba(60,60,60,0.04)" stroke-width="15" fill="none" stroke-linecap="round"/%3E%3Ccircle cx="350" cy="60" r="30" fill="rgba(60,60,60,0.03)"/%3E%3C/svg%3E');
  background-position: center, top right;
  background-repeat: repeat, no-repeat;
  pointer-events: none;
  z-index: 0;
}

.wechat-article > * {
  position: relative;
  z-index: 1;
}

/* 段落样式 */
.wechat-article p {
  color: #3a3a3a;
  font-size: 17px;
  line-height: 2.2;
  margin: 20px 0;
  text-align: justify;
  letter-spacing: 0.5px;
}

/* 首段无上边距 - 使用 class */
.wechat-article .first-paragraph {
  margin-top: 0;
}

/* 一级标题 - 卷首风格 */
.wechat-article h1 {
  font-size: 28px;
  text-align: center;
  color: #1a1a1a;
  margin: 0 0 40px;
  padding: 24px 0;
  letter-spacing: 8px;
  font-weight: 600;
  position: relative;
  border: none;
}

.wechat-article h1::before {
  content: '◆';
  display: block;
  font-size: 12px;
  letter-spacing: 20px;
  color: rgba(80, 60, 40, 0.4);
  margin-bottom: 16px;
}

.wechat-article h1::after {
  content: '';
  display: block;
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(80, 60, 40, 0.5), transparent);
  margin: 20px auto 0;
}

/* 二级标题 - 章节风格 */
.wechat-article h2 {
  font-size: 22px;
  color: #2a2a2a;
  margin: 48px 0 24px;
  padding: 12px 0 12px 20px;
  letter-spacing: 4px;
  font-weight: 600;
  position: relative;
  border-left: none;
  background: linear-gradient(90deg, rgba(80, 60, 40, 0.08) 0%, transparent 100%);
}

.wechat-article h2::before {
  content: '〔';
  font-size: 20px;
  color: rgba(80, 60, 40, 0.5);
  margin-right: 8px;
  display: inline-block;
}

.wechat-article h2::after {
  content: '〕';
  font-size: 20px;
  color: rgba(80, 60, 40, 0.5);
  margin-left: 8px;
  display: inline-block;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 18px;
  color: #333;
  margin: 32px 0 16px;
  padding-left: 16px;
  letter-spacing: 2px;
  font-weight: 600;
  position: relative;
}

.wechat-article h3::before {
  content: '●';
  position: absolute;
  left: 0;
  color: rgba(80, 60, 40, 0.4);
  font-size: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 17px;
  color: #444;
  margin: 24px 0 12px;
  letter-spacing: 1px;
  font-weight: 600;
}

.wechat-article h4::before {
  content: '—';
  color: rgba(80, 60, 40, 0.4);
  margin-right: 8px;
}

/* 强调文本 */
.wechat-article strong {
  font-weight: 600;
  color: #8b4513;
}

.wechat-article em {
  font-style: italic;
  color: #5a4a3a;
}

/* 引用块 - 古籍批注风格 */
.wechat-article blockquote {
  background: linear-gradient(135deg, rgba(245, 240, 230, 0.9) 0%, rgba(240, 235, 220, 0.8) 100%);
  border: none;
  padding: 24px 28px;
  margin: 32px 0;
  font-style: normal;
  color: #4a4a4a;
  position: relative;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
}

.wechat-article blockquote::before {
  content: '「';
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 28px;
  color: rgba(139, 69, 19, 0.3);
  font-family: "Noto Serif SC", serif;
}

.wechat-article blockquote::after {
  content: '」';
  position: absolute;
  bottom: 8px;
  right: 10px;
  font-size: 28px;
  color: rgba(139, 69, 19, 0.3);
  font-family: "Noto Serif SC", serif;
}

.wechat-article blockquote p {
  text-indent: 0;
  margin: 0;
  font-size: 16px;
  line-height: 2;
  color: #4a4a4a;
}

/* 无序列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;  /* 去掉圆点 */
  margin: 24px 0;
  padding: 16px 20px;
  background: rgba(250, 248, 245, 0.8);
  border-radius: 0;
  border: 1px solid rgba(139, 69, 19, 0.1);
  border-left: 3px solid rgba(139, 69, 19, 0.3);
  font-size: 16px;
  line-height: 1.9;
  color: #3a3a3a;
}

.wechat-article ul li::before {
  content: '◆';
  color: rgba(139, 69, 19, 0.6);
  font-size: 10px;
  margin-right: 12px;
  display: inline-flex;
}

/* 有序列表 - 水墨风格圆形数字 */
.wechat-article ol {
  counter-reset: ink-counter;
}

.wechat-article ol li::before {
  counter-increment: ink-counter;
  content: counter(ink-counter);
  background: linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(90, 50, 20, 0.9) 100%);
  color: #f5f0e8;
  font-size: 12px;
  font-weight: 500;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-right: 12px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.wechat-article ol li{
}
.wechat-article li span,.wechat-article li code,.wechat-article li pre {
  display: inline;
}

/* 图片样式 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 32px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 8px solid #fff;
  outline: 1px solid rgba(139, 69, 19, 0.1);
}

/* 链接样式 */
.wechat-article a {
  color: #8b4513;
  text-decoration: none;
  border-bottom: 1px dashed rgba(139, 69, 19, 0.4);
  transition: all 0.2s ease;
}

.wechat-article a:hover {
  color: #a0522d;
  border-bottom-style: solid;
}


/* 表格样式 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  background: #faf9f6;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.wechat-article th {
  background: linear-gradient(180deg, #4a3f35 0%, #3a3025 100%);
  color: #f5f0e8;
  font-weight: 500;
  padding: 14px 16px;
  text-align: left;
  font-size: 15px;
  letter-spacing: 2px;
}

.wechat-article td {
  padding: 14px 16px;
  border-bottom: 1px solid rgba(139, 69, 19, 0.1);
  font-size: 15px;
  color: #3a3a3a;
}

.wechat-article tr:last-child td {
  border-bottom: none;
}

.wechat-article tr:nth-child(even) {
  background-color: rgba(139, 69, 19, 0.03);
}

/* 分隔线 - 水墨晕染效果 */
.wechat-article hr {
  border: none;
  height: 20px;
  background: url('data:image/svg+xml,%3Csvg width="200" height="20" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 10 Q50 5 100 10 T200 10" stroke="rgba(80,60,40,0.3)" stroke-width="2" fill="none"/%3E%3Ccircle cx="100" cy="10" r="3" fill="rgba(80,60,40,0.4)"/%3E%3C/svg%3E') no-repeat center;
  margin: 40px 0;
}

/* 诗词专用样式 */
.wechat-article .poem {
  text-align: center;
  margin: 36px 0;
  padding: 24px;
  background: rgba(250, 248, 245, 0.6);
  border-top: 1px solid rgba(139, 69, 19, 0.15);
  border-bottom: 1px solid rgba(139, 69, 19, 0.15);
}

.wechat-article .poem p {
  text-indent: 0;
  line-height: 2.5;
  letter-spacing: 4px;
  margin: 8px 0;
}

/* 印章效果 */
.wechat-article .seal {
  display: inline-block;
  padding: 10px 14px;
  border: 2px solid rgba(180, 50, 50, 0.7);
  color: rgba(180, 50, 50, 0.85);
  font-size: 14px;
  letter-spacing: 4px;
  border-radius: 4px;
  margin: 16px 0;
  font-weight: 500;
  background: rgba(255, 250, 245, 0.5);
  box-shadow: 1px 1px 3px rgba(180, 50, 50, 0.1);
}

/* 落款样式 */
.wechat-article .signature {
  text-align: right;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px dashed rgba(139, 69, 19, 0.2);
  color: #5a5a5a;
  font-size: 15px;
  letter-spacing: 2px;
}

/* 注释/批注 */
.wechat-article .note {
  font-size: 14px;
  color: #777;
  padding: 12px 16px;
  background: rgba(139, 69, 19, 0.05);
  border-left: 2px solid rgba(139, 69, 19, 0.3);
  margin: 20px 0;
}

/* 工具类 */
.wechat-article .text-center {
  text-align: center;
  text-indent: 0;
}

.wechat-article .text-right {
  text-align: right;
  text-indent: 0;
}

.wechat-article .no-indent {
  text-indent: 0;
}


/* 响应式调整 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 32px 20px;
  }

  .wechat-article h1 {
    font-size: 24px;
    letter-spacing: 4px;
  }

  .wechat-article h2 {
    font-size: 20px;
  }

  .wechat-article h3 {
    font-size: 17px;
  }

  .wechat-article p {
    font-size: 16px;
  }

  .wechat-article img {
    border-width: 4px;
  }
}
`
  },
  {
    id: "wechat-literary-magazine",
    name: "文学杂志",
    description: "现代杂志排版的文学模板，适合人物特写、书评与深度评论",
    category: "literary",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1a1a1a","description":"主色调（黑色）"},{"name":"accentColor","type":"color","defaultValue":"#666666","description":"辅助色（灰色）"},{"name":"textColor","type":"color","defaultValue":"#2a2a2a","description":"正文颜色"},{"name":"titleColor","type":"color","defaultValue":"#0a0a0a","description":"标题颜色"},{"name":"backgroundColor","type":"color","defaultValue":"#fefefe","description":"背景颜色"},{"name":"borderColor","type":"color","defaultValue":"#dddddd","description":"边框颜色"}],
    defaultStyleSettings: {"themeColor":"#0a0a0a","fontSize":16,"lineHeight":2,"textAlign":"justify"},
    css: `/* 文学杂志模板 - Magazine Literary Template */
.wechat-article {
  font-family: "Playfair Display", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
  background: #fefefe;
  padding: 48px 40px;
  max-width: 677px;
  margin: 0 auto;
  position: relative;
  color: #1a1a1a;
}

/* 杂志风格装饰线 */
.wechat-article::before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 40px;
  right: 40px;
  height: 4px;
  background: linear-gradient(90deg, #1a1a1a 0%, #1a1a1a 30%, transparent 30%, transparent 35%, #1a1a1a 35%, #1a1a1a 65%, transparent 65%, transparent 70%, #1a1a1a 70%, #1a1a1a 100%);
}

.wechat-article::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 40px;
  right: 40px;
  height: 1px;
  background: #1a1a1a;
}

/* 段落样式 */
.wechat-article p {
  font-size: 16px;
  line-height: 2;
  margin: 20px 0;
  color: #2a2a2a;
  text-align: justify;
  letter-spacing: 0.3px;
}

/* 首字下沉效果 */
.wechat-article p.drop-cap::first-letter {
  float: left;
  font-size: 72px;
  line-height: 0.8;
  padding-right: 12px;
  padding-top: 8px;
  font-weight: 700;
  color: #1a1a1a;
  font-family: "Playfair Display", Georgia, serif;
}

/* 一级标题 - 杂志封面风格 */
.wechat-article h1 {
  font-size: 36px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin: 0 0 32px;
  padding: 24px 0;
  color: #0a0a0a;
  font-weight: 700;
  line-height: 1.2;
  border-bottom: 3px double #1a1a1a;
  position: relative;
}

.wechat-article h1::before {
  content: 'FEATURE';
  display: block;
  font-size: 11px;
  letter-spacing: 6px;
  color: #666;
  margin-bottom: 12px;
  font-weight: 500;
}

/* 二级标题 - 章节风格 */
.wechat-article h2 {
  font-size: 24px;
  color: #1a1a1a;
  margin: 48px 0 20px;
  padding: 0 0 12px 0;
  font-weight: 600;
  letter-spacing: 3px;
  border-bottom: 1px solid #ddd;
  position: relative;
}

.wechat-article h2::before {
  content: '§';
  margin-right: 12px;
  color: #888;
  font-weight: 400;
  display: inline-block;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 20px;
  color: #1a1a1a;
  margin: 36px 0 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 17px;
  color: #333;
  margin: 28px 0 12px;
  font-weight: 600;
  font-style: italic;
}

/* 强调文本 */
.wechat-article strong {
  font-weight: 700;
  color: #0a0a0a;
}

.wechat-article em {
  font-style: italic;
  color: #333;
}

/* 引用块 - 杂志拉引风格 */
.wechat-article blockquote {
  border: none;
  border-top: 2px solid #1a1a1a;
  border-bottom: 2px solid #1a1a1a;
  padding: 28px 20px;
  margin: 40px 0;
  background: transparent;
  position: relative;
}

.wechat-article blockquote::before {
  content: '"';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 60px;
  color: #ccc;
  font-family: Georgia, serif;
  background: #fefefe;
  padding: 0 16px;
  line-height: 1;
}

.wechat-article blockquote p {
  font-size: 20px;
  line-height: 1.7;
  text-align: center;
  font-style: italic;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: 1px;
}

.wechat-article blockquote cite {
  display: block;
  text-align: right;
  margin-top: 16px;
  font-size: 14px;
  color: #666;
  font-style: normal;
  letter-spacing: 2px;
}

/* 列表样式 - 杂志编辑风格 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;  /* 去掉圆点 */
  margin: 28px 0;
  padding: 20px 24px;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  border: none;
  border-top: 2px solid #1a1a1a;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  line-height: 1.8;
  color: #2a2a2a;
}

.wechat-article ul li::before {
  content: '●';
  color: #1a1a1a;
  font-size: 8px;
  margin-right: 14px;
  display: inline-flex;
  vertical-align: middle;
}

/* 有序列表 - 杂志序号风格 */
.wechat-article ol {
  counter-reset: magazine-counter;
}

.wechat-article ol li::before {
  counter-increment: magazine-counter;
  content: '0' counter(magazine-counter);
  background: transparent;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 700;
  font-family: "Playfair Display", Georgia, serif;
  letter-spacing: 1px;
  margin-right: 14px;
  display: inline-flex;
  min-width: 24px;
}

.wechat-article ol li{
}

.wechat-article li span,.wechat-article li code,.wechat-article li pre {
  display: inline;
}

/* 图片样式 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 36px auto;
}

.wechat-article figure {
  margin: 40px 0;
  position: relative;
}

.wechat-article figure img {
  margin: 0;
}

.wechat-article figcaption {
  font-size: 13px;
  color: #666;
  text-align: center;
  margin-top: 12px;
  font-style: italic;
  letter-spacing: 1px;
}

/* 链接样式 */
.wechat-article a {
  color: #1a1a1a;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: all 0.2s ease;
}

.wechat-article a:hover {
  color: #555;
}

/* 行内代码 */
.wechat-article code {
  background: #f5f5f5;
  color: #333;
  padding: 2px 8px;
  border-radius: 3px;
  font-family: "SF Mono", Monaco, Consolas, monospace;
  font-size: 0.9em;
}

/* 代码块 */
.wechat-article pre {
  background: #1a1a1a;
  color: #f5f5f5;
  padding: 24px;
  margin: 32px 0;
  overflow-x: auto;
  font-family: "SF Mono", Monaco, Consolas, monospace;
  font-size: 14px;
  line-height: 1.6;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
}

/* 表格样式 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  font-size: 15px;
}

.wechat-article th {
  background: #1a1a1a;
  color: #fff;
  font-weight: 600;
  padding: 14px 16px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
}

.wechat-article td {
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  color: #2a2a2a;
}

.wechat-article tr:last-child td {
  border-bottom: 2px solid #1a1a1a;
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: auto;
  text-align: center;
  margin: 48px 0;
}

.wechat-article hr::before {
  content: '◆ ◆ ◆';
  color: #ccc;
  font-size: 10px;
  letter-spacing: 8px;
}

/* 特写卡片 */
.wechat-article .feature-card {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 24px;
  padding: 28px;
  margin: 36px 0;
  background: #f9f9f9;
  border-left: 4px solid #1a1a1a;
}

.wechat-article .feature-card img {
  width: 100%;
  height: auto;
  margin: 0;
}

.wechat-article .feature-card-content h4 {
  margin-top: 0;
  font-size: 18px;
}

/* 拉引语 */
.wechat-article .pull-quote {
  font-size: 22px;
  line-height: 1.5;
  color: #1a1a1a;
  text-align: center;
  padding: 32px 40px;
  margin: 40px -20px;
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.02) 50%, transparent 100%);
  font-style: italic;
  letter-spacing: 2px;
  position: relative;
}

.wechat-article .pull-quote::before,
.wechat-article .pull-quote::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: #1a1a1a;
}

.wechat-article .pull-quote::before {
  top: 0;
}

.wechat-article .pull-quote::after {
  bottom: 0;
}

/* 作者信息 */
.wechat-article .author-bio {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  margin: 40px 0;
  background: #f5f5f5;
  border-left: 3px solid #1a1a1a;
}

.wechat-article .author-bio img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0;
  object-fit: cover;
}

.wechat-article .author-bio-content {
  flex: 1;
}

.wechat-article .author-bio-content h5 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
}

.wechat-article .author-bio-content p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 边栏注释 */
.wechat-article .sidebar-note {
  float: right;
  width: 180px;
  margin: 0 -20px 20px 24px;
  padding: 16px;
  background: #f9f9f9;
  font-size: 13px;
  line-height: 1.6;
  color: #555;
  border-top: 2px solid #1a1a1a;
}

/* 章节编号 */
.wechat-article .chapter-num {
  display: block;
  font-size: 72px;
  font-weight: 700;
  color: #eee;
  line-height: 1;
  margin-bottom: -20px;
  font-family: "Playfair Display", Georgia, serif;
}

/* 结尾标记 */
.wechat-article .end-mark {
  text-align: center;
  margin: 48px 0 24px;
  font-size: 24px;
  color: #1a1a1a;
}

/* CTA 按钮 */
.wechat-article .cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: #1a1a1a;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
}

.wechat-article .cta-button:hover {
  background: #333;
}

/* 工具类 */
.wechat-article .text-center {
  text-align: center;
}

.wechat-article .text-small {
  font-size: 14px;
  color: #666;
}

.wechat-article .text-caps {
  text-transform: uppercase;
  letter-spacing: 3px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 50%, rgba(255, 230, 0, 0.3) 50%);
}

/* 响应式调整 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 36px 20px;
  }

  .wechat-article::before,
  .wechat-article::after {
    left: 20px;
    right: 20px;
  }

  .wechat-article h1 {
    font-size: 28px;
    letter-spacing: 6px;
  }

  .wechat-article h2 {
    font-size: 20px;
  }

  .wechat-article h3 {
    font-size: 18px;
  }

  .wechat-article p {
    font-size: 15px;
  }

  .wechat-article .feature-card {
    grid-template-columns: 1fr;
  }

  .wechat-article .sidebar-note {
    float: none;
    width: 100%;
    margin: 24px 0;
  }

  .wechat-article .pull-quote {
    font-size: 18px;
    padding: 24px 20px;
    margin: 32px 0;
  }

  .wechat-article p.drop-cap::first-letter {
    font-size: 56px;
  }
}
`
  },
  {
    id: "wechat-literary-classic",
    name: "Classic Literary",
    description: "经典文学风格，衬线字体，纸质质感",
    category: "literary",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#8b4513","description":"主色调棕色"},{"name":"backgroundColor","type":"color","defaultValue":"#fdfbf7","description":"背景色米白"}],
    css: `/* Classic Literary 模板 */
.wechat-article {
  font-family: "Songti SC", "SimSun", "STSong", "Times New Roman", serif;
  font-size: 17px;
  line-height: 1.9;
  color: #4a4a4a;
  background-color: #fdfbf7;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 50px 0 30px;
  font-size: 26px;
  font-weight: normal;
  color: #8b4513;
  text-align: center;
  writing-mode: horizontal-tb;
  letter-spacing: 2px;
}

.wechat-article h1::after {
  content: "✦";
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #d2b48c;
}

.wechat-article h2 {
  margin: 40px 0 20px;
  font-size: 20px;
  font-weight: normal;
  color: #8b4513;
  text-align: center;
  border-top: 1px solid #d2b48c;
  border-bottom: 1px solid #d2b48c;
  padding: 10px 0;
  display: table;
  margin-left: auto;
  margin-right: auto;
}

.wechat-article h3 {
  margin: 30px 0 15px;
  font-size: 18px;
  font-weight: bold;
  color: #5d4037;
}

/* 段落样式 */
.wechat-article p {
  margin: 20px 0;
  text-align: justify;
  text-indent: 2em;
}

/* 链接样式 */
.wechat-article a {
  color: #8b4513;
  text-decoration: none;
  border-bottom: 1px solid #8b4513;
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 30px 0;
  padding: 20px 40px;
  border: none;
  background: transparent;
  color: #666;
  font-style: italic;
  text-align: center;
  position: relative;
}

.wechat-article blockquote::before {
  content: "“";
  font-size: 60px;
  color: #e0d6c8;
  position: absolute;
  top: -20px;
  left: 0;
  font-family: serif;
}

.wechat-article blockquote::after {
  content: "”";
  font-size: 60px;
  color: #e0d6c8;
  position: absolute;
  bottom: -40px;
  right: 0;
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
  }
]
