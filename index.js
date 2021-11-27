const bubbleSort = require('./src/bubble');

const sorted = bubbleSort([797, 218, 669, 178, 455, 910, 87, 28, 780, 716, 817, 193, 577, 542, 387, 958, 531, 692, 38], (a,b) => a - b);
console.log(sorted)

module.exports = {
    bubbleSort
};
