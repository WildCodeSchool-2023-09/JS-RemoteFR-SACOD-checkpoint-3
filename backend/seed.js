/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    await database.query("truncate boat");

    queries.push(
      database.query(
        `insert into boat (name, coord_x, coord_y) values
          ('Black Pearl', 1, 1),
          ('Flying Dutchman', 4, 5),
          ("Queen Anne's Revenge", 10, 4),
          ('The Walrus', 9, 0)`
      )
    );

    await database.query("truncate tile");

    queries.push(
      database.query(
        `insert into tile (type, coord_x, coord_y) values
        ('sea', 0, 0),
        ('sea', 1, 0),
        ('sea', 2, 0),
        ('sea', 3, 0),
        ('sea', 4, 0),
        ('island', 5, 0),
        ('sea', 6, 0),
        ('sea', 7, 0),
        ('sea', 8, 0),
        ('port', 9, 0),
        ('sea', 10, 0),
        ('sea', 11, 0),
        ('sea', 0, 1),
        ('port', 1, 1),
        ('sea', 2, 1),
        ('island', 3, 1),
        ('sea', 4, 1),
        ('sea', 5, 1),
        ('sea', 6, 1),
        ('sea', 7, 1),
        ('sea', 8, 1),
        ('sea', 9, 1),
        ('island', 10, 1),
        ('sea', 11, 1),
        ('sea', 0, 2),
        ('sea', 1, 2),
        ('sea', 2, 2),
        ('sea', 3, 2),
        ('sea', 4, 2),
        ('sea', 5, 2),
        ('sea', 6, 2),
        ('sea', 7, 2),
        ('island', 8, 2),
        ('sea', 9, 2),
        ('sea', 10, 2),
        ('sea', 11, 2),
        ('sea', 0, 3),
        ('island', 1, 3),
        ('sea', 2, 3),
        ('sea', 3, 3),
        ('island', 4, 3),
        ('sea', 5, 3),
        ('sea', 6, 3),
        ('sea', 7, 3),
        ('sea', 8, 3),
        ('sea', 9, 3),
        ('sea', 10, 3),
        ('sea', 11, 3),
        ('sea', 0, 4),
        ('sea', 1, 4),
        ('sea', 2, 4),
        ('sea', 3, 4),
        ('sea', 4, 4),
        ('sea', 5, 4),
        ('sea', 6, 4),
        ('island', 7, 4),
        ('sea', 8, 4),
        ('sea', 9, 4),
        ('port', 10, 4),
        ('sea', 11, 4),
        ('island', 0, 5),
        ('sea', 1, 5),
        ('sea', 2, 5),
        ('sea', 3, 5),
        ('port', 4, 5),
        ('sea', 5, 5),
        ('sea', 6, 5),
        ('sea', 7, 5),
        ('sea', 8, 5),
        ('sea', 9, 5),
        ('sea', 10, 5),
        ('island', 11, 5)`
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
