import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack height={"10vh"} bgcolor={"#0C0C0C"} justifyContent={"center"} alignItems={"center"}>
      <Box textAlign={"center"} color={"white"}>
        <Typography>Copyright &copy; 2024 by Furkan Doğu </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
