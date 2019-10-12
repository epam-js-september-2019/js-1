/* 6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.
Example:

largest(2, 0.1, -5, 100, 3) // 100
smallest(2, 0.1, -5, 100, 3) // -5 */

function largest() {
    let arr=[];//масси для сортировки и возврата
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    arr.sort((a,b)=> a-b);//функция сорт работает так, если результат безымянной стрелочной функции положительный, она говорит что оно больше, если отрицательное-меньше
    return arr[arr.length-1];
}
function smallest() {
    let arr=[];//масси для сортировки и возврата
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    arr.sort((a,b)=> a-b);//функция сорт работает так, если результат безымянной стрелочной функции положительный, она говорит что оно больше, если отрицательное-меньше
    return arr[0];
}