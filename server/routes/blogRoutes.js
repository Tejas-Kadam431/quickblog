import express from 'express';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
import adminOnly from "../middleware/adminOnly.js";
import {
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
  togglePublishBlog,
  updateBlog,
  getUnpublishedBlogs,
  searchBlogs,
  getPublishedBlogs,
  getBlogBySlug
} from "../controllers/blogController.js";

const blogRouter = express.Router();

blogRouter.get("/all", getAllBlogs);
blogRouter.get("/search", searchBlogs);
blogRouter.get("/published/all", getPublishedBlogs);
blogRouter.get("/slug/:slug", getBlogBySlug);
blogRouter.post("/add", auth, adminOnly, upload.single("image"), addBlog);

blogRouter.put("/:id", auth, adminOnly, upload.single("image"), updateBlog);

blogRouter.delete("/:id", auth, adminOnly, deleteBlog);

blogRouter.patch("/publish/:id", auth, adminOnly, togglePublishBlog);

blogRouter.get("/unpublished/all", auth, adminOnly, getUnpublishedBlogs);

export default blogRouter;
