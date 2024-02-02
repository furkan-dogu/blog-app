import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

export default function Profile() {
  const { user, image, bio, email } = useSelector((state) => state.auth);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"calc(90vh - 70px)"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        textAlign={"center"}
        mt={2}
      >
        <CardMedia
          component="img"
          alt={user}
          image={image}
          sx={{ width: 300, height: 300 }}
        />
        <CardContent>
          <Typography variant="h5">{user}</Typography>
          <Typography variant="body1" my={2}>
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary" p={1}>
            {bio}
          </Typography>
        </CardContent>
      </Box>
    </Stack>
  );
}
