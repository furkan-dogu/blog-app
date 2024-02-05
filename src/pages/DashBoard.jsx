import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import Card from "../components/blog/Card";
import { Stack } from "@mui/material";
import PaginationControlled from "../components/blog/Pagination";
import MostVisited from "../components/blog/MostVisited";

const DashBoard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBlogs(page);
  }, [page]);

  return (
    <>
      <Stack
        minHeight={"calc(90vh - 70px)"}
        justifyContent={"center"}
        flexDirection={"row"}
        gap={5}
      >
        <MostVisited />
        {/* <Stack justifyContent="center" flexGrow={1}> */}
        <Stack justifyContent="center">
          {blogs.map((blog) => (
            <Card key={blog._id} blog={blog} />
          ))}
        </Stack>
        <MostVisited />
      </Stack>
      <PaginationControlled page={page} setPage={setPage} />
    </>
  );
};

export default DashBoard;
