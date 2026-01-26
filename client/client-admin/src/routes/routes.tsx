import App from '../components/App';
import ErrorElement from '../../../client-user/src/components/ErrorComponent';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [],
  },
];

export default routes;
