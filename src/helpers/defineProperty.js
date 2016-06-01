/**
 * @file defineProperty 定义一个属性
 * @author zongyu(zongyu@baidu.com)
 */

define(function () {

    function defineProperty(obj, key, value) {
        obj[key] = value;
        return obj;
    }

    return defineProperty;
});
