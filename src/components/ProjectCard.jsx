function ProjectCard({ project }) {
  const {
    title,
    repoUrl,
    image,
    caption,
    role,
    tools,
    problem,
    keyDecisions,
    creativeProcess,
    impact,
  } = project;

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3>{title}</h3>
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <div className="project-card__image">
            {image ? (
              <figure className="project-card__figure">
                <img src={image} alt={`${title} screenshot`} />
                {caption && (
                  <figcaption className="project-card__caption">
                    {caption}
                  </figcaption>
                )}
              </figure>
            ) : (
              <div className="project-card__image-placeholder" aria-hidden="true" />
            )}
          </div>

          <div className="project-card__meta">
            <p>
              <span className="project-card__label">Role:</span> {role}
            </p>

            <p className="project-card__tools-label">
              <span className="project-card__label">Tech/Tools used:</span>
            </p>
            <ul className="project-card__tools-list">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>

            <p>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        </div>

        <div className="project-card__details">
          <p>
            <span className="project-card__label">Problem:</span> {problem}
          </p>
          <p>
            <span className="project-card__label">Key Decisions:</span> {keyDecisions}
          </p>
          <p>
            <span className="project-card__label">Creative Process:</span> {creativeProcess}
          </p>
          <p>
            <span className="project-card__label">Impact:</span> {impact}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
