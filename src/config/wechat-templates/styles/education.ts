import type { WechatTemplate } from '../types'

export const educationTemplates: WechatTemplate[] = [
  {
    id: "wechat-creative-mind",
    name: "Creative Mind",
    description: "创意与创造力风格，深蓝与橙色撞色，适合知识分享",
    category: "education",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#2c3e50","description":"主色调深蓝"},{"name":"accentColor","type":"color","defaultValue":"#e67e22","description":"强调色橙色"}],
    defaultStyleSettings: {"themeColor":"","fontSize":16,"lineHeight":1.75,"textAlign":"justify"},
    css: `/* Creative Mind 模板 */
.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: #333333;
  background-color: #ffffff;
  counter-reset: h2counter;
}

/* 顶部容器模拟 (虽然微信编辑器中通常只显示正文，但我们可以给H1一个特殊的背景来模拟) */
/* 标题样式 H1 - 模拟顶部头图区域 */
.wechat-article h1 {
  background-image: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 30px 0;
  padding: 40px 20px;
  text-align: center;
  border-radius: 6px;
  letter-spacing: 1px;
  line-height: 1.4;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* H1 副标题模拟 - 如果用户在H1后紧跟引用，可以作为副标题 */
.wechat-article h1 + blockquote {
  margin-top: -20px;
  background: transparent;
  border: none;
  text-align: center;
  color: #f39c12;
  font-size: 16px;
  font-weight: 500;
  padding: 0;
}

/* 标题样式 H2 - 模拟 01 标题 样式 */
.wechat-article h2 {
  display: flex; align-items: center; margin: 30px 0 20px 0;
}

.wechat-article h2::before {
  counter-increment: h2counter;
  content: counter(h2counter, decimal-leading-zero);
 font-size: 24px; color: #e1e1e1; font-weight: 900; margin-right: 10px;
}

.wechat-article h2 span{
  font-size: 18px; font-weight: 700; color: #2c3e50; border-bottom: 2px solid #e67e22; padding-bottom: 5px;
}

.wechat-article h3{
  margin-top: 0; font-size: 17px; color: #2980b9;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}

/* 段落样式 */
.wechat-article p {
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.75;
  color: #333333;
  text-align: justify;
}

/* 导语/引用块样式 */
.wechat-article blockquote {
  background-color: #fdf6ec;
  border-left: 5px solid #e67e22;
  padding: 15px;
  margin: 20px 0 30px 0;
  border-radius: 4px;
  font-size: 15px;
  color: #666;
}

.wechat-article blockquote p {
  margin: 0;
}

.wechat-article ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
    padding-left: 20px;
    margin-bottom: 0;
    color: #555;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.wechat-article ul li {
  margin-left:20px;
  margin-bottom: 10px;
}

/* 列表样式 */
.wechat-article ol {
  margin-bottom: 20px;
  color: #555;
}

.wechat-article ol li {
  margin-bottom: 10px;
}
.wechat-article ol li strong {
    font-weight: bold;
    color: #c0392b;
    margin-bottom: 8px;
}

.wechat-article li strong {
  color: #333;
}
.wechat-article li span {
  display: inline;
}


/* 强调样式 */
.wechat-article strong {
  font-weight: bold;
  color: #e67e22; /* 默认强调色用橙色，呼应主题 */
}

/* 图片样式 */
.wechat-article img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  display: block;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 链接样式 */
.wechat-article a {
  color: #2980b9;
  text-decoration: none;
  border-bottom: 1px dashed #2980b9;
}

/* 分割线样式 */
.wechat-article hr {
  margin-top: 50px; border-top: 1px solid #ddd; padding-top: 30px; text-align: center; color: #7f8c8d; font-size: 14px;
}
`
  },
  {
    id: "wechat-education-academic",
    name: "Academic Notes",
    description: "学术笔记风格，笔记本样式，重点突出",
    category: "education",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1976d2","description":"主色调蓝色"},{"name":"accentColor","type":"color","defaultValue":"#d32f2f","description":"强调色红色"}],
    css: `/* Academic Notes 模板 */
.wechat-article {
  font-family: "Times New Roman", "Songti SC", serif;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
  background-image: linear-gradient(#e1f5fe 1px, transparent 1px);
  background-size: 100% 30px;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 40px 0 30px;
  font-size: 24px;
  font-weight: bold;
  color: #d32f2f;
  text-align: center;
  border: 2px solid #d32f2f;
  padding: 10px 20px;
  background: #fff;
  transform: rotate(-1deg);
  box-shadow: 2px 2px 0 rgba(211, 47, 47, 0.2);
}

.wechat-article h2 {
  margin: 35px 0 20px;
  font-size: 20px;
  font-weight: bold;
  color: #1976d2;
  border-bottom: 2px solid #1976d2;
  display: inline-block;
  background: #fff;
  padding: 0 5px;
}

.wechat-article h2::before {
  content: "§ ";
  color: #d32f2f;
  display: inline-block;
}

.wechat-article h3 {
  margin: 25px 0 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background: #fff;
  display: inline-block;
  padding: 0 5px;
}

.wechat-article h3::before {
  content: "• ";
  color: #1976d2;
  display: inline-block;
}

/* 段落样式 */
.wechat-article p {
  margin: 15px 0;
  text-align: justify;
  background: rgba(255, 255, 255, 0.6);
}

/* 链接样式 */
.wechat-article a {
  color: #1976d2;
  text-decoration: underline;
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 20px 0;
  padding: 15px;
  border-left: 4px solid #fbc02d;
  background-color: #fff9c4;
  color: #555;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
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

/* 表格样式 */
.wechat-article table {
  background: #fff;
  border: 2px solid #333;
}
`
  },
  {
    id: "wechat-notebooklm-reading",
    name: "NotebookLM 读书笔记",
    description: "模仿 NotebookLM 知识源阅读视图，适合结构化的书摘及读书笔记",
    category: "education",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1a73e8","description":"主色调（Google蓝）"},{"name":"highlightColor","type":"color","defaultValue":"#fbbc04","description":"强调色（金句高亮黄）"}],
    defaultStyleSettings: {"themeColor":"#1a73e8","fontSize":15.5,"lineHeight":1.85,"textAlign":"justify"},
    css: `/* NotebookLM Reading 模板 */
.wechat-article {
  font-family: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  font-size: 15.5px;
  line-height: 1.85;
  color: #202124;
  background-color: #ffffff;
  padding: 16px;
  letter-spacing: 0.6px;
}

/* 一级标题 - 模拟 Source 文档标题 */
.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #1a73e8;
  margin-bottom: 32px;
  line-height: 1.4;
  text-align: center;
  border-bottom: 2px solid #e8eaed;
  padding-bottom: 16px;
}

/* 二级和三级标题 */
.wechat-article h2 {
  font-size: 20px;
  font-weight: 600;
  color: #202124;
  margin: 32px 0 16px 0;
}

.wechat-article h3 {
  font-size: 18px;
  font-weight: 600;
  color: #3c4043;
  margin: 24px 0 12px 0;
  display: inline-block;

}

/* 强调文字（段落中普通强调） */
.wechat-article strong {
  font-weight: 600;
  color: #174ea6; /* 深蓝 */
}

/* 列表中的强调文字（恢复原有卡片标签样式） */
.wechat-article ul strong,
.wechat-article ol strong {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: #174ea6;
  background-color: #e8f0fe;
  padding: 6px 14px;
  border-radius: 6px;
  margin: 0 0 8px 0;
}

/* 普通段落 */
.wechat-article p {
  margin: 0 0 18px 0;
  color: #3c4043;
  font-size: 15.5px;
  text-align: justify;
}

/* 读书笔记第一段导语，模拟摘要 */
.wechat-article > p:first-of-type {
  font-weight: 500;
  color: #202124;
  background: #f8f9fa;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid #dadce0;
  box-shadow: 0 1px 2px rgba(60,64,67,0.1);
  margin-bottom: 32px;
}

/* 无序列表 (知识点解构卡片) */
.wechat-article ul {
  list-style-type: none;
  padding: 0;
  margin: 16px 0 32px 0;
  color: #3c4043;
  background-color: #f8f9fa;
  border: 1px solid #dadce0;
  border-left: 4px solid #1a73e8;
  border-radius: 8px;
  overflow: hidden;
}

.wechat-article ul li {
  padding: 16px 20px 16px 36px;
  border-bottom: 1px solid #e8eaed;
  position: relative;
  margin: 0;
}

.wechat-article ul li:last-child {
  border-bottom: none;
}

/* 自定义无序列表的项目符号 */
.wechat-article ul li::before {
  content: "";
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  width: 6px;
  height: 6px;
  background-color: #1a73e8;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

/* 有序列表 */
.wechat-article ol {
  padding: 16px 20px 16px 40px;
  margin: 16px 0 32px 0;
  color: #3c4043;
  background-color: #f8f9fa;
  border: 1px solid #dadce0;
  border-radius: 8px;
}

.wechat-article ol li {
  margin-bottom: 12px;
  padding-left: 4px;
}

.wechat-article ol li::marker {
  color: #1a73e8;
  font-weight: 600;
}

/* 引用块 (高亮金句) */
.wechat-article blockquote {
  background: #ffffff;
  border: 1px solid #dadce0;
  border-top: 4px solid #fbbc04; /* Google 黄 */
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
  color: #202124;
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(60,64,67,0.15);
}

.wechat-article blockquote p {
  margin-bottom: 0;
}

/* 图片样式 */
.wechat-article img {
  width: 100%;
  border-radius: 8px;
  margin: 20px 0;
  display: block;
  border: 1px solid #dadce0;
}

/* 分割线 */
.wechat-article hr {
  border: none;
  height: 1px;
  background-color: #dadce0;
  margin: 40px 0;
}

/* 链接样式 */
.wechat-article a {
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
}
`
  }
]
