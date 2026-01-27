import App from '../components/App';
import ErrorElement from '../../../client-user/src/components/ErrorComponent';
import Dashboard from '../components/dashboard/Dashboard';
import Signin from '../components/Signin';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/signin', element: <Signin /> },
    ],
  },
];

export default routes;
