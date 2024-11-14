import React from "react";
import workgroup from "../workgroupphoto.png";
import { Zoom } from "react-reveal";

export const Outstanding = () => {
  return (
    <div className="row clearfix d-flex justify-content-center p-1 mt-5">
      <div className="col-md-9">
        <Zoom>
          <div className="card mb-3 rounded-0 shadow">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={workgroup}
                  alt="..."
                  className="img-fluid rounded-0"
                />
              </div>

              <div className="col-md-6 ">
                <div className="card-body p-3 text-center">
                  <h4 className="h4 text-center text-body-primary mt-3 mb-3">
                    <b>
                      Trabajamos Incanzablemente para Alcanzar los Objetivos
                    </b>
                  </h4>

                  <p className="mt-2 mb-2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem reprehenderit similique molestias voluptatem
                    ullam quasi totam assumenda recusandae iure, adipisci id
                    odit, iusto modi velit sed laudantium debitis consequuntur
                    vero?
                  </p>

                  <div className="row clearfix mt-2 mb-2 d-flex justify-content-center">
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-primary rounded-0 p-2 shadow mt-3 mb-3 w-100"
                      >
                        <i class="bi bi-eye-fill"></i>
                        Seguir Leyendo
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-secondary rounded-0 p-2 shadow mt-3 mb-3 w-100"
                      >
                        <i class="bi bi-eye-fill"></i>
                        Dejar de Mirar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};
