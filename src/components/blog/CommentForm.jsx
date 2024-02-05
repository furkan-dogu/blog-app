import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import useBlogCalls from "../../hooks/useBlogCalls";

export default function CommentForm({ info, setInfo, blogId }) {

  const { postComment, editComment } = useBlogCalls();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      editComment(info);
    } else {
      postComment({ ...info, blogId });
    }
    setInfo({ comment: "" });
  };

  return (
    <FormControl
      sx={{ maxWidth: "800px", width:"80%" }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <FormLabel>Your comment</FormLabel>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        onChange={handleChange}
        name="comment"
        value={info.comment}
        endDecorator={
          <Box
            sx={{
              display: "flex",
              gap: "var(--Textarea-paddingBlock)",
              pt: "var(--Textarea-paddingBlock)",
              borderColor: "divider",
              flex: "auto",
            }}
          >
            <Button type="submit" sx={{ ml: "auto", px: 4 }}>
              Send
            </Button>
          </Box>
        }
      />
    </FormControl>
  );
}
