/**
 * @file defineEnumerableProperties
 * @author liuxuanzy(liuxuanzy@qq.com)
 */

define(function () {

    function defineProperty(obj, key, value) {
        obj[key] = value;
        return obj;
    }

    return defineProperty;
});
