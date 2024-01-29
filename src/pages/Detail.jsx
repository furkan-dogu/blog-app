import { useParams } from "react-router-dom";
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
import { useEffect, useState } from "react";
import CommentForm from "../components/blog/CommentForm";
import useBlogCalls from "../hooks/useBlogCalls";
import CommentCard from "../components/blog/CommentCard";

const Detail = () => {
  const [commentArea, setCommentArea] = useState(false);
  const { detail } = useSelector((state) => state.blog);

  const { getDetailBlogs } = useBlogCalls();

  const {id} = useParams()

  const [info, setInfo] = useState({
    blogId: detail._id,
    comment: "",
  });

  useEffect(() => {
    getDetailBlogs(id);
  }, []);

  const handleComment = () => {
    setCommentArea(!commentArea);
  };

  return (
    <Stack sx={{ my: 5, justifyContent: "center", alignItems: "center" }}>
      <Card sx={{ maxWidth: "60%" }}>
        <CardMedia
          component="img"
          alt={detail?.title}
          height="50%"
          image={detail?.image}
          sx={{ objectFit: "contain" }}
        />
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe" />}
          title={detail?.userId?.username}
          subheader={new Date(detail?.categoryId?.createdAt).toLocaleString(
            "tr-TR"
          )}
        />
        <CardContent>
          <Typography variant="body2">{detail.title}</Typography>
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
            {detail?.content}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              <Typography>{detail?.likes?.length}</Typography>
            </IconButton>
            <IconButton aria-label="comment" onClick={handleComment}>
              <CommentIcon />
              <Typography>{detail?.comments?.length}</Typography>
            </IconButton>
            <IconButton aria-label="visible">
              <VisibilityIcon />
              <Typography>{detail?.countOfVisitors}</Typography>
            </IconButton>
          </Box>
        </CardActions>
      </Card>
      {commentArea && (
        <>
          <CommentForm info={info} setInfo={setInfo} />
          <CommentCard info={info} setInfo={setInfo} />
        </>
      )}
    </Stack>
  );
};

export default Detail;
