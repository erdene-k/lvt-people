import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { Job, Cloth } from "../models/itypes";
import JobModal from "./JobModal";
type AppProps = { job: Job };

const JobCard = ({ job }: AppProps) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Card raised={true}>
      <CardMedia sx={{ height: 300, width: 300 }} image={require("./item.jpg")}>
        <div
          style={{ display: "flex", justifyContent: "flex-end", padding: 10 }}
        >
          <FavoriteBorderIcon />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            height: "82%",
          }}
        >
          <button onClick={() => setOpen(true)}>See More</button>
        </div>
      </CardMedia>
      <CardContent>
        <strong>{job.making}</strong>
        <p>{job.budget}$ </p>
        <div style={{ display: "flex", gap: 10 }}>
          {job.colors.map((color) => (
            <div className="color-container">
              <div
                className="color-content"
                style={{ backgroundColor: color, width: "100%", margin: 3 }}
              ></div>
            </div>
          ))}
        </div>
      </CardContent>
      <JobModal data={job} handleClose={handleClose} modalVisible={open} />
    </Card>
  );
};

export default JobCard;
