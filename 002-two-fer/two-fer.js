"use strict";
// Instructions
// Two-fer or 2-fer is short for two for one. One for you and one for me.
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoFer = void 0;
// Given a name, return a string with the message:
// One for name, one for me.
// Where "name" is the given name.
// However, if the name is missing, return the string:
// One for you, one for me.
// Here are some examples:
// Name	String to return
// Alice	One for Alice, one for me.
// Bob	One for Bob, one for me.
// One for you, one for me.
// Zaphod	One for Zaphod, one for me.
/**
 * This stub is provided to make it straightforward to get started.
 */
function twoFer(name) {
    // ^                 ^   ^ this is called a return type; it's the type of the
    // ^                 ^     value that is returned from this function
    // ^                 ^
    // ^                 parameters go here
    // ^
    // allows the tests to import this function and call it
    // <-- Your code goes here. You may remove all the commentary in this file.
    if (name === void 0) { name = 'you'; }
    return "One for ".concat(name, ", one for me.");
}
exports.twoFer = twoFer;
console.log(twoFer('Alice'));
console.log(twoFer('Bob'));
console.log(twoFer());
