import { createBrowserRouter } from 'react-router-dom';
import CenterLayout from './components/layouts/CenterLayout';
import Layout from './components/layouts/Layout';
import { Bet, Home } from './pages';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          element: <CenterLayout />,
          children: [{ path: 'bet', element: <Bet /> }],
        },
      ],
    },
  ],
  { basename: '/playground' }
);

export default router;
