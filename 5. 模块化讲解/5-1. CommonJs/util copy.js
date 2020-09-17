var count = 0; //需要隐藏的内部实现

function getNumber() {
    count++;
    return count;
}

module.exports = {
    getNumber,
    abc: 123
}