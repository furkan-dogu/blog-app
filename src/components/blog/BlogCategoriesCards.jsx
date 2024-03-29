import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogCategoriesCards({ sortedBlog }) {
  const navigate = useNavigate();
  return (
    <Stack
      flexDirection={{ xl: "row", lg: "column" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/detail/${sortedBlog._id}`)}
    >
      <Box sx={{ width: 100, height: 80 }}>
        <CardMedia
          component="img"
          alt={sortedBlog?.title}
          image={sortedBlog?.image}
          sx={{ width: 100, height: 80, borderRadius: 1 }}
        />
      </Box>
      <Box width={180}>
        <Typography
          variant="body1"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {sortedBlog?.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {new Date(sortedBlog?.createdAt).toLocaleString("tr-TR")}
        </Typography>
      </Box>
    </Stack>
  );
}
