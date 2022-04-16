var a = [1,2,3,4,5,6,6,8,9,10,2,2]; //return 6
var b = [2,4,5,3,1,1,3,4,5,5]; //retrun 1,5

function checkDistinct(array) {
    var sortedArray = array.sort();
    //console.log(sortedArray);
    var distinct = [];
    for (var i = 1; i < sortedArray.length; i++) {
        var item1 = sortedArray[i-1];
        var item2 = sortedArray[i];
        if (item1 == item2 && distinct.indexOf(item1) == -1) {
            distinct.push(item1);
        }
    }
    return distinct;
}

console.log(checkDistinct(a));
console.log(checkDistinct(b));