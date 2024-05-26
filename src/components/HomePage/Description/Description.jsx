import image from "../../../assets/demo.png"

const Description = () => {
    return (
        <div className="my-14">
            <div className="flex justify-center">
                <div className='bg-[#8758FA] rounded-lg p-2 flex items-center'>
                    <h1 className="text-white text-[32px]">Course Description</h1>
                </div>
            </div>
            <div className="my-5">
                <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-10">
                    <div className="w-full lg:w-[70%] px-5">
                        <h1 className="text-white text-[24px] lg:text-[32px] text-justify "><span className="text-[#FFCA28]">Digital Proficiency: Essentials of Computing and Freelancing</span> is a comprehensive course tailored for individuals seeking to enhance their computing skills and explore the opportunities in the freelancing sector. This course covers fundamental computer concepts, essential software applications, internet navigation, computer security practices, and effective data management.</h1>
                        <div className="flex justify-center lg:justify-start mt-5">
                            <button className="px-6 py-2 bg-[#8758FA] text-white text-[24px] rounded-lg">Enroll Now</button>
                        </div>
                    </div>
                    <img src={image} className="w-[300px]" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Description;