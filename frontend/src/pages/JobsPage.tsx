import React, { useState } from "react";
import { Bid, Job} from "../models/itypes";
import { Cloth, Status } from "../models/itypes";
import JobDetail from "../components/JobDetail";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
        id:2,
        type: Cloth.SKIRT,
        numOfQuotations: 2,
        location: "Sydney",
     
        making: "handmade",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
        budget: 20,
        colors: ["red", "green"],
        size: "XL",
        bids:[]
      
    },
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
        bids:[{
          id: 1,
          description: "handmade blishing and graphic design, Lorem ipsum is a placeholder texblishing and graphic design, Lorem ipsum is a placeholder texblishing and graphic design, Lorem ipsum is a placeholder texblishing and graphic design, Lorem ipsum is a placeholder tex",
          price: 20,
          status: Status.READY,
        },
        {
          id: 2,
          description: "handmade",
          price: 20,
          status: Status.READY,
        }
      ]
      },
  
  ]);

  return (
    <div>
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
