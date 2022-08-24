import { Job } from "./JobsAdv";
import "./SingleJob.css";

type Props = {
  job: Job;
};

export function SingleJob({ job }: Props) {
  return (
    <div className="flex">
      <div>
        <img className="logo" src={job.logo} alt={job.position} />
      </div>
      <div className="job-details">
        <h2>{job.position}</h2>
        <span>
          {job.posted} · {job.contract} · {job.role}
        </span>
      </div>
      <div className="lang-tools">
    
        {job.languages
          ? job.languages.map((language) => <span>{language}</span>)
          : ''}

          {job.tools ? job.tools.map((tool) => <span>{tool}</span>)
          : ''} 
      </div>
    </div>
  );
}
