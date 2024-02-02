import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack height={"10vh"} bgcolor={"#0C0C0C"} justifyContent={"center"} alignItems={"center"}>
      <Box textAlign={"center"} color={"white"}>
        <Typography>Developed by Furkan Doğu</Typography>
        <Typography>Copyright &copy; 2024</Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
