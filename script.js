/**Task1
 Создайте функцию, которая принимает массив объектов (продуктов), который вычисляет общую цену и возвращает ее в виде числа. У продуктового объекта есть продукт, количество и цена, например:

// 1 бутылка молока:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 бутылка молока и 1 коробка хлопьев:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 бутылки молока:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Несколько продуктов:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Немного дешёвых конфет:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3

*/

// const getTotalPrice = (arr) => {
//   let sum = 0;
//     arr.map((el) => {
//       sum += el.quantity * el.price;
//     });
//     return console.log(sum.toFixed(1)); 
// };


// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]);

// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]);

// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]);

// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]);

// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]);








// Task2 
// Напишите функцию, которая проверяет, равны ли два аргумента объекта друг другу. Верните true, если объекты равны, в противном случае верните false. 


// Первый аргумент

let list1 = {
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
};

// Второй аргумент

let list2 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
};


// ➞ false

// Первый аргумент

let list3 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
};

// Второй аргумент

let list4 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
};


// ➞ true 


let checkPar = (obj1, obj2) => {
  if (obj1.name === obj2.name && obj1.phone === obj2.phone && obj1.email === obj2.email) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkPar(list1, list2));
// console.log(checkPar(list3, list4));




/** Task3
Напишите функцию, которая преобразует число в строку, как показано ниже: 

32 ➞ "30 + 2"
70701 ➞ "70000 + 700 + 1"
685 ➞ "600 + 80 + 5"


expandedForm(70304) ➞ "70000 + 300 + 4"

expandedForm(1037903) ➞ "1000000 + 30000 + 7000 + 900 + 3"

expandedForm(802539) ➞ "800000 + 2000 + 500 + 30 + 9"




 */


let expandedForm = (num) => {
  let arr = num.toString().split('');
  let arr2 = [];
  arr.map(function (el, i, arr) {
    if (Number(el) !== 0)
      arr2.push(el * Math.pow(10, arr.length - i - 1));
  });
  return arr2.join(' + ');
};

console.log(expandedForm(70304));
console.log(expandedForm(1037903));
console.log(expandedForm(802539));