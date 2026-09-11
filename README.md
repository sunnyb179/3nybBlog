# 3nyb.com

www.3nyb.com 的站点仓库。Vercel 直接从 `main` 分支部署，纯静态，没有构建步骤。

## 目录

- `index.html` — 主页（目前是占位页，之后再设计）
- `blog/` — Hexo 博客的生成结果（主题 ShokaX），线上路径是 `/blog/`
- `vercel.json` — 把旧的根路径链接（`/2024/…`、`/tags/…`、`/rss.xml` 等）永久跳转到 `/blog/…`，旧链接和 RSS 订阅不会失效

## 更新博客

Hexo 源码不在这个仓库里。下次用源码重新生成博客时，先在 Hexo 的 `_config.yml` 里改成：

```yml
url: https://www.3nyb.com/blog
root: /blog/
```

然后 `hexo clean && hexo generate`，把 `public/` 里的内容整个复制到本仓库的 `blog/` 目录（先清空旧内容），提交推送即可。

不要再用 `hexo deploy` 直接推到这个仓库——它会用 `public/` 替换整个分支，主页会被覆盖掉。

（本次把博客挪到 `/blog/` 是直接改写生成结果里的绝对路径完成的；下次用源码按上面的配置重新生成，会自然覆盖这些改写。）
