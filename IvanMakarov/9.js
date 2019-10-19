/* 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
Example:

countDown(3); // 3 2 1 0 */

function countDown(i) {
    if (typeof i==='number'){
        if (i < 0) {//условие остановки
            return;  
        } 
        else {//запуск рекурсии
            console.log(i);
            i--;
            setTimeout(countDown,1000,(i)); 
        }
    }
    else {
        console.log("Argument type should be: Number");
        
    }

}
