var a = [1,2,3,4,5,6,6,8,9,10]; //return 6
var b = [2,4,5,3,1,1,3,4,5,5]; //retrun 1,5

function checkDistinct(array) {
    for (var i = 1; i < array.length; i++) {
        var item1 = array[i-1];
        var item2 = array[i];
        if(item1 == item2) {
            return item1;
        }
    }
}

console.log(checkDistinct(a));
console.log(checkDistinct(b));