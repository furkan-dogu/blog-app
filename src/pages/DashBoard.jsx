import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import Card from "../components/blog/Card";
import { Grid, Stack } from "@mui/material";
import PaginationControlled from "../components/Pagination";

const DashBoard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBlogs(page);
  }, [page]);

  return (
    <Stack justifyContent={"space-between"} minHeight={"calc(100vh - 70px)"}>
      <Grid container gap={3} my={3} justifyContent={"center"}>
        {blogs.map((blog) => (
          <Grid item key={blog._id}>
            <Card blog={blog} />
          </Grid>
        ))}
      </Grid>
      <PaginationControlled
        page={page}
        setPage={setPage}
      />
    </Stack>
  );
};

export default DashBoard;
