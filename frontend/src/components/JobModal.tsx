import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Job } from "../models/itypes";
import PublicIcon from "@mui/icons-material/Public";
import { InputAdornment, TextField } from "@mui/material";
type AppProps = { data: Job; modalVisible: boolean; handleClose: () => void };
const JobModal = ({ data, modalVisible, handleClose }: AppProps) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <Modal
      open={modalVisible}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style1}>
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <h2 style={{ color: "#212529" }}>{data.type}</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ color: "#495057" }}>{data.location}</h4>
              <PublicIcon color="action" />
            </div>
          </div>
          <div className="grid-info">
            <p className="col-name">Size</p>
            <p className="col-name"> Quotation count</p>
            <p className="col-name">Budget</p>
            <p className="col-item"> {data.size}</p>
            <p className="col-item"> {data.numOfQuotations}</p>
            <p className="col-item">{data.budget}$</p>
          </div>
          <p className="description-text"> {data.description}</p>
          <button
            className="secondary-button"
            onClick={() => setClicked(!isClicked)}
          >
            {isClicked ? "Cancel" : "Bid"}
          </button>
        </Box>
        {isClicked && (
          <Box sx={bidStyle} component="form">
            <TextField
              id="outlined-adornment-amount"
              label="Price"
              required
              autoFocus
              inputProps={{
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Propose"
              required
              variant="outlined"
              rows={5}
              multiline
            />
            <button className="primary-button">BID</button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default JobModal;
const style = {
  width: {sm: 300, lg: 400},
  bgcolor: "#f9f9f9",
  border: "0.1px rgba(50,155,155,0.1) solid",
  borderRadius: 5,
  mb:2
};
const bidStyle = {
  width: {sm: 300, lg: 400},
  bgcolor: "#f0f0f0",
  border: "0.1px rgba(50,155,155,0.1) solid",
  display: "flex",
  flexDirection: "column",
  justifyContent: " space-between",
  mb:2
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  bgcolor: "#f9f9f9",
  borderRadius: 6,
  boxShadow: 1,
  p: 4,
  height: "max-content",
  display: {sm: 'block', lg: 'flex'},
  gap: 5,
};
