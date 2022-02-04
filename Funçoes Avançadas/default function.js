

//Lazy evaluation

function randomNumber (){
    console.log('Generating a random number ...')
    return Math.random()*10;
}

function multiplay (a, b = randomNumber()){
    return a*b;
}

console.log (multiplay(5));
console.log (multiplay(5));