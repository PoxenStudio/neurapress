import type { WechatTemplate } from '../types'

export const financeTemplates: WechatTemplate[] = [
  {
    id: "wechat-finance-data",
    name: "数据研报",
    description: "量化数据分析风格，深蓝基调搭配数据图表优化排版，适合投研报告、行业数据解读与市场分析",
    category: "finance",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#1e3a5f","description":"主色调（深蓝）"},{"name":"accentColor","type":"color","defaultValue":"#38b2ac","description":"强调色（青绿）"}],
    defaultStyleSettings: {"themeColor":"","fontSize":15,"lineHeight":1.8,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #f7f8fc;
  padding: 40px 36px;
  max-width: 677px;
  margin: 0 auto;
  color: #2d3748;
  position: relative;
}

.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1e3a5f 0%, #2c5282 50%, #38b2ac 100%);
}

.wechat-article p {
  font-size: 15px;
  line-height: 1.8;
  margin: 14px 0;
  color: #2d3748;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #1a202c;
  margin: 12px 0 8px;
  /* 如果删除了边框，为了保持原本的高度视觉，可以把 padding-bottom 稍微加大 2px */
  padding: 16px 0 14px;
  line-height: 1.3;

  /* 1. 彻底去掉真实的边框 */
  border: none;

  /* 2. 用多重背景同时画出两条线（写在前面的图层在最上面） */
  background-image:
    linear-gradient(90deg, #1e3a5f, #38b2ac), /* 上层：渐变短线 */
    linear-gradient(90deg, #e2e8f0, #e2e8f0); /* 下层：纯灰色长线 */

  /* 3. 分别设置这两条线的尺寸 */
  background-size:
    60px 2px,   /* 上层渐变线：宽 60px，高 2px */
    100% 2px;   /* 下层灰色线：宽 100%，高 2px */

  /* 4. 让它们都贴紧左下角 */
  background-position:
    left bottom,
    left bottom;

  background-repeat: no-repeat;
}

.wechat-article h1::before {
  content: '';
  display: block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #38b2ac;
  margin-bottom: 8px;
}



.wechat-article h2 {
  font-size: 19px;
  font-weight: 600;
  color: #1e3a5f;
  margin: 36px 0 14px;
  padding: 10px 14px;
  background: linear-gradient(90deg, rgba(30, 58, 95, 0.06) 0%, transparent 100%);
  border-left: 4px solid #1e3a5f;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #2c5282;
  margin: 28px 0 10px;
}

.wechat-article h3::before {
  content: '▍';
  color: #38b2ac;
  margin-right: 4px;
  display: inline-block;
}

.wechat-article h4 {
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
  margin: 22px 0 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.wechat-article strong { font-weight: 600; color: #1a202c; }
.wechat-article em { font-style: italic; color: #718096; }

/* 引用 — 核心观点 */
.wechat-article blockquote {
  border: 1px solid #e2e8f0;
  border-left: 4px solid #38b2ac;
  padding: 16px 20px;
  margin: 24px 0;
  background: #f0faf9;
  border-radius: 0 6px 6px 0;
}

.wechat-article blockquote::before {
  content: '📊 核心观点';
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: #1e3a5f;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.75;
  color: #2c5282;
  margin: 4px 0;
  font-weight: 500;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 14px 18px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14.5px;
  line-height: 1.8;
  color: #2d3748;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
  border-bottom: 1px dashed #e2e8f0;
}

.wechat-article ul li:last-child { border-bottom: none; }

.wechat-article ul li::before {
  content: '▸';
  color: #38b2ac;
  font-size: 12px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: fin-data; }
.wechat-article ol li {
  padding: 5px 0 5px 30px;
  position: relative;
  border-bottom: 1px dashed #e2e8f0;
}

.wechat-article ol li:last-child { border-bottom: none; }

.wechat-article ol li::before {
  counter-increment: fin-data;
  content: counter(fin-data);
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #1e3a5f, #2c5282);
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
  border-radius: 4px;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #2c5282;
  text-decoration: none;
  border-bottom: 1px solid rgba(44, 82, 130, 0.3);
  font-weight: 500;
}

.wechat-article code {
  background: #edf2f7;
  color: #2c5282;
  padding: 2px 7px;
  border-radius: 3px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
}

.wechat-article pre {
  background: #1a202c;
  color: #e2e8f0;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 6px;
  border-top: 3px solid #38b2ac;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

/* 表格 — 数据核心 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 13.5px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
}

.wechat-article th {
  background: linear-gradient(135deg, #1e3a5f, #2c5282);
  color: #e2e8f0;
  font-weight: 600;
  padding: 10px 12px;
  text-align: right;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.wechat-article th:first-child { text-align: left; }

.wechat-article td {
  padding: 9px 12px;
  border-bottom: 1px solid #edf2f7;
  color: #2d3748;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.wechat-article td:first-child {
  text-align: left;
  font-weight: 500;
}

.wechat-article tr:nth-child(even) { background: #f7fafc; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.wechat-article figcaption {
  font-size: 12px;
  color: #a0aec0;
  text-align: left;
  margin-top: 6px;
  font-style: italic;
}

.wechat-article hr {
  border: none;
  height: 1px;
  background: #e2e8f0;
  margin: 32px 0;
}

.wechat-article .highlight {
  background: rgba(56, 178, 172, 0.1);
  padding: 1px 4px;
  border-radius: 2px;
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 18px; }
  .wechat-article h1 { font-size: 22px; }
}
`
  },
  {
    id: "wechat-finance-wealth",
    name: "财富锦囊",
    description: "高端理财顾问风格，暖金色调搭配精致排版，适合基金定投科普、保险配置建议与个人理财规划",
    category: "finance",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#b8860b","description":"主色调（暗金）"},{"name":"accentColor","type":"color","defaultValue":"#daa520","description":"强调色（金色）"},{"name":"backgroundColor","type":"color","defaultValue":"#fffcf5","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#b8860b","fontSize":15,"lineHeight":1.9,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #fffcf5;
  padding: 44px 38px;
  max-width: 677px;
  margin: 0 auto;
  color: #3d3529;
  position: relative;
}

.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #b8860b, #daa520, #f0c75e);
}

.wechat-article p {
  font-size: 15.5px;
  line-height: 1.9;
  margin: 16px 0;
  color: #3d3529;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 26px;
  font-weight: 700;
  color: #2a2018;
  margin: 8px 0 24px;
  padding: 18px 24px;
  line-height: 1.35;
  text-align: center;
  background: linear-gradient(135deg, #fdf6e3 0%, #fcefc7 100%);
  border-radius: 12px;
  border: 1px solid #f0dca0;
  border-top: none;
  border-left: none;
  border-right: none;
}

.wechat-article h1::after {
  content: ' ';
  display: block;
  width: 40px;
  height: 2px;
  background: #b8860b;
  margin: 14px auto 0;
}

.wechat-article h2 {
  font-size: 19px;
  font-weight: 600;
  color: #5a4820;
  margin: 36px 0 14px;
  padding: 8px 0 8px 14px;
  border-left: 4px solid #daa520;
  background: linear-gradient(90deg, rgba(218, 165, 32, 0.06) 0%, transparent 100%);
}

.wechat-article h3 {
  font-size: 16.5px;
  font-weight: 600;
  color: #6a5a30;
  margin: 28px 0 10px;
  position: relative;
  padding-left: 20px;
}

.wechat-article h3::before {
  content: '💰';
  position: absolute;
  left: 0;
  top: 1px;
  font-size: 13px;
}

.wechat-article h4 {
  font-size: 15px;
  font-weight: 600;
  color: #7a6a40;
  margin: 22px 0 8px;
}

.wechat-article strong { font-weight: 600; color: #2a2018; }
.wechat-article em { font-style: italic; color: #6a5a40; }

/* 引用 — 理财贴士 */
.wechat-article blockquote {
  border: none;
  padding: 18px 22px;
  margin: 24px 0;
  background: linear-gradient(135deg, #fdf6e3 0%, #fcefc7 100%);
  border-radius: 10px;
  border-left: 4px solid #daa520;
  position: relative;
}

.wechat-article blockquote::before {
  content: '💡 要点提示';
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: #b8860b;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.wechat-article blockquote p {
  font-size: 14.5px;
  line-height: 1.8;
  color: #5a4820;
  margin: 4px 0;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 18px 0;
  padding: 16px 20px;
  background: #fefaf0;
  border: 1px solid #f5e8c8;
  border-radius: 10px;
  font-size: 15px;
  line-height: 1.85;
  color: #3d3529;
}

.wechat-article ul li {
  padding: 5px 0 5px 22px;
  position: relative;
}

.wechat-article ul li::before {
  content: '✓';
  color: #b8860b;
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;

}

.wechat-article ol { counter-reset: wealth-c; }
.wechat-article ol li {
  padding: 5px 0 5px 32px;
  position: relative;
}

.wechat-article ol li::before {
  counter-increment: wealth-c;
  content: 'STEP ' counter(wealth-c);
  display: inline-block;
  width: auto;
  margin-left: -65px;
  vertical-align: top;
  margin-top: 4px;
  font-size: 9px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, #b8860b, #daa520);
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #b8860b;
  text-decoration: none;
  border-bottom: 1px solid rgba(184, 134, 11, 0.3);
  font-weight: 500;
}

.wechat-article code {
  background: #fdf6e3;
  color: #7a6a30;
  padding: 2px 7px;
  border-radius: 4px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
  border: 1px solid #f0dca0;
}

.wechat-article pre {
  background: #2a2018;
  color: #e8dcc8;
  padding: 20px 22px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 8px;
  border-top: 3px solid #daa520;
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
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #f0dca0;
}

.wechat-article th {
  background: linear-gradient(135deg, #b8860b, #daa520);
  color: #fff;
  font-weight: 600;
  padding: 11px 14px;
  text-align: left;
  font-size: 13px;
}

.wechat-article td {
  padding: 10px 14px;
  border-bottom: 1px solid #f5e8c8;
  color: #3d3529;
  font-variant-numeric: tabular-nums;
}

.wechat-article tr:nth-child(even) { background: #fefaf0; }
.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 24px auto;
  border-radius: 8px;
  border: 1px solid #f0dca0;
}

.wechat-article hr {
  border: none;
  height: auto;
  margin: 32px 0;
  text-align: center;
}

.wechat-article hr::before {
  content: '◆  ◆  ◆';
  color: #daa520;
  font-size: 8px;
  letter-spacing: 6px;
}

.wechat-article .highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(218, 165, 32, 0.15) 55%);
}

@media (max-width: 480px) {
  .wechat-article { padding: 32px 20px; }
  .wechat-article h1 { font-size: 22px; padding: 14px 18px; }
}
`
  },
  {
    id: "wechat-finance-market",
    name: "市场脉搏",
    description: "证券交易所风格，红绿双色系搭配实时数据感排版，适合股市复盘、期货解析与交易策略分享",
    category: "finance",
    variables: [{"name":"primaryColor","type":"color","defaultValue":"#e74c3c","description":"主色调（涨红）"},{"name":"accentColor","type":"color","defaultValue":"#27ae60","description":"辅助色（跌绿）"},{"name":"backgroundColor","type":"color","defaultValue":"#0f1419","description":"背景颜色"}],
    defaultStyleSettings: {"themeColor":"#e74c3c","fontSize":14,"lineHeight":1.8,"textAlign":"justify"},
    css: `.wechat-article {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #0f1419;
  padding: 36px 32px;
  max-width: 677px;
  margin: 0 auto;
  color: #c8cdd5;
  position: relative;
}

.wechat-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #e74c3c 0%, #e74c3c 50%, #27ae60 50%, #27ae60 100%);
}

.wechat-article p {
  font-size: 14.5px;
  line-height: 1.8;
  margin: 14px 0;
  color: #b0b8c8;
  text-align: justify;
}

.wechat-article h1 {
  font-size: 24px;
  font-weight: 700;
  color: #e8ecf0;
  margin: 12px 0 16px;
  padding: 14px 0;
  line-height: 1.3;
  border: none;
  border-bottom: 1px solid #2a3040;
  position: relative;
}

.wechat-article h1::before {
  content: 'MARKET PULSE';
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #e74c3c;
  margin-bottom: 8px;
}

.wechat-article h2 {
  font-size: 18px;
  font-weight: 600;
  color: #e0e4ea;
  margin: 32px 0 12px;
  padding: 10px 14px;
  background: rgba(231, 76, 60, 0.06);
  border-left: 3px solid #e74c3c;
}

.wechat-article h3 {
  font-size: 16px;
  font-weight: 600;
  color: #27ae60;
  margin: 26px 0 10px;
}

.wechat-article h3::before {
  content: '▶ ';
  color: #27ae60;
  font-size: 10px;
}

.wechat-article h4 {
  font-size: 14px;
  font-weight: 600;
  color: #8090a8;
  margin: 20px 0 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.wechat-article strong { font-weight: 600; color: #e8ecf0; }
.wechat-article em { font-style: italic; color: #8090a8; }

/* 引用 — 市场信号 */
.wechat-article blockquote {
  border: 1px solid #2a3040;
  border-left: 3px solid #e74c3c;
  padding: 14px 18px;
  margin: 22px 0;
  background: rgba(231, 76, 60, 0.04);
  border-radius: 0 6px 6px 0;
}

.wechat-article blockquote::before {
  content: '⚡ SIGNAL';
  display: block;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #e74c3c;
  margin-bottom: 8px;
}

.wechat-article blockquote p {
  font-size: 14px;
  line-height: 1.75;
  color: #c0c8d8;
  margin: 4px 0;
  font-weight: 500;
}

/* 列表 */
.wechat-article ul,
.wechat-article ol {
  list-style: none;
  margin: 16px 0;
  padding: 12px 16px;
  background: #161c24;
  border: 1px solid #2a3040;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.75;
  color: #b0b8c8;
}

.wechat-article ul li {
  padding: 4px 0 4px 20px;
  position: relative;
  border-bottom: 1px solid #1e2630;
}

.wechat-article ul li:last-child { border-bottom: none; }

.wechat-article ul li::before {
  content: '●';
  color: #27ae60;
  font-size: 6px;
  display: inline-block;
  width: 20px;
  margin-left: -20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}

.wechat-article ol { counter-reset: market-c; }
.wechat-article ol li {
  padding: 4px 0 4px 28px;
  position: relative;
  border-bottom: 1px solid #1e2630;
}

.wechat-article ol li:last-child { border-bottom: none; }

.wechat-article ol li::before {
  counter-increment: market-c;
  content: '#' counter(market-c);
  display: inline-block;
  width: 22px;
  margin-left: -30px;
  vertical-align: top;
  margin-top: 2px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: #e74c3c;
  font-family: "SF Mono", monospace;
}

.wechat-article li span,
.wechat-article li code,
.wechat-article li pre { display: inline; }

.wechat-article a {
  color: #5dade2;
  text-decoration: none;
  border-bottom: 1px dashed rgba(93, 173, 226, 0.4);
}

.wechat-article code {
  background: rgba(39, 174, 96, 0.1);
  color: #27ae60;
  padding: 2px 7px;
  border-radius: 3px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.87em;
  border: 1px solid #1e2e28;
}

.wechat-article pre {
  background: #0a0e12;
  color: #c8d0e0;
  padding: 18px 20px;
  margin: 22px 0;
  overflow-x: auto;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 12.5px;
  line-height: 1.7;
  border-radius: 6px;
  border: 1px solid #1e2630;
}

.wechat-article pre code {
  background: none;
  color: inherit;
  padding: 0;
  border: none;
  border-radius: 0;
}

/* 表格 — 行情数据 */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 22px 0;
  font-size: 13px;
  font-family: "SF Mono", Menlo, Consolas, -apple-system, monospace;
  border: 1px solid #2a3040;
  overflow: hidden;
}

.wechat-article th {
  background: #161c24;
  color: #8090a8;
  font-weight: 600;
  padding: 9px 12px;
  text-align: right;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid #2a3040;
}

.wechat-article th:first-child { text-align: left; }

.wechat-article td {
  padding: 8px 12px;
  border-bottom: 1px solid #1e2630;
  color: #c0c8d8;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.wechat-article td:first-child {
  text-align: left;
  color: #e0e4ea;
  font-weight: 500;
  font-family: -apple-system, sans-serif;
}

.wechat-article tr:last-child td { border-bottom: none; }

.wechat-article img {
  max-width: 100%;
  height: auto !important;
  display: block;
  margin: 22px auto;
  border-radius: 6px;
  border: 1px solid #2a3040;
}

.wechat-article hr {
  border: none;
  height: 1px;
  background: #2a3040;
  margin: 28px 0;
}

.wechat-article .highlight {
  background: rgba(231, 76, 60, 0.12);
  padding: 1px 4px;
  border-radius: 2px;
}

@media (max-width: 480px) {
  .wechat-article { padding: 28px 18px; }
  .wechat-article h1 { font-size: 21px; }
}
`
  }
]
