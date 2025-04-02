import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import Owner from "./pages/Owner";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { path: "/", Component: Home },
            { path: "/owner", Component: Owner },
            { path: "/users", Component: Users },
            { path: "/admin", Component: Admin },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
