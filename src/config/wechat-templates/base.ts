// 所有模板共享的公众号基础样式
export const BASE_CSS = `/* WeChat default Official Account Base Styles */
.wechat-article {
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
  max-width: 677px;
  margin: 0 auto;
  padding: 20px 16px;
  letter-spacing: 0.5px;
  word-wrap: break-word;
}

.wechat-article li p {
  display: inline;
}

/* Text styles */
.wechat-article p {
  margin: 20px 0;
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 16px;
  line-height: 1.75;
  color: #333;
}

/* Links */
.wechat-article a {
  color: #576b95;
  text-decoration: none;
  font-weight: 500;
}

/* Images */
.wechat-article img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.wechat-article .image-wrapper {
  text-align: center;
  margin: 25px 0;
}

.wechat-article .image-caption {
  font-size: 14px;
  color: #888;
  margin-top: 8px;
  font-style: italic;
}

/* Tables */
.wechat-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.wechat-article th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: bold;
  padding: 15px 12px;
  text-align: left;
  font-size: 15px;
}

.wechat-article td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  font-size: 15px;
}

.wechat-article tr:last-child td {
  border-bottom: none;
}

.wechat-article tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Math expressions */
.wechat-article .katex {
  font-size: 1.1em;
  color: #2c3e50;
}

.wechat-article .katex-display {
  margin: 20px 0;
  text-align: center;
  background: rgba(52, 152, 219, 0.05);
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

/* Utility styles */
.wechat-article .text-center {
  text-align: center;
}

.wechat-article .text-right {
  text-align: right;
}

.wechat-article .highlight {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.3) 0%, rgba(255, 235, 59, 0.2) 100%);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
}

.wechat-article .info-box {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  padding: 1em;
  margin: 1em 0;
}

.wechat-article .warning-box {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 1em;
  margin: 1em 0;
}
`
