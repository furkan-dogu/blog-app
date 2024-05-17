import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function PaginationControlled({ page, setPage }) {

    const { totalPages } = useSelector((state) => state.blog);

    const handleChange = (event, value) => {
      setPage(value);
    };

  return (
    <Stack spacing={2} justifyContent={"center"} alignItems={"center"} my={2}>
      <Pagination count={totalPages?.pages?.total || 1} page={Number(page)} onChange={handleChange} />
    </Stack>
  );
}