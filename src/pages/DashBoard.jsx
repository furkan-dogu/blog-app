import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import Card from "../components/blog/Card";
import { Grid } from "@mui/material";
import PaginationControlled from "../components/Pagination";

const DashBoard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBlogs(page);
  }, [page]);

  return (
    <>
      <Grid container spacing={2} my={3} justifyContent={"center"} minHeight={"calc(100vh - 70px)"}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} my={1} key={blog._id}>
            <Card blog={blog} />
          </Grid>
        ))}
      </Grid>
      <PaginationControlled page={page} setPage={setPage} />
    </>
  );
};

export default DashBoard;
