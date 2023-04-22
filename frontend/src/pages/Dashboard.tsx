import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import JobCard from "../components/JobCard";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Job,Cloth,Status } from "../models/itypes";

const Dashboard = () => {
  const [data, setData] = useState<Job[]>([{
    id:1,
    type:Cloth.SKIRT,
    numOfQuotations:2,
    location:'Sydney',

    making:'handmade',
    description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
    budget:20,
    colors:['red','green'],
    size:"XL",
    bids:[]
  },{
    id:2,
    type:Cloth.SKIRT,
    numOfQuotations:2,
    location:'AU Sydney',

    making:'sewing machine',
    description:'blah',
    budget:20,
    colors:['red','#ff3'],
    size:"XL",
    bids:[]
  }]) 
  return (
    <div>
      <Box
        className="boxForm"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Location"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Location"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Filter</Button>
      </Box>
      <div className="cards">
      {data.map((item)=>
      <JobCard job={item}/>
      )
      }
      </div>
    </div>
  );
};

export default Dashboard;
