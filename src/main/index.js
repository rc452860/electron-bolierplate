import {app,BrowserWindow} from 'electron'
import yargs from 'yargs'



function createWindow() {   
    // 创建浏览器窗口
    var win = new BrowserWindow({width: 800, height: 600})

    // 然后加载应用的 index.html。
    win.loadURL(`http://www.baidu.com`)
}

app.on('ready', createWindow)