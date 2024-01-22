import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import { CardActions } from "@mui/joy";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar, Box, CardHeader } from "@mui/material";
import { useSelector } from "react-redux";
import CommentForm from "../components/blog/CommentForm";
import { useState } from "react";

const Detail = () => {
  const [commentArea, setCommentArea] = useState(false);
  const { image } = useSelector((state) => state.auth);

  const handleComment = () => {
    setCommentArea(!commentArea);
  };

  const location = useLocation();
  const { blog } = location.state;

  return (
    <Stack sx={{ mt: 5, justifyContent: "center", alignItems: "center" }}>
      <Card sx={{ maxWidth: "60%" }}>
        <CardMedia
          component="img"
          alt=""
          height="50%"
          image={blog?.image}
          sx={{ objectFit: "contain" }}
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
              <CardMedia
                component="img"
                alt=""
                height="140"
                image={image ? image : ""}
                sx={{
                  maxHeight: { xs: 70, md: 70 },
                  maxWidth: { xs: 270, md: 270 },
                }}
              />
            </Avatar>
          }
          title={blog?.title}
          subheader={new Date(blog?.createdAt).toLocaleString("tr-TR")}
        />
        <CardContent>
          <Typography variant="body2">{blog?.title}</Typography>
          <Typography
            color="text.secondary"
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              mt: 1,
              mb: 1.5,
              fontSize: "0.8rem",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
              fontWeight: "400",
            }}
          >
            {blog?.content}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            Published Date:
            {new Date(blog?.createdAt).toLocaleString("tr-TR")}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="comment">
              <CommentIcon onClick={handleComment} />
            </IconButton>
            <IconButton aria-label="visible">
              <VisibilityIcon />
              <Typography>{blog.countOfVisitors}</Typography>
            </IconButton>
          </Box>
        </CardActions>
      </Card>
      {commentArea && <CommentForm />}
    </Stack>
  );
};

export default Detail;
