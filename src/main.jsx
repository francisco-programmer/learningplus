import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EnglishNow from './pages/EnglishNow.jsx';
import DecoracionDeFiestas from './pages/DecoracionDeFiestas.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
{
  path:"englishnow",
  element: <EnglishNow />,
},
{
  path:"decoracion-de-fiestas",
  element: <DecoracionDeFiestas />
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
