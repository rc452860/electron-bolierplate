# electron脚手架（搭建中）
反正也没人看，瞎写应该没啥事情吧。
- [x] webpack配置
- [x] renderer采用DVA+antd编写界面
- [x] renderer热更新
- [x] main 自动更新
- [ ] main 进程待webpack编译后启动
- [ ] 添加webpack编译完成事件

### 2018年5月31日18:31:13
修改用户界面head的布局方式,没有使用electron自带的`-webkit-app-region`来控制窗口拖拽。这样会导致无法在拖拽区域触发其他js事件列如onmouseenter等。并且右键点击还有个特别丑的system menu。

### 2018年5月31日01:23:47
electron BrowserWindow 关闭 最小化 拖拽功能

### 2018年5月30日01:25:42
- renderer热更新 采用child process方式调用webpack
- main 自动更新自动重启 同样采用renderer方式调用webpack打包代码用gulp监视dist下的main文件目录一旦文件发生改变便杀掉子进程重新启动一个新的electron进程 具体代码参考gulpfile.js

脚手架还有很多待优化的地方，目前都是以子进程的方式启动webpack来编译renderer和main的js文件。
应该会有更好的方式去修改

webpack配置参考umi项目下的af-webpack 这个配置文件简略的从umi中爬下来的。