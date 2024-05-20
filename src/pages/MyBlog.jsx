import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import MyBlogCard from "../components/blog/MyBlogCard";
import Loading from "../components/blog/Loading";

const MyBlog = () => {
  const navigate = useNavigate();
  const { getMyBlogs } = useBlogCalls();

  const { _id } = useSelector((state) => state.auth);
  const { myBlogs } = useSelector((state) => state.blog);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getMyBlogs(_id);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        {!myBlogs.length ? (
          <Box minHeight={"calc(90vh - 70px)"}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                gap: 2,
                flexDirection: "column",
              }}
            >
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
            </Box>
          </Box>
        ) : (
          <Box minHeight={"calc(90vh - 94px)"} mx={5}>
            <Grid container spacing={2} my={3} justifyContent={"center"}>
              {myBlogs.map((myBlog) => (
                <Grid item xs={12} sm={6} md={4} lg={3} my={1} key={myBlog._id}>
                  <MyBlogCard myBlog={myBlog} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </>
    );
  }
};

export default MyBlog;
