import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ padding: 20, background: "#282c34", color: "white" }}>
      <Link to="/" style={{ marginRight: 20, color: "white" }}>Home</Link>
      <Link to="/projects" style={{ marginRight: 20, color: "white" }}>Projects</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}
