const removeFromArray = function(array, num) {
    for (i = 0; i < 5; i++) {
        if (array[i] === num) {
            array.splice(num, 0);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
