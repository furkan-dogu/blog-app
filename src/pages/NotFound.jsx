import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Stack } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight={"calc(90vh - 70px)"}
      bgcolor={"#0C0C0C"}
    >
      <Typography variant="h1" color="white">
        404
      </Typography>
      <Typography variant="h5" color="white">
        Page not found
      </Typography>
      <Typography variant="body1" color="white" textAlign={"center"}>
        Sorry, the page you are looking for doesn't exist
      </Typography>
      <Stack justifyContent={"center"} alignItems={"center"} flexDirection={"row"} gap={2}>
        <Button onClick={() => navigate(-1)} variant="contained" color="primary">
          Go Back
        </Button>
        <Button onClick={() => navigate("/")} variant="contained" color="success">
          Go Home
        </Button>
      </Stack>
    </Stack>
  );
};

export default NotFound;
