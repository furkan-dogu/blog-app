import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack, IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form } from "formik";
import { object, string } from "yup";

export const registerSchema = object({
  email: string()
    .email("Please enter a valid e-mail.")
    .required("E-mail entry is mandatory."),
  password: string()
    .required("Password is mandatory.")
    .min(8, "The password must contain at least 8 characters.")
    .max(16, "The password must contain a maximum of 16 characters.")
    .matches(/\d+/, "The password must contain at least one number.")
    .matches(
      /[a-z]/,
      "The password must contain at least one lower case letter."
    )
    .matches(/[A-Z]/, "The password must contain at least one capital letter.")
    .matches(
      /[@$!%*?&]+/,
      "The password must contain at least one special character (@$!%*?&)."
    ),
    username: string().required("Username entry is mandatory."),
    firstName: string().required("First name entry is mandatory."),
    lastName: string().required("Last name entry is mandatory."),
    image: string().required("Image entry is mandatory."),
    bio: string().required("Bio entry is mandatory."),
});

const RegisterForm = ({
  handleChange,
  values,
  touched,
  errors,
  handleBlur,
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Form>
      <Box noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
          error={touched.username && Boolean(errors.username)}
          helperText={errors.username}
          onBlur={handleBlur}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={errors.firstName}
          onBlur={handleBlur}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={errors.lastName}
          onBlur={handleBlur}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={errors.email}
          onBlur={handleBlur}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="image"
          label="Image"
          name="image"
          type="url"
          value={values.image}
          onChange={handleChange}
          error={touched.image && Boolean(errors.image)}
          helperText={errors.image}
          onBlur={handleBlur}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="bio"
          label="Bio"
          name="bio"
          type="text"
          value={values.bio}
          onChange={handleChange}
          error={touched.bio && Boolean(errors.bio)}
          helperText={errors.bio}
          onBlur={handleBlur}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={errors.password}
          onBlur={handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor:"#0c0c0c", "&:hover":{backgroundColor:"#2F2F2F"} }}
        >
          Sign Up
        </Button>
        <Stack direction={"row"} gap={"5px"} justifyContent={"center"}>
          <Typography variant="body2">Already have an account?</Typography>

          <Typography
            variant="body2"
            sx={{ color: "red", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Sign In
          </Typography>
        </Stack>
      </Box>
    </Form>
  );
};

export default RegisterForm;
