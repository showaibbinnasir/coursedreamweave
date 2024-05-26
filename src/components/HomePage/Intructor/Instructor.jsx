import { RandomReveal } from "react-random-reveal";
import person from "../../../assets/instructor.png"

const Instructor = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='bg-[#8758FA] rounded-lg p-2 flex items-center'>
                <h1 className="text-white text-[32px]">Course Instructor</h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <img data-aos="zoom-out-up" className=" w-[180px] lg:w-[240px]" src={person} alt="" />
                <div className="text-white mt-1 lg:mt-7">
                    <h1 className=" text-[36px] lg:text-[48px] text-[#8758FA]"><RandomReveal isPlaying duration={3} characters={"Showaib bin Nasir"}/></h1>
                    <h1 className=" text-[24px] lg:text-[32px] mt-[-12px]">Founder and CEO</h1>
                    <h1 className=" text-[24px] lg:text-[32px] mt-[-12px]">Dreamweave stations</h1>
                    <h1 className=" text-[24px] lg:text-[32px] mt-[-12px] text-[#FFCA28]">Showaibbin.nasir1@gmail.com</h1>
                </div>
            </div>
        </div>
    );
};

export default Instructor;