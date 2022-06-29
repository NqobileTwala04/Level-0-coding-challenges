/*function findCommonCharacters(firstString, secondString) { 
  let commonCharacters=[]; 
    let count = 0; 
    for (let i = 0; i < secondString.length; i++) {
    for (let j = 0; j < firstString.length; j++) {
      if (firstString[j].toLowerCase() === secondString[i].toLowerCase()) {
        saveCommonLetters.push(firstString[j].toLowerCase());
      }
    }
  }
    const object = secondString.split(""); 
    for(const str of firstString){ 
      let idx = object.findIndex(s => s === str); 
      if(idx >= 0){ 
      commonCharacters.push(object.find(s => s === str)); 
        count++; 
        object.splice(idx, 1); 
      } 
    } 
    console.log("Common letters: " + commonCharacters.join(", ")); 
  } 
   
findCommonCharacters("Consequence", "frequently");*/

function findCommonCharacters(firstString, secondString) {
  let commonCharacters = [];

  for (let i = 0; i < secondString.length; i++) {
    for (let j = 0; j < firstString.length; j++) {
      if (firstString[j].toLowerCase() === secondString[i].toLowerCase()) {
        commonCharacters.push(firstString[j].toLowerCase());
      }
    }
  }
  commonCharacters = [...new Set(commonCharacters)];

  let commonLetters = "Common letters: ";
  for (let i = 0; i < commonCharacters.length; i++) {
    commonLetters += commonCharacters[i];
    if (i < commonCharacters.length - 1) commonLetters += ", ";
  }

 return commonLetters;
}
console.log(findCommonCharacters("house", "computers"))