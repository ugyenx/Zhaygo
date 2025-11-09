import ReactDOM from "react-dom/client";
import Header from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestaurantMenu";
import BlurredBackground from "./components/BlurredBackground";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div className="relative min-h-screen mx-50 mt-10 font-body">
      <BlurredBackground />
      <Header />
      <Outlet />
    </div>
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
