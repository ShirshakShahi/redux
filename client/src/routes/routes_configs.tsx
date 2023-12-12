import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteConstants from "../constants/routes_config";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/Loading";

const RoutesConfig: React.FC = () => {
  const LazyHomePage = lazy(() => import("../pages/HomePage"));
  const LazyAboutPage = lazy(() => import("../pages/AboutPage"));
  const LazyEditTodo = lazy(() => import("../components/edit_todo/EditTodo"));

  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={RouteConstants.HOME} element={<LazyHomePage />} />
            <Route path={RouteConstants.ABOUT} element={<LazyAboutPage />} />
            <Route
              path={`${RouteConstants.EDIT}/:id`}
              element={<LazyEditTodo />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default RoutesConfig;
