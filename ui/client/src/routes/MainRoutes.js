import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// account page routing
const DappsPage = Loadable(lazy(() => import('views/dapps/appsPage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DappsPage />
        },
        {
            path: '/dashboard/dapps',
            element: <DappsPage />
        }
    ]
};

export default MainRoutes;
