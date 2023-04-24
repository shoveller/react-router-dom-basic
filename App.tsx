import * as React from 'react';
import {
  createMemoryRouter,
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
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/:lang/category" element={<Category />} />
    ),
    {
      initialEntries: ['/ko/category'],
    }
  );

  return <RouterProvider router={router} />;
}
