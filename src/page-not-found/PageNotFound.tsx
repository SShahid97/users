import { Box } from "@mui/material";
import PageNotFoundImage from "../assets/pageNotFound.jpg";

const PageNotFound = () => {
  return (
    <Box display={"flex"}  alignItems={"center"} justifyContent={"center"}>
      <Box
        component="img"
        sx={{
          height: "80vh",
          width: "60vw",
        }}
        alt={"page not found"}
        src={PageNotFoundImage}
      />
    </Box>
  );
};

export default PageNotFound;
