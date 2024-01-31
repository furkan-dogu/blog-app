import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import MyBlogCard from "../components/blog/MyBlogCard";

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
              <MyBlogCard myBlog={myBlog} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default MyBlog;
