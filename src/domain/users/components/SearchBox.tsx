import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type SearchBoxProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBox = ({ setQuery }: SearchBoxProps) => {
  const [search, setSearch] = useState<string>("");
  const {t}= useTranslation();

  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={'end'}
      marginBottom={3}
    >
      <Typography variant="h6" width={'50%'} component="h6" color="black">
      {t('DASHBOARD.USER_PROFILES_TEXT')}
      </Typography>
      <TextField
        style={{width:'50%'}}
        value={search}
        id="outlined-basic"
        label={t('DASHBOARD.SEARCH_PLACEHOLDER')}
        variant="outlined"
        size="small"
        onChange={(e) => {
          setSearch(e.target.value.trim());
          // mimics debounce
          setTimeout(() => {
            setQuery(e.target.value.trim());
          }, 700);
        }}
      />
    </Box>
  );
};

export default SearchBox;
