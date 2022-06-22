function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const strVowels = [];

  for (let i = 0; i < vowels.length; i++) {
    if (str.toLowerCase().includes(vowels[i])) {
      strVowels.push(vowels[i]);
    }
  }
  console.log("Vowels: " + strVowels.join(', '));
}

findVowels("NQOBILE");