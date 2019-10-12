/* 2) Write a function convert
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]] */

function arMaker (object) {
	let arr1=[];//внешнии массив
	let arr2=[];//внутренни массив
	for (let key in object) /* перебор объекта по ключу и его значению */ {
		arr2.push(key);
		arr2.push(object[key]);
		arr1.push(arr2);
		arr2=[];
	}
	return arr1;
}