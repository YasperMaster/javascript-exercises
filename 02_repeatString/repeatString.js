const repeatString = function(string, num) {
    if (num >= 0) {
        let strArray = [];
        let strRepeated = ''
        for (i = 0; i < num; i++ ) {
            strArray [i] = string;
            strRepeated += string;
        }
        return strRepeated;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
