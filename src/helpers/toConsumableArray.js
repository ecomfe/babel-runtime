/**
 * @file toConsumableArray 将类数组转换成数组
 * @author liuxuanzy(liuxuanzy@qq.com)
 */

define(function () {

    function toConsumableArray(arr) {

        var target = [];
        var l = 0;
        var len = +arr.length;
        var j = 0;

        while (j < len) {
            target[l++] = arr[j++];
        }

        // 低版本IE下length有可能不靠谱
        if (isNaN(len)) {
            while (arr[j] !== undefined) {
                target[l++] = arr[j++];
            }
        }

        return target;
    }

    return toConsumableArray;
});
