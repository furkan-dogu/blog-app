import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useBlogCalls from '../../hooks/useBlogCalls';
import { useSelector } from 'react-redux';

export default function CardBlog({ blog }) {
  const navigate = useNavigate()
  const {postLike} = useBlogCalls()
  const {_id} = useSelector(state=>state.auth)

 const likeStyle = blog.likes.includes(_id) ? {color: "red"} : {color:"inherit"}

  return (
    <Card sx={{ width: 350 , height:460 }}>
      <CardMedia
        component="img"
        alt={blog?.title}
        sx={{ width: 350 , height:200, objectFit:"contain" }}
     
        image={blog?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4,
          height:"80px"
        }}>
          {blog?.content}
        </Typography>

        <hr />
        <Typography variant="body2" color="text.secondary">
          Published Date: {new Date(blog?.createdAt).toLocaleString("tr-TR")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Box>
          <IconButton onClick={()=>postLike(blog)}  aria-label="add to favorites">
            <FavoriteIcon sx={likeStyle} />
            <Typography>{blog.likes.length}</Typography>
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
            <Typography>{blog.comments.length}</Typography>
          </IconButton>
          <IconButton aria-label="visible">
            <VisibilityIcon />
            <Typography>{blog.countOfVisitors}</Typography>
          </IconButton>
        </Box>

        <Button variant="contained" sx={{ color: "#0ef", backgroundColor: "#0C0C0C", cursor: "pointer", "&:hover": { background: "#0ef", color: "#0C0C0C", scale:"1.02"} }}
          onClick={() => navigate(`/detail/${blog._id}`)}
        >
          Read More</Button>
      </CardActions>
    </Card>
  );
}