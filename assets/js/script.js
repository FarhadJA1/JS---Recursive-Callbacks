// params
function getSum(n) {
    if (n == 1) {
        return n
    }
    else {
        return n + getSum(n - 1)
    }
}
console.log(getSum(5));


function arrParams(...list) {
    for (const item of list) {
        console.log(item);
    }
}
arrParams(2, 3, 5, 6);




//callbacks
let array1 = [2, 4, 5, 6];

function isPositive(n) {
    return n > 0;
}
let isEven = n => n%2==0 

function sumItems(array, func) {
    let result = 0;

    for (const item of array) {
        if (func(item)) {
            result += item;
        }
    }
    return result;
}


console.log(sumItems(array1, isPositive));
console.log(sumItems(array1, isEven));
console.log(sumItems(array1, n=> n%2 != 0))




