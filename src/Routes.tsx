import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import BackDropLoader from "./common/BackDropLoader";

/* lazy imports */
const Layout = React.lazy(() => import("./domain/users/layout/Layout"));
const Dashboard = React.lazy(() => import("./domain/users/dashboard/Users"));
const UserDetail = React.lazy(
  () => import("./domain/users/user-details/UserDetails")
);
const FavoriteUsers = React.lazy(
  () => import("./domain/users/favorite-users/FavoriteUsers")
);
const ContactUs = React.lazy(
  () => import("./domain/users/contact-us/ContactUs")
);
const PageNotFound = React.lazy(() => import("./page-not-found/PageNotFound"));

interface AppRoutesProps {}

const AppRoutes: React.FC<AppRoutesProps> = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<BackDropLoader open={true} />}>
          <Layout />
        </Suspense>
      }
    >
      <Route
        path="/"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/users"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/user-detail/:id"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <UserDetail />
          </Suspense>
        }
      />
      <Route
        path="/favorite-users"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <FavoriteUsers />
          </Suspense>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <ContactUs />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <PageNotFound />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default AppRoutes;
