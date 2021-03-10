import React from "react";
import SingleCard from "./SingleCard";

const Card = ({ data: { confirmed, recovered, deaths } }) => {

  if (!confirmed) return "Loading...";

  return (
    <div className="row m-0 my-5 text-center">
      <SingleCard color="bg-info" heading="Cases" value={confirmed} />
      <SingleCard color="bg-success" heading="Recovered" value={recovered} />
      <SingleCard color="bg-danger" heading="Death" value={deaths} />
    </div>
  );
};

export default Card;
