import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserCard from "./cards/UserCard";
import BackDropLoader from "../../../common/BackDropLoader";
import { User } from "../types";

type UsersListProps = {
  userList: User[];
  backdropOpen: boolean;
}

const UsersList = ({userList, backdropOpen}:UsersListProps) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
        <BackDropLoader open={backdropOpen} />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {userList &&
            userList?.length > 0 &&
            userList?.map((user) => (
              <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
                <UserCard
                  user={user}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
  );
};

export default UsersList;
