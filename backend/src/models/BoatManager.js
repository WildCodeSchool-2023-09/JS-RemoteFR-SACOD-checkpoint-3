const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select boat.name, boat.coord_x, boat.coord_y, tile.coord_x, tile.coord_y, boat.id, tile.id, tile.type, tile.has_treasure from ${this.table}
    JOIN tile ON tile.coord_x = boat.coord_x
    AND tile.coord_y = boat.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async update(id, coordX, coordY) {
    const result = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ?
WHERE id = ?`,
      [coordX, coordY, id]
    );
    return result[0];
  }
}
module.exports = BoatManager;
