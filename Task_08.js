function convertTime(seconds) {
    const hours = Math.floor(seconds / 60);
    const minutes = Math.floor(seconds % 60);
  
    const hoursDisplay = hours > 0 ? hours + (hours == 1 ? " hour, " : " hours, ") : "";
    const minutesDisplay = minutes > 0 ? minutes + (minutes == 1 ? " minute " : " minutes ") : "";
    return hoursDisplay + minutesDisplay;
  }
 