/**
 * @file objectDestructuringEmpty 空对象解构
 * @author liuxuanzy(liuxuanzy@qq.com)
 */

define(function () {

    function objectDestructuringEmpty(obj) {

        if (obj == null) {
            throw new TypeError('Cannot destructure undefined');
        }
    }

    return objectDestructuringEmpty
});
