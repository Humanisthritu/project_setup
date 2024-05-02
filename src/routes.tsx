
import path from "path";
import IncDec from "./components/inc_dec";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Login from "./components/layout/Login";


const routes: any = [
    {
        path: '/first',
        element: <DashboardLayout />,
        children: [
            // if we remove slash it makes relative path which is equivalent to  ex : /first/inc-dec
            { path: 'inc-dec', element: <IncDec /> },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            }

        ]
    },

    {
        path : '/login',
        element : <Login/>

    }




]

export default routes;