import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";


const layout = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default layout;