import { Link } from "react-router-dom";

function ProjectPreview({ title, description, link, tags = [] }) {
  return (
    <Link to={link} className="project-preview">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.length > 0 && (
        <div className="project-tech-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tech-tag">{tag}</span>
          ))}
        </div>
      )}
      <span className="project-link">Подробнее →</span>
    </Link>
  );
}

export default ProjectPreview;