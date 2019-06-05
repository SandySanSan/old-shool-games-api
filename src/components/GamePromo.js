import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import './game.css';

const GamePromo = ({ name, promo, date, trailer, description, image1, image2, theme }) => {
  return (
    <Fragment>

      <div className="container bg-light mt-2">

        <div className="p-2">

          <div>
            <img
              src={promo}
              alt={name}
              className="img-thumbnail mr-auto" />
          </div>
        </div>
        <div className="row d-flex align-item-center p-2">

          <div className="col-md-4">
            <div className="pb-3">
              <ReactPlayer
                url={trailer}
                width='100%'
              />
            </div>
            <div className="pb-3">
              <img
                src={image1}
                alt={name}
                className="img-thumbnail mr-auto" />
            </div>
            <div>
              <img
                src={image2}
                alt={name}
                className="img-thumbnail mr-auto" />
            </div>
          </div>
          <div className="col-md-8 p-5">
            <span class="badge badge-pill badge-success">{theme}</span>
            <h1
              className="p-2 mainTitle text-uppercase">
              {name}
            </h1>
            <p><small className="text-muted">Date de sortie : {date.slice(0, 10)}</small></p>
            <h5>{description}</h5>

          </div>
        </div>

      </div>
    </Fragment >
  );
}

export default GamePromo;