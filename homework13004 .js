/*მოცემულია მასივი let arr=[[2,-3,5,11],[1,-30,-11,100],[-1,-3,-4]] reduce & filter მეთოდით ამოიღეთ დადებითი რიცხვები*/

let arr=[[2,-3,5,11],[1,-30,-11,100],[-1,-3,-4]];

let arrUnit=[[2,-3,5,11],[1,-30,-11,100],[-1,-3,-4]].reduce(function(accumulate, currentValue){
    return accumulate.concat(currentValue);
}

);
let Positives =arrUnit.filter(y=>y>0);

console.log(Positives);



