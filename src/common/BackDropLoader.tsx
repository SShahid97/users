import { Backdrop, CircularProgress } from "@mui/material";

type BackDropLoaderProps = {
  open: boolean;
};
const BackDropLoader = ({ open }: BackDropLoaderProps) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDropLoader;
