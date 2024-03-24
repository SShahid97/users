import { useEffect, useMemo, useState } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const LocaleSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const languages = useMemo(
    () => [
      { value: "en", label: "English" },
      { value: "pt", label: "português" },
      { value: "ja", label: "日本語" },
    ],[]
  );

  const handleChange = (value: SelectChangeEvent<string>) => {
    i18next.changeLanguage(value.target.value);
    cookies.set("i18next", value.target.value);
    setCurrentLanguage(value.target.value);
  };

  const currentLanguageCode = cookies.get("i18next") || "en";
  useEffect(() => {
    for (const lan of languages) {
      if (lan.value == currentLanguageCode) {
        setCurrentLanguage(lan.value);
      }
    }
  }, [currentLanguageCode, languages]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl  variant="standard" fullWidth>
        <InputLabel id="change-languageselect-label"  style={{color:'white'}}>
          Change Language
        </InputLabel>
        <Select
          labelId="change-language-label"
          id="change-language"
          value={currentLanguage}
          defaultValue={currentLanguage}
          label="Age"
          size="small"
          style={{color: 'white'}}
          onChange={(e) => handleChange(e)}
        >
          {languages?.map((lan) => (
            <MenuItem key={lan.value} value={lan.value}>{lan.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LocaleSwitcher;
