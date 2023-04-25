import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Bid, statuses } from "../models/itypes";
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { API } from "../services/service";

type AppProps = { bid: Bid, fetchData: () => void; };
const BidDetail = ({ bid, fetchData }: AppProps) => {
  const imgUrl = bid.job?.images? `${process.env.REACT_APP_SERVER_URL}/uploads/${bid.job?.images[0]}` : '/item.jpg'
  const [curBid, setCurBid] = useState(bid)
  const [loading, setLoading] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    if(event.target.value!='Confirmed')
    {const tmp = {...curBid}
    tmp.status = event.target.value 
    setCurBid(tmp)}
  };
  const onChangeStatus =  async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const eventData = new FormData(event.currentTarget);
    await API("PUT", `/bids/${bid.id}/changeStatus`,{status:eventData.get('status')}).then(res=>{
      fetchData()
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }
  return (
    <Card sx={{ borderRadius: 0, display: {xs: 'block', sm: 'flex'}, width: 1350, mt: 4 }}>
      <CardMedia
        sx={{ height: 400, minWidth: 320 }}
        image={imgUrl}
      ></CardMedia>
      <CardContent sx={{ margin: 1, display: {xs: 'block', sm: 'flex'},width:1000,justifyContent:'space-between' }}>
      {loading && <CircularProgress size={120} sx={spinSx} />}
        <div>
          <h3>Job detail</h3>
          <p>
            <b>Making: </b>
            {curBid.job?.making}
          </p>
          <p>
            <b>Budget: </b>
            {curBid.job?.budget}
          </p>

          <p style={{ textAlign: "justify", lineHeight: 1.2 }}>
            <b>Description:</b> {curBid.job?.description}
          </p>
          <p>
            <b>Size:</b> {curBid.job?.size}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <b>Colors:</b>
            {curBid.job?.colors.map((color, key) => (
              <div className="color-container" key={key}>
                <div
                  className="color-content"
                  style={{ backgroundColor: color, width: "100%", margin: 3 }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <Box
          component="form"
          onSubmit={onChangeStatus}
          sx={{
            ml: 5,
            minWidth: 400,
            maxWidth: 400,
          }}
        >
          <h3>My propose</h3>
          <div>
            <p>&nbsp;</p>
            <p>
              <b>Price:</b> {bid.price}$
            </p>
            <p style={{ textAlign: "justify", lineHeight: 1.2 }}>
              <b>Description:</b> {curBid.description}
            </p>
          </div>
          <FormControl fullWidth sx={{display:'flex', gap:3, mt:3}}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              name="status"
              value={curBid.status}
              onChange={handleChange}
            >
              {statuses.map((stat, key) => (
                <MenuItem value={stat} key={key}>
                {stat}
                </MenuItem>
              ))}
            </Select>
            <button className="primary-button" type="submit">Change status</button>
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BidDetail;
const spinSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-60px",
  marginLeft: "-60px",
  zIndex:222,
  color:'#023047'
};
