import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import JobCard from "../components/JobCard";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Job, Cloth, Status } from "../models/itypes";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import CreateJobModal from "../components/CreateJobModal";
const Dashboard = () => {
  const [data, setData] = useState<Job[]>([
    {
      id: 1,
      type: Cloth.SKIRT,
      numOfQuotations: 2,
      location: "Sydney",
      making: "handmade",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
      budget: 20,
      colors: ["red", "green"],
      size: "XL",
      bids: [],
    },
    {
      id: 2,
      type: Cloth.SKIRT,
      numOfQuotations: 2,
      location: "AU Sydney",

      making: "sewing machine",
      description: "blah",
      budget: 20,
      colors: ["red", "#ff3"],
      size: "XL",
      bids: [],
    },
    {
      id: 3,
      type: Cloth.SKIRT,
      numOfQuotations: 2,
      location: "AU Sydney",

      making: "sewing machine",
      description: "blah",
      budget: 20,
      colors: ["red", "#ff3"],
      size: "XL",
      bids: [],
    },
    {
      id: 5,
      type: Cloth.SKIRT,
      numOfQuotations: 2,
      location: "AU Sydney",

      making: "sewing machine",
      description: "blah",
      budget: 20,
      colors: ["red", "#ff3"],
      size: "XL",
      bids: [],
    },
    {
      id: 7,
      type: Cloth.SKIRT,
      numOfQuotations: 2,
      location: "AU Sydney",

      making: "sewing machine",
      description: "blah",
      budget: 20,
      colors: ["red", "#ff3"],
      size: "XL",
      bids: [],
    },
    {
      id: 4,
      type: Cloth.SKIRT,
      numOfQuotations: 2,
      location: "AU Sydney",

      making: "sewing machine",
      description: "blah",
      budget: 20,
      colors: ["red", "#ff3"],
      size: "XL",
      bids: [],
    },
  ]);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CreateJobModal handleClose={()=>setOpen(false)} modalVisible={open} />
      <div className="dashboard-header">
        <div>
          <h1>
            Available job list
            <IconButton
              sx={iconBtn}
              onClick={() => {setOpen(true)}}
            >
              <AddIcon sx={{ p: 0.8 }} />
            </IconButton>
          </h1>
        </div>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="filter-form"
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Location"
              className="filter"
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
              className="filter"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="cards">
        {data.map((item) => (
          <JobCard job={item} key={item.id}/>
        ))}
      </div>
      <Pagination className="pagination" count={1} shape="rounded" />
    </div>
  );
};

export default Dashboard;
const iconBtn={
  borderRadius: 2,
  color: "#fff",
  backgroundColor: " #219ebc",
  ml: 2,
  "&:hover": {
    backgroundColor: " #219ebc",
  },
}