"use strict";

//D'abord, je declare un Objet "student" avec "name", "favoriteFood" et "city"
//Ensuite, on recupère le nombre de caractères dans chaques propriétés puis on les additionne pour obtenir un nombre
//Si le nombre pair, on affiche "pair" dans la console 
//Si le nombre est impair, on affiche "impair" dans la console
//Plusieurs solutions possibles 
//Object.keys()=> recuperer les proprieter=s 
 //Object.values() => recuperer les valeurs

 //Premier exemple 
// let student={
//     name:'Nicolas',
//     favoriteFood:"Salad",
//     city:"Paris",
// }
// let values=Object.values(student);
// console.log(values);
// let resultBis=0;
// values.forEach((values)=> {
//     resultBis+=values.length
// })
// console.log(resultBis);

let student={
    name:'Nicolas',
    favoriteFood:"Salad",
    city:"Paris",
}
let values=Object.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);