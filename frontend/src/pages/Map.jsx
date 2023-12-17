import { Link, useOutletContext } from "react-router-dom";

import "./Map.css";

import boatImage from "../assets/boat.png";

function Map() {
  const { boats, tiles } = useOutletContext();

  const blackPearl = boats.find((boat) => boat.name === "Black Pearl");

  return (
    <div className="container-fluid">
      <h1>Map</h1>
      <div className="row">
        <div className="col-md-10">
          <div className="map">
            {tiles.length === 0 ? (
              <div className="alert alert-warning">
                You are still on the firm ground, you have to fill the database
                first, and declare the /tiles backend route !
              </div>
            ) : (
              <div className="row">
                {tiles.map((tile) => {
                  const boatOnTile = boats.find(
                    (boat) =>
                      boat.coord_x === tile.coord_x &&
                      boat.coord_y === tile.coord_y
                  );
                  return (
                    <div className={`tile col-1 ${tile.type}`} key={tile.id}>
                      <div className="tile-name">{tile.name}</div>
                      <div className="tile-name coords">
                        {tile.coord_x},{tile.coord_y}
                      </div>
                      {boatOnTile && (
                        <img
                          className="boat img-fluid"
                          src={boatImage}
                          alt={boatOnTile.name}
                          title={boatOnTile.name}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-2">
          <div className="infos">
            <h2>Information</h2>
            {blackPearl && (
              <dl>
                <dt>x</dt>
                <dl>{blackPearl.coord_x}</dl>
                <dt>y</dt>
                <dl>{blackPearl.coord_y}</dl>
                <dt>type</dt>
                <dl>{blackPearl.type}</dl>
                <dt>has treasure?</dt>
                <dl>{blackPearl.has_treasure}</dl>
              </dl>
            )}
          </div>
          <div className="navigation">
            <h2>Navigation</h2>
            {blackPearl && (
              <>
                <Link
                  to={`/boats/${blackPearl.id}/move/${blackPearl.coord_x}/${
                    blackPearl.coord_y - 1
                  }`}
                  className="north"
                >
                  N
                </Link>
                <Link
                  to={`/boats/${blackPearl.id}/move/${blackPearl.coord_x}/${
                    blackPearl.coord_y + 1
                  }`}
                  className="south"
                >
                  S
                </Link>
                <Link
                  to={`/boats/${blackPearl.id}/move/${blackPearl.coord_x + 1}/${
                    blackPearl.coord_y
                  }`}
                  className="east"
                >
                  E
                </Link>
                <Link
                  to={`/boats/${blackPearl.id}/move/${blackPearl.coord_x - 1}/${
                    blackPearl.coord_y
                  }`}
                  className="west"
                >
                  W
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
