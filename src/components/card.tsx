import { Bookmark } from "lucide-react";
interface Job {
      id: number;
  company: string;
  posted: string;
  title: string;
  type: string;
  level: string;
  salary: string;
  location: string;
  image: string;
}
const Card = ()=> {
    const jobs: Job[] = [
  {
    id: 1,
    company: "Shark",
    posted: "2 Days ago",
    title: "UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Toronto, Ontario",
    image: "/logo.jpeg"
  },
  {
    id: 2,
    company: "PixelCraft",
    posted: "1 Day ago",
    title: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$90/hr",
    location: "Vancouver, Canada",
    image: "/logo.jpeg"
  },
  {
    id: 3,
    company: "NovaTech",
    posted: "5 Days ago",
    title: "Product Designer",
    type: "Remote",
    level: "Junior Level",
    salary: "$70/hr",
    location: "Remote",
    image: "/logo.jpeg"
  }
];

    return (
    <div>
      {jobs.map((job) => (
        <div className="card" key={job.id}>
          <div className="top">
            <img src={job.image} alt="Logo" />
            <button>
              Save <Bookmark size={16} />
            </button>
          </div>

          <div className="center">
            <h3>
              {job.company} <span>{job.posted}</span>
            </h3>
            <h2>{job.title}</h2>
            <div className="tag">
              <h4>{job.type}</h4>
              <h4>{job.level}</h4>
            </div>
          </div>

          <div className="bottom">
            <div>
              <h3>{job.salary}</h3>
              <p>{job.location}</p>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
