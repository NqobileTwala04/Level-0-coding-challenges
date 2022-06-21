function findCommonCharacters(firstString, secondString) { 
  let commonCharacters=[]; 
    let count = 0; 
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
   
findCommonCharacters("consequence", "frequently"); 