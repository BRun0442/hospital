import React from 'react'
import './index.css'
import { Link } from "react-router-dom";
// import { FaHospitalAlt } from "react-icons/fa";

function index() {
  return (
    <header>
      <div className="header-extendBar-button"><img src="https://img.icons8.com/ios-filled/50/000000/menu-rounded.png"/></div>
      <Link to="/"><div className="header-logo" ><img alt="Logo do site" src="https://www.cmh.org/sites/default/files/CMH%20logo_0.png"/></div></Link>

      <nav>
        <ul className="header-list">
          <li className="header-list-item"><Link className="list-item-link" to="/pacientes">Pacientes</Link></li>
          <li className="header-list-item"><Link className="list-item-link" to="/colaboradores">Colaboradores</Link></li>
          <li className="header-list-item"><Link className="list-item-link" to="/sobre">Sobre</Link></li>
        </ul>
      </nav>

      <nav className="header-button">
        <button className="header-button-item"><Link to="/paraMedicos">Para médicos</Link></button>
        <button className="header-button-item"><Link to="/paraPacientes">Para pacientes</Link></button>
      </nav>
    </header>
  )
}

export default index