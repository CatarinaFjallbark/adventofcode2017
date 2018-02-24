var input = "4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5";
input = input.split("\t");
input = input.map(x => parseInt(x));
var temp = [0, 2, 7, 0];
var count = 0;

var spread = function (vector, index) {
    var vector = vector;
    var value = vector[index];
    vector[index] = 0;
    for (var i = value; i > 0; i--) {
        if (index + 1 == vector.length) {
            index = 0;
        } else {
            index++;
        }
        vector[index] = vector[index] + 1;
    }
    return vector;
}

var checked = [];
var first = true;
var done = function (vector) {
    for (var i = 0; i < checked.length; i++) {
        // console.log("loop nummer " + i + " kollat " + checked[i], "nya " + vector)
        if (checked[i] === vector.join(" ")) {
            if (first) {
                count = 0;
                checked = []
                first = false;
                return false;
            } else {
                return true;
            }
        }
    }
    checked[checked.length] = vector.join(" ");
    //console.log("loop nummer " + i + "  " + checked);
    return false;
}

var main = function (vector) {
    var vector = vector;
    var high = 0;
    var index = 0;
    for (var i = 0; i < vector.length; i++) {
        if (high < vector[i]) {
            high = vector[i];
            index = i;
        }
    }
    while (!done(vector)) {
        vector = spread(vector, index);
        // console.log(vector);
        high = 0;
        for (var i = 0; i < vector.length; i++) {
            if (high < vector[i]) {
                high = vector[i];
                index = i;
            }
        }
        count++;
    }
    return count;
}

console.log("count " + main(input));

