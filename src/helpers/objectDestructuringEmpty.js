/**
 * @file objectDestructuringEmpty 空对象解构
 * @author zongyu(zongyu@baidu.com)
 */

define(function () {

    function objectDestructuringEmpty(obj) {

        if (obj == null) {
            throw new TypeError('Cannot destructure undefined');
        }
    }

    return objectDestructuringEmpty
});
