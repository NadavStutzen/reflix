import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {

  render() {
    return (
      <div className="landing">
        {this.props.users.map(u => {
          const url = `/catalog/${u.id}`;
          return (
            <Link to={url}>
              <div
                className="user-box"
                style={{ backgroundColor: u.color }}>
                {u.name}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Landing;
