import l from '../../common/logger';
import db from './examples.db.service';

class ExamplesService {
  byLocation(latitud, longitud, radio) {
    l.info(`${this.constructor.name}.byLocation(${latitud}, ${latitud}, ${radio})`);
    return db.byLocation(latitud, longitud, radio);
  }
}

export default new ExamplesService();
