let calk = (function counter(i){
    let current =1000;
    return function (i){
        current=current*i;
        return current;
    }
})();


console.log(calk(7));



let Incr =  (function counter(j){

    let current ="";
    return function (j){

        current=j+current;
        return current;
    }
})();

Incr(1);

console.log(Incr(500))

