const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const sql = `
      SELECT 
        boat.id,
        boat.name, 
        boat.coord_x, 
        boat.coord_y, 
        tile.type,
        tile.has_treasure
      FROM 
        boat 
      INNER JOIN 
        tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
    `;
    const [rows] = await this.database.query(sql);
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
