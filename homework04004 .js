/*მოცემულია მასივი 
let array=['hello',125, 'javascript', 'html', 43, 'css', 'scss','bootstrap', 88, 59, 'python']; ფილტრის გამოყენებით გამოიტანეთ მხოლოდ რიცხვები */

let array=['hello',125, 'javascript', 'html', 43, 'css', 'scss','bootstrap', 88, 59, 'python'];



let onlyNumbers = array.filter(
    element => typeof element === 'number'
  );
  console.log(onlyNumbers); 



