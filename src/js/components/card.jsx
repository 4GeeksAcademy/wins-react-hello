import React from "react";

const Card = ({ title, description, buttonLabel }) => {
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img
        src="https://via.placeholder.com/500x325"
        className="card-img-top"
        alt="Placeholder"
        style={{ height: "325px", objectFit: "cover" }}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;