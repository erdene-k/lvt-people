import React, { useEffect, useState } from "react";
import { Bid } from "../models/itypes";
import BidDetail from "../components/BidDetail";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { GetLocalStorageData } from "../hooks/useLocalStorage";
import { API } from "../services/service";
import { CircularProgress } from "@mui/material";
const BidsPage = () => {
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(false);
  const user = GetLocalStorageData("sst_exd");
  const fetchData = async () => {
    setLoading(true);
    await API("GET", `/bids/${user.id}`)
      .then((res: any) => {
        if (res.status === 200) {
          setBids(res.data as Bid[]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ margin: 10 }}>
      {loading && <CircularProgress size={120} sx={spinSx}/>}
      <h1>
        My bids <AssignmentIcon sx={{ width: 60, height: 60 }} />
      </h1>
      {bids.map((bid) => (
        <div key={bid.id} className="bids">
          <BidDetail bid={bid} fetchData={fetchData} />
        </div>
      ))}
      {bids.length == 0 && (
        <div>
          <p>No bid found.</p>
        </div>
      )}
    </div>
  );
};

export default BidsPage;
const spinSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-60px",
  marginLeft: "-60px",
  zIndex: 222,
  color: "#023047",
};
