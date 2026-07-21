import '../styles/DesignSection.css';

function DesignCard({ design }) {
  const {
    title,
    role,
    figmaUrl,
    image1,
    image1Caption,
    image2,
    image2Caption,
    summary,
    tools,
    process,
  } = design;

  const hasImages = image1 || image2;

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3>{title}</h3>
      </div>

      <div className="project-card__body">
        {hasImages && (
          <div className="design-card__images">
            {image1 && (
              <div className="design-card__image">
                <figure className="project-card__figure">
                  <img src={image1} alt={`${title} image 1`} />
                  {image1Caption && (
                    <figcaption className="project-card__caption">
                      {image1Caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            )}

            {image2 && (
              <div className="design-card__image">
                <figure className="project-card__figure">
                  <img src={image2} alt={`${title} image 2`} />
                  {image2Caption && (
                    <figcaption className="project-card__caption">
                      {image2Caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            )}
          </div>
        )}

        <div className="design-card__meta">
          <p>
            <span className="project-card__label">Role:</span> {role}
          </p>

          {tools && tools.length > 0 && (
            <>
              <p className="project-card__tools-label">
                <span className="project-card__label">Tech/Tools used:</span>
              </p>
              <ul className="project-card__tools-list">
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </>
          )}

          {figmaUrl && (
            <p>
              <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
                View in Figma
              </a>
            </p>
          )}
        </div>

        {summary && (
          <div className="design-card__summary">
            <p>
              <span className="project-card__label">Summary:</span> {summary}
            </p>
          </div>
        )}

        {process && (
          <div className="design-card__process">
            <p>
              <span className="project-card__label">Process &amp; Design Choices:</span>{" "}
              {process}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export default DesignCard;
