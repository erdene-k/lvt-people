import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Job } from "../models/itypes";
import PublicIcon from "@mui/icons-material/Public";
import { CircularProgress, IconButton,Snackbar, TextField } from "@mui/material";
import { API } from "../services/service";
import CloseIcon from '@mui/icons-material/Close';
import { GetLocalStorageData } from "../hooks/useLocalStorage";


type AppProps = { data: Job; modalVisible: boolean; handleClose: () => void };
const JobModal = ({ data, modalVisible, handleClose }: AppProps) => {
  const [isClicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false)
  const user = GetLocalStorageData("sst_exd");
  const postBid = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const eventData = new FormData(event.currentTarget);
    const postData ={
      job_id:data.id,
      user_id:user.id,
      price: eventData.get('price'),
      description: eventData.get('description'),
      status:'Pending'
    }
    await API("POST", `/bids`, postData)
      .then((res: any) => {
        console.log(res);
        if (res.status === 201) {     
          setSnackOpen(true) 
          setTimeout(() => {
            handleClose()
          }, 2000);
         
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Modal
      open={modalVisible}

    >
      <Box sx={modalStyle} >
      {loading && <CircularProgress size={120} sx={spinSx} />}
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Successful"
        action={ <React.Fragment>
  
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>}
        
      />
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
            <p className="col-item"> {data.num_of_quotations}</p>
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
          <Box sx={bidStyle} component="form" onSubmit={postBid}>
            <TextField
              id="outlined-adornment-amount"
              label="Price"
              name="price"
              required
              autoFocus
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Propose"
              name="description"
              required
              variant="outlined"
              rows={5}
              multiline
              fullWidth
            />
            <button type="submit" className="primary-button">BID</button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default JobModal;
const style = {
  width: { xs:300, sm: 350, lg: 400},
  bgcolor: "#f9f9f9",
  border: "0.1px rgba(50,155,155,0.1) solid",
  borderRadius: 5,
  mb:2,

};
const bidStyle = {
  width:{ xs:300, sm: 350, lg: 400},
  bgcolor: "#f0f0f0",
  border: "0.1px rgba(50,155,155,0.1) solid",
  display: "flex",
  flexDirection: "column",
  justifyContent: " space-between",
  gap:2,
  mb:2
};
const modalStyle = {
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
const spinSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-60px",
  marginLeft: "-60px",
  zIndex: 222,
  color: "#023047",
};
