import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCalls from '../hooks/useBlogCalls'
import Card from '../components/blog/Card'
import { Grid } from '@mui/material'

const DashBoard = () => {
  const {blogs} = useSelector(state=>state.blog)
  const {getBlogs} = useBlogCalls()
  useEffect(() => {
    getBlogs()
  }, [])
  
  return (
    <Grid container gap={3} mt={3} justifyContent={"center"}>
      {blogs.map((blog) => (
        <Grid item key={blog._id}>
          <Card blog={blog} />
        </Grid>
      ))}
    </Grid>
  )
}

export default DashBoard