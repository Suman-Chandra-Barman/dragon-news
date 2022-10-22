import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Profile from "../pages/Other/Profile";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivetRoute>
            <News />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
