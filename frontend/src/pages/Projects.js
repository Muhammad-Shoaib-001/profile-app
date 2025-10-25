import React, { useEffect, useState } from "react";
import api from "../api";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Projects</h2>
      {projects.map(p => <ProjectCard key={p._id} project={p} />)}
    </div>
  );
}
