import Description from "./Description/Description";
import Intro from "./Intro/Intro";
import Instructor from "./Intructor/Instructor";
import Outline from "./Outline/Outline";


const HomePage = () => {
    return (
        <div>
            <Intro></Intro>
            <Instructor></Instructor>
            <Description></Description>
            <Outline></Outline>
        </div>
    );
};

export default HomePage;