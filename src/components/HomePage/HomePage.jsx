import Description from "./Description/Description";
import Intro from "./Intro/Intro";
import Instructor from "./Intructor/Instructor";
import Outline from "./Outline/Outline";
import Review from "./Review/Review";


const HomePage = () => {
    return (
        <div>
            <Intro></Intro>
            <Instructor></Instructor>
            <Description></Description>
            <Outline></Outline>
            <Review></Review>
        </div>
    );
};

export default HomePage;