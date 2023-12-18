const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select boat.*, tile.type, tile.has_treasure, tile.coord_x, tile.coord_y from ${this.table} as boat join tile on tile.coord_x = boat.coord_x and tile.coord_y=boat.coord_y `
    );

    // Return the array of boats
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
