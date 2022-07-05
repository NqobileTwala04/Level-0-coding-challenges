function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const strVowels = [];

  for (let i = 0; i < str.length; i++) { 
  if (vowels.includes(str[i].toLowerCase())) {
    strVowels.push(str[i]);
  }
     
    
  } 
  console.log("Vowels: " + [...new Set(strVowels)].join(", "));
   
}

findVowels("maeiouoo");