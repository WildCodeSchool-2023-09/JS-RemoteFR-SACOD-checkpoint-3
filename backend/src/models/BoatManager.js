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
      JOIN
        tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
    `);

    return rows;
  }

  async update(id, coordX, coordY) {
    const [result] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ? WHERE id = ?`,
      [coordX, coordY, id]
    );

    return result;
  }
}

module.exports = BoatManager;
