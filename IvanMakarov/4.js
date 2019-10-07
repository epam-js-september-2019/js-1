/* 4) Write a function that takes a sentence (string) and reverses each word in the sentence.
Example:

" A fun little challenge! " => " A nuf elttil !egnellahc " */
function reverser(input) {
    if (typeof input === 'string') {
        let target = ' '; // цель поиска
        let spacesIndex = []; //массив индексов пробела
        let pos = 0; //индекс начала поиска пробела
        let reverse= ''; //
        let conclusion= '';//для вывода
        while (true) {
            let foundPos = input.indexOf(target, pos);
            if (foundPos == -1) break; //-1 если indexOf ничего не найдет. 
            spacesIndex.push(foundPos);//получили адреса пробелов
            pos = foundPos + 1; // продолжаем со следующей позиции
        }
        for (i = 0; i <= spacesIndex.length; i++) {
            reverse = input.slice([spacesIndex[i]], [spacesIndex[i + 1]+1]);//spacesIndex[i + 1]+1 slice не включает значение end, для этого +1.
            reverse=reverse.split('');//переделываем в массив
            reverse=reverse.reverse();//переворачиваем массив
            reverse=reverse.join('');//возвращаем в  строку
            conclusion=conclusion+reverse;
        }
        return conclusion;
    }
    else {
        return "Argument type should be: String";
    }
}