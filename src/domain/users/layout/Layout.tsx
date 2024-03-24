import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet, useNavigate } from "react-router-dom";
import DrawerListItem from "./components/DrawerListItem";
import { ContactMail, Dashboard, Favorite } from "@mui/icons-material";
import { useCurrentPath } from "../../../hooks/useCurrentPath";
import { paths } from "../../../paths";
import LocaleSwitcher from "../../../common/LocaleSwitcher";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Layout() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const path = useCurrentPath();
  const {t} = useTranslation();

  const getCurrentPath = () => {
    if (path) {
      return path[0]?.pathname?.slice(1);
    }
  };

  const isActiveTab = (tab: string) => {
    if (path) {
      return getCurrentPath() === tab;
    }
  };

  const handleDrawerOpenClose = () => {
    setOpen((prev) => !prev);
  };

  const handleRouteNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"baseline"}
          >
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpenClose}
                edge="start"
                sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
              {t('DASHBOARD.APP_NAME')}
              </Typography>
            </Box>

            <Box display={"flex"} alignSelf="end">
              <LocaleSwitcher />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpenClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <DrawerListItem
            onClick={() => handleRouteNavigation(paths.dashboard)}
            open={open}
            text="Dashboard"
            icon={Dashboard}
            active={path === null ? true : isActiveTab(paths.dashboard)!}
          />
          <DrawerListItem
            onClick={() => handleRouteNavigation(paths.favoriteUsers)}
            open={open}
            text="Favorite Users"
            icon={Favorite}
            active={isActiveTab(paths.favoriteUsers) ?? false}
          />
          <DrawerListItem
            onClick={() => handleRouteNavigation(paths.contactUs)}
            open={open}
            text="Contact Us"
            icon={ContactMail}
            active={isActiveTab(paths.contactUs) ?? false}
          />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
