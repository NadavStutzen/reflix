import React, { Component } from "react";

class MovieDetail extends Component {
  render() {
    const movieName = this.props.match.params.title;
    const movie = this.props.movies.find(m => m.title === movieName);
    return (
      <div className="detailed">
        <div>
          {movie.title} <br /> Released : {movie.year}
        </div>
        <img src={movie.img} alt="" />
        <div>{movie.descrShort}</div>
      </div>
    );
  }
}
export default MovieDetail;
