import React from "react";
import { Link } from "react-router-dom";

function Card({ value, index }) {
  return (
    <div className="p-2">
      <h3 className="display-4 text-muted" style={{ fontSize: "15px" }}>
        {value.bodyType}
      </h3>
      <h1 className="display-4" style={{ fontSize: "20px" }}>
        {value.modelName}
      </h1>
      <img src={value.imageUrl} alt="Loading" height="200px" width="300px" />
      <div className="d-flex justify-content-evenly mt-2">
        <div>
          <Link to="learn" className="text-d">
            <p>
              Learn{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </p>
          </Link>
        </div>
        <div>
          <Link to="shop" className="text-d">
            <p>Shop <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg></p>
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
