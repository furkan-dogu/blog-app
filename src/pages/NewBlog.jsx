import {
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const status = [
  {
    name: "Draft",
    isPublish: false,
  },
  {
    name: "Published",
    isPublish: true,
  },
];

export default function NewBlog() {
  const navigate = useNavigate();

  const { getCategories, postBlog } = useBlogCalls();

  useEffect(() => {
    getCategories();
  }, []);

  const { categories } = useSelector((state) => state.blog);

  const [info, setInfo] = useState({
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(info);
    postBlog(info);
    navigate("/");
  };

  return (
    <Box minHeight={"calc(90vh - 70px)"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2 },
          width: "90%",
          maxWidth: "500px",
          mx: "auto",
          padding: "20px",
          boxShadow: 5,
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" gutterBottom>
          New Blog
        </Typography>
        <TextField
          required
          fullWidth
          id="title"
          name="title"
          label="Title"
          type="text"
          value={info.title}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id="image"
          name="image"
          label="Image URL"
          value={info.image}
          type="url"
          onChange={handleChange}
        />
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="categoryId"
            name="categoryId"
            value={info.categoryId}
            label="Category *"
            type="text"
            onChange={handleChange}
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="isPublish"
            name="isPublish"
            value={info.isPublish}
            label="Status *"
            onChange={handleChange}
          >
            {status.map((statu, index) => (
              <MenuItem key={index} value={statu.isPublish}>
                {statu.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          fullWidth
          id="content"
          name="content"
          label="Content"
          multiline
          value={info.content}
          type="text"
          rows={3}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
        >
          New Blog
        </Button>
      </Box>
    </Box>
  );
}
