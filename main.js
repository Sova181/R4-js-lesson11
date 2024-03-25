console.log("   Извлечение символов из строки\n");

const firstName = 'Tirion';
console.log(firstName[0]); // => T

console.log(`Квадратные скобки с цифрой — это специальный синтаксис
извлечения символа из строки. Цифра называется индексом — 
позицией символа внутри строки. Индексы начинаются с 0`);

// Длина строки 6, поэтому последний индекс — это 5
const firstName1 = 'Tirion';
console.log(firstName1[5]); // => n
// Вопрос на самопроверку. Что выведет этот код?
const magic = '\nyou';
console.log(magic[1]); // => ? 

//
console.log(" Индексом может быть не только конкретное число, но и значение переменной. \n");
const firstName2 = 'Tirion';
const index = 0;
console.log(firstName2[index]); // => T