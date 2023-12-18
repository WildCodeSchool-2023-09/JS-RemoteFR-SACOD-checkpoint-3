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

  async update(id, coordX, coordY) {
    const rows = await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? where id=?`,
      [coordX, coordY, id]
    );
    console.info(rows);
    return rows[0];
  }
}

module.exports = BoatManager;
