// objct + Array

// let arr = [];
// arr = [1,2,3,4];

// const obj = {
//   count: {
//     sume: 500,
//     tiket: 30,
//     value: 'uan'
//   },
//   buy: {
//     book: 1,
//     peensiel: 1,
//   },
//     shop: {
//       valen:['valensia', 'bugatti'],
//     },
// };

// console.log (obj.shop.valen[0]);
// console.log(arr)

// Операторы

// const a = 10;
// const b = 5;
// let c = 1;

// 1.Арифметические (+ - / * % ++ -- **) ;

// console.log(a + b); сумма;
// console.log(a - b); відмінник;
// console.log(a * b); множення;
// console.log(a / b); ділення;
// console.log(a ** b); зведення до степеню;
// console.log(a % b); залишок від ділення;

// с++;
// console.log(с); ікримент просто +1;

// с--
// console.log(с); дикримент просто -1;



// 2.Приоритет арифметики();

// Звичайний матем розрахунок на пріорітет якщо є розрахнок,;
// consol.log(a + b * c)-виконається перше множення потім додавання,але можна зробити як і в математиці,;
// consol.log((a + b) * c)-виконається додавання потім множення ось що значить пріоритет.;


// 3. + для строки и чисел;

// console.log(4 + 4) - буде 8; 
// console.log('4'+'4')- буде 44;
// console.log('4' + 4)- буде 44;
// console.log(4 + '4')- буде 44;

// 4.конкатинація,інтерполяція

// const firstName = 'Joffrey';
// const greeting = 'Hello';
// console.log(`${greeting} + ${firstName}`);-конкатиніція ;
// console.log(greeting + ',' + firstName);-інтерполяція;

// 5.оператори присвоювання (= += -= /= *=);

// = оператор присваивания ми что-то куда добавляем(зачастую в переменную);

// += +1 к данной переменной;
// -= -1 к данной переменной;
// /= /1 к данной переменной;
// *= *1 к данной переменной;

// 6.оператор сравнения (== !== === !== > >= < <=);

// == -этот оператор просто сравнивает равно ли значение чему либо или нет.(устарело);
// console.log(5 == 5); -проверка на равенство в данном примере true;
// console.log('hello' == 'hello'); -проверка на равенство строчек в данном примере true;

// !== оператор не равенства он сравнивает не равно ли значение чем-нибудь (устарело);
// console.log(5 != 5); -проверка на равенство в данном примере false они равны;
// console.log('hello' != 'hello'); -проверка на равенство строчек в данном примере false они равны;
// console.log('hello' != 'world'); -проверка на равенство строчек в данном примере true они не равны;

// === -сравнивает значение не только по значению но и по типу данных (заменило == );
// console.log(5 === 5)-бдет true значение =5 + тип данных одинаковый number;
// console.log(5 === '5')-будет fals значение =5 + тип данных разный number stringe;

// !== -сравнивает ни равноли знаачение чему-либо (заменило != );
// console.log(5 !== '5')-в данном примере будет true значение не равно по типу данных но равно по значению;
// console.log(5 !== 5)-в данном примере будет false значение равно по типу данных и значению;

// Приметка разницы === и ==
// === сравнивает по типу и знеачению 
// == сравнивает только по значению(лучше не использовать)

// > больше 
// console.log(5 > 4) будет true;

// >= больше или равно

// console.log(5 >= 5) будет true;

// < -меньше

// console.log(4 < 5) будет true;

// <= меньше или равно

// console.log(5 <= 5) будет true;

// 7.унарние (+ -)

// console.log(+'5')-переведёт число со строки в  тип данных number
// console.log(+'5' + 5) -будет 10 с типом Number

// const a = 10;
// const b = 5;

// console.log(-10 + 5); -5
// console.log(-(-10 + 5)); 5

// +(унарний)-форматирет строку в число
// -(унарний)-форматирет плюсовое число в минусовое и обратно

// 8.оператор in -проверяет наличие ключа в обєкте

