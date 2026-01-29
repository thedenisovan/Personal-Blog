import App from '../components/App';
import ErrorElement from '../ErrorComponent';
import Dashboard from '../components/dashboard/Dashboard';
import Signin from '../components/Signin';
import NewPostForm from '../components/newPost/NewPostForm';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/signin', element: <Signin /> },
      { path: '/newPost', element: <NewPostForm /> },
    ],
  },
];

export default routes;
