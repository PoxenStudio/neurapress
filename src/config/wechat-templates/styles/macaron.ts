import type { WechatTemplate } from '../types'

export const macaronTemplates: WechatTemplate[] = [
  {
    id: "wechat-macaron-pink",
    name: "马卡龙·蜜桃粉",
    description: "甜美柔和的蜜桃粉色系，圆润温柔的视觉感受，适合情感文章、美妆分享与女性话题",
    category: "macaron",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#ff9a9e","description":"主色调（蜜桃粉）"},{"name":"secondaryColor","type":"color","defaultValue":"#fecfef","description":"次要色（浅粉）"}],
    defaultStyleSettings: {"themeColor":"","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `/* 马卡龙蜜桃粉模板 */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #fff8f8;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #5a4a4e;
}

/* 段落 */
.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #5a4a4e;
  text-align: justify;
}

/* 一级标题 */
.wechat-article h1 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 24px;
  padding: 14px 24px;
  text-align: center;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 12px rgba(255, 154, 158, 0.25);
}

/* 二级标题 */
.wechat-article h2 {
  font-size: 18px;
  font-weight: 600;
  color: #e8707a;
  margin: 32px 0 14px;
  padding: 8px 0 8px 14px;
  border-left: 4px solid #ff9a9e;
  background: linear-gradient(90deg, #fff0f0 0%, transparent 100%);
  border-radius: 0 8px 8px 0;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #e8707a;
  margin: 24px 0 10px;
  padding-left: 18px;
  position: relative;
}

.wechat-article h3::before {
  content: '♥';
  position: absolute;
  left: 0;
  color: #fecfef;
  font-size: 12px;
  top: 3px;
  display: inline-block;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #c07080;
  margin: 20px 0 8px;
}

/* 强调 */
.wechat-article strong { font-weight: 600; color: #d4606a; }
.wechat-article em { font-style: italic; color: #8a6a6e; }

/* 引用 */
.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: linear-gradient(135deg, #fff0f0 0%, #ffeef5 100%);
  border-radius: 14px;
  border-left: 4px solid #fecfef;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #8a6a6e;
  margin: 4px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 18px;
  background: #fff5f5;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #5a4a4e;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '●';
  color: #ff9a9e;
  font-size: 8px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
}

.wechat-article ol { counter-reset: macaron-pk; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: macaron-pk;
  content: counter(macaron-pk);
  font-weight: 700;
  color: #fff;
  background: #ff9a9e;
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

/* 链接 */
.wechat-article a {
  color: #e8707a;
  text-decoration: none;
  border-bottom: 1px dashed #fecfef;
}

/* 行内代码 */
.wechat-article code {
  background: #fff0f0;
  color: #d4606a;
  padding: 2px 7px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

/* 代码块 */
.wechat-article pre {
  background: #2b2026;
  color: #f0d8dc;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 12px;
  border: 1px solid #3d2a30;
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
  border: 1px solid #fde0e0;
}

.wechat-article th {
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #fde8e8;
  color: #5a4a4e;
}

.wechat-article tr:nth-child(even) { background: #fff5f5; }
.wechat-article tr:last-child td { border-bottom: none; }

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(255, 154, 158, 0.15);
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '♡  ♡  ♡';
  color: #fecfef;
  font-size: 12px;
  letter-spacing: 4px;
}

/* 高亮 */
.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(255, 154, 158, 0.18) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 20px; padding: 12px 20px; }
}
`
  },
  {
    id: "wechat-macaron-blue",
    name: "马卡龙·天空蓝",
    description: "清新明亮的天空蓝色系，通透轻盈的阅读体验，适合科普文章、职场分享与效率工具推荐",
    category: "macaron",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#74b9ff","description":"主色调（天空蓝）"},{"name":"secondaryColor","type":"color","defaultValue":"#a1c4fd","description":"次要色（浅蓝）"}],
    defaultStyleSettings: {"themeColor":"","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `/* 马卡龙天空蓝模板 */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #f6fbff;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #3d5168;
}

/* 段落 */
.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #3d5168;
  text-align: justify;
}

/* 一级标题 */
.wechat-article h1 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 24px;
  padding: 14px 24px;
  text-align: center;
  background: linear-gradient(135deg, #74b9ff 0%, #a1c4fd 100%);
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 12px rgba(116, 185, 255, 0.25);
}

/* 二级标题 */
.wechat-article h2 {
  font-size: 18px;
  font-weight: 600;
  color: #4a90d9;
  margin: 32px 0 14px;
  padding: 8px 0 8px 14px;
  border-left: 4px solid #74b9ff;
  background: linear-gradient(90deg, #eef6ff 0%, transparent 100%);
  border-radius: 0 8px 8px 0;
}

/* 三级标题 */
.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #4a90d9;
  margin: 24px 0 10px;
  padding-left: 18px;
  position: relative;
}

.wechat-article h3::before {
  content: '◆';
  position: absolute;
  left: 0;
  color: #a1c4fd;
  font-size: 10px;
  top: 4px;
  display: inline-block;
}

/* 四级标题 */
.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #5a8abf;
  margin: 20px 0 8px;
}

