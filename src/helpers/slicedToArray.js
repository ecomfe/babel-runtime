/**
 * @file slicedToArray 将对象转换成数组
 * @author zongyu(zongyu@baidu.com)
 */

define(function () {

    var slice = [].slice;

    /**
     * 将对象转换成数组
     *
     * @param {Array|Object} arr 数组
     * @param {number} length 要转换的长度
     * @returns {Array.<Object>}
     */
    function slicedToArray(arr, length) {
        return slice.call(arr, 0, length);
    }

    return slicedToArray;
});
