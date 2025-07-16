import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App.jsx';
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import SignIn from './component/SignIn.jsx';
import SignUp from './component/SignUp.jsx';

// Define your routes with loaders
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee"),
    // 👇 This line is important
    fallbackElement: <p>Loading...</p>,
  },
  {
    path: '/addcoffee',
    element: <AddCoffee />,
  },
  {
    path: '/updatecoffee/:id',
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
    // 👇 This line is important
    fallbackElement: <p>Loading...</p>,
  },
   {
    path: '/signin',
    element:  <SignIn></SignIn>,
  },
   {
    path: '/signup',
    element:  <SignUp></SignUp>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
