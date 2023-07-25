// Images
import matrimonialRoom from "../../images/matrimonial.jpg";
import dobleMatrimonialRoom from "../../images/habitacion_doble_matrimonial.jpg";
import matrimonialIndividualRoom from "../../images/habitacion_matrimonial_mas_individual.jpg";

// Styles
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Rooms() {
  const navegate = useNavigate();
  return (
    <section id="habitaciones">
      <h3 className="text-center my-4">Habitaciones</h3>
      <div className="d-flex flex-column align-items-center gap-5">
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <img
            src={matrimonialRoom}
            alt="Matrimonial"
            className="image-room ms-2 image"
            onClick={() => navegate("#matrimonial")}
          />
          <ul className="room-list">
            <li id="matrimotial">
              <strong className="room-title"> Habitacion Matrimonial Cuenta con:</strong>
            </li>
            <li>una cama matrimonial</li>
            <li> agua caliente</li>
            <li> TV </li>
            <li> internet </li>
            <li> aire acondicionado</li>
          </ul>
        </div>
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <img
            src={matrimonialIndividualRoom}
            alt="Matrimonial mas Individual"
            className="image-room image"
            onClick={() => navegate("#triple")}
          />
          <ul className="room-list">
            <li id="triple">
              <strong className="room-title"> Habitacion Triple Cuenta con:</strong>
            </li>
            <li>una cama matrimonial</li>
            <li> agua caliente</li>
            <li> TV </li>
            <li> internet </li>
            <li> aire acondicionado</li>
          </ul>
        </div>
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <img
            src={dobleMatrimonialRoom}
            alt="Doble Matrimonial"
            className="image-room me-2 image"
            onClick={() => navegate("#doble")}
          />
          <ul className="room-list">
            <li id="doble">
              <strong className="room-title"> Habitacion Doble Cuenta con:</strong>
            </li>
            <li>una cama matrimonial</li>
            <li> agua caliente</li>
            <li> TV </li>
            <li> internet </li>
            <li> aire acondicionado</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
