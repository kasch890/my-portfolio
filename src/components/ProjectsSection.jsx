import ProjectCard from "./ProjectCard";
import "../styles/ProjectSection.css";
import DataParsingImg from "../assets/ExampleDataParsingOutput.png";
import PortfolioFigma from "../assets/PortfolioFigma.png";
import BariPath from "../assets/BPDirectorDashboard.png";


const projectsData = [
  {
    title: "Personal Portfolio Website",
    repoUrl: "https://github.com/kasch890/my-portfolio",
    image: PortfolioFigma,
    role: "Software Developer",
    tools: ["React", "JavaScript", "CSS", "Vite"],
    summary:
      "Needed a single place to showcase my projects, skills, and experience to potential employers and collaborators.",
    keyDecisions:
      "Chose React for component reuse and a clean build pipeline over a static HTML/CSS site, so the project list and other sections could scale without duplicating markup.",
    creativeProcess:
      "Started with a content outline of the sections I wanted (About, Projects, Skills, Contact), then built each as its own component, iterating on layout and styling pass by pass.",
  },
  {
    title: "BariatricPath",
    repoUrl:
      "https://github.com/BUMETCS673/cs673olsum26project-cs673olsum26team1",
    image: BariPath,
    role: "Software Developer / Co-Lead",
    tools: ["React", "Vitest", "Docker", "GitHub Actions", "DigitalOcean"],
    summary:
      "Patients preparing for or recovering from bariatric surgery lacked a single tool for educational resources, progress tracking, and personalized recommendations.",
    keyDecisions:
      "Took on a co-lead/configuration role covering infrastructure smoke testing and CI/CD, while also building out the Director Dashboard feature end to end.",
    creativeProcess:
      "Built a read-only Director Dashboard for the PROGRAM_DIRECTOR role, adding PatientMetrics and DirectorDashboard components, threading props through SearchBar and PatientTableList, fixing routes, and writing a full Vitest suite across three test files using an arrange/act/assert pattern.",
    impact:
      "Shipped a clean Iteration 3 release with working CI/CD, Docker/Nginx deployment, HTTPS, and security scanning (CodeQL, Trivy, OWASP ZAP), plus formal test documentation for the team.",
  },
  {
    title: "Survey Data Analysis Pipeline",
    repoUrl: "https://github.com/kasch890/BlankSlateREDACTED",
    image: DataParsingImg,
    caption: "Example output for the the survey data analysis pipeline.",
    role: "Software Developer / Data Scientist",
    tools: ["Python", "Pandas", "NumPy", "PyCharm"],
    summary:
      "Client data reporting was taking far longer than expected and cost valuable manpower — each report took hours of manual work.",
    keyDecisions:
      "Originally the employee wanted me to build the charts in Excel so they could edit them manually. I found too many limitations there and couldn't produce the desired charts that way.",
    creativeProcess:
      "Talked with the employee in charge of creating the majority of these reports and noted the steps they used to manually do the data analysis. I cleaned the data and prepped it for analysis by removing duplicates and empty cells, followed their process to separate questions by group and then by question, then wrote functions to analyze the data and generate the graphs to their specifications, including the desired font type and chart colors.",
    impact:
      "Cut monthly client report creation from hours of manual work down to about 2 minutes. Employees can still open the file and use my inline comments to adjust things as needed in the future.",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;