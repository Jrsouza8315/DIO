// rest operator ...

/*function sum(...args){
    return args.reduce((acc, value) => acc + value, 0);

}

console.log(sum(5, 5, 5, 2, 3));


const sum = (a, b, ...rest) => {
    console.log(a, b, rest);

}

console.log(sum(5, 5, 5, 2, 3));

//spread operator

const multuply = (...args) => args.reduce((acc,value) => acc * value, 1)

const sum = (...rest) => {
    return multuply(...rest)
};

// pode ser utilizado em strings, arrays, objetos literais e objetos iteraveis

const atr = 'Digital Innovattion One';
const arr = [1, 2, 3, 4];

function logArgs (a, b, c) {
    console.log(a, b, c);
}

const arr2 = [...arr, 5,6,7];

const arr3 = [...arr2, 0 , 0 , 0]

console.log(...arr3);*/

const obj = {
    test: 123
}

const obj2 = {
    ...obj,
    test2: 'Hello!'

}

console.log(obj2)