/**
 * @file inherits
 * @author zongyu(zongyu@baidu.com)
 */

define(function () {


    return function (subClass, superClass) {

        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }

        var Noop = function () {

        };

        if (superClass) {
            Noop.prototype = superClass.prototype;
        }

        subClass.prototype = new Noop();
        subClass.prototype.constructor = subClass;
    }
});
