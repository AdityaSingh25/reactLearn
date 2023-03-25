import React from "react";

const Card = ({ title = "Raghav", buttonText = "Shubh", image = "Image" }) => {
  return (
    <div>
      <div className="col-4">
        <div className="card" style={{ width: "15rem", marginBottom: "20px" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-success">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
