import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const links = [
  {
    id: 1,
    icon: <HomeIcon sx={{ fontSize: "2rem", color:"black", "&:hover":{color:"#0EF"}}} />,
    link: "https://furkandogu.vercel.app/",
  },
  {
    id: 2,
    icon: <InstagramIcon sx={{ fontSize: "2rem", color:"black", "&:hover":{color:"#F70D41"}}}/>,
    link: "https://www.instagram.com/furkan.dogu_/",
  },
  {
    id: 3,
    icon: <GitHubIcon sx={{ fontSize: "2rem", color:"black", "&:hover":{color:"darkgray"}}} />,
    link: "https://github.com/furkan-dogu",
  },
  {
    id: 4,
    icon: <LinkedInIcon sx={{ fontSize: "2rem", color:"black", "&:hover":{color:"#0274B3"}}} />,
    link: "https://www.linkedin.com/in/furkan-dogu/",
  },
];

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
