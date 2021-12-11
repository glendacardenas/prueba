//closure
function sumabase(x){
    return function(y){
        return x+y
    }
};
//const sumabase5 = sumabase(5);
//const sumabase10=sumabase(10);



//console.log(sumabase5(4));

function count(){
    let count=0;

    return function(){
        return count=count+1;
    }
}

let count1=count();

console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());

