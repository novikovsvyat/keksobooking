const getRandomInt = (a, b) => {
    a = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    b = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    return Math.floor(Math.random() * (b + 1 - a) + a);
}

getRandomInt(0,5);

const getRandomFloat = (a, b, fract = 1) => {
    a = Math.min(Math.abs(a), Math.abs(b));
    b = Math.max(Math.abs(a), Math.abs(b));
    return +(Math.random() * (b - a) + a).toFixed((fract > 0) ? fract : fract = 1);
}

getRandomFloat(1.10,1.15,2);