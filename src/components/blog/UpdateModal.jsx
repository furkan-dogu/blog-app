import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "& .MuiTextField-root": { m: 1 },
  maxWidth: "500px",
  margin: "auto",
  padding: "20px",
  boxShadow: 3,
  borderRadius: "12px",
  mt: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 1,
};

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

export default function UpdateModal({ open, handleClose, data, setData }) {

  const { getCategories, updateMyBlog } = useBlogCalls();

  useEffect(() => {
    getCategories();
  }, []);

  const { categories } = useSelector((state) => state.blog);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data);
    updateMyBlog(data)
    handleClose()
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Update Blog
          </Typography>
          <TextField
            required
            fullWidth
            id="title"
            name="title"
            label="Title"
            type="text"
            value={data.title}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            id="image"
            name="image"
            label="Image URL"
            value={data.image}
            type="url"
            onChange={handleChange}
          />
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="categoryId"
              name="categoryId"
              value={data.categoryId}
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
              value={data.isPublish}
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
            value={data.content}
            type="text"
            rows={4}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Update Blog
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
