const things = ["one", "two", "three"];
/**********example of asynchrounous with promise**********/
const promessPersons = new Promise(
    (resolve, reject) => {
        setTimeout(function (err) {
            if (err) {
                reject('Error is occured');
                return;
            }
            resolve(things);
        }, 2000)
    }
);
promessPersons.then(things => console.log("promised things : ", things));

/*****************************use asyn await*****************************/
const loadData = function () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(things);
        }, 2000)
    });
};

getDataPromesse = async function () {
    return await loadData();
};

getDataPromesse().then(response => console.log(response));

/****************************project Euler (pb 1)******************************/
let multipleOf = function (param, seil) {
    return [...Array(seil).keys()].map(number => {
        return (number * param);
    }).filter(result => result < seil);
};

let sum = function () {
    let sum = 0;
    for (let arg of arguments) {
        sum += arg;
    }
    return sum;
};
let res = new Set(multipleOf(3, 1000).concat(multipleOf(5, 1000)));

console.log(sum.apply(this, Array.from(res)));
