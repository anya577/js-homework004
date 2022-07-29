/*შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება 5, 25, 89, 120, 36
მასივის ბოლოში დაამატეთ 2 ელემენტი javascript & python
მასივის დასაწყისში კი დაამატეთ: html&css
გამოიტანეთ ეკრანზე რამდენი ელემენტია მასივში
წაშალეთ მასივიდან პირველი და ბოლო ელემენტიდაბეჭდეთ მასივის ახალი ელემენტები*/

let array=[5, 25, 89, 120, 36];
array.push('javascript', 'python');
array.unshift('html', 'css');

console.log (array);

console.log (array.length);

array.shift();
array.pop();

console.log(array);






