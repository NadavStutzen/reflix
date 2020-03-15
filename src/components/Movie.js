import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline
} from "react-icons/io";

class Movie extends Component {
  changeRent = () => {
    this.props.changeRent(this.props.movie.id, this.props.user.id);
  };
  render() {
    const movie = this.props.movie;
    console.log(movie);
    const image = movie.img;
    const linkUrl = `/movies/${movie.title}`;
    const sectionStyle = {
      backgroundImage: `url(${image} )`
    };
    return (
      <div className="movie">
        <span onClick={this.changeRent}>
          {movie.isRented ? (
            <IoIosRemoveCircleOutline />
          ) : (
            <IoIosAddCircleOutline />
          )}
        </span>
        <br />
        <Link to={{ pathname: linkUrl }}>
          <img src={image} alt="" />
        </Link>
      </div>
    );
  }
}
export default Movie;
