import React, { Component } from "react";
import Game from './Game';
import axios from 'axios';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

class Gamelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      value: '',

    };
    this.removeItem = this.removeItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();

  }
  componentDidMount() {
    axios.get(`./games.json`)
      .then(res => {
        const games = res.data;
        this.setState({ games });
      })
  }
  //Filtrage mots-clé avec le menu déroulant
  handleChange = (event) => {
    this.setState({ value: event.target.value });

  }
  //Filtrage des mots-clé
  handleClick(tag) {
    this.setState({ value: tag });

  }
  // Supprime un jeu 
  removeItem(id) {
    let toFilter = this.state.games.filter(game => game.id !== id)
    this.setState({ games: toFilter })
    this.addNotification()
  }

  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "SUPPRESSION",
      message: "Le jeu a bien été supprimé de la liste",
      type: "success",
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2500 },
      dismissable: { click: true }
    });
  }

  render() {
    let tags = this.state.games
      .map(game => (game.theme));
    let arrTags = tags
      .reduce((arrTags, item) => {
        return arrTags
          .includes(item) ? arrTags : arrTags.concat([item]);
      }, [])

    return (
      <div>
        <div className="form-group w-50 p-5 mr-auto">
          <h3 className="mainTitle">Choix du thème :</h3>
          <select
            className="form-control w-50"
            onChange={this.handleChange}>
            <option value="">Voir tous les jeux</option>
            {arrTags
              .map((game) => (<option value={game} key={game.theme}>{game}</option>))}
          </select>
        </div>
        <div className="row mx-auto">
          <ReactNotification ref={this.notificationDOMRef} />
          {this.state.games
            .filter(game => game.theme.includes(this.state.value))
            .map((game) => (
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch">
                <Game {...game} remove={this.removeItem} onClick={this.handleClick} key={game.id} />
              </div>

            ))}
        </div>

      </div>
    );
  }
}

export default Gamelist;
