const fileSystem = require('fs')
let input = fileSystem.readFileSync('./input.txt', 'utf-8');
input = input.split("\n");
let test=input.map(x => parseInt(x));

//var test = [0,3,0,1,-3];
var pos = 0;
var count = 0;

while(0<=pos && pos<test.length){
    //console.log(pos);
    var temp = pos;
    pos = temp + test[temp];
    if(pos<test.length){
        count ++;
        if(test[temp]<3){
            test[temp]++;
        }else{
            test[temp]--;
        }
        
    }
}
console.log(count);

