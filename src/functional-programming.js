/************Implement forEach method************/
let forEach = (array, callback) => {

    let targetFunction = (index) => {
        if (index < array.length) {
            callback(array[index]);
            targetFunction(index + 1);
        }
    };

    targetFunction(0);
};

//test foreach
forEach(["Pierre", "Gokoyi", "Phmalitye"], param => console.log("Hello " + param));

/************Implement map method************/
let map = (array, callback) => {

    let result = new Array(array.length);
    let functionTarget = (index) => {
        if (index < array.length) {
            result[index] = callback(array[index]);
            functionTarget(index + 1);
        }
    };

    functionTarget(0);
    return result;
};
//test map
console.log(map([3, 5, 6], ele => ele * ele));