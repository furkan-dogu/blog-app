import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";

const defaultTheme = createTheme();

export default function Register() {
  const { register } = useAuthCalls();

  return (
    <Box minHeight={"calc(90vh - 70px)"}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              paddingTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#0c0c0c" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Formik
              initialValues={{
                username: "",
                password: "",
                email: "",
                firstName: "",
                lastName: "",
                image: "",
                bio: ""
              }}
              validationSchema={registerSchema}
              onSubmit={(values, actions) => {
                register(values);
                actions.setSubmitting(false);
              }}
              component={(props) => <RegisterForm {...props} />}
            ></Formik>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
