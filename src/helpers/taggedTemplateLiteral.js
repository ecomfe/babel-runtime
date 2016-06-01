/**
 * @file taggedTemplateLiteral 字符串模板 — 标签函数处理
 * @author liuxuanzy(liuxuanzy@qq.com)
 */

define(function () {

    function taggedTemplateLiteral(strings, raw) {
        return Object.freeze(Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw)
            }
        }));
    }

    return taggedTemplateLiteral;
});

