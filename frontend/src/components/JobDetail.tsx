import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Bid, Status } from "../models/itypes";
import { Box, FormControl,TextField } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
type AppProps = { bid: Bid };
const JobDetail = ({ bid }: AppProps) => {
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
          <h3> {bid.job.making}</h3>
        
            {  bid.status=='Pending'?        
            <p>
            <b>Budget:</b> {bid.job.budget}$
          </p>
          :  <p><b>Pricet:</b> {bid.price}$</p>
          }
         
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
       {
        bid.status=='Pending'? <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >

        <FormControl fullWidth sx={{ width: 400,color:'#64aeb9' }}>
        <h3>Bids you have received</h3>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
        </FormControl>
        <button className="primary-button">Choose</button>
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
          <FormControl fullWidth sx={{ width: 400,color:'#64aeb9' }}>
            <TextField
       
              id="demo-simple-select"
              label="Status"
              disabled
              defaultValue={
                Object.keys(Status)[Object.values(Status).indexOf(bid.status)]
              }
            >
            </TextField>
            <p><b>Propose description:</b> {bid.description}</p>
          </FormControl>
          <button className="secondary-button" style={{color:bid.status=="Ready"?'#64aeb9':'grey'}}>Confirm</button>
        </Box>
       }
        
      </CardContent>
    </Card>
  );
};

export default JobDetail;
