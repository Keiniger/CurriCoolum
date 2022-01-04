import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
const App = React.lazy(() => import("./App"));
const Popup = React.lazy(() => import("./components/popup/Popup"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <App />
            </Suspense>
          }
        />
        <Route
          path="/:lang"
          element={
            <Suspense fallback={<></>}>
              <App />
            </Suspense>
          }
        />
        <Route
          path="/:lang/popup/:id"
          element={
            <Suspense fallback={<></>}>
              <Popup />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
