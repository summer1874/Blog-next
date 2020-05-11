## 搭建 vue-admin 基础架构

### 功能
- 使用 vue-cli3 构建
- 首屏加载等待动画
```html
<div id="app">
  填充loading动画, 当vue装载到dom的时会自动移除loading
</div>
```
- 国际化
- 五款主题
- 登录和注销
- 分离的路由和菜单设置
- 富文本编辑器
- 导入 Excel 
- 数据导出 Excel 
- 数字动画
- cookie 封装
- 菜单全局控制 API 
- 自定义登录重定向
- 多种数据持久化方式：区分用户，区分路由，页面数据快照功能
### vue-cli3
```bash
vue create vue-admin
```
因为是从0到1，默认选用`default`
 