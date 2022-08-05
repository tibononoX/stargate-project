const AbstractManager = require("./AbstractManager");

class PlanetManager extends AbstractManager {
  static table = "planet";

  find(id) {
    return this.connection.query(
      `SELECT p.id, p.planetName, p.gateAddress, g.letter poo FROM  ${PlanetManager.table} p LEFT JOIN poo ON p.id=poo.planet_id RIGHT JOIN glyph g ON g.id=poo.glyph_id WHERE p.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT p.id, p.planetName, p.gateAddress, g.letter poo FROM  ${PlanetManager.table} p LEFT JOIN poo ON p.id=poo.planet_id LEFT JOIN glyph g ON g.id=poo.glyph_id`
    );
  }

  insert(planet) {
    return this.connection.query(`INSERT INTO ${PlanetManager.table} ?`, [
      planet,
    ]);
  }

  update(planet) {
    return this.connection.query(
      `UPDATE ${PlanetManager.table} SET ? WHERE id = ?`,
      [planet, planet.id]
    );
  }
}

module.exports = PlanetManager;
