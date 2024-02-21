import { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import { Stack, Typography } from "@mui/material";
import MostVisitedCards from "./MostVisitedCards";

const MostVisited = () => {
  const { blogsAll } = useSelector((state) => state.blog);
  const { getBlogsAll } = useBlogCalls();

  useEffect(() => {
    getBlogsAll();
  }, []);

  const sortedBlogs = blogsAll
    .slice(0, 10)
    .sort((a, b) => b.countOfVisitors - a.countOfVisitors);

  return (
    <Stack gap={2} m={2} mt={5}>
      <Typography
        align="center"
        variant="h5"
        sx={{ textDecoration: "underline" }}
      >
        Most Visited
      </Typography>

      {sortedBlogs.map((sortedBlog) => (
        <MostVisitedCards key={sortedBlog._id} sortedBlog={sortedBlog} />
      ))}
    </Stack>
  );
};

export default MostVisited;
