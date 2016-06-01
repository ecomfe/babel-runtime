/**
 * @file possibleConstructorReturn
 * @author liuxuanzy(liuxuanzy@qq.com)
 */

define(function () {

    return function (self, call) {

        if (!self) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }

        if (typeof call === 'object' || typeof call === 'function') {
            return call;
        }

        return self;
    };
});
