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

  return (
    <div>
      {jobs.length === 0 ? (
        <p>Page is loading...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <SingleJob key={job.id} job={job} />
          ))}
        </ul>
      )}
    </div>
  );
}
