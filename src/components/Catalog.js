import React, { Component } from "react";
import Movie from "./Movie";
import { FaFilter } from "react-icons/fa";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const user = this.props.users[this.props.match.match.params.id];
    let rented = user.movies.filter(m => m.isRented);
    let unRented = user.movies.filter(m => !m.isRented);
    if (this.state.value.length > 0) {
      const releventMovies = user.movies.filter(m =>
        m.title.toLowerCase().includes(this.state.value)
      );
      rented = releventMovies.filter(m => m.isRented);
      unRented = releventMovies.filter(m => !m.isRented);
    }
    return (
      <div className="catalog">
        <div className="input"></div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <FaFilter /> Budget: {user.budget} $
        <div className="rented">
          {rented.map(r => {
            return (
              <Movie
                movie={r}
                key={r.id}
                changeRent={this.props.changeRent}
                user={user}
              />
            );
          })}
        </div>
        <hr />
        <div className="unrented">
          {unRented.map(m => {
            return (
              <Movie
                movie={m}
                key={m.id}
                changeRent={this.props.changeRent}
                user={user}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Catalog;
