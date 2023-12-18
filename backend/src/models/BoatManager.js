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
    const sql = `UPDATE boat SET coord_x = ?, coord_y = ? WHERE id = ?`;
    const [result] = await this.database.query(sql, [coordX, coordY, id]);
    return result;
  }
}

module.exports = BoatManager;
