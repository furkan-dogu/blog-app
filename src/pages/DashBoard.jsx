import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import Card from "../components/blog/Card";
import { Stack } from "@mui/material";
import PaginationControlled from "../components/blog/Pagination";
import MostVisited from "../components/blog/MostVisited";
import BlogCategories from "../components/blog/BlogCategories";
import Loading from "../components/blog/Loading";

const DashBoard = () => {
  const { blogs, current } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();
  const [page, setPage] = useState(current);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getBlogs(page);
  }, [page]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Stack
          direction={"row"}
          gap={2}
          justifyContent="center"
          minHeight={"calc(90vh - 70px)"}
        >
          <Stack display={{ xs: "none", md: "block" }}>
            <MostVisited />
          </Stack>

          <Stack flex={1} maxWidth={"90%"} marginTop={5}>
            {blogs.map((blog) => (
              <Card key={blog._id} blog={blog} page={page} />
            ))}
          </Stack>

          <Stack display={{ xs: "none", md: "block" }}>
            <BlogCategories />
          </Stack>
        </Stack>
        <PaginationControlled page={page} setPage={setPage} />
      </>
    );
  }
};

export default DashBoard;
