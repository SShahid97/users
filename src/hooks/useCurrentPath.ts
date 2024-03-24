import { matchRoutes, useLocation } from "react-router-dom";
import { paths } from "../paths";

const routes = [
  {
    path: paths.dashboard,
  },
  {
    path: paths.favoriteUsers,
  },
  {
    path: paths.userDetails,
  },
  {
    path: paths.contactUs,
  },
];

export const useCurrentPath = () => {
  const location = useLocation();
  const route = matchRoutes(routes, location);

  return route;
};
