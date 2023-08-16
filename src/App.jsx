import HeaderNav from "./component/HeaderNav";
import FooterMe from "./component/FooterMe";
import AboutMe from "./component/AboutMe";
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SingleWork from "./pages/SingleWork";


const Layout = () => {
  return (
    <>
      <HeaderNav />
      <ScrollRestoration/>
      <Outlet />
      <AboutMe />
      <FooterMe />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <SingleWork/>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
