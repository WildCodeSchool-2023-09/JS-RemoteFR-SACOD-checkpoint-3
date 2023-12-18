const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

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
