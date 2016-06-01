/**
 * @file objectWithoutProperties 取出对象中除掉某些属性的部分
 * @author zongyu(zongyu@baidu.com)
 */


define(function () {

    /**
     * 查找元素在数组中的位置
     *
     * @param {Array} arr 目标查找数组
     * @param {*} elem 用于在数组中查找是否存在的值
     * @param {number} [i]开始查找的位置（默认从0开始）
     * @return {number} value在arr中的位置，找不到返回-1
     */
    function indexOf(arr, elem, i) {

        if (arr) {

            if (arr.indexOf) {
                return arr.indexOf(elem, i);
            }

            var len = arr.length;

            i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

            for (; i < len; i++) {

                if (i in arr && arr[i] === elem) {
                    return i;
                }
            }
        }

        return -1;
    }

    function objectWithoutProperties(obj, keys) {

        var target = {};

        for (var i in obj) {

            if (Object.prototype.hasOwnProperty.call(obj, i)) {

                if (indexOf(keys, i) >= 0) {
                    continue;
                }

                target[i] = obj[i];
            }
        }

        return target;
    }

    return objectWithoutProperties
});


