"use strict";
//                              QUESTION # 41
//Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array
let magician = ['David', 'John', 'Peter', 'Mark'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
