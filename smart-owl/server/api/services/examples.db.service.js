const nationalProjects = require('../data/projects.json');
const {
  isNear,
} = require('../../helper');

class ExamplesDatabase {
  constructor() {
    this._data = nationalProjects;
  }
  async byLocation(lat, lon, radio) {
    const myIsNear = isNear.bind(null, {
      lat,
      lon,
    }, radio);
    return this._data.filter(myIsNear).filter((x, idx) => idx <= 4);
  }
}

export default new ExamplesDatabase();
