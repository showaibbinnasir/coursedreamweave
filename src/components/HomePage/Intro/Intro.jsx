
import { RandomReveal } from 'react-random-reveal'
const Intro = () => {
    return (
        <div>
            <div className="flex justify-center my-14">
                <div className="flex flex-col items-center">
                    <h1 className=" text-[36px] lg:text-[48px] text-[#8758FA]"><RandomReveal isPlaying duration={3} characters="Digital Proficiency" /></h1>
                    <h1 className=" text-[24px] lg:text-[36px] text-[#ffffff] mt-[-15px]">Essentials of Computing and freelancing</h1>
                    <h1 className=" text-[18px] lg:text-[24px] text-[#ffffff] mt-[-10px]">A course by dreamweave stations</h1>
                </div>
            </div>
        </div>
    );
};

export default Intro;