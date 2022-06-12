
function printVowels(string){
    let vowels =[]
    string= string.toLowerCase();  

    for (letter of string){
        if (letter==="a"|| letter =="e" || letter == "i"|| letter == "o" || letter== "u"){ 
            vowels.push(letter);
        }

    for (let i = 0; i < vowels.length; i++ ){
        for (let j = 0; j < vowels.length; j++){
            if (i !== j){
                if (vowels[i]=== vowels[j]){
                    vowels.splice(j,1);
                }
            }
        }
    }
    }
    console.log("Vowels: "+vowels) ;
}
printVowels("NqobileTwala");