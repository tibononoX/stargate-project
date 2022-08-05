const AbstractManager = require("./AbstractManager");

class GlyphManager extends AbstractManager {
  static table = "glyph";

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${GlyphManager.table} WHERE id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${GlyphManager.table}`);
  }
}

module.exports = GlyphManager;