/* 强调 */
.wechat-article strong { font-weight: 600; color: #2d6cb5; }
.wechat-article em { font-style: italic; color: #6a8aa8; }

/* 引用 */
.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: linear-gradient(135deg, #eef6ff 0%, #e6f3ff 100%);
  border-radius: 14px;
  border-left: 4px solid #a1c4fd;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #5a7a98;
  margin: 4px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 18px;
  background: #f0f7ff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #3d5168;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '●';
  color: #74b9ff;
  font-size: 8px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
}

.wechat-article ol { counter-reset: macaron-bl; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: macaron-bl;
  content: counter(macaron-bl);
  font-weight: 700;
  color: #fff;
  background: #74b9ff;
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

/* 链接 */
.wechat-article a {
  color: #4a90d9;
  text-decoration: none;
  border-bottom: 1px dashed #a1c4fd;
}

/* 行内代码 */
.wechat-article code {
  background: #eef6ff;
  color: #3a7cc9;
  padding: 2px 7px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

/* 代码块 */
.wechat-article pre {
  background: #1a2a3a;
  color: #c8ddf0;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 12px;
  border: 1px solid #253a4e;
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
  border: 1px solid #d6e8f8;
}

.wechat-article th {
  background: linear-gradient(135deg, #74b9ff, #a1c4fd);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #e4f0fa;
  color: #3d5168;
}

.wechat-article tr:nth-child(even) { background: #f0f7ff; }
.wechat-article tr:last-child td { border-bottom: none; }

/* 图片 */
.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(116, 185, 255, 0.15);
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '◇  ◇  ◇';
  color: #a1c4fd;
  font-size: 11px;
  letter-spacing: 4px;
}

/* 高亮 */
.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(116, 185, 255, 0.18) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 20px; padding: 12px 20px; }
}
`
  },
  {
    id: "wechat-macaron-green",
    name: "马卡龙·薄荷绿",
    description: "清凉舒适的薄荷绿色系，自然清爽的视觉感受，适合健康养生、户外运动与环保主题文章",
    category: "macaron",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#55efc4","description":"主色调（薄荷绿）"},{"name":"secondaryColor","type":"color","defaultValue":"#81ecec","description":"次要色（湖蓝绿）"}],
    defaultStyleSettings: {"themeColor":"#00b894","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `/* 马卡龙薄荷绿模板 */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #f4fcf7;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #3a5445;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #3a5445;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 24px;
  padding: 14px 24px;
  text-align: center;
  background: linear-gradient(135deg, #55efc4 0%, #81ecec 100%);
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 12px rgba(85, 239, 196, 0.25);
}

.wechat-article h2 {
  font-size: 18px;
  font-weight: 600;
  color: #00b894;
  margin: 32px 0 14px;
  padding: 8px 0 8px 14px;
  border-left: 4px solid #55efc4;
  background: linear-gradient(90deg, #e8faf3 0%, transparent 100%);
  border-radius: 0 8px 8px 0;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #00b894;
  margin: 24px 0 10px;
  padding-left: 18px;
  position: relative;
}

.wechat-article h3::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: #81ecec;
  font-size: 10px;
  top: 4px;
  display: inline-block;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #2d9f7f;
  margin: 20px 0 8px;
}

.wechat-article strong { font-weight: 600; color: #00896a; }
.wechat-article em { font-style: italic; color: #5a8a75; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: linear-gradient(135deg, #e8faf3 0%, #e0f8f2 100%);
  border-radius: 14px;
  border-left: 4px solid #81ecec;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #3a7a62;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 18px;
  background: #edfcf4;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #3a5445;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '●';
  color: #55efc4;
  font-size: 8px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
}

.wechat-article ol { counter-reset: macaron-gn; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: macaron-gn;
  content: counter(macaron-gn);
  font-weight: 700;
  color: #fff;
  background: #55efc4;
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
  color: #00b894;
  text-decoration: none;
  border-bottom: 1px dashed #81ecec;
}

.wechat-article code {
  background: #e8faf3;
  color: #00896a;
  padding: 2px 7px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #1a2e26;
  color: #b8e8d4;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 12px;
  border: 1px solid #24403a;
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
  border: 1px solid #c8f0de;
}

.wechat-article th {
  background: linear-gradient(135deg, #55efc4, #81ecec);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #d8f4e8;
  color: #3a5445;
}

.wechat-article tr:nth-child(even) { background: #edfcf4; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(85, 239, 196, 0.15);
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '✿  ✿  ✿';
  color: #81ecec;
  font-size: 10px;
  letter-spacing: 4px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(85, 239, 196, 0.18) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 20px; padding: 12px 20px; }
}
`
  },
  {
    id: "wechat-macaron-yellow",
    name: "马卡龙·柠檬黄",
    description: "活力明亮的柠檬黄色系，阳光温暖的视觉感受，适合亲子教育、美食食谱与创意手工文章",
    category: "macaron",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#fccb90","description":"主色调（柠檬黄）"},{"name":"secondaryColor","type":"color","defaultValue":"#fddb92","description":"次要色（浅金）"}],
    defaultStyleSettings: {"themeColor":"#d4920a","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `/* 马卡龙柠檬黄模板 */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #fffcf2;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #5a5040;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #5a5040;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 24px;
  padding: 14px 24px;
  text-align: center;
  background: linear-gradient(135deg, #fccb90 0%, #fddb92 100%);
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 12px rgba(252, 203, 144, 0.3);
}

.wechat-article h2 {
  font-size: 18px;
  font-weight: 600;
  color: #d4920a;
  margin: 32px 0 14px;
  padding: 8px 0 8px 14px;
  border-left: 4px solid #fccb90;
  background: linear-gradient(90deg, #fff8ec 0%, transparent 100%);
  border-radius: 0 8px 8px 0;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #d4920a;
  margin: 24px 0 10px;
  padding-left: 18px;
  position: relative;
}

.wechat-article h3::before {
  content: '★';
  position: absolute;
  left: 0;
  color: #fddb92;
  font-size: 12px;
  top: 2px;
    display: inline-block;

}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #b5800a;
  margin: 20px 0 8px;
}

.wechat-article strong { font-weight: 600; color: #a07008; }
.wechat-article em { font-style: italic; color: #7a6a50; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: linear-gradient(135deg, #fff8ec 0%, #fff5e0 100%);
  border-radius: 14px;
  border-left: 4px solid #fddb92;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #7a6a50;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 18px;
  background: #fff9ee;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #5a5040;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '●';
  color: #fccb90;
  font-size: 8px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
}

.wechat-article ol { counter-reset: macaron-yw; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: macaron-yw;
  content: counter(macaron-yw);
  font-weight: 700;
  color: #fff;
  background: #fccb90;
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
  color: #d4920a;
  text-decoration: none;
  border-bottom: 1px dashed #fddb92;
}

.wechat-article code {
  background: #fff5e0;
  color: #b07808;
  padding: 2px 7px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #2e2818;
  color: #e8d8b8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 12px;
  border: 1px solid #403820;
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
  border: 1px solid #f0e0c0;
}

.wechat-article th {
  background: linear-gradient(135deg, #fccb90, #fddb92);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #f5ead8;
  color: #5a5040;
}

.wechat-article tr:nth-child(even) { background: #fff9ee; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(252, 203, 144, 0.2);
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '✿  ✿  ✿';
  color: #fddb92;
  font-size: 11px;
  letter-spacing: 4px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(252, 203, 144, 0.22) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 20px; padding: 12px 20px; }
}
`
  },
  {
    id: "wechat-macaron-purple",
    name: "马卡龙·香芋紫",
    description: "梦幻优雅的香芋紫色系，浪漫柔美的视觉感受，适合心理学科普、星座文章与文艺评论",
    category: "macaron",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#c39bd3","description":"主色调（香芋紫）"},{"name":"secondaryColor","type":"color","defaultValue":"#d7bde2","description":"次要色（浅紫）"}],
    defaultStyleSettings: {"themeColor":"#8e44ad","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `/* 马卡龙香芋紫模板 */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #faf5ff;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #4e3d5e;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.9;
  margin: 16px 0;
  color: #4e3d5e;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 24px;
  padding: 14px 24px;
  text-align: center;
  background: linear-gradient(135deg, #c39bd3 0%, #d7bde2 100%);
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 12px rgba(195, 155, 211, 0.3);
}

.wechat-article h2 {
  font-size: 18px;
  font-weight: 600;
  color: #8e44ad;
  margin: 32px 0 14px;
  padding: 8px 0 8px 14px;
  border-left: 4px solid #c39bd3;
  background: linear-gradient(90deg, #f5ecff 0%, transparent 100%);
  border-radius: 0 8px 8px 0;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #8e44ad;
  margin: 24px 0 10px;
  padding-left: 18px;
  position: relative;
}

.wechat-article h3::before {
  content: '✧';
  position: absolute;
  left: 0;
  color: #d7bde2;
  font-size: 12px;
  top: 2px;
  display: inline-block;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #7a3b96;
  margin: 20px 0 8px;
}

.wechat-article strong { font-weight: 600; color: #6c3483; }
.wechat-article em { font-style: italic; color: #7a5a8e; }

.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: linear-gradient(135deg, #f5ecff 0%, #f0e4ff 100%);
  border-radius: 14px;
  border-left: 4px solid #d7bde2;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #6a5080;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 18px;
  background: #f8f0ff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #4e3d5e;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '●';
  color: #c39bd3;
  font-size: 8px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
}

.wechat-article ol { counter-reset: macaron-pp; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: macaron-pp;
  content: counter(macaron-pp);
  font-weight: 700;
  color: #fff;
  background: #c39bd3;
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
  color: #8e44ad;
  text-decoration: none;
  border-bottom: 1px dashed #d7bde2;
}

.wechat-article code {
  background: #f5ecff;
  color: #7a3b96;
  padding: 2px 7px;
  border-radius: 6px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #261830;
  color: #dcc8e8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 12px;
  border: 1px solid #3a2548;
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
  border: 1px solid #e4d0f0;
}

.wechat-article th {
  background: linear-gradient(135deg, #c39bd3, #d7bde2);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #ede0f5;
  color: #4e3d5e;
}

.wechat-article tr:nth-child(even) { background: #f8f0ff; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(195, 155, 211, 0.18);
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '☆  ☆  ☆';
  color: #d7bde2;
  font-size: 11px;
  letter-spacing: 4px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(195, 155, 211, 0.18) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 20px; padding: 12px 20px; }
}
`
  }
]
