const things = ["toto", "tata", "titi"];

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
