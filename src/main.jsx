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
import DeCeroTuPrimerEmpleo from './pages/DeCeroTuPrimerEmpleo.jsx';
import DesafioBilingue from './pages/DesafioBilingue.jsx';
import Metodo3en9 from './pages/Metodo3en9.jsx';

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
{
  path:"de-cero-a-tu-primer-empleo-en-ingles",
  element: <DeCeroTuPrimerEmpleo />
}
,
{
  path:"desafiobilingue",
  element: <DesafioBilingue />
},
{
  path: "bilingue-en-9-meses",
  element: <Metodo3en9 />
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
