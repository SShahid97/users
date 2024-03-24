import { Box, Grid, IconButton, Tooltip, Zoom } from "@mui/material";
import { useGetUserQuery } from "../apis";
import { useNavigate, useParams } from "react-router-dom";
import BackDropLoader from "../../../common/BackDropLoader";
import UserDetailsLeftBox from "../components/UserDetailsLeftBox";
import UserDetailsRightBox from "../components/UserDetailsRightBox";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { ArrowBack } from "@mui/icons-material";

const UserDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // api
  const { data: userData, isFetching, isError } = useGetUserQuery({
    id: params.id ?? 1,
  });

   // error handling
   useEffect(()=>{
    if(isError){
      enqueueSnackbar("Error while fetching data", {
        variant: "error",
      });
    }
  },[isError, enqueueSnackbar])
  
  const handleNavigate = ()=>{
    navigate(-1);
  }
  return (
    <Box width={'100%'}>
      <Box marginBottom={2}>
        <IconButton aria-label="navigate back" onClick={handleNavigate}>
        <Tooltip TransitionComponent={Zoom} title="Go back">
          <ArrowBack/>
          </Tooltip>
        </IconButton>
      </Box>  
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
    </Box>
  );
};

export default UserDetails;
