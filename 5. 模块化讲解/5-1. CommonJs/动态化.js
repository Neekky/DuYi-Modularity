var num = 1;

function addNum() {
    num++;
    return num;
}

exports.num = num;

exports.addNum = addNum;

// module.exports = {
//     num,
//     addNum
// };