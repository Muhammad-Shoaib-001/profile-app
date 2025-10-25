import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  github: String,
  liveDemo: String,
  techStack: [String]
});

export default mongoose.model("Project", projectSchema);
