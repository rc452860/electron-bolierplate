import {app,BrowserWindow} from 'electron'
import yargs from 'yargs'



function createWindow() {   
    // 创建浏览器窗口
    var win = new BrowserWindow({width: 280, height: 450,frame:false})

    // 然后加载应用的 index.html。
    win.loadURL(`http://localhost:9000`)
}

app.on('ready', createWindow)