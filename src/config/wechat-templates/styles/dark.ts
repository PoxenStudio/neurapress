import type { WechatTemplate } from '../types'

export const darkTemplates: WechatTemplate[] = [
  {
    id: "wechat-dark-minimal",
    name: "暗夜极简",
    description: "纯粹的深色极简风格，低对比度柔和文字搭配精细分隔线，适合夜间阅读、深度思考与个人随笔",
    category: "dark",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#7878b0","description":"主色调（暗紫灰）"},{"name":"backgroundColor","type":"color","defaultValue":"#1a1a2e","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#7878b0","fontSize":15,"lineHeight":1.95,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", sans-serif;
  background: #1a1a2e;
  padding: 44px 40px;
  max-width: 677px;
  margin: 0 auto;
  color: #a8a8c0;
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.95;
  margin: 16px 0;
  color: #a8a8c0;
  text-align: justify;
  letter-spacing: 0.3px;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 300;
  color: #e8e8f0;
  margin: 0 0 32px;
  padding: 0 0 20px;
  text-align: center;
  letter-spacing: 4px;
  border-bottom: 1px solid #2a2a45;
  border-top: none;
  border-left: none;
  border-right: none;
}

.wechat-article h2 {
  font-size: 19px;
  font-weight: 500;
  color: #d0d0e0;
  margin: 40px 0 16px;
  padding: 0;
  letter-spacing: 1px;
  position: relative;
}

.wechat-article h2::after {
  content: '';
  display: block;
  width: 28px;
  height: 1px;
  background: #4a4a6a;
  margin-top: 10px;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 500;
  color: #c0c0d8;
  margin: 28px 0 10px;
}

.wechat-article h4 {
  font-size: 14px;
  font-weight: 500;
  color: #9898b0;
  margin: 22px 0 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.wechat-article strong { font-weight: 600; color: #e0e0f0; }
.wechat-article em { font-style: italic; color: #8888a8; }

.wechat-article blockquote {
  border: none;
  border-left: 2px solid #3a3a58;
  padding: 16px 24px;
  margin: 28px 0;
  background: rgba(255, 255, 255, 0.02);
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.85;
  color: #8888a8;
  margin: 4px 0;
  font-style: italic;
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
  color: #a8a8c0;
}

.wechat-article ul li {
  padding: 5px 0 5px 20px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.wechat-article ul li:last-child { border-bottom: none; }

.wechat-article ul li::before {
  content: '';
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  width: 5px;
  height: 1px;
  background: #5a5a7a;
  vertical-align: middle;
  margin-top: -2px;
}

.wechat-article ol { counter-reset: dark-min; }
.wechat-article ol li {
  padding: 5px 0 5px 28px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.wechat-article ol li:last-child { border-bottom: none; }

.wechat-article ol li::before {
  counter-increment: dark-min;
  content: counter(dark-min);
  display: inline-block;
  width: 24px;
  margin-left: -28px;
  vertical-align: top;
  margin-top: 6px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: 300;
  color: #5a5a7a;
  text-align: left;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #7878b0;
  text-decoration: none;
  border-bottom: 1px solid #3a3a58;
}

.wechat-article code {
  background: rgba(255, 255, 255, 0.05);
  color: #b8b8d8;
  padding: 2px 8px;
  border-radius: 3px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.85em;
  border: 1px solid #2a2a45;
}

.wechat-article pre {
  background: #12121f;
  color: #b8b8d8;
  padding: 22px 24px;
  margin: 28px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border: 1px solid #22223a;
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
  color: #686888;
  font-weight: 400;
  padding: 10px 14px;
  text-align: left;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid #2a2a45;
}

.wechat-article td {
  padding: 12px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  color: #a8a8c0;
}

.wechat-article tr:last-child td { border-bottom: 1px solid #2a2a45; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border-radius: 4px;
  opacity: 0.92;
}

.wechat-article hr {
  border: none;
  height: 1px;
  background: #2a2a45;
  margin: 40px 0;
}

.wechat-article .highlight {
  background: rgba(120, 120, 176, 0.15);
  padding: 1px 4px;
}

@media (max-width: 480px) {
  .wechat-article { padding: 36px 22px; }
  .wechat-article h1 { font-size: 22px; letter-spacing: 2px; }
}
`
  },
  {
    id: "wechat-dark-neon",
    name: "霓虹都市",
    description: "赛博朋克霓虹风格，深色背景搭配鲜明荧光色点缀，适合潮流资讯、电竞内容与先锋设计话题",
    category: "dark",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#8338ec","description":"主色调（霓虹紫）"},{"name":"accentColor","type":"color","defaultValue":"#ff006e","description":"强调色（霓虹粉）"},{"name":"backgroundColor","type":"color","defaultValue":"#0c0c1d","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#8338ec","fontSize":15,"lineHeight":1.85,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", sans-serif;
  background: #0c0c1d;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #b0b8d0;
  position: relative;
}

.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff006e, #8338ec, #3a86ff, #06d6a0);
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.85;
  margin: 16px 0;
  color: #b0b8d0;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  margin: 12px 0 24px;
  padding: 18px 0;
  text-align: center;
  letter-spacing: 2px;
  border: none;
  position: relative;
  text-shadow: 0 0 20px rgba(131, 56, 236, 0.5);
}

.wechat-article h1::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff006e, #8338ec);
  margin: 16px auto 0;
  border-radius: 2px;
}

.wechat-article h2 {
  font-size: 19px;
  font-weight: 600;
  color: #e0e4f0;
  margin: 36px 0 14px;
  padding: 8px 0 8px 16px;
  border-left: 3px solid #8338ec;
  background: linear-gradient(90deg, rgba(131, 56, 236, 0.08) 0%, transparent 100%);
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #3a86ff;
  margin: 28px 0 10px;
}

.wechat-article h3::before {
  content: '//';
  color: #8338ec;
  margin-right: 8px;
  font-weight: 400;
  display: inline-block;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #06d6a0;
  margin: 22px 0 8px;
}

.wechat-article strong { font-weight: 600; color: #e8ecf8; }
.wechat-article em { font-style: italic; color: #8890a8; }

.wechat-article blockquote {
  border: 1px solid #1e1e3a;
  border-left: 3px solid #ff006e;
  padding: 16px 20px;
  margin: 24px 0;
  background: rgba(255, 0, 110, 0.04);
  border-radius: 0 8px 8px 0;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #c898b0;
  margin: 4px 0;
}

.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 18px;
  background: rgba(131, 56, 236, 0.04);
  border: 1px solid #1e1e3a;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.85;
  color: #b0b8d0;
}

.wechat-article ul li {
  padding: 4px 0 4px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '▹';
  color: #8338ec;
  font-size: 14px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
}

.wechat-article ol { counter-reset: neon-c; }
.wechat-article ol li {
  padding: 4px 0 4px 30px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: neon-c;
  content: '0' counter(neon-c);
  display: inline-block;
  width: 26px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 5px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #ff006e;
  font-family: "SF Mono", monospace;
  letter-spacing: 1px;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #3a86ff;
  text-decoration: none;
  border-bottom: 1px dashed rgba(58, 134, 255, 0.4);
}

.wechat-article code {
  background: rgba(131, 56, 236, 0.1);
  color: #b080e0;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
  border: 1px solid #2a2a4a;
}

.wechat-article pre {
  background: #080818;
  color: #c8d0e8;
  padding: 20px 24px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 8px;
  border: 1px solid #1e1e3a;
  position: relative;
}

.wechat-article pre::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff006e, #8338ec, #3a86ff);
  border-radius: 8px 8px 0 0;
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
  margin: 24px 0;
  font-size: 14px;
  border: 1px solid #1e1e3a;
  overflow: hidden;
}

.wechat-article th {
  background: linear-gradient(135deg, rgba(131, 56, 236, 0.2), rgba(58, 134, 255, 0.15));
  color: #d0d8f0;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
  border-bottom: 1px solid #2a2a4a;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #1a1a30;
  color: #a0a8c0;
}

.wechat-article tr:nth-child(even) { background: rgba(131, 56, 236, 0.03); }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 28px auto;
  border-radius: 8px;
  border: 1px solid #1e1e3a;
}

.wechat-article hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #2a2a4a, transparent);
  margin: 36px 0;
}

.wechat-article .highlight {
  background: rgba(131, 56, 236, 0.15);
  padding: 1px 4px;
  border-radius: 2px;
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; }
}
`
  }
]
