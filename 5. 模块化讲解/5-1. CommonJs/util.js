//需要隐藏的内部实现
var count = 0; 

// 需要暴露给外部的接口
function getNumber() {
    count++;
    return count;
}

console.log('该模块被引用了')

// exports = {}，在这个对象里加入任何想要导出的东西就可以了

module.exports = {
    getNumber,
    count: 123
}
