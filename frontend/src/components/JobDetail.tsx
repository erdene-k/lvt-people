import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Bid, Status, Job } from "../models/itypes";
import { Box, FormControl, TextField } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
type AppProps = { job: Job };
const JobDetail = ({ job }: AppProps) => {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Card sx={{ borderRadius: 0, display: "flex", width: 1250, mt: 3 }}>
      <CardMedia
        sx={{ height: 350, minWidth: 300 }}
        image={require("./item.jpg")}
      ></CardMedia>
      <CardContent sx={{ margin: 1, display: "flex" }}>
        <div>
          <h3> {job.making}</h3>

          {job.acceptedBid ?
            <p><b>Pricet:</b> {job.acceptedBid?.price}$</p> :
            <p>
              <b>Budget:</b> {job.budget}$
            </p>

          }

          <p>
            <b>Size:</b> {job.size}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <b>Colors:</b>
            {job.colors.map((color) => (
              <div className="color-container">
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
        {
          job.acceptedBid ?
            <Box
              component="form"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <FormControl fullWidth sx={{ width: 400, color: '#64aeb9' }}>
                <TextField

                  id="demo-simple-select"
                  label="Status"
                  disabled
                  defaultValue={
                    Object.keys(Status)[Object.values(Status).indexOf(job.acceptedBid?.status as Status)]
                  }
                >
                </TextField>
                <p><b>Propose description:</b> {job.acceptedBid?.description}</p>
              </FormControl>
              <button className="secondary-button" style={{ color: job.acceptedBid?.status == "Ready" ? '#64aeb9' : 'grey' }}>Confirm</button>
            </Box>
            :
            <Box
              component="form"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >

              <FormControl fullWidth sx={{ width: 400, color: '#64aeb9' }}>
                <h3>Bids you have received</h3>
                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {job.bids.map((bid) => {

                    return (
                      <ListItem
                        key={bid.id}
                        secondaryAction={
                          <Checkbox
                          sx={{ml:2}}
                            edge="end"
                          // onChange={handleToggle(bid)}
                          // checked={checked.indexOf(bid) !== -1}

                          />
                        }
                        disablePadding

                      >
                        <ListItemButton>
                          <ListItemText id={bid?.id.toString()} primary={<div><b>{bid.price}$</b>
                            <p>{bid.description}</p>
                          </div>} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                  {job.bids.length == 0 && <p>
                    no bids
                  </p>}
                </List>
              </FormControl>
              <button className="primary-button">Choose</button>
            </Box>

        }

      </CardContent>
    </Card>
  );
};

export default JobDetail;
