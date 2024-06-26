import { useLocation, useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import { CardActions } from "@mui/joy";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar, Box, CardHeader, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CommentForm from "../components/blog/CommentForm";
import useBlogCalls from "../hooks/useBlogCalls";
import CommentCard from "../components/blog/CommentCard";
import UpdateModal from "../components/blog/UpdateModal";
import DeleteModal from "../components/blog/DeleteModal";
import Loading from "../components/blog/Loading";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Detail = () => {
  const [commentArea, setCommentArea] = useState(false);
  const [loading, setLoading] = useState(true);
  const { detail } = useSelector((state) => state.blog);

  const { _id } = useSelector((state) => state.auth);

  const { getDetailBlogs } = useBlogCalls();

  const { id } = useParams();

  const location = useLocation();
  const fromPage = location.state?.from;

  const [info, setInfo] = useState({
    blogId: detail._id,
    comment: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getDetailBlogs(id);
  }, []);

  const handleComment = () => {
    setCommentArea(!commentArea);
  };

  const [data, setData] = useState({
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: "",
    id: "",
  });

  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setData({
      ...data,
      categoryId: detail?.categoryId?._id,
      title: detail?.title,
      content: detail?.content,
      image: detail?.image,
      isPublish: detail?.isPublish,
      id: detail._id,
    });
  };

  const handleClose = () => setOpen(false);

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => setDeleteOpen(false);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"calc(90vh - 70px)"}
        py={2}
      >
        <Box sx={{ maxWidth: "800px", width: "80%" }}>
          <CardMedia
            component="img"
            alt={detail?.title}
            image={detail?.image}
            sx={{ maxHeight: 500, objectFit: "contain", pt: 1 }}
          />
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe" />}
            title={detail?.userId?.username}
            subheader={new Date(detail?.createdAt).toLocaleString("tr-TR")}
          />
          <CardContent>
            <Typography variant="body2">{detail.title}</Typography>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="h5"
              component="div"
              whiteSpace={"pre-wrap"}
              sx={{
                mt: 1,
                mb: 1.5,
                fontSize: "0.8rem",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
              {detail?.content}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Box pl={2}>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <Typography fontSize={"14px"}>{detail?.likes?.length}</Typography>
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
        </Box>
        {commentArea && (
          <>
            <CommentForm info={info} setInfo={setInfo} blogId={detail._id} />
            <CommentCard info={info} setInfo={setInfo} />
          </>
        )}
        {detail?.userId?._id === _id && fromPage === "myBlogs" ? (
          <Stack level="body-md" mt={2}>
            <Box>
              <CardActions sx={{ display: "flex", gap: "2rem", mb: "10px" }}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleOpen}
                >
                  update blog
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDeleteOpen}
                >
                  delete blog
                </Button>
              </CardActions>
            </Box>
          </Stack>
        ) : null}
        <UpdateModal
          open={open}
          handleClose={handleClose}
          data={data}
          setData={setData}
        />
        <DeleteModal
          deleteOpen={deleteOpen}
          handleDeleteClose={handleDeleteClose}
          id={detail._id}
        />
      </Stack>
    );
  }
};

export default Detail;
