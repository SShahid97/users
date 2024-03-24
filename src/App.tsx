import AppRoutes from "./Routes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SnackbarProvider } from "notistack";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={3000}
      >
        <AppRoutes />
      </SnackbarProvider>
    </>
  );
}

export default App;
