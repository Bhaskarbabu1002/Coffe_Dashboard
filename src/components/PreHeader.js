import React from 'react'
import Logo from "../Icons/CoffeeWeb_Logo.png";
import SIcon from "../Icons/S_Icon.png";
import Notification from "../Icons/Notification_Icon.png";
import PowerIcon from "../Icons/Power_Icon.png";
import "./PreHeader.css";
import CountrySelection from './CountrySelection';
const PreHeader = () => {
  return (
    <div className='pre_header'>
         <nav className="navbar navbar-expand-lg">
         <div className="navbar-brand text-white font-weight-bold" href="#">
        <img src={Logo} className="d-inline-block align-top" alt="" />
      </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
              <a className="nav-link" href="#">
                <CountrySelection/>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <img src={SIcon} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <img src={Notification} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <img src={PowerIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default PreHeader