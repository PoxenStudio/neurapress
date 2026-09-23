import type { WechatTemplate } from '../types'

export const classicTemplates: WechatTemplate[] = [
  {
    id: "wechat-retro-typewriter",
    name: "复古打字机",
    description: "老式打字机质感，等宽字体配泛黄纸张底色，适合个人随笔、复古影评与怀旧风格内容",
    category: "classic",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#8b7750","description":"主色调（复古棕）"},{"name":"backgroundColor","type":"color","defaultValue":"#f5f0e1","description":"背景颜色（旧纸色）"}],
    defaultStyleSettings: {"themeColor":"#8b7750","fontSize":15,"lineHeight":2,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: "Courier New", "Noto Serif SC", "Songti SC", Courier, monospace;
  background: #f5f0e1;
  padding: 48px 44px;
  max-width: 677px;
  margin: 0 auto;
  color: #3a3530;
  position: relative;
  box-shadow: inset 0 0 80px rgba(139, 119, 80, 0.06);
}

.wechat-article p {
  font-size: 15px;
  line-height: 2;
  margin: 18px 0;
  color: #3a3530;
  text-align: justify;
  letter-spacing: 0.5px;
}

.wechat-article h1 {
  font-size: 24px;
  font-weight: 700;
  color: #2a2520;
  margin: 0 0 28px;
  padding: 0 0 16px;
  text-align: center;
  letter-spacing: 6px;
  text-transform: uppercase;
  border-bottom: 2px solid #3a3530;
  border: none;
  border-bottom: 2px solid #3a3530;
}

.wechat-article h1::before {
  content: '— — —';
  display: block;
  font-size: 12px;
  color: #8b7750;
  letter-spacing: 4px;
  margin-bottom: 12px;
  font-weight: 400;
}

.wechat-article h2 {
  font-size: 18px;
  font-weight: 700;
  color: #2a2520;
  margin: 40px 0 14px;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  display: flex !important  ;
}

.wechat-article h2::before {
  content: '>> ';
  color: #8b7750;
  font-weight: 400;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 700;
  color: #3a3530;
  margin: 28px 0 10px;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: #c0b090;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 700;
  color: #5a5040;
  margin: 22px 0 8px;
}

.wechat-article strong {
  font-weight: 700;
  color: #2a2520;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: #c0b090;
}

.wechat-article em { font-style: italic; color: #5a5040; }

.wechat-article blockquote {
  border: none;
  border-left: 4px solid #8b7750;
  padding: 16px 24px;
  margin: 28px 0;
  background: rgba(139, 119, 80, 0.06);
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.9;
  color: #5a5040;
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
  line-height: 2;
  color: #3a3530;
}

.wechat-article ul li {
  padding: 3px 0 3px 24px;
  position: relative;
}

.wechat-article ul li::before {
  content: '*';
  color: #8b7750;
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
}

.wechat-article ol { counter-reset: typewriter-c; }
.wechat-article ol li {
  padding: 3px 0 3px 32px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: typewriter-c;
  content: counter(typewriter-c) ')';
  display: inline-block;
  width: 24px;
  margin-left: -32px;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 8px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: #8b7750;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #5a4830;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.wechat-article code {
  background: rgba(139, 119, 80, 0.1);
  color: #5a4830;
  padding: 2px 6px;
  border-radius: 0;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9em;
  border: 1px dashed #c0b090;
}

.wechat-article pre {
  background: #ebe5d4;
  color: #3a3530;
  padding: 22px 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "Courier New", Courier, monospace;
  font-size: 13px;
  line-height: 1.75;
  border: 1px solid #d0c8b0;
  position: relative;
}

.wechat-article pre::before {
  content: '---';
  display: block;
  color: #8b7750;
  margin-bottom: 12px;
  letter-spacing: 4px;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border: none;
}

.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 28px 0;
  font-size: 14px;
}

.wechat-article th {
  background: transparent;
  color: #5a5040;
  font-weight: 700;
  padding: 10px 14px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  border-bottom: 2px solid #3a3530;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px dashed #c0b090;
  color: #3a3530;
}

.wechat-article tr:last-child td {
  border-bottom: 2px solid #3a3530;
}

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border: 4px solid #ebe5d4;
  outline: 1px solid #c0b090;
  border-radius: 0;
  box-shadow: none;
}

.wechat-article figcaption {
  font-size: 12px;
  color: #8b7750;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
  letter-spacing: 1px;
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 36px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '* * *';
  color: #8b7750;
  font-size: 14px;
  letter-spacing: 8px;
}

.wechat-article .highlight {
  background: rgba(139, 119, 80, 0.15);
  padding: 1px 3px;
}

@media (max-width: 480px) {
  .wechat-article { padding: 36px 22px; }
  .wechat-article h1 { font-size: 20px; letter-spacing: 4px; }
}
`
  }
]
