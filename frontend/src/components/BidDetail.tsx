import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Bid, Status } from "../models/itypes";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type AppProps = { bid: Bid };
const BidDetail = ({ bid }: AppProps) => {
  return (
    <Card sx={{ borderRadius: 0, display: "flex", width: 1350, mt: 4 }}>
      <CardMedia
        sx={{ height: 400, minWidth: 320 }}
        image={require("./item.jpg")}
      ></CardMedia>
      <CardContent sx={{ margin: 1, display: "flex", minWidth: 320 }}>
        <div>
          <h3>Job detail</h3>
          <p>
            <b>Making: </b>
            {bid.job?.making}
          </p>
          <p>
            <b>Budget: </b>
            {bid.job?.budget}
          </p>

          <p style={{ textAlign: "justify", lineHeight: 1.2 }}>
            <b>Description:</b> {bid.job?.description}
          </p>
          <p>
            <b>Size:</b> {bid.job?.size}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <b>Colors:</b>
            {bid.job?.colors.map((color) => (
              <div className="color-container">
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
              <b>Description:</b> {bid.description}
            </p>
          </div>
          <FormControl fullWidth sx={{display:'flex', gap:3, mt:3}}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              defaultValue={
                Object.keys(Status)[Object.values(Status).indexOf(bid.status)]
              }
            >
              {Object.keys(Status).map((key) => (
                <MenuItem value={key}>
                  {Status[key as keyof typeof Status]}
                </MenuItem>
              ))}
            </Select>
            <button className="primary-button">Change status</button>
          </FormControl>
         
        </Box>
      </CardContent>
    </Card>
  );
};

export default BidDetail;
