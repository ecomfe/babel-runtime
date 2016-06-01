/**
 * @file toArray
 * @author liuxuanzy(liuxuanzy@qq.com)
 */

define(function () {

    var slice = [].slice;

    /**
     * 将对象转换成数组
     *
     * @param {Array|Object} arr 数组
     * @returns {Array.<Object>}
     */
    function slicedToArray(arr) {
        return slice.call(arr, 0);
    }

    return slicedToArray;
});
