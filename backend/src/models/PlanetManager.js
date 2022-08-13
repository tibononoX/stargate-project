const AbstractManager = require("./AbstractManager");

class PlanetManager extends AbstractManager {
  static table = "planet";

  find(id) {
    return this.connection.query(
      `SELECT p.id, p.planetName, p.gateAddress, g.letter pooLetter, p.dialMode, p.userId FROM ${PlanetManager.table} p LEFT JOIN glyph g ON p.poo=g.id WHERE p.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT p.id, p.planetName, p.gateAddress, g.letter pooLetter, p.dialMode, p.userId FROM ${PlanetManager.table} p LEFT JOIN glyph g ON p.poo=g.id`
    );
  }

  insert(planet) {
    return this.connection.query(`INSERT INTO ${PlanetManager.table} SET ?`, [
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
