import React from 'react'
import './index.css'
import { Link } from "react-router-dom";
// import { FaHospitalAlt } from "react-icons/fa";

function index() {
  return (
    <header>
      <div class="header-extendBar-button"><img src="https://img.icons8.com/ios-filled/50/000000/menu-rounded.png"/></div>
      <Link to="/"><div class="header-logo" ><img alt="Logo do site" src="https://www.cmh.org/sites/default/files/CMH%20logo_0.png"/></div></Link>
      {/* <FaHospitalAlt size="3rem"/> */}

      <nav>
        <ul class="header-list">
          <li class="header-list-item"><Link class="list-item-link" to="/pacientes">Pacientes</Link></li>
          <li class="header-list-item"><Link class="list-item-link" to="/colabores">Colaboradores</Link></li>
          <li class="header-list-item"><Link class="list-item-link" to="/sobre">Sobre</Link></li>
        </ul>
      </nav>

      <nav class="header-button">
        <button class="header-button-item"><Link to="">Para médicos</Link></button>
        <button class="header-button-item"><Link to="">Para pacientes</Link></button>
      </nav>
    </header>
  )
}

export default index