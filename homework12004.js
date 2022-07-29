/*შეამოწმეთ მოცემულ მასივში let arr=[-1, -2, -3, 4]; არის თუ არა 1 მაინც დადებითი some მეთოდით;*/


let arr=[-1, -2, -3, 4];

let arrPos=item=>item>0;
console.log(arr.some(arrPos));


