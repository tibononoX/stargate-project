const models = require("../models");

class PlanetController {
  static browse = async (req, res) => {
    try {
      const [planetList] = await models.planet.findAll();
      if (!planetList) {
        return res.sendStatus(404);
      }
      return res.status(200).send(planetList);
    } catch (err) {
      console.error(err);

      return res.sendStatus(500);
    }
  };

  static read = (req, res) => {
    models.planet
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const planet = req.body;

    // TODO validations (length, format...)

    planet.id = parseInt(req.params.id, 10);

    models.planet
      .update(planet)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const planet = req.body;

    models.planet
      .insert(planet)
      .then(([result]) => {
        res.status(201).send({ ...planet, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.planet
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = PlanetController;
