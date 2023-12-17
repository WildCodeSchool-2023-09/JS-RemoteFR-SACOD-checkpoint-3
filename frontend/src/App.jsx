import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

import api from "./services/api";

function App() {
  const [boats, setBoats] = useState([]);
  const [tiles, setTiles] = useState([]);

  const reloadTiles = () =>
    api.get("/api/tiles").then((response) => {
      setTiles(response.data);
    });

  const reloadBoats = () =>
    api.get("/api/boats?name=Black Pearl").then((response) => {
      setBoats(response.data);

      const blackPearl = response.data.find(
        (boat) => boat.name === "Black Pearl"
      );

      if (blackPearl?.has_treasure) {
        alert("Not All Treasure Is Silver And Gold, Mate.");
      }
    });

  useEffect(() => {
    reloadTiles();
    reloadBoats();
  }, []);

  return (
    <>
      <header>
        <NavBar onStart={reloadBoats} />
      </header>
      <main className="App">
        <Outlet context={{ boats, reloadBoats, tiles }} />
      </main>
    </>
  );
}

export default App;
