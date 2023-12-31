import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.jsx';
import ArticleDetailsPage from './pages/ArticleDetailsPage/ArticleDetailsPage';

const AppLayout = () => {
  return (
    <div className='font-opensans'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  // { path: "outlet", element: <Navbar /> },

  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'blog/:id',
        element: <ArticleDetailsPage />,
      },
      //  {
      //   path: "/shop",
      //   element: <ShopPage />,
      // },
      // {
      //   path: "/checkout",
      //   element: <CheckoutPage />,
      // },
    ],
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
