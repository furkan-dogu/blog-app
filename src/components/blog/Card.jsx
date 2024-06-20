import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";

export default function CardBlog({ blog, page }) {
  const navigate = useNavigate();
  const { postLike } = useBlogCalls();
  const { _id } = useSelector((state) => state.auth);

  const likeStyle = blog.likes.includes(_id)
    ? { color: "red" }
    : { color: "inherit" };

  return (
    <Card sx={{ m: 2, boxShadow: 5 }}>
      <Stack flexDirection={{ xl: "row", lg: "column" }}>
        <Box sx={{ height: { xl: 180, lg: 230 }, minWidth: 300 }}>
          <CardMedia
            component="img"
            alt={blog?.title}
            sx={{ height: { xl: 180, lg: 250 }, minWidth: 300, p: 1 }}
            image={blog?.image}
          />
        </Box>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {blog?.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            whiteSpace={"pre-wrap"}
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
            }}
          >
            {blog?.content}
          </Typography>

          <hr />
          <Typography variant="body2" color="text.secondary">
            Published Date: {new Date(blog?.createdAt).toLocaleString("tr-TR")}
          </Typography>
        </CardContent>
      </Stack>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Box>
          <IconButton
            onClick={() => postLike(blog, page)}
            aria-label="add to favorites"
          >
            <FavoriteIcon sx={likeStyle} />
            <Typography fontSize={"14px"}>{blog.likes.length}</Typography>
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
            <Typography fontSize={"14px"}>{blog.comments.length}</Typography>
          </IconButton>
          <IconButton aria-label="visible">
            <VisibilityIcon />
            <Typography fontSize={"14px"}>{blog.countOfVisitors}</Typography>
          </IconButton>
        </Box>

        <Button
          variant="contained"
          sx={{
            color: "#0ef",
            backgroundColor: "#0C0C0C",
            fontSize: "12px",
            cursor: "pointer",
            "&:hover": { background: "#0ef", color: "#0C0C0C", scale: "1.02" },
          }}
          onClick={() => navigate(`/detail/${blog._id}`, { state: { from: "main" } })}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
