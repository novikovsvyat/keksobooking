import {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomlySlicedArray} from './util.js';

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

const createAvatarsArray = (count) => {
  const array = [];
  // eslint-disable-next-line id-length
  for (let i=0;i<count; i++) {
    array.push(`img/avatars/user${((i+1)/10<1) ? `0${i+1}` : i+1}.png`);
  }
  return array;
};

const AVATARS = createAvatarsArray(CREATED_OFFERS_COUNT);

const getUniqArrayElement = (arr) => {
  const index = getRandomInt(0, arr.length - 1);
  const element = arr[index];
  arr.splice(index, 1);
  return element;
};

const getObjLocation = (inputData) => getRandomFloat(inputData[0],inputData[1],5);

const createNewOffer = () => {
  const latLocation = getObjLocation(LOCATION_LAT);
  const lngLocation = getObjLocation(LOCATION_LNG);

  return {
    author: {
      avatar: getUniqArrayElement(AVATARS),
    },
    offer: {
      title: 'Заголовок предложения',
      address: `${latLocation}, ${lngLocation}`,
      price: getRandomInt(1,1000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInt(1,100),
      guests: getRandomInt(0,5),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomlySlicedArray(FEATURES),
      description: 'Описание помещения',
      photos: getRandomlySlicedArray(PHOTOS),
    },
    location: {
      lat: latLocation,
      lng: lngLocation,
    },
  };
};

const createOffer = () => Array.from({length: CREATED_OFFERS_COUNT}, createNewOffer);

export {createOffer};
