import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import AddCoffee from "./component/AddCoffee.jsx";
import UpdateCoffee from "./component/UpdateCoffee.jsx";
import SignIn from "./component/SignIn.jsx";
import SignUp from "./component/SignUp.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Users from "./component/Users.jsx";

// Define your routes with loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("https://coffee-store-server-liard-nine.vercel.app/coffee"),
    // 👇 This line is important
    fallbackElement: <p>Loading...</p>,
  },
  {
    path: "/addcoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://coffee-store-server-liard-nine.vercel.app/coffee/${params.id}`),
    // 👇 This line is important
    fallbackElement: <p>Loading...</p>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/users",
    element:  <Users></Users>,
    loader: () => fetch("https://coffee-store-server-liard-nine.vercel.app/users"),
  
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}  hydrateFallbackElement={<p>Loading...</p>}  />
    </AuthProvider>
  </StrictMode>
);
