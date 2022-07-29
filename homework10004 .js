/*მოცემულია მასივი 
let arr=[1,2,3,4,5]

Foreach-ის საშუალებით გამოთვალეთ ჯამი*/



let arr=[1,2,3,4,5];

let result=0;
  arr.forEach(item => {
    result+=item;
  });
  console.log(result);