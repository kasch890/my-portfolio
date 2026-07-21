import DesignCard from "./DesignCard";
import "../styles/ProjectSection.css"; // reuses the shared project-card shell + design-card styles
import MoodlinkWireframe from "../assets/moodlinkWireframe.png";
import MoodlinkFinished from "../assets/MoodlinkFinished.png";

const designData = [
  {
    title: "Example UX Case Study",
    figmaUrl: "",
    role: "UX Designer",
    wireframeImage: null,
    wireframeCaption: "Low-fidelity wireframe",
    finalImage: null,
    finalCaption: "Final high-fidelity design",
    process:
      "Describe your design process and the key choices you made here — what problem you were solving, how the wireframe evolved, and why you made the visual/interaction decisions you did in the final version.",
  },
  {
    title: "MoodLink Design",
    figmaUrl: "https://www.figma.com/design/HUgwaYWVtY3uCN7DzS0Cbd/Mood-Link-Design?node-id=5-5&t=qXZGtwl9yQUo4Urf-1",
    role: "UX Designer & UI Developer",
    wireframeImage: MoodlinkWireframe,
    wireframeCaption: "Figma Wireframe",
    finalImage: MoodlinkFinished,
    finalCaption: "",
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
