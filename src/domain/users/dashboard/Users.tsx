import Box from "@mui/material/Box";
import { useGetUsersQuery } from "../apis";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";
import { TablePagination } from "@mui/material";
import UsersList from "../components/UsersList";
import DashboardStats from "../components/DashboardStats";
import { useSnackbar } from "notistack";

const Users = () => {
  const defaultPageSize = 12;
  const defaultOffset = 0;
  const [query, setQuery] = useState<string>("");
  const [offset, setOffset] = useState<number>(defaultOffset);
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultPageSize);
  const { enqueueSnackbar } = useSnackbar();

  const { data: userData, isFetching, isError } = useGetUsersQuery({
    skip: offset,
    limit: rowsPerPage,
    search: query ? true : false,
    query
  });

  // error handling
  useEffect(()=>{
    if(isError){
      enqueueSnackbar("Error while fetching data", {
        variant: "error",
      });
    }
  },[isError, enqueueSnackbar])

  useEffect(() => {
    if (isFetching) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isFetching]);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    if(page > newPage){
      setOffset((prev)=>prev-defaultPageSize);  
    }else{
      setOffset((prev)=>prev+defaultPageSize);
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box width="100%">
      <DashboardStats/>
      <SearchBox setQuery={setQuery} />
      <UsersList userList={userData?.users ?? []} backdropOpen={open} />
      <Box
        width="100%"
        padding={2}
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        borderTop="1px solid #e1dede"
        marginTop={3}
      >
         <TablePagination
            component="div"
            count={userData?.total ?? 0}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[12, 24, 48, 72, 100]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={'Items per page'}
          />
      </Box>
    </Box>
  );
};

export default Users;
