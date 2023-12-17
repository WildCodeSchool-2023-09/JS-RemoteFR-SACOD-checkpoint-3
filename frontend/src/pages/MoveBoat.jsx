import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

import api from "../services/api";
import Map from "./Map";

function MoveBoat() {
  const navigate = useNavigate();
  const { id, x, y } = useParams();
  const { reloadBoats } = useOutletContext();

  useEffect(() => {
    const coords = {
      coord_x: parseInt(x, 10),
      coord_y: parseInt(y, 10),
    };

    api
      .put(`/api/boats/${id}`, coords)
      .then((response) => {
        if (response.status === 204) {
          reloadBoats();
        }
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        navigate("/");
      });
  }, [x, y]);

  return <Map />;
}

export default MoveBoat;
