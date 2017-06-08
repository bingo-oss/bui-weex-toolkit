var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var bannerPlugin = new webpack.BannerPlugin(
    '// { "framework": "Vue" }\n',
    {raw: true}
)

//  文件拷贝插件
var CopyWebpackPlugin = require('copy-webpack-plugin')
var copyPlugin = new CopyWebpackPlugin([
    {from: './src/image', to: "./image"},
    {from: './src/font', to: "./font"}
])

// 遍历文件入口,动态生成入口，暂不支持多层级目录
var entryPath = './src/entry';
var entries = fs.readdirSync(entryPath).reduce(function (o, filename) {
    var key = filename.substring(0, filename.indexOf('.'));
    var filePath = path.resolve(entryPath + "/" + filename);
    o[key] = filePath;
    return o;
}, {});

function getBaseConfig() {
    return {
        entry: entries,
        output: {
            path: 'dist',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/
                }, {
                    test: /\.vue(\?[^?]+)?$/,
                    loaders: []
                }, {
                    test: /\.scss$/,
                    loader: 'style!css!sass'
                }
            ]
        },
        vue: {},
        plugins: [bannerPlugin, copyPlugin]
    }
}

var webConfig = getBaseConfig();
webConfig.output.filename = '[name].web.js';
webConfig.module.loaders[1].loaders.push('vue');

var weexConfig = getBaseConfig();
weexConfig.output.filename = '[name].weex.js';
weexConfig.module.loaders[1].loaders.push('weex');

module.exports = [webConfig, weexConfig];
