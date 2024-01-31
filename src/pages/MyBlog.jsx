import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";

const MyBlog = () => {
  const navigate = useNavigate();
  const { getMyBlogs } = useBlogCalls();

  const { _id } = useSelector((state) => state.auth);
  const { myBlogs } = useSelector((state) => state.blog);

  useEffect(() => {
    getMyBlogs(_id);
  }, []);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"calc(100vh - 70px)"}
    >
      {!myBlogs.length ? (
        <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
          <Typography color={"red"}>No blogs data...</Typography>
          <Button
            variant="contained"
            sx={{
              color: "#0ef",
              backgroundColor: "#0C0C0C",
              cursor: "pointer",
              "&:hover": {
                background: "#0ef",
                color: "#0C0C0C",
                scale: "1.02",
              },
            }}
            onClick={() => navigate("/new-blog")}
          >
            write blog
          </Button>
        </Stack>
      ) : (
        <Grid container gap={3} mt={3} justifyContent={"center"}>
          {myBlogs.map((myBlog) => (
            <Grid item key={myBlog._id}>
              <Card sx={{ width: 350, height: 460 }}>
                <CardMedia
                  component="img"
                  alt={myBlog?.title}
                  sx={{ width: 350, height: 200, objectFit: "contain" }}
                  image={myBlog?.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {myBlog?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                      height: "80px",
                    }}
                  >
                    {myBlog?.content}
                  </Typography>

                  <hr />
                  <Typography variant="body2" color="text.secondary">
                    Published Date:{" "}
                    {new Date(myBlog?.createdAt).toLocaleString("tr-TR")}
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  sx={{ justifyContent: "space-between" }}
                >
                  <Box>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                      <Typography>{myBlog.likes.length}</Typography>
                    </IconButton>
                    <IconButton aria-label="comment">
                      <CommentIcon />
                      <Typography>{myBlog.comments.length}</Typography>
                    </IconButton>
                    <IconButton aria-label="visible">
                      <VisibilityIcon />
                      <Typography>{myBlog.countOfVisitors}</Typography>
                    </IconButton>
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      color: "#0ef",
                      backgroundColor: "#0C0C0C",
                      cursor: "pointer",
                      "&:hover": {
                        background: "#0ef",
                        color: "#0C0C0C",
                        scale: "1.02",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default MyBlog;
