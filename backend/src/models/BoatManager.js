const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select ${this.table}.id, ${this.table}.coord_x, ${this.table}.coord_y, ${this.table}.name, tile.type, tile.has_treasure  from ${this.table} INNER JOIN tile ON ${this.table}.coord_x = tile.coord_x AND ${this.table}.coord_y = tile.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `
      select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the array of boats
    return rows;
  }

  async update(id, coordX, coordY) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [coordX, coordY, id]
    );

    // Return the array of boats
    return rows;
  }
}

module.exports = BoatManager;
