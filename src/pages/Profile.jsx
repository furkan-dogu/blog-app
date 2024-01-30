import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

export default function Profile() {
  const {user, image, bio, email} = useSelector(state=>state.auth)

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Box sx={{ textAlign:"center" }}>
        <CardMedia
          component="img"
          alt={user}
          image={image}
          sx={{width:"300px", height:"300px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>
        </CardContent>
      </Box>
    </Stack>
  );
}
