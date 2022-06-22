function convertTime(seconds) {
    const hours = Math.floor(seconds / 60);
    const minutes = Math.floor(seconds % 60);
  
    const hoursDisplay = hours > -1 ? hours + (hours == 1 ? " hour, " : " hours, " ) : " ";
    const minutesDisplay = minutes > -1 ? minutes + (minutes == 1 ? " minute " : " minutes ") : "";
    return hoursDisplay + minutesDisplay;
  }
 console.log(convertTime(44))

