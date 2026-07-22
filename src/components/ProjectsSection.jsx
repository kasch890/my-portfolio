import ProjectCard from "./ProjectCard";
import "../styles/ProjectSection.css";
import DataParsingImg from "../assets/ExampleDataParsingOutput.png";
import PortfolioFigma from "../assets/PortfolioFigma.png";
import BariPath from "../assets/BPDirectorDashboard.png";


const projectsData = [
  {
    title: "Portfolio Website",
    repoUrl: "https://github.com/kasch890/my-portfolio",
    image: PortfolioFigma,
    caption: "Draft layout in Figma",
    role: "Software Developer & Designer",
    tools: ["React", "JavaScript", "CSS", "Vite", "Figma"],
    keyDecisions:
      "Chose React for component reuse and a clean build pipeline over a static HTML/CSS site, so the project list and other sections could scale without duplicating markup. Opted for a single-page layout for the initial release to simplify navigation routing, while still including a clickable navbar for easy browsing.",
    creativeProcess:
      "Started with a content outline of the sections I wanted (About, Projects, Skills, Contact), then brainstormed layout ideas for each in Figma. Built each section as its own component so I could style and iterate on them independently without affecting the rest of the page. Along the way, I sought out feedback from peers and incorporated it where it strengthened the site, while staying true to my own vision for the impact I wanted it to make.",
  },
  {
    title: "BariatricPath",
    repoUrl:
      "https://github.com/BUMETCS673/cs673olsum26project-cs673olsum26team1",
    image: BariPath,
    caption: "Director Dashboard main page",
    role: "Software Developer / Team Lead",
    tools: ["React", "Vitest", "Docker", "GitHub Actions", "GitHub"],
    summary:
      "Patients preparing for or recovering from bariatric surgery lacked a single tool for educational resources, progress tracking, and personalized recommendations. BariatricPath was a group project for graduate coursework and is not built for real-world use at this time. I took on a lead role for documentation and sprint management.",
    creativeProcess:
      "Built a read-only Director Dashboard for the PROGRAM_DIRECTOR role, adding PatientMetrics and DirectorDashboard components, threading props through SearchBar and PatientTableList, fixing routes, and writing a full Vitest suite across three test files using an arrange/act/assert pattern.",
    impact:
      "Developed reusable components, including the read-only banner and patient metrics shown in the image. Ran infrastructure smoke testing and tracked sprint metrics to keep the team on schedule and meet deadlines. Led documentation efforts, including SPPP updates, risk management, and resolving user story overlap. Conducted both manual and automated testing — leveraging AI to help guide test suite design, with all results human-verified. Delivered team presentations and facilitated coordination and planning meetings, including keeping minutes.",
  },
  {
    title: "Survey Data Analysis Pipelines",
    repoUrl: "https://github.com/kasch890/BlankSlateREDACTED",
    image: DataParsingImg,
    caption: "Example output for REDACTED_Pipeline1",
    role: "Software Developer / Data Scientist",
    tools: ["Python", "Pandas", "NumPy", "PyCharm"],
    summary:
      "Client data reporting was taking far longer than expected and costing valuable manpower — each report took hours of manual work from overqualified team members. Due to NDA restrictions, much of the code has been redacted; however, the majority of the structure is still available on GitHub.",
    keyDecisions:
      "The client originally wanted Excel charts they could edit manually, but Excel's charting limits made it impossible to produce the exact visuals they needed. Drawing on previous experience with Matplotlib, I built the graphs from scratch instead. Since different reports pulled data across different timespans, I gave users control over how many data points are labeled for readability, while always retaining local max/min values to preserve visual clarity and impact on the graph. Users can also input any number of data files to concatenate into one, with duplicate, invalid, null, or empty values automatically removed.",
    creativeProcess:
      "Talked with the employee who created the majority of these reports and documented their manual analysis process. I cleaned the data and prepped it for analysis by removing duplicates and empty cells, followed their process of separating questions by group and then by individual question, then wrote functions to analyze the data and generate graphs to their exact specifications, including font and chart colors. I tested frequently and left detailed inline comments so the client could adjust the output on their own going forward.",
    impact:
      "Cut monthly client report creation from hours of manual work down to about 2 minutes.",
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