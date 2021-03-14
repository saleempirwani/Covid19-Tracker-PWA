import React from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/react-activity.css";
import SingleCard from "./SingleCard";

const Card = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed)
    return (
      <div className="text-center mt-5">
      
        <Spinner color="#000" size={20} speed={0.5} />
      </div>
    );

  return (
    <div className="row m-0 my-5 text-center">
      <SingleCard color="bg-info" heading="Cases" value={confirmed} />
      <SingleCard color="bg-success" heading="Recovered" value={recovered} />
      <SingleCard color="bg-danger" heading="Death" value={deaths} />
    </div>
  );
};

export default Card;
