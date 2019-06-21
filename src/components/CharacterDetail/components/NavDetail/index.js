import React from 'react';
import { Link } from 'react-router-dom';

const NavDetail = ({ id, title }) => {
  return(
    <div className="nav__detail--wrapper">
      <h1>{title}</h1>
      <nav>
        <ol>
          <li>Estás viendo al personaje número {id}</li>
          <li>
            <Link className="nav__detail--back" to="/">
              Volver
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default NavDetail;