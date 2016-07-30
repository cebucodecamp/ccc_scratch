/**
  Run in node:

    node func_name.js

**/

function iantest(){
  return "hello, world!";
}

function getFnName (fn) {
  var f = typeof fn === 'function'
  var s = f && ((fn.name && ['', fn.name]) || fn.toString().match(/function ([^(]+)/))
  return (!f && 'not a function') || (s && s[1] || 'anonymous')
}

console.log(getFnName(iantest))
console.log(getFnName({}))
console.log(getFnName(function(){}))

console.log('----')

function getFnNameRF (fn){
  return (typeof(fn) === 'function') ? (fn.name) ? fn.name : 'anonymous' : 'not a function'
}

console.log(getFnNameRF(iantest))
console.log(getFnNameRF({}))
console.log(getFnNameRF(function(){}))

function getFnName2 (fn) {
  var isFunc = typeof fn === 'function'
  var fnName = isFunc && fn.toString().match(/function ([^(]+)/)
  return (!isFunc && 'not a function') || (fnName && fnName[1] || 'anonymous')
}

console.log('----')

console.log(getFnName2(iantest))
console.log(getFnName2({}))
console.log(getFnName2(function(){}))

function getFunctionName (fn) {
  var isFunction = (typeof fn === 'function');

  if (!isFunction) {
    return "not a function";
  } else {
    return (fn.name && fn.toString().match(/function ([^(]+)/)) ? fn.name : 'anonymous';
  }
}

console.log('----')

console.log(getFunctionName(iantest))
console.log(getFunctionName({}))
console.log(getFunctionName(function(){}))
