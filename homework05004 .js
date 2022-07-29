/*მოცემულია მასივი 
let languages=[ 'html', 'css', 'javascript', 'python', 'php']; ფილტრის გამოყენებით გამოიტანეთ მხოლოდ ის სიტყვები, რომელთა სიმბოლოები იქნება 3-ზე მეტი */

let languages=[ 'html', 'css', 'javascript', 'python', 'php'];



let symbols = languages.filter(function(symbols){
  return symbols.length>3;
}
);

 console.log(symbols); 



