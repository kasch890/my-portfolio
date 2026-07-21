import DesignCard from "./DesignCard";
import "../styles/ProjectSection.css"; // reuses the shared project-card shell + design-card styles
import MoodlinkWireframe from "../assets/moodlinkWireframe.png";
import MoodlinkFinished from "../assets/MoodlinkFinished.png";

const designData = [
  {
    title: "UX Research - Usability Tests",
    role: "UX Researcher",
    summary: "I was in charge of designing and running user tests. This included reaching out to available clients from different client groups, designing the steps and sheets we needed to make it run smoothly, and analyzing the data for the product team.",
    process:
      "I started with what the product is and what the team wanted specific reviews on and what questions we would like solved. From there ...",
  },
  {
    title: "MoodLink Design",
    figmaUrl: "https://www.figma.com/design/HUgwaYWVtY3uCN7DzS0Cbd/Mood-Link-Design?node-id=5-5&t=qXZGtwl9yQUo4Urf-1",
    role: "UX Designer & UI Developer",
    image1: MoodlinkWireframe,
    image1Caption: "Figma Wireframe",
    image2: MoodlinkFinished,
    image2Caption: "Launched Website",
    process:
      "I wanted our team to focus on the ease of use fo rthe user, where it ideally takes <20 seconds to log a quick mood into the tracker. At the same time our team wanted users to be able to view metrics and track progress over time. I started with a view pencil and paper sketches which I brought to teh team to review. I then designed the wireframe in Google Canvas, later remaking it in Figma for the sake of practicing the software and working on building reusable components. After confirmation from the team, I made some design changes to the actual website, the result of which is shown on the right. Our original plan was to create a mobile app, but ended up switching to a desktop app so things got moved around a bit, but my wireframe provided a cohesive vision for us all to work from.",
  },
];

function DesignSection() {
  return (
    <section id="ux-designs">
      <h2>UX Designs</h2>
      <div className="project-list">
        {designData.map((design) => (
          <DesignCard key={design.title} design={design} />
        ))}
      </div>
    </section>
  );
}

export default DesignSection;
