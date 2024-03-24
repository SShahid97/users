import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useContactUsMutation } from "../apis";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  // api call
  const [contactus, { isLoading }] = useContactUsMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmailError(false);
    setNameError(false);
    if (email === "") {
      setEmailError(true);
    }
    if (name === "") {
      setNameError(true);
    }
    if (email && name) {
      contactus({
        service_id: import.meta.env.VITE_REACT_APP_SERVICE_ID,
        template_id: import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        user_id: import.meta.env.VITE_REACT_APP_USER_ID,
        template_params: {
          name: name,
          email: email,
        },
      })
        .then((res) => {
          if (
            "error" in res &&
            "originalStatus" in res.error &&
            res.error.originalStatus === 200
          ) {
            enqueueSnackbar("Your message has been sent successfully", {
              variant: "success",
            });
            setEmail("");
            setMessage("");
            setName("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Box width={"50vw"}>
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <Box mb={3}>
          <Typography variant="h5" component="h5" color="black" mb={1}>
            {t("DASHBOARD.CONTACT_US")}
          </Typography>
          <Divider />
        </Box>
        <TextField
          label={t("DASHBOARD.NAME")}
          onChange={(e) => setName(e.target.value)}
          required
          variant="outlined"
          color="primary"
          type="text"
          value={name}
          error={nameError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label={t("DASHBOARD.EMAIL")}
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="primary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label={t("DASHBOARD.YOUR_MESSAGE")}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          color="primary"
          type="text"
          value={message}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button
          style={{ paddingLeft: 30, paddingRight: 30 }}
          variant="outlined"
          color="primary"
          type="submit"
        >
          {isLoading ? (
            <CircularProgress size={25} />
          ) : (
            `${t("DASHBOARD.SUBMIT")}`
          )}
        </Button>
      </form>
    </Box>
  );
};

export default ContactUs;
