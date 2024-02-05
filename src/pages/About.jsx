import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { links } from "../helper/aboutLinks"

export default function ImgMediaCard() {
  return (
    <Stack
      minHeight={"calc(90vh - 70px)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box sx={{ maxWidth: 400, boxShadow: 5, py: 5, px: 5 }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <CardMedia
            component="img"
            alt="Furkan Doğu"
            image="https://avatars.githubusercontent.com/u/140394399?v=4"
            sx={{ width: 150, height: 150, borderRadius: "50%" }}
          />
        </Stack>
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            textAlign={"center"}
          >
            Furkan Doğu
          </Typography>
          <Typography variant="h5" color="text.secondary" textAlign={"center"}>
            Frontend Developer
          </Typography>
        </CardContent>
        <Stack flexDirection={"row"} justifyContent={"center"} gap={1}>
          {links.map(({ id, icon, link }) => (
            <IconButton key={id} aria-label="github">
              <Link to={link} target="_blank">
                {icon}
              </Link>
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
