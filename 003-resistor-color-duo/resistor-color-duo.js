"use strict";
// Instructions
// If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedValue = void 0;
var valuesObj = {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    grey: '8',
    white: '9',
};
function decodedValue(values) {
    var val1 = values[0], val2 = values[1];
    return parseInt(valuesObj[val1] + valuesObj[val2], 10);
}
exports.decodedValue = decodedValue;
console.log(decodedValue(['brown', 'black']));
console.log(decodedValue(['blue', 'grey']));
console.log(decodedValue(['white', 'red']));
console.log(decodedValue(['green', 'brown', 'orange']));
