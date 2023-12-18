const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `SELECT boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure
        FROM ${this.table} 
        JOIN tile 
          ON boat.coord_x=tile.coord_x
          AND boat.coord_y=tile.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  /* ************************************************************************* */
  // Step 3
  /* ************************************************************************* */

  async update(id, coordX, coordY) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [coordX, coordY, id]
    );

    return rows;
  }
}

module.exports = BoatManager;
