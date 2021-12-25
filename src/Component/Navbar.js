import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown } from "react-bootstrap";
import logo from "../Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white ">
      <div className="container">
        <img src={logo} alt="" width="80" height="80" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff" }}
          ></FontAwesomeIcon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Locate Store
              </a>
            </li>

            <li className="nav-item">
              <Dropdown className="drop">
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  data-bs-toggle="dropdown"
                  style={{ color: "#ffffff" }}
                >
                  Scooters
                </Dropdown.Toggle>

                <Dropdown.Menu className="d-menu ">
                  <Dropdown.Item className="d-item " href="#/action-1">
                    HRX350 Bike
                  </Dropdown.Item>
                  <Dropdown.Item className="d-item " href="#/action-2">
                    GEAR350 EB
                  </Dropdown.Item>
                  <Dropdown.Item className="d-item " href="#/action-3">
                    RX - AK290 EB
                  </Dropdown.Item>
                  <Dropdown.Item className="d-item " href="#/action-3">
                    GBM -Heavy
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Purchase Assistance
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" href="#">
                Dealership
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
