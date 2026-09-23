import type { WechatTemplate } from '../types'

export const lifestyleTemplates: WechatTemplate[] = [
  {
    id: "wechat-lifestyle-urban",
    name: "城市漫步",
    description: "现代都市生活风格，莫兰迪色系搭配利落版式，适合城市探店、咖啡文化与都市生活方式",
    category: "lifestyle",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#b8a99a","description":"主色调（莫兰迪棕）"},{"name":"backgroundColor","type":"color","defaultValue":"#f5f3f0","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#b8a99a","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", sans-serif;
  background: #f5f3f0;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #4a4744;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #4a4744;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 24px;
  font-weight: 700;
  color: #2d2a28;
  margin: 0 0 24px;
  padding: 20px 24px;
  line-height: 1.4;
  background: #ffffff;
  border-radius: 12px;
  text-align: center;
  border: none;
  box-shadow: 0 2px 12px rgba(74, 71, 68, 0.06);
  position: relative;
}

.wechat-article h1::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #b8a99a, #9c8e80);
  margin: 14px auto 0;
  border-radius: 2px;
}

.wechat-article h2 {
  font-size: 18px;
  font-weight: 600;
  color: #3a3735;
  margin: 36px 0 14px;
  padding: 0 0 10px;
  border-bottom: 1px solid #e0dcd8;
  position: relative;
}

.wechat-article h2::before {
  content: '◎';
  color: #b8a99a;
  margin-right: 8px;
  font-size: 14px;
  display: inline-block;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #4a4744;
  margin: 28px 0 10px;
}

.wechat-article h4 {
  font-size: 14px;
  font-weight: 600;
  color: #6a6764;
  margin: 22px 0 8px;
}

.wechat-article strong { font-weight: 600; color: #2d2a28; }
.wechat-article em { font-style: italic; color: #7a7774; }

.wechat-article blockquote {
  border: none;
  padding: 20px 24px;
  margin: 24px 0;
  background: #ffffff;
  border-radius: 12px;
  border-left: 4px solid #b8a99a;
  box-shadow: 0 1px 8px rgba(74, 71, 68, 0.05);
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #6a6764;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 16px 20px;
  background: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #4a4744;
  box-shadow: 0 1px 8px rgba(74, 71, 68, 0.05);
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
  background: #b8a99a;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: urban-c; }
.wechat-article ol li {
  padding: 5px 0 5px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: urban-c;
  content: counter(urban-c);
  font-weight: 700;
  color: #fff;
  background: #b8a99a;
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
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #9c8e80;
  text-decoration: none;
  border-bottom: 1px solid #d0c8c0;
  font-weight: 500;
}

.wechat-article code {
  background: #eae7e3;
  color: #5a5450;
  padding: 2px 8px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #2d2a28;
  color: #d8d4d0;
  padding: 20px 24px;
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
  background: #fff;
  box-shadow: 0 1px 8px rgba(74, 71, 68, 0.05);
}

.wechat-article th {
  background: #b8a99a;
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #f0ece8;
  color: #4a4744;
}

.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(74, 71, 68, 0.1);
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '●  ●  ●';
  color: #c8c0b8;
  font-size: 6px;
  letter-spacing: 6px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(184, 169, 154, 0.2) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 21px; padding: 16px 20px; }
}
`
  },
  {
    id: "wechat-lifestyle-warmth",
    name: "暖光日记",
    description: "温暖柔和的日记风格，奶油暖色调配圆角卡片，适合生活记录、美食分享与旅行札记",
    category: "lifestyle",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#e8a87c","description":"主色调（暖橘）"},{"name":"accentColor","type":"color","defaultValue":"#d4956b","description":"辅助色（焦糖）"},{"name":"backgroundColor","type":"color","defaultValue":"#fdf6ee","description":"背景颜色（奶油色）"}],
    defaultStyleSettings: {"themeColor":"#d4956b","fontSize":15,"lineHeight":2,"textAlign":"justify"},
    css: `/* 暖光日记模板 - Warmth Diary Template */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #fdf6ee;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #5a4a3a;
  position: relative;
}

/* 顶部装饰 - 暖色渐变 */
.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #e8a87c, #d4956b, #c98860);
  border-radius: 0 0 2px 2px;
}

/* 段落 */
.wechat-article p {
  font-size: 15.5px;
  line-height: 2;
  margin: 16px 0;
  color: #5a4a3a;
  text-align: justify;
  letter-spacing: 0.3px;
}

/* 一级标题 */
.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #3d2e1e;
  margin: 0 0 28px;
  padding: 16px 24px;
  line-height: 1.4;
  text-align: center;
  background: linear-gradient(135deg, #fff5eb 0%, #fcecd8 100%);
  border-radius: 16px;
  border: none;
}

.wechat-article h1::before {
  content: '✦';
  display: block;
  font-size: 14px;
  color: #d4956b;
  margin-bottom: 8px;
}

/* 二级标题 */
.wechat-article h2 {
  font-size: 19px;
  font-weight: 600;
  color: #3d2e1e;
  margin: 36px 0 14px;
  padding: 10px 16px;
  background: #fff8f1;
  border-radius: 10px;
  border-left: 4px solid #e8a87c;
  letter-spacing: 0.3px;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 17px;
  font-weight: 600;
  color: #4a3a2a;
  margin: 28px 0 10px;
  position: relative;
  padding-left: 20px;
}

