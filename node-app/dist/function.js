"use strict";
function say(s) {
    console.log("Hello", s);
}
function sum(a, b) {
    return a + b;
}
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
say("hit");
say("singla");
console.log(sum(1, 3));
runAfter1s(function () {
    console.log("run after 1s");
});
