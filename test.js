const args = process.argv;

const reverseNow = function() {
  let newString =''
  for (let j = process.argv.length-1; j >= 0; j--) {
    newString += process.argv[j];
  }
  console.log(newString);
}

reverseNow()