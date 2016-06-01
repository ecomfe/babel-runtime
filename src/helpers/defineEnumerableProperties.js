/**
 * @file defineEnumerableProperties
 * @author zongyu(zongyu@baidu.com)
 */

define(function () {

    function defineProperty(obj, key, value) {
        obj[key] = value;
        return obj;
    }

    return defineProperty;
});
