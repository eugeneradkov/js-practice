function convertChars(){
    let word = prompt('Enter your word',);

    let lowerCase = word.toLowerCase();

    let wordLength = word.length

    if (wordLength % 2 == 0) {
        let finalWord = lowerCase[0,-1].toUpperCase
        console.log(finalWord);
    } else {
        let finalWord = lowerCase[0].toUpperCase
        console.log(finalWord);
    }
}