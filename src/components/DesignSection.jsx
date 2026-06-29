import DesignCard from "./DesignCard";
import "../styles/ProjectSection.css"; // reuses the shared project-card shell + design-card styles

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
