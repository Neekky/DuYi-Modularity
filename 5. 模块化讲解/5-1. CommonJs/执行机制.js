// 在模块开始执行前，初始化一个值module.exports = {}
// module.exports即模块的导出值
// 为了方便开发者便捷的导出，nodejs在初始化完module.exports后，又声明了一个变量exports = module.exports

(function (module) {
    module.exports = {};
    var exports = module.exports;

    //需要隐藏的内部实现
    var count = 0;

    // 需要暴露给外部的接口
    function getNumber() {
        count++;
        return count;
    }

    exports.getNumber = getNumber;
    exports.count = count;
    
    return module.exports;
})(module)