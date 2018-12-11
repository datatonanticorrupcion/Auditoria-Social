import examplesRouter from './api/controllers/examples/router';
import mapRouter from './api/controllers/map/router';

export default function routes(app) {
  app.use('/api/v1/projects', examplesRouter);
  app.use('/api/v1/maps', mapRouter);
}
