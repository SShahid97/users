import { Box, SvgIconProps, Typography } from "@mui/material";
type CardContentBoxProps = {
  icon: React.ElementType<SvgIconProps>;
  text: string;
};
const CardContentBox = ({ icon: Icon, text }: CardContentBoxProps) => {
  return (
    <Box display="flex" alignItems="flex-start" gap={2} mb={1}>
      <Icon />
      <Typography
        maxWidth={"200px"}
        whiteSpace={"nowrap"}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        variant="subtitle1"
        component="p"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CardContentBox;
