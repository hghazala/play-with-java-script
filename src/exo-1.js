module.exports = function (readline, print) {
    const N = parseInt(readline()); // Number of elements which make up the association table.
    const Q = parseInt(readline()); // Number Q of file names to be analyzed.
    const mimeTypesDictionnary = {};

    let readLine = (readline) => readline().split(' ');
    let readLineBis = (readline) => readline().split('.');

    let transformLine = (inputs) => {
        return {
            "EXT": inputs[0],
            "MT": inputs[1]
        }
    };

    let populateDictionnary = (dictionnary, key, value) => {
        //dictionnary[key.toUpperCase()] = value;
        return {
            ...dictionnary,
            [key]: value
        };
    };

    let result = [...Array(N)]
        .map(() => readLine(readline))
        .map(inputs => transformLine(inputs))
        .map(param => {
            const {EXT, MT} = param;
            return populateDictionnary(mimeTypesDictionnary, EXT.toUpperCase(), MT);
        }).reduce((acc, input) => ({...acc, ...input}));

    [...Array(Q)]
        .map(() => readLineBis(readline))
        .map(fname => fname[fname.length -1 ].toUpperCase())
        .map(ext => {
            print()//TODO
        }).reduce((acc, input) => ({...acc, ...input}));

    for (let i = 0; i < Q; i++) {
        let FNAME = readline().split('.'); // One file name per line.
        const ext = FNAME[FNAME.length - 1].toUpperCase();
        print(FNAME.length > 1 ? result[ext] || 'UNKNOWN' : 'UNKNOWN');
    }
};
