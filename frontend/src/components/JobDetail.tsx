import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Job } from "../models/itypes";
import { Box, CircularProgress, FormControl, TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { API } from "../services/service";
type AppProps = { job: Job; fetchData: () => void };
const JobDetail = ({ job, fetchData }: AppProps) => {
  const [checked, setChecked] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleToggle = (value: number) => () => {
    setChecked(value);
  };
  const imgUrl = job.images? `${process.env.REACT_APP_SERVER_URL}/uploads/${job.images[0]}` : '/item.jpg'
  const onChoose = async () => {
    if(loading) return
    setLoading(true);
    await API("PUT", `/jobs/${job.id}/acceptBid`, { bidId: checked })
      .catch((error) => {
        fetchData();
      })
      .finally(() => setLoading(false));
  };
  const onConfirm = async () => {
    if(loading) return
    setLoading(true);
    await API("PUT", `/bids/${job.id}/confirmBid`)
      .catch((error) => {
        fetchData();
      })
      .finally(() => setLoading(false));
  };
  return (
    <Card
      sx={{
        borderRadius: 0,
        display: { xs: "block", sm: "flex" },
        width: 1250,
        mt: 3,
        mb: 3,
      }}
    >
      {loading && <CircularProgress size={120} sx={spinSx} />}
      <CardMedia
        sx={{ height: 300, minWidth: 250 }}
        image={imgUrl}
      ></CardMedia>
      <CardContent
        sx={{ display: "flex", justifyContent: "space-between", width: 1000 }}
      >
        <div>
          <h3> {job.making}</h3>
          {job.accepted_bid ? (
            <p>
              <b style={{ color: "green" }}>Price:</b>{" "}
              {
                job.bids.find((element) => element.id === job.accepted_bid)
                  ?.price
              }
              $
            </p>
          ) : (
            <p>
              <b>Budget:</b> {job.budget}$
            </p>
          )}
          <p>
            <b>Size:</b> {job.size}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <b>Colors:</b>
            {job.colors &&
              job.colors.map((color, key) => (
                <div className="color-container" key={key}>
                  <div
                    className="color-content"
                    style={{ backgroundColor: color, width: "100%", margin: 3 }}
                  ></div>
                </div>
              ))}
          </div>
          <p className="">
            <b>Description:</b> {job.description}
          </p>
        </div>
        {job.accepted_bid ? (
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <FormControl fullWidth sx={{ width: 400, color: "#64aeb9" }}>
              <TextField
                disabled
                value={
                  job.bids.find((element) => element.id === job.accepted_bid)
                    ?.status
                }
              >
                {
                  job.bids.find((element) => element.id === job.accepted_bid)
                    ?.status
                }
              </TextField>
              <p>
                <b>Propose description:</b>{" "}
                {
                  job.bids.find((element) => element.id === job.accepted_bid)
                    ?.description
                }
              </p>
            </FormControl>
            {job.bids.find((element) => element.id === job.accepted_bid)
              ?.status == "Ready" && (
              <button
                className="secondary-button"
                style={{
                  color: "#023047",
                }}
                onClick={onConfirm}
              >
                Confirm
              </button>
            )}
          </Box>
        ) : (
          <Box
            component="form"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <FormControl fullWidth sx={{ width: 400, color: "#64aeb9" }}>
              <h3>Bids you have received</h3>
              <List
                dense
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {job.bids &&
                  job.bids.map((bid) => {
                    return (
                      <ListItem
                        key={bid.id}
                        secondaryAction={
                          <Checkbox
                            sx={{ ml: 2 }}
                            edge="end"
                            onChange={handleToggle(bid.id)}
                            checked={bid.id == checked}
                          />
                        }
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemText
                            id={bid?.id.toString()}
                            primary={
                              <div>
                                <b>{bid.price}$</b>
                                <p>{bid.description}</p>
                              </div>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                {job.bids.length == 0 && <p>no bids</p>}
              </List>
            </FormControl>
            <button className="primary-button" type="button" onClick={onChoose}>
              Choose
            </button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default JobDetail;
const spinSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-60px",
  marginLeft: "-60px",
  zIndex: 222,
  color: "#023047",
};
