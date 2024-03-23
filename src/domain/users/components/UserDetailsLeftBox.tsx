import { Box, Typography } from "@mui/material";
import { User } from "../types";

type UserDetailsLeftBoxProps = {
  userData: User;
};

const UserDetailsLeftBox = ({ userData }: UserDetailsLeftBoxProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box
        component="img"
        sx={{
          height: { xs: 210, md: 250 },
          width: { xs: 260, md: 290 },
          border: "1px solid #e1dede",
          padding: 1,
        }}
        alt={userData?.firstName}
        src={userData?.image}
      />
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="subtitle2" component="h5" color={"gray"}>
          {"Work".toUpperCase()}
        </Typography>
        <Box>
          <Typography variant="h6" component="h6" color="black">
            {userData?.company?.name}
          </Typography>
          <Typography variant="subtitle2" component="h5" color={"gray"}>
            {userData?.company?.title}
          </Typography>
          <Typography variant="subtitle2" component="h5" color={"gray"}>
            {userData?.company?.department}
          </Typography>
          <Typography variant="subtitle2" component="h5" color={"gray"}>
            {userData?.company?.address?.address}
          </Typography>
          <Typography variant="subtitle2" component="h5" color={"gray"}>
            {userData?.company?.address?.city}{" "}
            {userData?.company?.address?.state} {" "}
            {userData?.company?.address?.postalCode}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetailsLeftBox;
