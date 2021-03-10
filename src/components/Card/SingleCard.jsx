import React from "react";

export default ({ color, heading, value }) => {
  return (
    <div className="col-sm-12 col-md-4">
      <div
        className={`my-shadow rounded card text-white mb-3 ${color}`}
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">
          <h3>{heading}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">{value}</h5>
        </div>
      </div>
    </div>
  );
};
