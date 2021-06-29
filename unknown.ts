declare const maybe:unknown;

// const num:number = maybe;

if (maybe === true) {
    const b: boolean = maybe;

    // const s: string = maybe; //오류
}

if (typeof maybe === 'string') {
    const s: string = maybe;

    // const b: boolean = maybe; //오류
}