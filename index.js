// Code your solutions in this file
const names = ["Amy", "Abby", "Angie"];
let event = "babyshower";

function writeCards(names, event) {
    const newArr = [];

       for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)       
    }  

    return newArr;   
     
}

writeCards(names, event);

function countDown () {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }   
}

countDown();



