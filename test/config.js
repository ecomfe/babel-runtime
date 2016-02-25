/**
 * @file config edp test配置文件
 * @author zongyu(zongyu@baidu.com)
 */


module.exports = {

    basePath: '../',

    frameworks: ['jasmine', 'esl'],

    files: [
        'test/unit/*.spec.js'
    ],

    coverageReporter: {
        type: 'html',
        dir: 'test/coverage/'
    },

    port: 8120,

    watch: true,

    browsers: [
        'IE',
        'Chrome'
    ],

    singleRun: false,

    requireConfig: {
        packages: [
            {
                name: 'babel-runtime',
                location: '../src',
                main: 'main'
            }
        ]
    }
};
