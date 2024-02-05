export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "& .MuiTextField-root": { m: 1 },
  maxWidth: "500px",
  margin: "auto",
  padding: "20px",
  borderRadius: "12px",
  mt: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 1,
};

export const status = [
  {
    name: "Draft",
    isPublish: false,
  },
  {
    name: "Published",
    isPublish: true,
  },
];
