export const validateBlogInput = ({ title, description, category }) => {
  if (!title || typeof title !== "string") {
    return "Title is required and must be a string";
  }

  if (!description || typeof description !== "string") {
    return "Description is required and must be a string";
  }

  if (!category || typeof category !== "string") {
    return "Category is required and must be a string";
  }

  return null; // valid input
};
