import { Box, Typography, styled } from "@mui/material";
import { User } from "../types";
import { Place } from "@mui/icons-material";
import ContactInfoField from "./cards/ContactInfoFields";
import { blue } from "@mui/material/colors";

type UserDetailsLeftBoxProps = {
  userData: User;
};

const UserDetailsRightBox = ({ userData }: UserDetailsLeftBoxProps) => {
  const NameLocation = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  }));
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <NameLocation>
        <Typography variant="h4" component="h4" color="black" marginRight={3}>
          {userData?.firstName} {userData?.lastName}
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Place color={"disabled"} />
          <Typography variant="subtitle2" component="h5" color={"gray"}>
            {userData?.company?.address?.address}
          </Typography>
        </Box>
      </NameLocation>
      <Box display="flex" flexDirection="column" alignItems="baseline">
        <Typography
          variant="subtitle2"
          component="h5"
          color={"gray"}
          marginBottom={2}
        >
          {"Contact Information".toUpperCase()}
        </Typography>
        <ContactInfoField fieldName="Phone:" value={userData?.phone} />
        <ContactInfoField
          fieldName="Address:"
          value={`${userData?.address.address} ${userData?.company?.address?.city}
            ${userData?.company?.address?.state}
            ${userData?.company?.address?.postalCode}`}
        />
        <ContactInfoField
          fieldName="Email:"
          value={userData?.email}
          valueColor={blue[500]}
        />
        <ContactInfoField
          fieldName="Domain:"
          value={userData?.domain}
          valueColor={blue[500]}
        />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="baseline">
        <Typography
          variant="subtitle2"
          component="h5"
          color={"gray"}
          marginBottom={2}
        >
          {"Basic Information".toUpperCase()}
        </Typography>
        <ContactInfoField fieldName="Birthday:" value={userData?.birthDate} />
        <ContactInfoField fieldName="Age:" value={userData?.age} />
        <ContactInfoField fieldName="Gender:" value={userData?.gender} />
        <ContactInfoField
          fieldName="Blood Group:"
          value={userData?.bloodGroup}
        />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="baseline">
        <Typography
          variant="subtitle2"
          component="h5"
          color={"gray"}
          marginBottom={2}
        >
          {"Education".toUpperCase()}
        </Typography>
        <ContactInfoField fieldName="University:" value={userData?.university} />
      </Box>
    </Box>
  );
};

export default UserDetailsRightBox;
