import { ReactNode, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import App from './App';
import Login from './features/login';
import './index.css';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = 'useAuth();';

  if (!token) {
    return children;
  }
  return <Navigate to="/assets-manager/login" />;
}

const router = createBrowserRouter([
  {
    path: '/assets-manager',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Navigate to="dashboard" />
          </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
