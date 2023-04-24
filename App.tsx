import * as React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useParams,
} from 'react-router-dom';
import './style.css';

const Category = () => {
  const params = useParams();

  return <div>{JSON.stringify(params, null, 2)}</div>;
};

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/:lang/category" element={<Category />} />
    )
  );

  return <RouterProvider router={router} />;
}
