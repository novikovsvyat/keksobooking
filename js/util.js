const getRandomInt = (mn, mx) => {
  mn = Math.ceil(Math.min(Math.abs(mn), Math.abs(mx)));
  mx = Math.floor(Math.max(Math.abs(mn), Math.abs(mx)));
  return Math.floor(Math.random() * (mx + 1 - mn) + mn);
};

const getRandomFloat = (mn, mx, fract = 1) => {
  mn = Math.min(Math.abs(mn), Math.abs(mx));
  mx = Math.max(Math.abs(mn), Math.abs(mx));
  return +(Math.random() * (mx - mn) + mn).toFixed((fract > 0) ? fract : fract = 1);
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getRandomlySlicedArray = (array)=> {
  const count = getRandomInt(0, array.length-1);
  const tempArray = array.slice();
  // eslint-disable-next-line id-length
  for (let i=0;i<count;i++) {
    tempArray.splice(getRandomInt(tempArray.length, 1),1);
  }
  return tempArray;
};

export {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomlySlicedArray};
