let data1 = [1, 2, 4, 4];
let data2 = [1, 2, 3, 9];

let hasPairWithSumFirstMethod = function (sum, data) {
    let comp = [];
    for (let i = 0; i < data.length; i++) {
        //si l'élément trouve son complément alors return true
        if (comp.includes(data[i])) {
            return true;
        }
        comp.push(sum - data[i]);
    }
    return false;
};

console.log(hasPairWithSumFirstMethod(8, data1));
console.log(hasPairWithSumFirstMethod(8, data2));


let hasPairWithSumSecondMethod = function (data, targetSum) {
    let lowIndex = 0;
    let highIndex = data.length - 1;
    while (lowIndex < highIndex) {
        sum = data[lowIndex] + data[highIndex];
        if (sum > targetSum) {
            highIndex--;
        }
        if(sum < targetSum) {
            lowIndex++;
        }
        if(sum === targetSum) {
            return true;
        }
    }
    return false;
};

console.log(hasPairWithSumSecondMethod(data1, 8));
console.log(hasPairWithSumSecondMethod(data2, 8));