import UsersList from "../components/UsersList";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { Box, Typography } from "@mui/material";

const FavoriteUsers = () => {
  const { favoriteUsers } = useAppSelector((state) => state.reducer.user);
  const [open, setOpen] = useState<boolean>(false);
  
  useEffect(() => {
    if (!favoriteUsers) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [favoriteUsers]);
  return (
    <Box display={'flex'} flexDirection={'column'} gap={4}>
       <Typography variant="h5" component="h5" color="black">
          Favorite Users
        </Typography>
      <UsersList userList={favoriteUsers ?? []} backdropOpen={open} />
    </Box>
  );
};

export default FavoriteUsers;
