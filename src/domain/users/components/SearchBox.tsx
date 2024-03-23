import { Box, TextField } from "@mui/material";
import { useState } from "react";

type SearchBoxProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBox = ({ setQuery }: SearchBoxProps) => {
  const [search, setSearch] = useState<string>('');

  return (
    <Box width="50%" marginBottom={3}>
      <TextField
        value={search}
        fullWidth
        id="outlined-basic"
        label="Search users by name"
        variant="outlined"
        size="small"
        onChange={(e) => {
          setSearch(e.target.value.trim());
          // mimics debounce
          setTimeout(()=>{
            setQuery(e.target.value.trim());
          },700)
        }}
      />
    </Box>
  );
};

export default SearchBox;
