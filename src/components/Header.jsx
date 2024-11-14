import React from "react";
import man1 from "../man1.png";
import { Zoom } from "react-reveal";

export const Header = () => {
  return (
    <div className="row clearfix  d-flex justify-content-center bg-geometry">
      <Zoom>
        <div className="col-md-3">
          <h2 className="text-white text-center mt-5">
            <i class="bi bi-briefcase-fill mb-2 mt-2"></i>
            <b>
              <hr />
            </b>
            <b>C</b>reamos los Servicios para tu <b>N</b>egocio
          </h2>
          <b className="text-center text-white">
            <hr />
          </b>
          <p className="text-center text-white mt-3">
            Optimiza el tiempo de respuesta de tus actividades y alcanza pasa al
            siguiente nivel
          </p>

          <form action="#" className="input-group shadow mt-5">
            <label htmlFor="" className="input-group-text">
              <span className="bi bi-envelope"></span>
            </label>
            <input
              type="email"
              name=""
              id=""
              className="form-control rounded-0"
              placeholder="Email @"
            />
            <button
              type="submit"
              className="btn btn-primary rounded-0 p-1 shadow"
            >
              <span className="bi bi-send-check-fill"></span> Enviar
            </button>
          </form>
        </div>
        <div className="col-md-3">
          <img src={man1} alt="business_man" className="img-fluid" />
        </div>
      </Zoom>
    </div>
  );
};
