import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import JobCard from "../components/JobCard";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Job, cities, types } from "../models/itypes";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import CreateJobModal from "../components/CreateJobModal";
import { API } from "../services/service";

const Dashboard = () => {
  const [data, setData] = useState<Job[]>([]);
  const [typeFilter, setTypeFilter] = useState<string | null>();
  const [locationFilter, setLocationFilter] = useState<string | null>();
  const [open, setOpen] = useState(false);
  const fetchData = async () => {
    await API(
      "GET",
      `/filterJobs` +
        `${typeFilter !== undefined ? `?type=${typeFilter}` : ``}` +
        `${locationFilter !== undefined ? `?location=${locationFilter}` : ``}`
    )
      .then((res: any) => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [typeFilter, locationFilter]);
  const handleTypeChange = (event: SelectChangeEvent) => {
    setTypeFilter(event.target.value as string);
  };
  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocationFilter(event.target.value as string);
  };
  const clearFilter = () => {
    setTypeFilter(undefined);
    setLocationFilter(undefined);
  };
  return (
    <div>
      <CreateJobModal handleClose={() => setOpen(false)} modalVisible={open} />
      <div className="dashboard-header">
        <div>
          <h1>
            Available job list
            <IconButton
              sx={iconBtn}
              onClick={() => {
                setOpen(true);
              }}
            >
              <AddIcon sx={{ p: 0.3 }} />
            </IconButton>
          </h1>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="filter-form"
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                label="Location"
                className="filter"
                value={typeFilter ? typeFilter : ""}
                onChange={handleTypeChange}
              >
                {types.map((type, key) => (
                  <MenuItem key={key} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                label="Location"
                className="filter"
                onChange={handleLocationChange}
                value={locationFilter ? locationFilter : ""}
              >
                {cities.map((city, key) => (
                  <MenuItem key={key} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <button type="button" className="clear-button" onClick={clearFilter}>
            clear
          </button>
        </div>
      </div>

      <div className="cards">
        {data.map((item) => (
          <JobCard job={item} key={item.id} />
        ))}
      </div>
      <Pagination className="pagination" count={1} shape="rounded" />
    </div>
  );
};

export default Dashboard;
const iconBtn = {
  borderRadius: 2,
  color: "#fff",
  backgroundColor: " #219ebc",
  ml: 2,
  "&:hover": {
    backgroundColor: " #219ebc",
  },
};
