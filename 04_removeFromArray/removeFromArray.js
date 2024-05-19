const removeFromArray = function(array, num, num2,num3, num4) {
    let toBeRemoved = [num, num2, num3, num4];
    array = array.filter(item => !toBeRemoved.includes(item));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
