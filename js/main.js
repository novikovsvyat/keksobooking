const CREATED_OFFERS_COUNT = 10;
const LOCATION_LAT = [35.65000, 35.70000];
const LOCATION_LNG = [139.70000, 139.80000];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createOrdinalNumArray = (count) => {
  const tmpArray = [];
  // eslint-disable-next-line id-length
  for (let i=0;i<count; i++) {
    tmpArray.push(i+1);
  }
  return tmpArray;
};

const someArray = createOrdinalNumArray(CREATED_OFFERS_COUNT);

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

const getUniqArrayElement = (arr) => {
  const index = getRandomInt(0, arr.length - 1);
  const element = arr[index];
  arr.splice(index, 1);
  return element;
};

const createAvatarPath = () => {
  const pngNum = getUniqArrayElement(someArray);
  return `img/avatars/user${(pngNum/10<1) ? `0${pngNum}` : pngNum}.png`;
};

const getObjLocation = (inputData) => getRandomFloat(inputData[0],inputData[1],5);

const getRandomSlicedArray = (array)=> {
  const count = getRandomInt(0, array.length-1);
  const tempArray = array.slice();
  // eslint-disable-next-line id-length
  for (let i=0;i<count;i++) {
    tempArray.splice(getRandomInt(tempArray.length, 1),1);
  }
  return tempArray;
};

const createNewOffer = () => {
  const latLocation = getObjLocation(LOCATION_LAT);
  const lngLocation = getObjLocation(LOCATION_LNG);

  const someOffer = {
    author: {
      avatar: createAvatarPath(),
    },
    offer:{
      title: 'Заголовок предложения',
      address: `${latLocation}, ${lngLocation}`,
      price: getRandomInt(1,1000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInt(1,100),
      guests: getRandomInt(0,5),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomSlicedArray(FEATURES),
      description: 'Описание помещения',
      photos: getRandomSlicedArray(PHOTOS),
    },
    location: {
      lat: latLocation,
      lng: lngLocation,
    },
  };
  return someOffer;
};

const createdOffers = Array.from({length: CREATED_OFFERS_COUNT}, createNewOffer);

console.log(createdOffers);
