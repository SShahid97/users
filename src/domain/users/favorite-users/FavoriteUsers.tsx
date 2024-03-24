import UsersList from "../components/UsersList";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { Box, Divider, Typography } from "@mui/material";
import Empty from "../../../common/Empty";

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
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant="h5" component="h5" color="black">
        Favorite Users
      </Typography>
      <Divider/>
      {favoriteUsers.length > 0 ? (
        <UsersList userList={favoriteUsers ?? []} backdropOpen={open} />
      ) : (
        <Empty description="No favorite users"/>
      )}
    </Box>
  );
};

export default FavoriteUsers;
