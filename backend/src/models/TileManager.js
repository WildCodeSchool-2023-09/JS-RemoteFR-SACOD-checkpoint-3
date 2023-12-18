const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all tiles from the "tile" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of tiles
    return rows;
  }

  async getRandomIsland() {
    const [rows] = await this.database.query(
      `select id from ${this.table} where type="island" order by rand() limit 1`
    );

    return rows[0];
  }

  async hideTreasure(island) {
    const [result] = await this.database.query(
      `update ${this.table} set has_treasure =
        case
          when id = ? then true
          else false
        end`,
      [island.id]
    );

    return result;
  }

  /* ************************************************************************* */
  // Step 4
  /* ************************************************************************* */

  // Fait juste avant la correction de la step, car je lisais mal les tests durant la matiné (pas vu les descriptions des étapes tout en haut)

  async readByCoordinates(coordX, coordY) {
    const [result] = await this.database.query(
      `SELECT * FROM tile WHERE coord_x=${coordX} AND coord_y=${coordY}`
    );

    return result;
  }
}

module.exports = TileManager;
