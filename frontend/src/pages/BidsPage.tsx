import React, { useState } from "react";
import { Bid } from "../models/itypes";
import { Cloth, Status } from "../models/itypes";
import BidDetail from "../components/BidDetail";
import AssignmentIcon from '@mui/icons-material/Assignment';
const BidsPage = () => {
  const [bids, setBids] = useState<Bid[]>([
    {
      id: 1,
      description: "handmade",
      price: 20,
      status: Status.READY,
      job: {
        id: 1,
        type: Cloth.SKIRT,
        numOfQuotations: 2,
        location: "Sydney",
        typesOfMaking: "handmade",
        making: "handmade",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
        budget: 20,
        colors: ["red", "green"],
        size: "XL",
        bids:[]
      },
    },
    {
      id: 2,
      description: "handmade",
      price: 20,
      status: Status.PENDING,
      job: {
        id: 1,
        type: Cloth.SKIRT,
        numOfQuotations: 2,
        location: "Sydney",
        typesOfMaking: "handmade",
        making: "handmade",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
        budget: 20,
        colors: ["red", "green"],
        size: "XL",
        bids:[]
      },
    },
  ]);

  return (
    <div >
     <h1>My bids <AssignmentIcon sx={{width:60, height:60}}/></h1>
      {bids.map((bid) => (
        <div key={bid.id} className="bids">
          <BidDetail bid={bid} />
        </div>
      ))}
    </div>
  );
};

export default BidsPage;
