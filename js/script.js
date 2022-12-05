"use strict"


console.log('Рядки у JS');
console.log('----------------------------------------------------------------------');
console.log('Завдання 1---------------------');

 function showName(){
 	console.log('Вася');
 }
 setTimeout(showName,0);
 console.log('Коля');


console.log('Завдання 2---------------------');
showMessage();
function showMessage(){
	console.log('Я друге завдання');
}


showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();


console.log('Завдання 3---------------------');
//showMessage2();
let showMessage2 = function(){
	console.log('Я тут');
}
showMessage2();


console.log('Завдання 4---------------------');
let showM;
if (2 > 1){
	showM = function showMessage3(){
		console.log('Message');
	}
}
showM();


console.log('Масиви');
console.log('----------------------------------------------------------------------');
console.log('Завдання 1---------------------');

let arr = ['Vanya', 'Jose', 'Amir'];
let newArr = arr;
newArr.push('Rocio');
console.log(newArr.length);
console.log(arr.length);


console.log('Завдання 2---------------------');

let users = ['Vanya', 'Kostya'];
users.push('Olya');
console.log(users);

users.forEach(function(elem, pos, mass)
	{
		if (elem === 'Kostya'){		
		console.log(pos);
		console.log(elem);
		mass.splice(pos, 1, 'Petya');
		}
	});

console.log('Завдання 3---------------------');
let arr2 = ['Vanya', 'Jose', 'Amir'];
let name = arr2.splice(1,1);
console.log(name[0]);

console.log('Завдання 4---------------------');
let str = 'Vanya, Jose, Amir';
let mass2 = str.split(',');
console.log(mass2);

console.log('Завдання 5---------------------');
 let arr3 = [9, 2, 8];
 let reduceValue = arr3.reduce(function (previusValue, item, index, array){
	console.log(previusValue);
	return previusValue + item;
 })

 console.log('DOM');
console.log('----------------------------------------------------------------------');
console.log('Завдання 1---------------------');

const sayHi = document.querySelectorAll('[data-say-hi]');
console.log(sayHi)
sayHi.forEach(sayHiItem => {
	console.log(sayHiItem.textContent);
});

console.log('Завдання 2---------------------');

const listItems = document.querySelectorAll('li');

console.log(listItems)
listItems.forEach(listItem => {
	if (listItem.textContent === 'Йончі'){
		console.log(listItem.textContent);
	}
});

console.log('Завдання 3---------------------');

const items3 = document.querySelectorAll('.like');

console.log(items3);


console.log('Завдання 4---------------------');

const list = document.querySelectorAll('ul');
console.log(list);
list.forEach(listItem =>{
	const parentEl = listItem.parentElement;
	if (listItem.closest('.main__item-4') === parentEl){
		listItem.insertAdjacentHTML(
	 	'beforeend',
	 	'<li>Текст</li>'
		);
	}
})

console.log('Розміри прокрутки та координати');
console.log('----------------------------------------------------------------------');
console.log('Завдання 1---------------------');

const windowWidth = window.innerWidth;

const mainEl = document.documentElement;
// console.log(mainEl);
const windowClientWidth = mainEl.clientWidth;
let scrollWidth = windowWidth - windowClientWidth;
console.log(`${scrollWidth}px`);


console.log('Завдання 3---------------------');

function scrollTop(){
	window.scrollTo({
		top: 100,
		behavior: "smooth"
	})
}
setTimeout(scrollTop,1000);

console.log('Завдання 4---------------------');

const element1 = document.querySelector('.item-1');

console.log( '.item-1');
console.log(`Y: ${element1.getBoundingClientRect().top}px`);
console.log(`X: ${element1.getBoundingClientRect().left}px`);

let element2 = document.querySelector('.like');

console.log( '.like');
console.log(`Y: ${element2.getBoundingClientRect().top}px`);
console.log(`X: ${element2.getBoundingClientRect().left}px`);

let element3 = document.querySelector('[data-say-hi]');

console.log( '[data-say-hi]');
console.log(`Y: ${element3.getBoundingClientRect().top}px`);
console.log(`X: ${element3.getBoundingClientRect().left}px`);