// const names = {
//   name: 'Michael',
//   age: 18,
// };
// console.log('name' in names) бдет true потому что ключ нейм есть в обекте неймс
// console.log('bio' in names) бдет false потому что ключ нейм отсуцтвует в обекте неймс



// Условия (if else)

// if()-условие = true которые мы ставим,
// else()-условие если if = false ;

// Пример:

// 1)Работа с if(условие)),else(условие),else if(условие);

// const a = 1;
// const b= 1;

//   if (a > b) {
//     console.log('win')
//   } else if(a === b) {
//   console.log('ddd')
//   }
//   else {
//     console.log('no')
//   }

// 2)Условие в одну строчку:

  // const a = 1;
  // const b = 1;

  // if(a === b) console.log('win');-лучше не использоваать(вариант (1),будет правильние) для того что бы другие разработчики лучше понимали написанное

// 9.Логические (&&, || !)

// &&-оператор (и) он означает то что если 2-операци выполняються правильно то будет true;
// Пример:

// const a = 0
// const b = 0
//   if (a === 0 && a === b) {
//     console.log('win')
//   }
//   else {
//     console.log('lose')
//   }

// ||-оператор (или) он означает что если хоть одна операция правильная то значение будет true;
  // const a = 0;
  // const b = 1;

  // if (a < 1 || a === b) {
  //   console.log('win')
  // }
  // else {
  //   console.log('lose')
  // }

// !-оператор отрицания он инвентирует значение если было false-true,если true-false

  // const a = 1
  // const b = 1
  // if (!(a > b)) {
  //   console.log('win')
  // }
  // else {
  // console.log('lose')
  // }

  // Вывод:win,потому что мы поставили ! и он отконвертировал решение по логике получаеться что решение false но оператор отконвертировал в true,скобочки {} нужны здесь что бы отрицание ложилось на выражение а не на отдельную переменную .)


                                                                          // Практика!!!!!!!
// const minParitet = 18

//   const userData =  {
//     name:'Alex',
//     age: 20,
//     married: true,
//     sex: 'male'
//   };                                                                   

//   if (userData.age >= minParitet && userData.married !== false && userData.sex === 'male') {
//     console.log('Uprove')
//   }
//   else {
//     console.log('leave')
//   }

// Вывод будет true - потому что наш клиент подходит требованиям

                                                                    // Практика-2

// const ageBar = 18;
// const marri = false;
// const onlySex = 'male';
// const onlyFor = 'Olgert';

// const UserBase = {
//   name: ['Olgert','Michail'],
//   age: [18, 24],
//   sex: 'male',
//   married: [true, false]
// };

// if (UserBase.name[0] === onlyFor && UserBase.age[0] >= ageBar && UserBase.sex === onlySex && UserBase.married[0] === marri) {
//   console.log('Wellcome')
// } else if (UserBase.name[1] !== onlyFor && UserBase.age[1] >= ageBar && UserBase.sex === onlySex && UserBase.married[1] === marri) {
//   console.log('BigDaddy')
// }
// else {
//   console.log('just leave')
// }

// Вывод :bigDaddy,я сделал так что Михаель изменил имя на Ольгерда,таким образом можна сделать если Ольгерда обманет про свой семейный статс и скажет что он не женат(в свои 18 лет парень имеет жену а Михаель отстаёт в этом плане :( ) 

                                                      // Практика-3

// const lordAllinse = 'Alduin';
// const lordHorde = 'Silvana';
// const lordGender = 'mele';
// const LordAge = 18;
// const AllianceExists = ['Horde','Alliance'];
// const activeStatus = 'Alive';

// const dateBase = {
//   name:['Silvana', 'Alduin'],
//   age:[20,18],
//   sex:['female', 'mele'],
//   married: false,
//   alilens:['Horde', 'Alliance'],
//   status:['Alive','death']
// };

//   if(lordAllinse === dateBase.name[1] && lordHorde === dateBase.name[0] && AllianceExists === dateBase.alilens[0],[1] 
//     && activeStatus === dateBase.status[0]) {
//     console.log('War Started')
//   } else if (LordAge >= dateBase.age[0],[1]) {
//     console.log('they maried')
//   }
//   else {
//     console.log('War end')
//   }

