function DesignCard({ design }) {
    const {
      title,
      figmaUrl,
      role,
      wireframeImage,
      wireframeCaption,
      finalImage,
      finalCaption,
      process,
    } = design;
  
    return (
      <article className="project-card">
        <div className="project-card__header">
          <h3>{title}</h3>
        </div>
  
        <div className="project-card__body">
          <div className="design-card__images">
            <div className="design-card__image">
              {wireframeImage ? (
                <figure className="project-card__figure">
                  <img src={wireframeImage} alt={`${title} wireframe`} />
                  {wireframeCaption && (
                    <figcaption className="project-card__caption">
                      {wireframeCaption}
                    </figcaption>
                  )}
                </figure>
              ) : (
                <div className="project-card__image-placeholder" aria-hidden="true" />
              )}
            </div>
  
            <div className="design-card__image">
              {finalImage ? (
                <figure className="project-card__figure">
                  <img src={finalImage} alt={`${title} final design`} />
                  {finalCaption && (
                    <figcaption className="project-card__caption">
                      {finalCaption}
                    </figcaption>
                  )}
                </figure>
              ) : (
                <div className="project-card__image-placeholder" aria-hidden="true" />
              )}
            </div>
          </div>
  
          <div className="design-card__meta">
            <p>
              <span className="project-card__label">Role:</span> {role}
            </p>
            {figmaUrl && (
              <p>
                <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
                  View in Figma
                </a>
              </p>
            )}
          </div>
  
          <div className="design-card__process">
            <p>
              <span className="project-card__label">Process &amp; Design Choices:</span>{" "}
              {process}
            </p>
          </div>
        </div>
      </article>
    );
  }
  
  export default DesignCard;
  