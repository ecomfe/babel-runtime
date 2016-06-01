/**
 * @file extends 对象扩展
 * @author zongyu(zongyu@baidu.com)
 */

define(function () {

    /**
     * 合并多个对象到第一个对象
     *
     * @param {Object} target 合并目标
     * @param {Object} args 要合并的对象
     * @return {*} 返回target
     */
    function extend(target, args) {

        target = target || {};

        // 只传进来target时候直接返回target，添加了不存在参数的性能优化
        if (arguments.length <= 1) {
            return target;
        }

        for (var i = 1; i < arguments.length; i++) {
            args = arguments[i];
            if (args != null) {
                for (var name in args) {
                    if (Object.prototype.hasOwnProperty.call(args, name) && args[name] !== undefined) {
                        target[name] = args[name];
                    }
                }
            }
        }

        return target;
    }

    return extend;
});
