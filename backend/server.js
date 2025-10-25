import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Project from "./models/Project.js";
import Message from "./models/Message.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

// Routes
app.get("/", (req, res) => res.send("Backend API running..."));

// Get all projects
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Add project
app.post("/api/projects", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json({ message: "Project added" });
});

// Contact form message
app.post("/api/contact", async (req, res) => {
  const newMessage = new Message(req.body);
  await newMessage.save();
  res.json({ message: "Message received" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
