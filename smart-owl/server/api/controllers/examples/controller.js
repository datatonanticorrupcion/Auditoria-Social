import ExamplesService from '../../services/examples.service';

export class Controller {
  byLocation(req, res) {
    ExamplesService
      .byLocation(req.params.lat, req.params.lon, req.params.radio)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }
}
export default new Controller();
