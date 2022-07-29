/*მოცემულია მასივი 
let array=[12,25,3,6,8,14,7,23]; map-ის გამოყენებით შექმნებით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი */

let array=[12,25,3,6,8,14,7,23];
let devide=array.map(function(x){
    return x/3;
}
)

console.log(devide);