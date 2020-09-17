// 使用声明表达式

export var a = 1; // 导出a，值为1。类似于CommonJS中的exports.a = 1
export function test() { //导出test，值为一个函数，类似于CommonJS中的exports.test = function (){}

}

export class Person {

}

// 使用具名符号

var age = 19;
var sex = 1;
var obj = {
    a: 1,
    b: 2
}

export {
    sex,
    obj
}

export { age as default }

// 含义：这不是一个对象，是一种特殊语法标准，两个花括号是个界定符，
// 将age变量的名称作为导出的名称，age变量的值，作为导出的值

// 错误写法
// var a = 2;
// export a;

// export a = 3;
// export 3;