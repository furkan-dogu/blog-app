import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardActions, Stack } from "@mui/material";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";

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
};

export default function DeleteModal({ deleteOpen, handleDeleteClose, id }) {
  const {deleteMyBlog} = useBlogCalls()
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteMyBlog(id)
    handleDeleteClose()
    navigate("/my-blogs")
  }

  return (
    <div>
      <Modal
        open={deleteOpen}
        onClose={handleDeleteClose}
      >
        <Box sx={style}>
          <Typography variant="h5" sx={{ mt: 2, textAlign:"center" }}>
            Do you really want to delete your blog? This process cannot be
            undone!
          </Typography>
          <Stack level="body-md" mt={2}>
            <Box>
              <CardActions
                sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleDeleteClose}
                >
                  cancel
                </Button>
                <Button variant="contained" color="error" onClick={handleDelete}>
                  delete
                </Button>
              </CardActions>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
