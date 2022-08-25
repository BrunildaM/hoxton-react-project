import { useEffect, useState } from "react";
import { SingleEmployer } from "../Employers/SingleEmployer";
import { SingleJob } from "./SingleJob";

export type Job = {
  id: number;
  logo: string;
  position: string;
  role: string;
  level: string;
  contract: string;
  languages: string[];
  tools?: string[];
  posted: string;
};

export function JobsAdv() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
      .then((r) => r.json())
      .then((jobsFromDb) => setJobs(jobsFromDb));
  }, []);

//it deletes from the page only after you refresh it :/ needs to be fixed
  function deleteAd (job: Job) {
    fetch(`http://localhost:4000/jobs/${job.id}`, {
      method: 'DELETE'
    })

    const jobsCopy = JSON.parse(JSON.stringify(jobs))
    let jobToBeDeleted = jobsCopy.find((target: Job) => target.id === job.id)
   jobsCopy.filter((job: Job) => job.id !== jobToBeDeleted.id)

   setJobs(jobsCopy)
  }

  return (
    <div>
      {jobs.length === 0 ? (
        <p>Page is loading...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <SingleJob key={job.id} job={job} deleteAd={deleteAd}/>
          ))}
        </ul>
      )}
    </div>
  );
}
