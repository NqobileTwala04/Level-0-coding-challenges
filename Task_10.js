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