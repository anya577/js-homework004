/*მოცემულია მასივი 
let array=[ 'academy', 'of', 'digital', 'industries']; reduce-საშუალებით მიიღეთ კომბინირებული სტრინგი*/

let array=[ 'academy', 'of', 'digital', 'industries'];

let array1=[ 'academy', 'of', 'digital', 'industries'].reduce(function(combine,  currentValue){
  return combine.concat(currentValue);
}


);

console.log(array1);
 



