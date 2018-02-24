/*MAP-test
var numbers = [4, 9, 16, 25];

function hej(x) {
    return x+1;
}

function myFunction() {
    //return numbers.map(x => Math.sqrt(x));
    //return numbers.map(hej);
    return numbers.map(x => x+1);

}
console.log(myFunction());*/


/* REDUCETEST 
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    var test = numbers.reduce(getSum);
    return test;
}
console.log(myFunction());*/



/* Filtertest
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    if(age >= 18){
        return true;
    }
    return false;
}

function myFunction() {
    var test = ages.filter(checkAdult);
    console.log(test);
    console.log(ages);
}

myFunction();*/