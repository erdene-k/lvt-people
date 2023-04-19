import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import {Job, Cloth} from '../models/itypes'
type AppProps = { job: Job };

const JobCard = ({job}:AppProps) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.type}
        </Typography>
        
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={require("./item.jpg")}
        title="green iguana"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "baseline",
        }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
      </CardMedia>
      <CardContent style={{display:'flex', flexDirection:'column', alignItems :'center'}}>
        <Typography variant="h6">{job.budget}$ </Typography>
   
        <div style={{width:20, height:20, border:'1px solid grey'}}>
          <div style={{backgroundColor:job.color, margin:3, width:'100%', height:'100%'}}></div>
        </div>
      </CardContent>
      <CardActions>
        <Button>Bid</Button>
      </CardActions>
    </Card>
  );
}

export default JobCard