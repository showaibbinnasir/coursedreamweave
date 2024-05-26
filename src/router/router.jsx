import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout"
import HomePage from "../components/HomePage/HomePage";
const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                path : '/',
                element: <HomePage></HomePage>
            }
        ]
    }
])

export default router