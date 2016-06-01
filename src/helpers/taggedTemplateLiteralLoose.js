/**
 * @file taggedTemplateLiteralLoose 字符串模板 — 标签函数处理
 * @author liuxuanzy(liuxuanzy@qq.com)
 */

define(function () {

    function taggedTemplateLiteralLoose(strings, raw) {
        strings.raw = raw;
        return strings;
    }

    return taggedTemplateLiteralLoose;
});

