import { app, BrowserWindow } from 'electron'
import { argv } from 'yargs'

function createWindow() {
    // 创建浏览器窗口
    var win = new BrowserWindow({
        width: 280,
        height: 450, 
        frame: false,
        show:false,
        title:'sakura',
        resizable:false,
        backgroundColor:'#00FFFFFF'
    })
    if (argv.dev) {
        // 然后加载应用的 index.html。
        win.loadURL(`http://localhost:9000`);
        // 打开devtool
        win.webContents.openDevTools();
    } else {
        win.loadFile(`file://${__dirname}/index.html`);
    }
    win.once('ready-to-show',()=>{
        win.show();
    })

}

app.on('ready', createWindow)

// 当所有界面退出的时候退出
app.on('window-all-closed', function () {
    console.log('app quite')
    app.quit();
})