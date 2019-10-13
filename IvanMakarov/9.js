/* 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
Example:

countDown(3); // 3 2 1 0 */

function countDown(i) {
    if (i < 0) {//условие остановки
        return;  
    } 
    else {//запуск рекурсии
        console.log(i);
        i--;
        setTimeout(countdown,1000,(i)); 
    }
}
