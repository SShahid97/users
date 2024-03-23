import { Box, Typography, styled } from "@mui/material";

type ContactInfoFieldProps = {
  fieldName: string;
  value: string | number;
  valueColor?: string;
};
const ContactInfoField = ({ fieldName, value, valueColor='gray' }: ContactInfoFieldProps) => {
  const InfoFields = styled("div")(({ theme }) => ({
    display: "flex",
    width:'70%',
    alignItems:'center',
    gap: 4,
    [theme.breakpoints.down("md")]: {
      width:'100%',
    },
  }));
  return (
    <InfoFields >
      <Box width='20%' minWidth={90}>
        <Typography variant="subtitle1" component="h5" fontWeight={500} color="black">
          {fieldName}
        </Typography>
      </Box>
      <Box width='80%'>
        <Typography variant="subtitle2" component="h5" color={valueColor}>
          {value}
        </Typography>
      </Box>
    </InfoFields>
  );
};

export default ContactInfoField;
