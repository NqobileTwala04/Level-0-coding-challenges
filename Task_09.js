function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const strVowels = [];

  for (let i = 0; i < str.length; i++) { 
  if (vowels.includes(str[i])) {
    strVowels.push(str[i]);
  }
     
    
  } 
  console.log("Vowels: " + [...new Set(strVowels)].join(", ").toLowerCase());
   
}

findVowels("Inhalation");