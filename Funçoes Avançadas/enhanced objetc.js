/*function method1(){
    console.log('method called')
}

var obj = {
    method1
}

obj.method1();

var obj = {
    sum: function sum(a, b){
            return a + b;
    }
}

console.log (obj.sum(1 , 5));

var obj = {
    sum(a, b) {
        return a + b;
    }
}
console.log (obj);*/

var propName = 'test';

var obj = {
    [propName + 'concat'] :  'prop value'
};

console.log(obj);

