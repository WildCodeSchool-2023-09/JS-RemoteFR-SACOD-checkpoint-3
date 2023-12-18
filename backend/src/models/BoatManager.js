const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT 
        boat.*,
        tile.id AS tile_id, 
        tile.type, 
        tile.has_treasure
      FROM 
        ${this.table} AS boat
      LEFT JOIN 
        tile as tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
    `);

    return rows;
  }

  async update(id, x, y) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? where id = ?`,
      [x, y, id]
    );
    return result;
  }
}

module.exports = BoatManager;
