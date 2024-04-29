
import path from "path";
import IncDec from "./components/inc_dec";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";


const routes: any = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: '/inc-dec', element: <IncDec /> },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }

        ]
    },


]

export default routes;