//? -------------------DOM Manipulation----------------------
//?! ----------------------DOM Manipulation-----------------
//* ----------------------DOM Manipulation--------------
//!---------------------- DOM Manipulation------------------


//? -------------------GetElementsById()----------------------

//?----------------- GetElementsByClassName()----------------

//? --------------GetElementsByTagName()----------------------

//? ----------------QuerySelector()----------------------

// const container = document.querySelector('div');
// console.log(container);

//? -------------QuerySelectorAll()----------------------

// const div = document.querySelectorAll('div');
// console.log(div);



//?----------------------Styling Elements--------------
//?!----------------------Styling Elements-------------------
//* ----------Styling elements-----------------------------
//? Styling Elements--------------------------------------


//? ------------Changing all 'main-headings'------------

// const title = document.querySelectorAll('#main-heading');
// console.log(title)

// for (i=0; i < title.length; i++){
//     title[i].style.color = 'red';
//     title[i].style.fontSize = '50px';
// }

//? ------------Make all list items green and 30px-------

// const listItems = document.querySelectorAll('.list-items');
// console.log(listItems);

// for( i=0; i < listItems.length; i++){
//     listItems[i].style.color = 'green';
//     listItems[i].style.fontSize = '30px';
// }

//? ------- all list items skyblue, main-heading, 40px-------

// const listItems = document.querySelectorAll('.list-items');
// console.log(listItems);

// for( i=0; i < listItems.length; i++){
//     listItems[i].style.color = 'skyblue';
//     listItems[i].style.fontSize = '40px';
//     listItems[i].setAttribute('id', 'main-heading');
// }

//? ------------White box around header-------
const header = document.querySelector('header');
console.log(header);
header.style.border = 'solid 5px white';

//?-------------------- Creating Elements------------------

const ul = document.querySelector('ul');
const li = document.createElement('li');


//?------------------- Adding Elements------------------

ul.append(li);

//?-------------------- Modifying the text------------------

const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);  
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

// li.innerText = 'X-Men';

//?! ----------------------Attributes-----------------
//? ------------------- Attributes----------------------
//* ----------------------Attributes--------------
//!---------------------- Attributes------------------

//?--------------------- setAttribute()-----------------

// li.setAttribute('id', 'main-heading');

//? ---------------------removeAttribute()-------------

// li.removeAttribute('id');

//?---------------------- getAttribute()-------------

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));


//?----------------------Classes--------------
//?!----------------------Classes-------------------
//* ----------Classes-----------------------------
//? Classes--------------------------------------

//?--------------------- classList.add()-----------------

li.classList.add('list-items');

//?--------------------- classList.remove()-----------------

// li.classList.remove('list-items');

//?--------------------- classList.contains()-----------------

console.log(li.classList.contains('list-items'));

//?--------------remove element from the DOM -----------------
// li.remove();

//* ----------Traverse the DOM-----------------------------
//?----------------------Parent Node Traversal--------------

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);


// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);


//?!----------------------Child Node Traversal-------------------


console.log(ul.childNodes);

console.log(ul.firstChild);

console.log(ul.lastChild);




//?!----------------------Template-------------------

//? Template--------------------------------------
//*---Functions----------------------------------
//!------Functions-------------------------------
//?--------------------- Method()-----------------
//?--------------------- Kethod()-----------------
//?--------------------- Method()-----------------
//!----Functions---------------------------------
//*-----Functions--------------------------------