function findCommonCharacters(firstString, secondString) { 
  let commonCharacters=[]; 
    let count = 0; 
    const obj = secondString.split(""); 
    for(const str of firstString){ 
      let idx = obj.findIndex(s => s === str); 
      if(idx >= 0){ 
      commonCharacters.push(obj.find(s => s === str)); 
        count++; 
        obj.splice(idx, 1); 
      } 
    } 
    return commonCharacters; 
  } 
   
  console.log(findCommonCharacters("consequence", "frequently")); 