// 10. switch case -это своего рода заменитель if else.
// Тернарний оператор 


// const user = 'Aleks';
// const users = 'Bolg';

// if(user !== 'Aleks') {
//   console.log('Hello Aleks')
// } else if (users === 'Bolg') {
//   console.log('Hello Bolg')
// }
// else {
//   console.log('Hello')
// } -Пример if else.


// const user = 'Aleks'

// switch(user) {
//   case 'Aleks': 
//       console.log('Aleks hihi');
//   break;
//   case 'Bolg': 
//       console.log('Bolg hihi');
//   break;
//   case 'Vitaasik': 
//       console.log('Vitasik hihi');
//   break;
//   default:
//     console.log(0-0)
// }

// switch(условие за которым мы следим)- сам свич это логическая цепочка как if
// case -с его помощи я провожу проверку исполнения значения тоесть то что я хочу вывести
// break -с его помощи я зааканчиваю действия,таким образом проверяеться одно условие и если оно выполняеться то я выхожу из swith если нет то отработают все условия(просто завершает кейс);
// default:-он работает как else в случае неудачи всех условий он выведет указаный консоль лог

// Также можно обьеденять кейсы с одним условием 
// switch(user) {
//   case  'Aleks':
//     case  'Vitasik':
//           console.log('hihihi')
//     break;
// }
// Также можно использовать (),это нужно для создания переменной внутри условия

// switch(user) {
//   case 'Aleks': {
//     const a = 10;
//     console.log('hihihi')
//     break;
//   }
// }

// В switch нельзя делать условия грамосткими и делать расчёты мне нужно только выбрать переменную за которой я слежуу и задать ей значение вывода.


// 11.Тернарний оператор - создан для того чтобы выполнять одностроковые условия)

// условие ? условие(true) : условие(false)
// const names = 'balu'

// names === 'alduin' 

//   ? console.log('hihihih') 
//   : console.log('hi')

// const names = 'ben'

// const age = (names === 'ben' && names !== 'jon') ? 18 : 20; -пример работы с несколькими условиями

// console.log(age)

// const hordeCastel = 'Oldereon';
// const alilensCastel = 'Stormgrad';
// const hordArmy = [2000,70000];
// const alilensArmy = [1000,60000];

// const dateBase = {
//   armyHorde: 70000,
//   armyAlliens: 60000,
//   castelHord: 'Oldereon',
//   castelAlliens: 'Oldereon'
// };

// if (hordArmy[1] >= dateBase.armyAlliens && dateBase.castelHord === hordeCastel) {
//   console.log('war started')
// }
// else {
//   console.log('war doest start')
// }

// hordArmy[1] >= dateBase.armyAlliens
// && dateBase.castelHord === hordeCastel
// ? console.log('war started')
// : console.log('war doesent start')

// switch (hordeCastel) {
//   case 'Oldereon': {
//       console.log('war started')
//     break;
//   }
 
//   default: 'end war'
// }

// 12 Циклы for,for Of, while, do while

// for- проводит удобную итерациию кода может выводить значения по заданым указаниям и также вывести значение массива
// for of-
// while-
// do while-

// for(задаём итерацию((1)значение от которого начинаеться итерация);(2)задаём условие(до которого нжно сделать итерацию;(3)добавляем значение которое бдет прибавляться)) {
//   console.log(выводим значение)
// }

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// } - пример простенькой итерации код проверяеться и на основе таких значений выводит индекс масива тоесть в данном примере от 0-4;
// const arr = [11, 22, 33, 4];

// for (let i = 0; i < 5; i++) {
//   console.log(arr[i]);
// } - в этом примере я вывожу значения в заданом массиве;


// const arr = [22,344,21,34,212,3432,23]

