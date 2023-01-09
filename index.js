let number = 10;

if (number < 0 || number % 2 !== 0 || number % 3 !== 0 || num % 6 !== 0) {
  console.log("LOSE");
} else {
  console.log("WIN");
}

//Є дві змінні, якщо вони з однаковим знаком - то перемножити і вивести результат,
// якщо з різними знаками - то поділити і вивести результат,
// якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат,
// якщо обидва нулі - то покласти в результат NaN і вивести результат.

let num1 = 0;
let num2 = 2;
let res;
if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
  res = num1 * num2;
} else {
  if (num1 === 0 && num2 === 0) {
    res = NaN;
  } else {
    if (num1 === 0) {
      res = num2;
    }
    if (num2 === 0) {
      res = num1;
    } else {
      if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
        res = num1 / num2;
      }
    }
  }
}

console.log(res);
