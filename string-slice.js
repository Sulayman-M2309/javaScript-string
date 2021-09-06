const country='Bangladesh japan India Pakisthan Arob USA';
const freeString=country.split(' ');
// console.log(freeString);
const words=country.split('a');
// console.log(words);


// specific string////
const smallSlice=country.slice(5,12);
// console.log(smallSlice);



// substr/

const count=country.substr(5,10);
// console.log(count);



// substing

const countrys=country.substring(5,12);
// console.log(countrys);

// concate
const first='Bangladesh';
const second='Amader';
const third='country';
const added=first.concat(second).concat(third);
// console.log(added);


// join string
const wordsJoin=['A','b','i','r'];
const wordJoin=wordsJoin.join('');
console.log(wordJoin);