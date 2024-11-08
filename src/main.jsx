import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import DashBoard from './Components/DashBoard/DashBoard.jsx';
import BookDetails from './Components/BooksDetails/BookDetails.jsx';
import { Helmet } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Helmet>
      <RouterProvider router={router} />
    </Helmet>
  </StrictMode>,
)
