const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server')
const childProcess = require('child_process');
const iconvLite = require('iconv-lite');
const path = require('path')

gulp.task('electron-renderer', function () {
    var webpack_dev_server = childProcess.spawn('.\\node_modules\\.bin\\webpack-dev-server', [
        '--config', 
        'webpack.config.js'
    ], {
        shell:true
    });
    webpack_dev_server.stdout.on('data', function (data) {
        console.log('[renderer webpackage]',iconvLite.decode(data,'utf8'));
    })
    webpack_dev_server.stderr.on('data', function (data) {
        console.log('[renderer webpackage]',iconvLite.decode(data,'utf8'));
    })
});

function startElectron(){
    var electron = childProcess.spawn('node.exe',[
        path.resolve(__dirname,'node_modules','electron','cli.js'),
        path.resolve(__dirname,'dist','main','main.js'),
        '--dev'
    ])
    electron.stdout.on('data', function (data) {
        console.log('[render]',iconvLite.decode(data,'utf8'));
    })
    electron.stderr.on('data', function (data) {
        console.log('[render]',iconvLite.decode(data,'utf8'));
    })
    return electron;
}

gulp.task('electron-main',function(){
    var webpack_dev_server = childProcess.spawn('.\\node_modules\\.bin\\webpack', [
        '--config', 
        'webpack.main.config.js'
    ], {
        shell:true
    });
    webpack_dev_server.stdout.on('data', function (data) {
        console.log('[main webpackage]',iconvLite.decode(data,'utf8'));
    })
    webpack_dev_server.stderr.on('data', function (data) {
        console.log('[main webpackage]',iconvLite.decode(data,'utf8'));
    })

    //TODO 延迟启动避免两次刷新，此处后期改善
    setTimeout(() => {
        var electron = startElectron();
        gulp.watch(['./dist/main/main.js','./dist/main/**/*.js'],function(){
            var killResult = electron.kill('SIGKILL');
            console.log(`electron pid ${electron.pid}`)
            console.log(`kill result:${killResult}`)
            var electronInterval = setInterval(function(){
                console.log(`is electron kiled:${electron.killed}`)
                if(electron.killed){
                    electron = startElectron();
                    clearInterval(electronInterval);
                }
            },500);
            
        })
    }, 5000);
    
})

gulp.task('dev',['electron-renderer','electron-main'])

