import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

export const routes = createBrowserRouter([
    //   {
    //     path: "/",
    //     element: <Nav />,
    //     children: [
    //       {
    //         index: true,
    //         element: <Home />,
    //       },
    //       {
    //         path: "features",
    //         element: <Features />,
    //       },
    //       {
    //         path: "login",
    //         element: <Login />,
    //       }
    //     ]
    //   },

    {
        path: '/',
        element: <App />
    }
]);