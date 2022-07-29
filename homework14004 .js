/*მოცემულია მასივი let array=[23, 45, 32,5,87,7,3,98] sort მეთოდით დაალაგეთ ელემენტები კლებადობის მიხედვით და ამოიღეთ მინიმალური რიცხვი*/

let array=[23, 45, 32,5,87,7,3,98];


let result=array.sort((x,y)=>(y-x));



console.log(result);


console.log(result[array.length-1]);





