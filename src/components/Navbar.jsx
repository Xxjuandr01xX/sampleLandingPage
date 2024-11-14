import React, { useEffect } from "react";
import logo from "../logo.svg";
import { Fade } from "react-reveal";

export const Navbar = ({ options }) => {
  useEffect(() => {}, []);

  return (
    <div className="row clearfix d-flex justify-content-center border-bottom border-primary shadow">
      <div className="col-md-2 col-sm-1">
        <img src={logo} alt="" width={100} height={80} className="img-fluid" />
      </div>
      <div className="col-md-2 col-sm-2 display-start">
        <a href="#" className="btn btn-primary p-2 rounded-pill shadow mt-2 ">
          <i class="bi bi-send-check-fill"></i> Contactanos
        </a>
      </div>
      <div className="col-md-4">
        <Fade>
          <nav className="navbar mt-2">
            {options &&
              options.map((obj) => (
                <li className="nav-link text-dark">
                  <a href="#" className="nav-link">
                    {obj}
                  </a>
                </li>
              ))}
          </nav>
        </Fade>
      </div>

      <div className="col-md-2 col-sm-2 display-end">
        <a href="#" className="btn btn-primary p-2 rounded-pill shadow mt-2 ">
          <i class="bi bi-send-check-fill"></i> Contactanos
        </a>
      </div>
    </div>
  );
};
