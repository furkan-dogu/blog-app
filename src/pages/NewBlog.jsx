import * as React from 'react';
import { TextField, Button, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const categories = [
  'Technology',
  'Lifestyle',
  'Business',
];

const statuses = [
  'Draft',
  'Published',
];

export default function NewBlog() {
  const [category, setCategory] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        boxShadow: 3,
        borderRadius: '12px',
        mt:4,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:1
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" gutterBottom>
        New Blog
      </Typography>
      <TextField
        required
        fullWidth
        id="title"
        label="Title"
        // margin="normal"
      />
      <TextField
        required
        fullWidth
        id="image-url"
        label="Image URL"
        // margin="normal"
      />
      <FormControl fullWidth sx={{m:1}}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={category}
          label="Category *"
          onChange={handleCategoryChange}
        >
          {categories.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{m:1}}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status"
          value={status}
          label="Status *"
          onChange={handleStatusChange}
        >
          {statuses.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        fullWidth
        id="content"
        label="Content"
        // margin="normal"
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        New Blog
      </Button>
    </Box>
  );
}