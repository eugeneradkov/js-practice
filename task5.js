function deleteChars(str){

    let userString = prompt('Enter your string',);
    let newString = userString.substring(1, userString.length - 2);
    if (newString > 0){
        console.log(newString)
    }
         else {
            console.log("");
        }
}