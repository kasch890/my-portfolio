import "../styles/Skills.css";

const skillCategories = [
  {
    label: "Programming",
    skills: ["Python", "Java", "HTML", "CSS"],
  },
  {
    label: "Data & Analysis",
    skills: [
      "Pandas",
      "NumPy",
      "Excel",
      "Data Pipelines",
      "Data Cleaning",
      "Statistical Analysis",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "PyCharm", "VS Code", "IntelliJ"],
  },
  {
    label: "UX/UI",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "User Research",
    ],
  },
  {
    label: "Workflow",
    skills: ["Agile (Scrum, Kanban)", "Jira", "Trello", "Slack"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills__categories">
        {skillCategories.map((category) => (
          <div className="skills__category" key={category.label}>
            <h3 className="skills__category-label">{category.label}</h3>
            <ul className="skills__badge-list">
              {category.skills.map((skill) => (
                <li className="skills__badge" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
