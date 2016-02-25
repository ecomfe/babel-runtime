/**
 * @file classCallCheck 用于检查类不能被非实例化调用
 * @author zongyu(zongyu@baidu.com)
 */

define(function () {

    function classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return classCallCheck;
});