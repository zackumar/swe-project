import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './routes';
import UnisexPage from './routes/unisex';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/unisex',
    element: <UnisexPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
      </Helmet>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
