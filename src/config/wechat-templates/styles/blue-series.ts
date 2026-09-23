import type { WechatTemplate } from '../types'

export const blueSeriesTemplates: WechatTemplate[] = [
  {
    id: "wechat-classic-blue",
    name: "经典蓝色商务",
    description: "经典蓝色商务风格，简洁大气",
    category: "blue-series",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"rgb(30, 136, 229)","description":"主色调蓝色"},{"name":"secondaryColor","type":"color","defaultValue":"rgb(66, 165, 245)","description":"次要色调浅蓝"},{"name":"textColor","type":"color","defaultValue":"#333333","description":"文字颜色"}],
    defaultStyleSettings: {"themeColor":"","fontSize":16,"lineHeight":1.8,"textAlign":"justify"},
    css: `/* Classic Blue 模板 */
.wechat-article {
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 30px 0 20px;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  color: rgb(30, 136, 229);
  border-bottom: 2px solid rgb(30, 136, 229);
  text-align: center;
  line-height: 1.4;
}

.wechat-article h1 span {
  font-size: inherit;
  color: inherit;
}

.wechat-article h2 {
  margin: 40px 0 20px;
  padding: 5px 15px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, rgb(30, 136, 229), rgb(66, 165, 245));
  border-radius: 4px;
  display: inline-block;
  line-height: 1.4;
  box-shadow: 0 2px 4px rgba(30, 136, 229, 0.2);
}

.wechat-article h3 {
  margin: 30px 0 15px;
  padding-left: 12px;
  font-size: 17px;
  font-weight: bold;
  color: rgb(30, 136, 229);
  border-left: 5px solid rgb(30, 136, 229);
  line-height: 1.4;
}

/* 段落样式 */
.wechat-article p {
  margin: 15px 0;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  text-align: justify;
}

/* 链接样式 */
.wechat-article a {
  color: rgb(30, 136, 229);
  text-decoration: none;
  border-bottom: 1px solid rgba(30, 136, 229, 0.3);
  transition: border-color 0.2s;
}

.wechat-article a:hover {
  border-bottom-color: rgb(30, 136, 229);
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 20px 0;
  padding: 15px 20px;
  font-size: 15px;
  color: #555;
  background-color: rgba(30, 136, 229, 0.05);
  border-left: 4px solid rgb(30, 136, 229);
  border-radius: 0 4px 4px 0;
}

.wechat-article blockquote strong {
  color: rgb(30, 136, 229);
}

/* 图片样式 */
.wechat-article img {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.wechat-article figure {
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wechat-article figcaption {
  margin-top: 10px;
  font-size: 14px;
  color: #888;
  text-align: center;
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
  color: rgb(30, 136, 229);
}

.wechat-article ol li::marker {
  color: #000;
  font-weight: bold;
}
.wechat-article li span, .wechat-article li section, .wechat-article li strong {
  display: inline;
}



/* 代码块样式 */
.wechat-article pre {
  margin: 15px 0;
  padding: 15px;
  background: #282c34;
  color: #abb2bf;
  border-radius: 6px;
  overflow-x: auto;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 14px;
  line-height: 1.5;
}

.wechat-article code {
  padding: 2px 5px;
  background-color: rgba(30, 136, 229, 0.1);
  color: rgb(30, 136, 229);
  border-radius: 3px;
  font-family: Consolas, Monaco, monospace;
  font-size: 14px;
}

.wechat-article pre code {
  padding: 0;
  background-color: transparent;
  color: inherit;
}

/* 表格样式 */
.wechat-article table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  font-size: 14px;
  border: 1px solid #eee;
}

.wechat-article th, .wechat-article td {
  padding: 10px 15px;
  border: 1px solid #eee;
  text-align: left;
}

.wechat-article th {
  background-color: rgb(30, 136, 229);
  color: #fff;
  font-weight: bold;
  border-color: rgb(30, 136, 229);
}

.wechat-article tr:nth-child(even) {
  background-color: rgba(30, 136, 229, 0.03);
}

/* 分割线 */
.wechat-article hr {
  margin: 40px 0;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(30, 136, 229, 0), rgb(30, 136, 229), rgba(30, 136, 229, 0));
}
`
  },
  {
    id: "wechat-classic-blue-pdf",
    name: "经典蓝色商务PDF版",
    description: "经典蓝色商务风格，针对 PDF 导出优化",
    category: "blue-series",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"rgb(30, 136, 229)","description":"主色调蓝色"},{"name":"secondaryColor","type":"color","defaultValue":"rgb(66, 165, 245)","description":"次要色调浅蓝"},{"name":"textColor","type":"color","defaultValue":"#333333","description":"文字颜色"}],
    defaultStyleSettings: {"themeColor":"","fontSize":16,"lineHeight":1.8,"textAlign":"justify"},
    css: `/* Classic Blue PDF 模板 */
.wechat-article {
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
}

/* 标题样式 */
.wechat-article h1 {
  margin: 10px 0 10px;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  color: rgb(30, 136, 229);
  text-align: center;
  line-height: 1.4;
}

.wechat-article h1 span {
  font-size: inherit;
  color: inherit;
}

.wechat-article h2 {
  margin: 15px 0 15px;
  padding: 5px 15px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, rgb(30, 136, 229), rgb(66, 165, 245));
  border-radius: 4px;
  display: inline-block;
  line-height: 1.4;
  box-shadow: 0 2px 4px rgba(30, 136, 229, 0.2);
}

.wechat-article h3 {
  margin: 30px 0 15px;
  padding-left: 12px;
  font-size: 17px;
  font-weight: bold;
  color: rgb(30, 136, 229);
  border-left: 5px solid rgb(30, 136, 229);
  line-height: 1.4;
}

/* h4 — 底色条 */
.wechat-article h4 {
  font-size: 16px;
  font-weight: 600;
  color: #2d8cf0;
  margin: 28px 0 14px;
  padding: 8px 14px;
  background: #f0f7ff;
  border-radius: 6px;
  line-height: 1.5; /* 建议加上行高，让文字看起来更透气 */
}

/* h5 — 圆点标记 + 底线 */
.wechat-article h5 {
  font-size: 15px;
  font-weight: 600;
  color: #3a7bd5;
  margin: 24px 0 12px;
  padding: 0 0 6px 18px;
  position: relative;
  line-height: 1.5;
}

.wechat-article h5::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 3px);
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #3b82f6, #1e88e5);
  border-radius: 50%;
}

/* 段落样式 */
.wechat-article p {
  margin: 15px 0;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  text-align: justify;
  text-indent: 2em;
}

/* 链接样式 */
.wechat-article a {
  color: rgb(30, 136, 229);
  text-decoration: none;
  border-bottom: 1px solid rgba(30, 136, 229, 0.3);
  transition: border-color 0.2s;
}

.wechat-article a:hover {
  border-bottom-color: rgb(30, 136, 229);
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 20px 0;
  padding: 15px 20px;
  font-size: 15px;
  color: #555;
  background-color: rgba(30, 136, 229, 0.05);
  border-left: 4px solid rgb(30, 136, 229);
  border-radius: 0 4px 4px 0;
}

.wechat-article blockquote strong {
  color: rgb(30, 136, 229);
}

/* 图片样式 */
.wechat-article img {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.wechat-article figure {
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wechat-article figcaption {
  margin-top: 10px;
  font-size: 14px;
  color: #888;
  text-align: center;
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
      content: '◆';
       color: #3b82f6;
        font-size: 13px;
        font-weight: 700;
        display: inline-block;
        width: 20px;
        margin-left: -20px;
        vertical-align: middle;
        margin-top: -2px;
}

/* 嵌套列表：去掉卡片样式 */
.wechat-article ul ul,
.wechat-article ul ol,
.wechat-article ol ul,
.wechat-article ol ol {
  margin: 5px 0;
  padding: 0 0 0 18px;
  background: transparent;
  border-radius: 0;
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

/* ol 内嵌套 ul 的 li：用菱形标记而非数字 */
.wechat-article ol ul li {
  padding: 5px 0 5px 22px;
}

.wechat-article ol ul li::before {
  counter-increment: none;
  content: '◆';
  width: 8px;
  height: 8px;
  margin-left: -20px;
  margin-top: -3px;
  margin-right: 8px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 2px;
  transform: rotate(45deg);
  vertical-align: middle;
  text-align: left;
  line-height: normal;
  font-size: 0;
  display: inline-block;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre {
  display: inline;
}

/* 代码块样式 */
.wechat-article pre {
  margin: 15px 0;
  padding: 15px;
  background: #282c34;
  color: #abb2bf;
  border-radius: 6px;
  overflow-x: auto;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 14px;
  line-height: 1.5;
}

.wechat-article code {
  padding: 2px 5px;
  background-color: rgba(30, 136, 229, 0.1);
  color: rgb(30, 136, 229);
  border-radius: 3px;
  font-family: Consolas, Monaco, monospace;
  font-size: 14px;
}

.wechat-article pre code {
  padding: 0;
  background-color: transparent;
  color: inherit;
}

/* 表格样式 */
.wechat-article table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  font-size: 14px;
  border: 1px solid #eee;
}

.wechat-article th, .wechat-article td {
  padding: 10px 15px;
  border: 1px solid #eee;
  text-align: left;
}

.wechat-article th {
  background-color: rgb(30, 136, 229) !important;
  color: #fff;
  font-weight: bold;
  text-align: center !important;
  border-color: rgb(30, 136, 229);
}

.wechat-article tr:nth-child(even) {
  background-color: rgba(30, 136, 229, 0.03);
}

/* 分隔线 */
.wechat-article hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #cbd5e1, transparent);
  margin: 32px 0;
}


/* PDF 打印优化 */
@media print {
  .wechat-article {
    max-width: 100%;
    padding: 0;
  }
  .wechat-article img {
    max-width: 100%;
    box-shadow: none;
  }
  .wechat-article table {
    box-shadow: none;
  }
}
`
  },
  {
    id: "wechat-lakeblue",
    name: "Lake Blue",
    description: "基于蓝色风格的微信公众号模板，清新淡雅",
    category: "blue-series",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"rgb(37, 132, 181)","description":"主色调蓝色"},{"name":"secondaryColor","type":"color","defaultValue":"rgb(159, 205, 208)","description":"次要色调青色"},{"name":"textColor","type":"color","defaultValue":"rgb(0, 0, 0)","description":"文字颜色"}],
    css: `/* Lake Blue 模板 */
.wechat-article {
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: rgb(0, 0, 0);
  background-color: #fff;
}

/* 标题样式 */
.wechat-article h1 {
  border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(37, 132, 181); margin: 30px 0px 15px; align-items: unset; background: none 0% 0% / auto no-repeat scroll padding-box border-box transparent; border-style: none none solid; border-width: 1px; border-radius: 0px; box-shadow: none; display: block; flex-direction: unset; float: unset; height: auto; justify-content: unset; line-height: 1.5em; overflow: unset; padding: 0px; text-align: left; text-shadow: none; transform: none; width: auto; -webkit-box-reflect: unset; visibility: visible;
}

.wechat-article h1 span{
font-size: 20px; color: rgb(37, 132, 181); line-height: 1.5em; letter-spacing: 0em; padding: 0px; align-items: unset; background: none 0% 0% / auto no-repeat scroll padding-box border-box transparent; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; display: block; font-weight: bold; flex-direction: unset; float: unset; height: auto; justify-content: unset; margin: 0px; overflow: unset; text-align: left; text-indent: 0em; text-shadow: none; transform: none; width: auto; -webkit-box-reflect: unset; visibility: visible;
}

.wechat-article h1 strong {
background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(37, 132, 181); align-items: unset; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; color: rgb(255, 255, 255); display: inline-block; font-size: 20px; font-weight: bold; flex-direction: unset; float: unset; height: auto; justify-content: unset; letter-spacing: 0px; line-height: 1.5em; margin: 0px 8px 0px 0px; overflow: unset; padding: 2px 8px; text-align: left; text-indent: 0em; text-shadow: none; transform: none; width: auto; -webkit-box-reflect: unset; visibility: visible;
}

.wechat-article h2 {
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 4px solid rgb(37, 132, 181);
  font-size: 18px;
  font-weight: bold;
  color: rgb(37, 132, 181);
  display: block;
  padding-right: 4px;
}

.wechat-article h2 strong {
  color: rgb(159, 205, 208);
  border-bottom: 4px solid rgb(126, 163, 165) !important;
  font-size: inherit;
  margin-bottom: -4px;
  padding: 2px 4px 2px 3px;
  margin-right: 4px; /* Adjust spacing */
  display: inline-block;
}

.wechat-article h3 {
 margin-top: 30px;margin-bottom: 15px;margin-left: 0px;margin-right: 0px;padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;align-items: unset;background-attachment: scroll;background-clip: border-box;background-color: transparent;background-image: none;background-origin: padding-box;background-position-x: 0%;background-position-y: 0%;background-repeat: no-repeat;background-size: auto;border-top-style: none;border-bottom-style: none;border-left-style: none;border-right-style: none;border-top-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-right-width: 1px;border-top-color: rgb(0, 0, 0);border-bottom-color: rgb(0, 0, 0);border-left-color: rgb(0, 0, 0);border-right-color: rgb(0, 0, 0);border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;box-shadow: none;display: block;flex-direction: unset;float: unset;height: auto;justify-content: unset;line-height: 1.5em;overflow-x: unset;overflow-y: unset;text-align: left;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;
}

.wechat-article h3::before {
  content: "";
  background-image: linear-gradient(45deg, transparent 48%, rgb(37, 132, 181) 48%, rgb(37, 132, 181) 52%, transparent 52%);align-items: unset;background-attachment: scroll;background-clip: border-box;background-color: transparent;background-origin: padding-box;background-position-x: 0%;background-position-y: 0%;background-repeat: no-repeat;background-size: auto;border-top-style: none;border-bottom-style: none;border-left-style: none;border-right-style: none;border-top-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-right-width: 1px;border-top-color: rgb(0, 0, 0);border-bottom-color: rgb(0, 0, 0);border-left-color: rgb(0, 0, 0);border-right-color: rgb(0, 0, 0);border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;box-shadow: none;color: rgb(0, 0, 0);display: inline-block;font-size: 22px;font-weight: bold;flex-direction: unset;float: unset;height: 30px;justify-content: unset;letter-spacing: 0px;line-height: 1.5em;margin-top: 0px;margin-bottom: -9px;margin-left: 0px;margin-right: 0px;overflow-x: unset;overflow-y: unset;padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;text-align: left;text-indent: 0em;text-shadow: none;transform: none;width: 30px;-webkit-box-reflect: unset;
}

.wechat-article h3 span{
  font-size: 16px;color: rgb(37, 132, 181);border-bottom-color: rgb(37, 132, 181);line-height: 1.5em;letter-spacing: 0em;align-items: unset;background-attachment: scroll;background-clip: border-box;background-color: transparent;background-image: none;background-origin: padding-box;background-position-x: 0%;background-position-y: 0%;background-repeat: no-repeat;background-size: auto;border-top-style: none;border-bottom-style: solid;border-left-style: none;border-right-style: none;border-top-width: 1px;border-bottom-width: 2px;border-left-width: 1px;border-right-width: 1px;border-top-color: rgb(0, 0, 0);border-left-color: rgb(0, 0, 0);border-right-color: rgb(0, 0, 0);border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;box-shadow: none;display: inline-block;font-weight: bold;flex-direction: unset;float: unset;height: auto;justify-content: unset;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;overflow-x: unset;overflow-y: unset;padding-top: 2px;padding-bottom: 2px;padding-left: 10px;padding-right: 10px;text-align: left;text-indent: 0em;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;
}
/* 段落样式 */
.wechat-article p {
  margin: 8px 0;
  font-size: 16px;
  line-height: 1.8;
  color: rgb(0, 0, 0);
  text-align: justify;
}

/* 链接样式 */
.wechat-article a {
  color: rgb(37, 132, 181);
  font-weight: bold;
  border-bottom: 1px solid rgb(37, 132, 181);
  text-decoration: none;
}

/* 引用块样式 */
.wechat-article blockquote {
  margin: 20px 0;
  padding: 10px 10px 10px 20px;
  border: 1px dashed rgb(37, 132, 181);
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  font-size: 16px;
  line-height: 1.8;
}

.wechat-article blockquote strong {
  color: rgb(37, 132, 181);
  font-weight: bold;
}

/* 图片样式 */
.wechat-article img {
  display: block;
  margin: 10px auto;
  max-width: 100%;
  border: 3px solid rgba(0, 0, 0, 0.4);
  box-shadow: none;
  border-radius: 0;
}

.wechat-article figure {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
