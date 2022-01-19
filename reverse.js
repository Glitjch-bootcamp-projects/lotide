const arr = process.argv.slice(2);

const reverse = function() {
  
  for (let argument of arr) {
    let string = "";
    for (let i = argument.length - 1; i >= 0; i--) {
      string += argument[i];
    }
    console.log(string);
  }
};

reverse();