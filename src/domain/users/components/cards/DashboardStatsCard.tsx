import { Box, SvgIconProps, Typography } from "@mui/material";

type DashboardStatsCardProps = {
  title: string;
  value: string | number;
  bgColor?: string;
  icon: React.ElementType<SvgIconProps>;
  iconColor?: "inherit" | "action" | "disabled" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
};
const DashboardStatsCard = ({
  title,
  value,
  bgColor,
  icon: Icon,
  iconColor,
}: DashboardStatsCardProps) => {
  return (
    <Box
      display={"flex"}
      minWidth={240}
      width={'100%'}
      bgcolor={bgColor}
      borderRadius={1}
      p={2}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      border={'1px solid #e1dede'}
    >
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Typography variant="h6" component="h6" color="gray">
          {title}
        </Typography>
        <Typography variant="h5" component="h5" color="black">
          {value}
        </Typography>
      </Box>
      <Icon fontSize="large" color={iconColor} />
    </Box>
  );
};

export default DashboardStatsCard;
