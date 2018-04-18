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

console.log("resolve promise due to async await : ");
getDataPromesse().then(response => console.log(response));

/****************************les couroutines******************************/
