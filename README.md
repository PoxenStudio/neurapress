# NeuraPress

NeuraPress 是一个现代化的 Markdown 编辑器，专注于提供优质的微信公众号排版体验。响应式设计，支持移动设备。搭配 DeepSeek和微信公众号助手使用，碎片时间也能用手机发有排版的文章了。

最新链接 [Markdown Editor](https://md.newkit.site/) ，更多工具请访问[NewKit](https://www.newkit.site/)

![NeuraPress Website image](/public/assets/img/neurapress-web-app.jpg)

## 特性

- 🎨 实时预览 - 所见即所得的编辑体验
- 📱 移动端支持 - 支持手机上直接编辑，搭配 DeepSeek和微信公众号助手使用
- 🎯 微信风格 - 完美适配微信公众号样式
- 🔧 样式定制 - 灵活的样式配置选项
- 📋 一键复制 - 支持复制带格式的预览内容
- 🎭 模板系统 - 内置多种排版模板，一键切换
- 🚀 快速高效 - 基于 Next.js 构建，性能优异

## Docker部署

使用非常简单的compose文件部署：
```
services:
  app:
    image: poxenstudio/neurapress
    ports:
      - "3000:3000"
    volumes:
      - ./data:/app/data
    restart: unless-stopped
```
文章、模板设置等数据都记录在浏览器中；只有粘贴的图片保存在服务器上（见下文）。

### 粘贴图片

在编辑器中粘贴剪贴板图片时，图片保存到服务器的 `/app/data/images/<年-月>/` 目录，并插入完整链接：

```
![image.png](https://md.example.com/images/2026-09/<时间戳>-<uuid>.png)
```

```
services:
  app:
    image: poxenstudio/neurapress
    ports:
      - "3000:3000"
    volumes:
      - ./data:/app/data                         # 持久化图片
    environment:
      # - IMAGE_STORAGE_LIMIT_MB=5120            # 图片总容量上限，默认 5GB
    restart: unless-stopped
```

注意：

- 粘贴到公众号时由微信服务器抓取图片，站点需要能从外网访问（建议 HTTPS），内网或 localhost 部署时公众号中的图片无法显示。
- 图片链接使用浏览器当前访问的域名生成，请通过对外域名打开编辑器（用内网地址或 localhost 编辑时生成的链接公众号无法访问）；更换域名后已插入的旧链接会失效。
- 容器以 uid 1000 运行，挂载宿主机目录前需要授权：`mkdir -p data && sudo chown -R 1000:1000 data`。
- 单张图片不超过 10MB，支持 PNG、JPG、GIF、WebP；同一 IP 每 10 分钟最多上传 30 张；总容量达到上限后拒绝上传。


## 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+

### 安装

```bash
# 克隆项目
git clone https://github.com/poxenstudio/neurapress.git

# 进入项目目录
cd neurapress

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 构建

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

### 使用 Docker

我们提供了两种 Docker 环境配置：开发环境和生产环境。所有 Docker 相关文件都位于 `docker` 目录下。

#### 开发环境

使用 Docker Compose 启动开发环境（支持热重载）：

```bash
# 启动开发环境
docker compose -f docker/docker-compose-dev.yml up

# 在后台运行
docker compose -f docker/docker-compose-dev.yml up -d

# 停止服务
docker compose -f docker/docker-compose-dev.yml down
```

用户设置、文章、草稿和模板目前保存在浏览器的 `localStorage` 中。生产 Compose 预留了项目根目录的 `data` 目录作为容器持久化目录，挂载到 `/app/data`：

```bash
docker compose -f docker/docker-compose.yml up -d
```

#### 生产环境

```bash
# 构建生产镜像
docker build -t neurapress:prod -f docker/Dockerfile.prod .

# 运行生产容器
docker run -p 3000:3000 neurapress:prod
```

#### 发布到 Docker Hub

```bash
# 登录到 Docker Hub
docker login

# 构建并标记镜像
docker build -t [your-dockerhub-username]/neurapress:latest -f docker/Dockerfile.prod .

# 推送到 Docker Hub
docker push [your-dockerhub-username]/neurapress:latest
```

#### 从 Docker Hub 拉取和运行

```bash
# 拉取镜像
docker pull [your-dockerhub-username]/neurapress:latest

# 运行容器
docker run -p 3000:3000 [your-dockerhub-username]/neurapress:latest
```

注意：
- 使用 Docker Hub 时，请将 `[your-dockerhub-username]` 替换为你的 Docker Hub 用户名

## 使用指南

1. **编辑内容**
   - 左侧为 Markdown 编辑区
   - 支持标准 Markdown 语法
   - 支持 GFM (GitHub Flavored Markdown)

2. **预览内容**
   - 右侧为实时预览区
   - 展示最终在微信中的显示效果
   - 可以切换预览窗口的显示/隐藏

3. **样式设置**
   - 使用样式选择器选择预设模板
   - 通过样式配置对话框自定义样式
   - 支持自定义字体、颜色、间距等属性

4. **复制内容**
   - 点击"复制源码"获取 HTML 源码
   - 点击"复制预览"获取带格式的预览内容
   - 直接粘贴到微信公众号编辑器中使用

## 技术栈

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- ByteMD
- Marked
- shadcn/ui

## 🌐 联系我们

 [Email](mailto:tianyaxiang@qq.com) | [Twitter](https://x.com/tianyaxiang)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=poxenstudio/neurapress&type=date&legend=top-left)](https://www.star-history.com/#poxenstudio/neurapress&type=date&legend=top-left)

## 贡献指南

欢迎提交 Issue 和 Pull Request。在提交 PR 之前，请确保：

1. 代码通过 ESLint 检查
2. 新功能包含适当的测试
3. 更新相关文档

## 许可证

[MIT License](LICENSE)
