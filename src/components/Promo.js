import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../style.css';
import GamePromo from "./GamePromo";

class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    }
  }
  componentDidMount() {
    fetch("http://www.campus-bordeaux.ovh:3002/joysticks/api/games")
      .then(response => response.json())
      .then(data => {
        this.setState({
          games: data,

        });
      });
  }
  render() {
    const { games } = this.state;
    const promoGame = games.filter(game => game.id == this.props.match.params.id)
    if (!games) {
      return <div />
    }
    return (

      <div className="pt-3 container-fluid">
        <div className="row mx-auto">
          <div className="col">
            <Link to={`/`}>
              <button
                type="button"
                className="btn btn-light mb-2">Retour à la liste des jeux</button>
            </Link>
            {promoGame.map((game) => <GamePromo {...game} key={game.name} />)}
          </div>

        </div>
      </div>
    );
  }
}

export default Promo;



