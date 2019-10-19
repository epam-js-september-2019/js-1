/* 
10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Hint: play with the function in Function.prototype and see what this points to inside it. Your code should look like:

Function.prototype.myBind = function () {
 // your code here
 }
Example:

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1) // 10 */
Function.prototype.myBind = function(context) {
    var that = this;
    var args = [].slice.apply(arguments).slice(1);
    return function() { return that.apply(context, args.concat([].slice.apply(arguments))) };
  }