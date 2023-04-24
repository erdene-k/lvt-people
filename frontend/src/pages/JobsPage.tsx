import React, { useEffect, useState } from "react";
import { Bid, Job } from "../models/itypes";

import JobDetail from "../components/JobDetail";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { API } from "../services/service";
import { GetLocalStorageData } from "../hooks/useLocalStorage";
const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const user = GetLocalStorageData("sst_exd");
  const fetchData = async () => {
    setLoading(true);
    await API("GET", `/jobs/${user.id}`)
      .then((res: any) => {
        if (res.status === 200) {
          setJobs(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ margin: 10 }}>
      {loading && <CircularProgress size={120} sx={spinSx} />}
      <h1>
        My jobs <AssignmentIndIcon sx={{ width: 60, height: 60 }} />
      </h1>
      {jobs && jobs.map((job) => {
        return( <div key={job.id} className="bids">
        <JobDetail job={job} fetchData={fetchData} />
      </div>)
      })}
      {!jobs|| jobs.length == 0 && (
        <div>
          <p>No job found.</p>
          <Link to="../dashboard">To make a job</Link>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
const spinSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-60px",
  marginLeft: "-60px",
  zIndex: 222,
  color: "#023047",
};
