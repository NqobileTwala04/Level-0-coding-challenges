function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const strVowels = [];

  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      strVowels.push(char);
    }
  };
  console.log("Vowels: " + strVowels.join(", "));
}
findVowels("Nqobile")