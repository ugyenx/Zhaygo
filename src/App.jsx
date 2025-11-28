import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestaurantMenu";
import BlurredBackground from "./components/BlurredBackground";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";
import { useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./pages/Cart";
const App = () => {
  const [userName, setuserName] = useState();
  const { LoggedInUser } = useContext(UserContext);
  useEffect(() => {
    const data = {
      name: "NameKha",
    };
    setuserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: userName, setuserName }}>
        <div className="relative min-h-screen mx-50 mt-10 font-body">
          <BlurredBackground />
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/restaurant/:restId",
        element: <RestuarantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/groceries",
      //   element: (
      //     <Suspense fallback={<h1>Loading</h1>}>
      //       <Groceries />
      //     </Suspense>
      //   ),
      // },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
