import React from "react";
import photo from "../photo2.jpg";

export const Skills = () => {
  const styleProgress = { width: 300 };

  return (
    <div className="row clearfix d-flex justify-content-center mt-5 mb-5 border border-0">
      <div className="col-md-12">
        <div className="card w-100 rounded-0 border border-0">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={photo}
                alt="Img-skill"
                className="img-fluid"
                width={700}
                height={700}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body bg-light p-5">
                <p className="text-justify mt-3 mb-3">
                  <h5 className="text-primary ml-5">Nosotros</h5>

                  <h3 className="text-center mt-3 mb-3">
                    Nuestro Equipo esta Cohesionado y Listo
                  </h3>

                  <p className="text-secondary text-justify p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate exercitationem animi repellendus mollitia
                    voluptatum minima, unde non beatae ab delectus voluptas
                    laboriosam labore vel consequuntur natus. Praesentium
                    facilis veritatis repudiandae.
                  </p>
                </p>

                <div class="progress mt-4 mb-4">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Segment one"
                    style={styleProgress}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <div class="progress mt-4 mb-4">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Segment one"
                    style={styleProgress}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <div class="progress mt-4 mb-4">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Segment one"
                    style={styleProgress}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
