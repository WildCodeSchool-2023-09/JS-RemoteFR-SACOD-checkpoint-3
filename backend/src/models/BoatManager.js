const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select b.coord_x, b.coord_y, b.id, b.name, t.type, t.has_treasure from ${this.table} AS b JOIN tile AS t ON b.coord_x=t.coord_x AND b.coord_y=t.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async update(id, coordX, coordY) {
    const [result] = await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? WHERE id=?`,
      [coordX, coordY, id]
    );

    return result;
  }
}

module.exports = BoatManager;
