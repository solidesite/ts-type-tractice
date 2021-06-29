function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infiniteLoop(): never {
    while(true) {

    }
}

let a2:string = 'hi';

if (typeof a2 !== 'string') {
    a2;
}

//typeof 가드
// declare const a2: string | number;

// if (typeof a2 !== 'string') {
//     a2;
// }