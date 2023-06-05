import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Darshboard";
import Protected from "./components/Routes/Protected";
import { useState } from "react";
import PageNotFound from "./components/Routes/PageNotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const router = createBrowserRouter([
    { path: "/login", element: <Login onLogin={loginHandler} /> },
    {
      path: "/home",
      element: (
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
