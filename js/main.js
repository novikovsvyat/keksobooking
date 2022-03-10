const getRandomIntNum = (min, max) => {
    if (min >= 0 && max > 0 && min <= max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1 - min) + min);
    } else {
        return 'Неверный диапазон значений';
    }
}

getRandomIntNum(0,5);

const getRandomFloatNum = (min, max, fract) => {
    if (min >= 0 && max > 0 && min <= max && fract > 0) {
    return +(Math.random() * (max - min) + min).toFixed(fract);
    } else {
        return 'Неверный диапазон значений';
    }
}

getRandomFloatNum(1.10,1.15,2);