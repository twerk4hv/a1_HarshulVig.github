function capitalize(line) {
    words = line.split(" ");
  
    for (var i = 0; i < words.length; i++) {
        firstLetter = words[i].charAt(0);
        words[i] = firstLetter.toUpperCase() + words[i].slice(1);
    }
  
    return words.join(" ");
  }
  
line = prompt("Enter a message for me?");
capline = capitalize(line);
console.log(capline);