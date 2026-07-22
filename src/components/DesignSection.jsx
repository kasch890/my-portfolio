import DesignCard from "./DesignCard";
import "../styles/ProjectSection.css"; // reuses the shared project-card shell + design-card styles
import MoodlinkWireframe from "../assets/moodlinkWireframe.png";
import MoodlinkFinished from "../assets/MoodlinkFinished.png";

const designData = [
  {
    title: "UX Research - Usability Tests",
    role: "UX Researcher",
    summary:"I led the design and execution of usability testing, including recruiting participants across distinct client groups, developing standardized testing protocols, and analyzing results to deliver actionable insights to the product team.",
    process:
    "I began by meeting with the team to identify what they wanted feedback on and which product questions needed answers. From there, I designed a structured testing protocol to ensure every participant received a consistent experience, and reviewed all test questions for biased or leading language before finalizing them. I then recruited and scheduled test participants, ran and proctored each session, and organized responses into spreadsheets categorized by question for easier analysis. Once testing was complete, I synthesized the findings into a summary for the product team, highlighting key takeaways and flagging areas of concern.",
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
    "Our team's core goal was ease of use — ideally allowing a user to log a mood in under 20 seconds — while still giving users a way to view metrics and track progress over time. I started with a few pencil-and-paper sketches, which I brought to the team for review. From there, I built out the wireframe in Google Canvas, then later remade it in Figma to practice the software and develop reusable components. After the team confirmed the direction, I translated the wireframe into design changes on the live site, shown on the right. Our original plan was to build a mobile app, but we pivoted to a desktop app partway through, which shifted some layout decisions — throughout that change, the wireframe gave the team a consistent, shared vision to design against.",
  },
  {
    title: "Bariatric Path prototyping",
    role: "UX Designer",
    summary:
      "Info Soon to Come!",
  },
];

function DesignSection() {
  return (
    <section id="ux-designs">
      <h2>UX / UI Research and Design</h2>
      <div className="project-list">
        {designData.map((design) => (
          <DesignCard key={design.title} design={design} />
        ))}
      </div>
    </section>
  );
}

export default DesignSection;
