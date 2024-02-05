import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const links = [
  {
    id: 1,
    icon: (
      <HomeIcon
        sx={{ fontSize: "2rem", color: "black", "&:hover": { color: "#0EF" } }}
      />
    ),
    link: "https://furkandogu.vercel.app/",
  },
  {
    id: 2,
    icon: (
      <InstagramIcon
        sx={{
          fontSize: "2rem",
          color: "black",
          "&:hover": { color: "#F70D41" },
        }}
      />
    ),
    link: "https://www.instagram.com/furkan.dogu_/",
  },
  {
    id: 3,
    icon: (
      <GitHubIcon
        sx={{
          fontSize: "2rem",
          color: "black",
          "&:hover": { color: "darkgray" },
        }}
      />
    ),
    link: "https://github.com/furkan-dogu",
  },
  {
    id: 4,
    icon: (
      <LinkedInIcon
        sx={{
          fontSize: "2rem",
          color: "black",
          "&:hover": { color: "#0274B3" },
        }}
      />
    ),
    link: "https://www.linkedin.com/in/furkan-dogu/",
  },
];
