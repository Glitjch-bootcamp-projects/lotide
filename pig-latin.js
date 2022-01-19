const arr = process.argv.slice(2);

const pigLatin = function() {
  
  let pigLatinSentence = "";
  for (let argument of arr) {
    let string = "";
    string += argument.substr(1);
    string += argument[0];
    string += "ay";
    pigLatinSentence += string + " ";
  }
  console.log(pigLatinSentence.trim());
};

pigLatin();