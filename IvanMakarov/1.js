/* Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it. Example:

splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!" */

function splitAndMerge(a,b) {
    //if for checking 
    if (typeof a==='string') {
        let c = '';//needs for return
        const space=/\s/g;
        a=a.replace(space, '');
        for (i=0; i<a.length; i++){
            c=c+a[i]+b;
        }
        return c; 
    } else {
        return "First argument type should be: String";
    }
}