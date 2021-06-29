console.log(Symbol('hi')=== Symbol('hi')); //false

const s = Symbol();

const object = {
    [s]: "symbol"
};

object[s]