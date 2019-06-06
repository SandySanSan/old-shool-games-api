import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../style.css';
import './game.css';

const Game = ({ name, pochette, description, date, theme, id, remove, onClick }) => (
  <Fragment>
    <div className="card mb-4 shadow-sm bg-light">
      <div className="row no-gutters">
        <div className="col-md-4">

          <img src={pochette} className="card-img" alt={name} />


        </div>
        <div className="col-md-8">
          <div className="card-body p-4">
            <button
              type="button"
              className="btn btn-warning card-img-overlay mb-5 ml-auto"
              style={{ width: 40, height: 40, padding: 0 }}
              onClick={() => remove(id)}
            > X </button>
            {/* //tags */}
            <div
              className="badge badge-pill badge-success mr-1 mb-2"
              type="button"
              onClick={() => onClick(theme)}>
              {theme}
            </div>
            <h3 className="card-title text-uppercase mainTitle">{name}</h3>
            <p className="card-text"><small className="text-muted">Date de sortie : {date.slice(0, 10)}</small></p>
            <p className="card-text">{description.split(" ", 35).join(" ")} ... </p>
            <div>
              <Link to={`/jeu/promo/${id}`}>
                <button
                  type="button"
                  className="btn btn-outline-info">
                  Lire la suite
          </button>
              </Link></div>


          </div>
        </div>
      </div>
    </div>
  </Fragment>

)

export default Game;