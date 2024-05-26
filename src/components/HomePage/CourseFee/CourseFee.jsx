import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CourseFee = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="my-14 mx-5 lg:mx-28">
            <div className="flex justify-center mb-14">
                <div className='bg-[#8758FA] rounded-lg p-2 flex items-center'>
                    <h1 className="text-white text-[32px]">Enrollment Fee</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <h1 className="text-[60px] text-[#FFCA28]">{counterOn && <CountUp start={0} end={6000} />}/= Taka Only</h1>
            </div>
        </div>
        </ScrollTrigger>
    );
};

export default CourseFee;