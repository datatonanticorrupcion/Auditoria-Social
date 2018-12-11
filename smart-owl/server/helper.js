const haversine = require('haversine');

const isNear = (location1, radio, location2) => {
  let distance = 10000000;
  if (location1 && location2) {
    distance = haversine(
      { latitude: location1.lat, longitude: location1.lon },
      { latitude: location2.lat, longitude: location2.lon },
      { unit: 'meter' },
    );
    if (distance <= radio) {
      return true;
    }
  }
  return false;
};

module.exports = {
  isNear,
};
