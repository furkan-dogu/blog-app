import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { Box } from "@mui/joy";
import useBlogCalls from "../../hooks/useBlogCalls";

export default function CommentCard({info,setInfo}) {
  const { detail } = useSelector((state) => state.blog);
  const { _id } = useSelector((state) => state.auth);

  const { deleteComment } = useBlogCalls();

  return (
    <Box sx={{ width: "100%" }}>
      {detail?.comments.map((comment) => (
        <Box key={comment?._id} sx={{ mt: 2 }}>
          <Card
            invertedColors
            sx={{
              boxShadow: "lg",
              maxWidth: "90%",
              overflow: "auto",
              resize: "horizontal",
              m: "auto",
            }}
          >
            <Typography level="h2">{comment?.userId?.username}</Typography>
            <CardContent>
              <Typography level="title-lg">
                {comment?.createdAt &&
                  new Date(comment?.updatedAt).toLocaleString("tr-TR")}
              </Typography>
              <Stack level="body-md">
                <Box>
                  <Typography>{comment?.comment}</Typography>
                  {comment?.userId?._id === _id ? (
                    <CardActions>
                      <Button variant="solid" color="success" onClick={() => {
                        setInfo({...info, _id:comment._id, blogId:comment.blogId, comment:comment.comment})
                      }}>
                        Edit
                      </Button>
                      <Button
                        variant="solid"
                        color="danger"
                        onClick={() => deleteComment(comment)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  ) : (
                    ""
                  )}
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
