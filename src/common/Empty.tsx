import { Box, Typography } from "@mui/material";

type EmptyProps = {
  description?: string;
};
const Empty = ({ description = "Empty" }: EmptyProps) => {
  return (
    <Box
      display={"flex"}
      height={"70vh"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Typography variant="h6" component="h4" fontWeight={500} color={'gray'}>
        {description}
      </Typography>
    </Box>
  );
};

export default Empty;
