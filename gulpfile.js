const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server')
const childProcess = require('child_process');
const iconvLite = require('iconv-lite');

gulp.task('default', function () {
    // // 将你的默认的任务代码放在这
    // const webpackConfig = require('./webpack.config.js');
    // const compiler = webpack(webpackConfig);
    // const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    //     stats: {
    //         colors: true
    //     },
    //     open: true,
    //     inline: true,
    //     watchOptions: {
    //         poll: true
    //     }
    // });
    // console.log(devServerOptions)
    // const server = new WebpackDevServer(compiler, devServerOptions)
    // server.listen(webpackConfig.devServer.port)
    // console.log("start")
    var webpack_dev_server = childProcess.spawn('.\\node_modules\\.bin\\webpack-dev-server', [
        '--open',
        '--config', 
        'webpack.config.js'
    ], {
        shell:true
    });
    webpack_dev_server.stdout.on('data', function (data) {
        console.log(iconvLite.decode(data,'utf8'));
    })
    webpack_dev_server.stderr.on('data', function (data) {
        console.log(iconvLite.decode(data,'utf8'));
    })
});