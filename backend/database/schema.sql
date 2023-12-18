CREATE TABLE boat (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  coord_x INT NOT NULL,
  coord_y INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE tile (
  id INT AUTO_INCREMENT NOT NULL,
  type VARCHAR(255) NOT NULL,
  coord_x INT NOT NULL,
  coord_y INT NOT NULL,
  PRIMARY KEY(id)
);

/* 

Step 1 ✅ : ajouter le champ "has_treasure" dans la table "tile" (booléen, non nul, false par défaut).

    ALTER TABLE tile ADD has_treasure BOOLEAN DEFAULT FALSE NOT NULL;

Step 2 ✅ : créer une route GET /api/tiles (tu peux suivre le modèle de GET /api/boats).

Step 3 : 