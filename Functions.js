let persons = [["Houssam", "Houssam1", "Houssam2"], ["Nour"]];

// fonction auto-exécutable avec appel récursif
(function getLength(input) {
    if (Array.isArray(input)) {
        console.log("array length : ", input.length);
        input.forEach(ele => getLength(ele));
    }
})(persons);

console.log("**********************anonymous function*********************");
// fonction anonyme auto-exécutable avec appel récursif (utilsation de arguments.callee)
(function (input) {
    if (Array.isArray(input)) {
        console.log("array length : ", input.length);
        input.forEach(ele => arguments.callee(ele));
    }
})(persons);

function calculateMoyenne() {
    let sum = 0;
    for (let arg of arguments) {
        sum += arg;
    }
    return sum / (arguments.length);
}

console.log("avec passage d'arguments : ", calculateMoyenne(4, 6, 20));
// apply permet de passer un array des arguments de la fonction calculateMoyenne
console.log("avec la méthode apply : ", calculateMoyenne.apply(this, [4, 6, 20]));
// call permet de passer une liste d'arguments (un array pour la fonction apply) de la fonction calculateMoyenne
console.log("avec la méthode call : ", calculateMoyenne.call(this, 4, 6, 20));

console.log("*******************Function.bind()***********************");

let person = {
    name: "Houssam",
    age: 33,
    adresse: "1 rue de Paris",
    print: function () {
        return this.name + "_" + this.age + "_" + this.adresse;
    }
};
console.log("la fonction print est évoqué dans le contexte local this de person", person.print());
let getPrinted = person.print;

console.log("la fonction print est évoqué dans le contexte this global ==> undefined : ", getPrinted());
// La fonction bind() crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour
// contexte this, la valeur passée en paramètre, ie : person.
// this sera le this interne de l'objet person.
let printPerson = person.print.bind(person);
console.log("using bind function : ", printPerson());


console.log("*******************arrow function and this context***********************");

(function Test() {
    this.data = [9, 16, 49];


    let result = this.data.map((x) => {
        console.log("this.data est accessible ici, parcequ'on utilise arrow function");
        return x * this.data.length;
    });
    console.log(result);
})();

console.log("*******************callback functions***********************");

let elements = document.getElementsByTagName('li');

for (let i = 0; i < elements.length; i++) {

    let myCallback = (function (index) {
        return function () {
            console.log(index);
        }
    })(i);
    //l'utilsation de la fonction auto-appelante permet
    //de capturer i et de travailler avec comme variable locale.
    elements[i].addEventListener('click', myCallback);
}
// A la sortie de la boucle for on aura :
// elements[0].onclickclick, exec function with console.log(0))
// elements[1].onclickclick, exec function with console.log(1))
// elements[2].onclickclick, exec function with console.log(2))
