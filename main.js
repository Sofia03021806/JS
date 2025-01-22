let globalVar = "Я глобальная переменная";

function printGlobal() {
  console.log(globalVar); // Доступ к глобальной переменной
}

printGlobal(); // Вывод: Я глобальная переменная
console.log(globalVar); // Вывод: Я глобальная переменная


function myFunction() {
  var localVar = "Я переменная внутри функции";
  console.log(localVar); // Доступ к переменной внутри функции
}

myFunction(); // Вывод: Я переменная внутри функции
console.log(localVar); // Ошибка: localVar is not defined