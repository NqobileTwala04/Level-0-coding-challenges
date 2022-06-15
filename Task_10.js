function commonCharacters(A) {
    const [first, ...rest] = A.sort((a,b) => -(a.length - b.length));
    const duplicates = [];
    [...first].forEach(e => {
      let isDuplicate = true;
      for (let x = 0, len = rest.length; x < len; x++) {
        let letters = rest[x];
        const i = letters.search(e);
        if (i !== -1) {
          letters = letters.slice(0, i) + letters.slice(i + 1);
          rest[x] = letters;
        } else {
          isDuplicate = false;
        }
      }
      if (isDuplicate) {
        duplicates.push(e);
      }
    });
    return duplicates;
  }
  
  const arr = ["Nqobile", "Bongiwe"];
  console.log(commonCharacters(arr));