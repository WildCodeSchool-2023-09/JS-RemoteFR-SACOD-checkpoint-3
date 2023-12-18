/* eslint-disable camelcase */
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
    // Execute the SQL UPDATE query to update a boat in the "boat" table
    const [rows] = await this.database.query(
      `update ${this.table} set coord_x = ${coordX}, coord_y = ${coordY} where id = ${id}`
    );

    // Return the updated boat
    return rows;
  }
}

module.exports = BoatManager;
