
//middle function here
const middle = function(arrSeekMid) {    
  let middleOfArr = []; 
  let divideLength =  arrSeekMid.length / 2;
  
  if (arrSeekMid.length > 2) {
    arrSeekMid.length % 2 !== 0 
    
    ? middleOfArr.push(arrSeekMid[Math.floor(divideLength)])

    : middleOfArr.push(arrSeekMid[divideLength - 1], arrSeekMid[divideLength]);
  } 
   
  return middleOfArr;
}


module.exports = middle;