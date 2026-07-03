import { getProjects } from "../services/project.service.js";
import { uploadImage, deleteImage } from "../services/cloudinary.service.js";

export const fetchProjects = async (req, res) => {
  try {
    const projects = await getProjects();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addProject = async (req, res) => {
  try {
    res.status(201).json({
      message: "Project added",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