.wechat-article h3::before {
  content: '◕';
  position: absolute;
  left: 0;
  color: #e8a87c;
  font-size: 12px;
  top: 4px;
  display: inline-block;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 15.5px;
  font-weight: 600;
  color: #5a4a3a;
  margin: 24px 0 8px;
}

/* 强调 */
.wechat-article strong {
  font-weight: 600;
  color: #3d2e1e;
}

.wechat-article em {
  font-style: italic;
  color: #7a6a5a;
}

/* 引用 - 日记摘抄 */
.wechat-article blockquote {
  border: none;
  padding: 20px 24px;
  margin: 24px 0;
  background: #fff5eb;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 2px 8px rgba(212, 149, 107, 0.1);
}

.wechat-article blockquote::before {
  content: '📝';
  position: absolute;
  top: -10px;
  left: 16px;
  font-size: 16px;
  background: #fdf6ee;
  padding: 0 4px;
}

.wechat-article blockquote p {
  font-size: 15px;
  line-height: 1.9;
  color: #6a5a4a;
  margin: 4px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 20px;
  background: #fff8f1;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #5a4a3a;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '♡';
  color: #e8a87c;
  font-size: 10px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
}

.wechat-article ol {
  counter-reset: warmth-counter;
}

.wechat-article ol li {
  padding: 5px 0 5px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: warmth-counter;
  content: counter(warmth-counter);
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #e8a87c, #d4956b);
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
  border-radius: 50%;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre {
  display: inline;
}

/* 链接 */
.wechat-article a {
  color: #c98860;
  text-decoration: none;
  border-bottom: 1px dashed #d4956b;
}

/* 行内代码 */
.wechat-article code {
  background: rgba(232, 168, 124, 0.12);
  color: #8b5e3c;
  padding: 2px 8px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

/* 代码块 */
.wechat-article pre {
  background: #3d2e1e;
  color: #f0e6d8;
  padding: 20px 24px;
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
  border-radius: 0;
}

/* 表格 */
.wechat-article table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;
  font-size: 14px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f0e0d0;
}

.wechat-article th {
  background: linear-gradient(135deg, #e8a87c, #d4956b);
  color: #ffffff;
  font-weight: 600;
  padding: 12px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 11px 14px;
  border-bottom: 1px solid #f5ebe0;
  color: #5a4a3a;
}

.wechat-article tr:nth-child(even) {
  background: #fff8f1;
}

.wechat-article tr:last-child td {
  border-bottom: none;
}

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(93, 64, 40, 0.1);
}

.wechat-article figcaption {
  font-size: 13px;
  color: #a08878;
  text-align: center;
  margin-top: 8px;
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '· · ·';
  color: #d4956b;
  font-size: 16px;
  letter-spacing: 8px;
}

/* 高亮 */
.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(232, 168, 124, 0.2) 55%);
}

/* 响应式 */
@media (max-width: 480px) {
  .wechat-article {
    padding: 32px 20px;
  }

  .wechat-article h1 {
    font-size: 22px;
    padding: 14px 20px;
  }

  .wechat-article h2 {
    font-size: 17px;
  }

  .wechat-article p {
    font-size: 15px;
  }
}
`
  },
  {
    id: "wechat-lifestyle-fresh",
    name: "清新生活",
    description: "清新生活风格，马卡龙配色，圆润活泼",
    category: "lifestyle",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#ff7f50","description":"主色调珊瑚橙"},{"name":"secondaryColor","type":"color","defaultValue":"#4db6ac","description":"次要色调薄荷绿"}],
    defaultStyleSettings: {"themeColor":"","fontSize":16,"lineHeight":1.8,"textAlign":"justify"},
    css: `/* Fresh Lifestyle 模板 */
.wechat-article {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  background-color: #fff;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 30px 0 20px;
  font-size: 22px;
  font-weight: bold;
  color: #ff7f50;
  text-align: center;
}

.wechat-article h1 span {
  background: #fff3e0;
  padding: 5px 15px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(255, 127, 80, 0.2);
}

.wechat-article h2 {
  margin: 30px 0 15px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: #4db6ac;
  padding: 5px 15px;
  border-radius: 0 15px 15px 0;
  box-shadow: 2px 2px 0 rgba(77, 182, 172, 0.3);
}

.wechat-article h3 {
  margin: 25px 0 10px;
  font-size: 17px;
  font-weight: bold;
  color: #4db6ac;
  padding-bottom: 5px;
  border-bottom: 2px dashed #b2dfdb;
}

/* 段落样式 */
.wechat-article p {
  margin: 15px 0;
  text-align: justify;
}

/* 链接样式 */
.wechat-article a {
  color: #ff7f50;
  text-decoration: none;
  border-bottom: 2px solid #ffccbc;
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 20px 0;
  padding: 15px;
  background-color: #e0f2f1;
  border-radius: 10px;
  color: #00796b;
  border: 2px solid #b2dfdb;
}



.wechat-article li {
  margin: 8px 0;
}

.wechat-article ul li::marker {
  color: #ff7f50;
  content: "● ";
}

/* 图片样式 */
.wechat-article img {
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border: 4px solid #fff;
}
/* 列表样式 */
.wechat-article ul, .wechat-article ol {
  margin: 15px 0;
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
