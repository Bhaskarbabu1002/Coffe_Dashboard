import React from 'react'
import Logo from "./logo192.png";
const PreHeader = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg">
         <div className="navbar-brand text-white" href="#">
        <img src={Logo} width={30} height={30} className="d-inline-block align-top" alt="" />
        CoffeWeb
      </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default PreHeader