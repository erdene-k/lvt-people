import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Bid, Status } from "../models/itypes";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type AppProps = { bid: Bid };
const BidDetail = ({ bid }: AppProps) => {
  return (
    <Card sx={{ borderRadius: 0, display: "flex", width: 1250, mt: 3 }}>
      <CardMedia
        sx={{ height: 350, minWidth: 300 }}
        image={require("./item.jpg")}
      ></CardMedia>
      <CardContent sx={{ margin: 1, display: "flex" }}>
        <div>
          <h3> {bid.job.making}</h3>
          <p>
            <b>Price:</b> {bid.price}
          </p>
          <p>
            <b>Size:</b> {bid.job.size}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <b>Colors:</b>
            {bid.job.colors.map((color) => (
              <div className="color-container">
                <div
                  className="color-content"
                  style={{ backgroundColor: color, width: "100%", margin: 3 }}
                ></div>
              </div>
            ))}
          </div>
          <p>
            <b>Description:</b> {bid.job.description}
          </p>
        </div>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <FormControl fullWidth sx={{ width: 400 }}>
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
          </FormControl>
          <button className="primary-button">Change status</button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BidDetail;
