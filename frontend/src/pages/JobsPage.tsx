import React, { useState } from "react";
import { Bid, Job} from "../models/itypes";
import {  Status } from "../models/itypes";
import JobDetail from "../components/JobDetail";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([ ]);

  return (
    <div style={{margin:10}}>
     <h1>My jobs <AssignmentIndIcon sx={{width:60, height:60}}/></h1>
 
      {jobs.map((job) => (
        <div key={job.id} className="bids">
          <JobDetail job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobsPage;
