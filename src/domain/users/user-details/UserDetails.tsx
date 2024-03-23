import { Grid } from "@mui/material";
import { useGetUserQuery } from "../apis";
import { useParams } from "react-router-dom";
import BackDropLoader from "../../../common/BackDropLoader";
import UserDetailsLeftBox from "../components/UserDetailsLeftBox";
import UserDetailsRightBox from "../components/UserDetailsRightBox";

const UserDetails = () => {
  const params = useParams();

  // api
  const { data: userData, isFetching } = useGetUserQuery({
    id: params.id ?? 1,
  });
  return (
    <Grid container style={{paddingLeft:30}} >
      <BackDropLoader open={isFetching} />
      {userData && (
        <>
          <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
            <UserDetailsLeftBox userData={userData}/>
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
            <UserDetailsRightBox  userData={userData} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default UserDetails;
