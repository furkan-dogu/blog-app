import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyBlogCard = ({ myBlog }) => {
  const navigate = useNavigate();
  const { detail } = useSelector((state) => state.blog);
  return (
    <Card sx={{ maxWidth: 450, m: 1, boxShadow: 5 }}>
      <CardMedia
        component="img"
        alt={myBlog?.title}
        sx={{ height: 150, objectFit: "contain" }}
        image={myBlog?.image}
      />
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
          {myBlog?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            height: "60px",
          }}
        >
          {myBlog?.content}
        </Typography>

        <hr />
        <Typography variant="body2" color="text.secondary">
          Published Date: {new Date(myBlog?.createdAt).toLocaleString("tr-TR")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <Typography fontSize={"14px"}>{detail?.likes?.length}</Typography>
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
            <Typography>{detail?.comments?.length}</Typography>
          </IconButton>
          <IconButton aria-label="visible">
            <VisibilityIcon />
            <Typography>{detail?.countOfVisitors}</Typography>
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
          onClick={() =>
            navigate(`/detail/${myBlog._id}`, { state: { from: "myBlogs" } })
          }
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyBlogCard;
