import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const UserCard = ({ username, picture }) => {
  return (
    <div className="card mx-auto" style={{ width: "18rem" }}>
      <img
        src={picture}
        className="card-img-top rounded-circle mt-3 mx-auto"
        alt={`${username}'s profile`}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{username}</h5>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

UserCard.defaultProps = {
  picture: "https://via.placeholder.com/150", // Imagen por defecto si no se proporciona una
};

export default UserCard;
