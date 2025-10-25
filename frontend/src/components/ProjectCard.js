import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 20, marginBottom: 10, borderRadius: 10 }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tech:</strong> {project.techStack.join(", ")}</p>
      <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> |{" "}
      <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
    </div>
  );
}
