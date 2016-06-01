/**
 * @file createClass 创建类对象
 * @author zongyu(zongyu@baidu.com)
 */

define(function () {

    function defineProperties(target, props) {

        for (var i = 0; i < props.length; i++) {

            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }

            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function createClass(Constructor, protoProps, staticProps) {

        if (protoProps) {
            defineProperties(Constructor.prototype, protoProps);
        }

        if (staticProps) {
            defineProperties(Constructor, staticProps);
        }

        return Constructor;
    }

    return createClass;
});

