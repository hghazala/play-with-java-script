let things = ["toto", "tata", "titi"];

/**********example of synchrounous callback**********/
let functionThatCanSalute = function (saluteDestination, some_function) {
    console.log(some_function() + " " + saluteDestination);
};

functionThatCanSalute("boys", () => "Good morning");
functionThatCanSalute("everybody", () => "Hello");

/**********example of asynchrounous callback**********/
const getPersons = () => {
    setTimeout(function() {
        return things;
    }, 2000)
};
console.log("things will be undefined (timeout 2sc): ", getPersons());


const getPersonsBis = (callback) => {
    setTimeout(() => callback(things), 2000)
};

getPersonsBis(function (users) {
    console.log("things after callback : ", users);
});

/**********example of asynchrounous with promise**********/
const promessPersons = new Promise(
    (resolve, reject) => {
        setTimeout(function(err) {
            if(err) {
                reject('Error is occured');
                return;
            }
            resolve(things);
        }, 2000)
    }
);
promessPersons.then(things => console.log("promised things : ", things));