import React, { useState } from "react";
import { Bid } from "../models/itypes";
import { Cloth, Status } from "../models/itypes";
import BidDetail from "../components/BidDetail";
import AssignmentIcon from '@mui/icons-material/Assignment';
const BidsPage = () => {
  const [bids, setBids] = useState<Bid[]>([ ]);

  return (
    <div style={{margin:10}}>
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
