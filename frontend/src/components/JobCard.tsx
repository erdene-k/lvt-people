import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
const JobCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography variant="h5" component="div">
      Coat
      </Typography>
     
    </CardContent>
    <CardMedia
      sx={{ height: 300}}
      image={require("./item.jpg")}
      title="green iguana"
    
    >
          <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>


    </CardMedia>
  <CardContent>
  <Typography variant="body1" component="div" style={{marginRight:5}}>
         Sydney, AU
      </Typography>
     
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>

    <CardActions>
      <Typography  variant="body1">
        49.99$
      </Typography>
        <Button>Bid</Button>
    </CardActions>

  </Card>
  )
}

export default JobCard