import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import BlogCategoriesCards from "./BlogCategoriesCards";
import ClearIcon from "@mui/icons-material/Clear";

const BlogCategories = () => {
  const { blogsAll, categories } = useSelector((state) => state.blog);
  const { getBlogsAll, getCategories } = useBlogCalls();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    getBlogsAll();
    getCategories();
  }, []);

  const sortedBlogs = blogsAll
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  const sorted = sortedBlogs.slice(0, 10);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <Stack gap={2} m={2} mt={5}>
      <Typography
        align="center"
        variant="h5"
        sx={{ textDecoration: "underline" }}
      >
        Lasted Published
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel id="category-label">Selected Category</InputLabel>
        <Select
          labelId="category-label"
          id="categoryId"
          name="categoryId"
          value={selected}
          label="Selected Category"
          type="text"
          onChange={handleChange}
          endAdornment={
            selected && (
              <InputAdornment position="end" sx={{ mr: 2 }}>
                <IconButton onClick={() => setSelected("")}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        >
          {categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {sorted
        .filter((sortedBlog) =>
          selected ? sortedBlog.categoryId === selected : true
        )
        .map((sortedBlog) => (
          <BlogCategoriesCards key={sortedBlog._id} sortedBlog={sortedBlog} />
        ))}
    </Stack>
  );
};

export default BlogCategories;