// for (let i = 0; i <arr.length;i++) {
//   if(arr[i] === 21) {
//     break; // в данном случае если масив будет равен значению 21,он прекратит итеррацию тем самым закончив цыкл он выведет все значения что до 21 выведет 22,344
//   }
//   console.log(arr[i])
// }
// console.log('end')


// const arr = [1,11,56,22,12]

// for(let i = 0; i < arr.length; i++) {
//   // if(arr[i] === 22) {
//   //   break;- выйти из итерации
//   // }
//   // if(arr[i] === 22) {
//   //   continue; в данном примере я просто пропускаю значение масива 22
//   // }
//   console.log(arr[i])
// }

                                                                    // Повторение образование великих наций

const obj = {
  race: {
    people: ['Bretonia', 'Imperia', 'lihtenshtein'],
    orcs: ['Greenskins', 'Whiteskins', 'Blackskins'],
  },
  lade: {
    Bretonia: 'Ulrik',
    Imperia: 'Karl-Frans',
    lihtenshtein: 'Fridrik',
    Greenskins: 'Grimbor',
    Whiteskins: 'Ajag',
    Blackskins: 'Gombul'
  },
  army: {
    Bretonia: 20000,
    Imperia: 80000,
    lihtenshtein: 10000,
    Greenskins: 90000,
    Whiteskins: 30000, 
    Blackskins: 10000,
  }
}

const bretoniaLade = 'Ulrik';
const imperiaLade = 'Karl-Frans';
const lihtenshteinLade = 'Fridrik';
const greenskinsLade = 'Grimbor';
const whiteskinsLade = 'Ajag';
const blackskinsLade = 'Gombul';
const bretoniaArmy = 20000;
const imperiaArmy = 50000;
const lihtenshteinArmy = 10000;
const greenskinsArmy = 40000;
const whiteskinsArmy = 30000;
const blackskinsArmy = 10000;
const countryPeople = ['Bretonia', 'Imperia', 'lihtenshtein'];
const raceOrcs = ['Greenskins', 'Whiteskins', 'Blackskins'];

if (bretoniaLade === obj.lade.Bretonia && bretoniaArmy === obj.army.Bretonia) {
  console.log('Start Mobilisation in Bretonia')
} else {
  console.log ('Revolution')
}
if (lihtenshteinLade === obj.lade.lihtenshtein && lihtenshteinArmy === obj.army.lihtenshtein) {
  console.log('Start Mobilisation in lihtenshtein')
} else {
  console.log ('Revolution')
}
if (imperiaLade === obj.lade.Imperia 
  && imperiaArmy <= obj.army.Imperia 
  && bretoniaLade === obj.lade.Bretonia 
  && lihtenshteinLade === obj.lade.lihtenshtein) {
  console.log ('Confediration formed with all free people Aliens')
} else {
  console.log('Karl loses credibility')
}
if (greenskinsArmy <= obj.army.Greenskins 
  && greenskinsLade === obj.lade.Greenskins 
  && whiteskinsLade === obj.lade.Whiteskins 
  && blackskinsLade === obj.lade.Blackskins) {
  console.log ('confedration with all orcs in th old pace Horn')
} else {
  console.log('Greate War betwen orcs')
}
if (150000 + 10000 + 20000 >= 100000) {
  console.log('Great Aliense armie ready to war')
} else {
  console.log('Mobilisation continue')
}
if (90000 + 30000 + 10000 >= 100000) {
  console.log ('Great Horn rady to war')
} else {
  console.log('Surge continues')
}
if (obj.race.people[0] === countryPeople[0] 
  && obj.race.people[1] === countryPeople[1]
  && obj.race.people[2] === countryPeople[2] 
  && obj.race.orcs[0] === raceOrcs[0] 
  && obj.race.orcs[1] === raceOrcs[1] 
  && obj.race.orcs[2] === raceOrcs[2]) {
    console.log ('Great war Bigining')
  } else {
    console.log('strife subsides')
  }



// const arr = [11,22,333,224,14,33,55,66]

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] === 14) {
//     continue;
//   }

//   console.log(arr[i])
// }
// console.log('end')