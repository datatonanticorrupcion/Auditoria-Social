import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/:lat/:lon/:radio', controller.byLocation);
