const fileSystem = require('fs')
const input = fileSystem.readFileSync('./input.txt', 'utf-8');
var rows = input.split("\n");
var words = [];
var count = 0;
words = rows.map(x => x.split(" "));
var dubletter = function (vector) {
    for (var i = 0; i < vector.length; i++) {
        for (var j = 0; j < vector.length; j++) {
            if (vector[j] === vector[i] && i !== j) {
                return true;
            }
        }
    }
    return false;
}

var sortera = function (vector) {
    vector = vector.map(x=>x.split("").sort().join(""));
}

var counter = function (words){
    sortera(words);
    if(!dubletter(words.map(x=>x.split("").sort().join("")))){
        count++;
    }    
}
console.log(words.length);
//words.forEach(function(value) {return counter(value)});
words.forEach(value => counter(value));

console.log(count);