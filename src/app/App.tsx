import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Quiz1 from "../pages/quiz/quiz-1";
import Quiz2 from "../pages/quiz/quiz-2";
import Quiz3 from "../pages/quiz/quiz-3";
import Quiz4 from "../pages/quiz/quiz-4";
import Quiz5 from "../pages/quiz/quiz-5";
import SearchCollection from "../pages/search";
import ConfirmEmail from "../pages/email";
import Finish from "../pages/finish";
import NotFound from "../pages/not-found";
import Loader from "../components/Loader";
import { ROUTE_PATHS } from "../utils/constants";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTE_PATHS.ROOT}
          element={
            <Suspense fallback={<Loader />}>
              <Navigate to={ROUTE_PATHS.QUIZ_1} />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.QUIZ_1}
          element={
            <Suspense fallback={<Loader />}>
              <Quiz1 />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.QUIZ_2}
          element={
            <Suspense fallback={<Loader />}>
              <Quiz2 />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.QUIZ_3}
          element={
            <Suspense fallback={<Loader />}>
              <Quiz3 />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.QUIZ_4}
          element={
            <Suspense fallback={<Loader />}>
              <Quiz4 />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.QUIZ_5}
          element={
            <Suspense fallback={<Loader />}>
              <Quiz5 />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.SEARCH}
          element={
            <Suspense fallback={<Loader />}>
              <SearchCollection />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.EMAIL}
          element={
            <Suspense fallback={<Loader />}>
              <ConfirmEmail />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.FINISH}
          element={
            <Suspense fallback={<Loader />}>
              <Finish />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATHS.NOT_FOUND}
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
