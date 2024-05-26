import { Timeline } from 'keep-react'
import { Tree } from "keep-react";
import { FolderNotchOpen, File } from "phosphor-react";
import folder from "../../../assets/folder.png"
const Outline = () => {
    const courseOutline = [
        {
            module: "Computer Fundamental",
            duration: "First 3 days",
            des: "everything about computer"
        },
        {
            module: "Basic Computer Skills",
            duration: "Next 3 days",
            des: "You will be able to gather skills of system"
        },
        {
            module: "Essential software skills",
            duration: "Next 2 Weeks",
            des: "A brief introduction to ms office products"
        },
        {
            module: "Computer security and maintenance",
            duration: "Next 2 Days",
            des: "A brief explanation to computer security"
        },
        {
            module: "Introduction to computer languages",
            duration: "Next 2 Weeks",
            des: "an overview of computer languages and its work procedure"
        },
        {
            module: "Emerging technology : artificial intelligence",
            duration: "Next 3 days",
            des: "a walkthrough of the world of artificial intelligence (ai) "
        },
        {
            module: "Productivity software skills",
            duration: "Next 3 weeks",
            des: "a brief look to the various productive software (adobe, figma, canva etc)"
        },
        {
            module: "journey to the career",
            duration: "Next 3 days",
            des: "an explanation of career path (jobs and freelancing)"
        },
    ]

    const moduleOutline = [
        {
            id: 1,
            title: "Computer Fundamental",
            children: [
                {
                    id: 1.1,
                    title: "Understanding the Basics"
                },
                {
                    id: 1.2,
                    title: "Operating Systems"
                },
                {
                    id: 1.3,
                    title: "Computer Networks"
                }
            ]
        },
        {
            id: 2,
            title: "Computer Fundamental",
            children: [
                {
                    id: 2.1,
                    title: "Understanding the Basics"
                },
                {
                    id: 2.2,
                    title: "Operating Systems"
                },
                {
                    id: 2.3,
                    title: "Computer Networks"
                }
            ]
        },
        {
            id: 3,
            title: "Computer Fundamental",
            children: [
                {
                    id: 3.1,
                    title: "Understanding the Basics"
                },
                {
                    id: 3.2,
                    title: "Operating Systems"
                },
                {
                    id: 3.3,
                    title: "Computer Networks"
                }
            ]
        },
        {
            id: 4,
            title: "Computer Fundamental",
            children: [
                {
                    id: 4.1,
                    title: "Understanding the Basics"
                },
                {
                    id: 4.2,
                    title: "Operating Systems"
                },
                {
                    id: 4.3,
                    title: "Computer Networks"
                }
            ]
        },
        {
            id: 5,
            title: "Computer Fundamental",
            children: [
                {
                    id: 5.1,
                    title: "Understanding the Basics"
                },
                {
                    id: 5.2,
                    title: "Operating Systems"
                },
                {
                    id: 5.3,
                    title: "Computer Networks"
                }
            ]
        },
        {
            id: 7,
            title: "Computer Fundamental",
            children: [
                {
                    id: 7.1,
                    title: "Understanding the Basics"
                },
                {
                    id: 7.2,
                    title: "Operating Systems"
                },
                {
                    id: 7.3,
                    title: "Computer Networks"
                }
            ]
        },
        {
            id: 7,
            title: "Computer Fundamental",
            children: [
                {
                    id: 7.1,
                    title: "Understanding the Basics"
                },
                {
                    id: 7.2,
                    title: "Operating Systems"
                },
                {
                    id: 7.3,
                    title: "Computer Networks"
                }
            ]
        },
        {
            id: 8,
            title: "Computer Fundamental",
            children: [
                {
                    id: 8.1,
                    title: "Understanding the Basics"
                },
                {
                    id: 8.2,
                    title: "Operating Systems"
                },
                {
                    id: 8.3,
                    title: "Computer Networks"
                }
            ]
        },

    ]
    return (
        <div className=' mx-5 lg:mx-28'>
            <div className="flex justify-center mb-15">
                <div className='bg-[#8758FA] rounded-lg p-2 flex items-center'>
                    <h1 className="text-white text-[32px]">Course Outline</h1>
                </div>
            </div>
            <div className='flex items-center lg:justify-center'>
                <div className="my-10 flex flex-col lg:flex-row gap-10">
                    <div>
                        <Timeline>
                            {
                                courseOutline.map((items, i) => <Timeline.Item key={i}>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <p data-aos="fade-right" className=" font-normal text-[20px] leading-[1.4] text-white">{items.duration}</p>
                                        <h1 data-aos="zoom-in-right" className=" text-[#8758FA] text-[32px]">{items.module}</h1>
                                        <p data-aos="fade-right" className="text-[20px] leading-[1.4] text-white ">
                                            {items.des}
                                        </p>
                                    </Timeline.Content>
                                </Timeline.Item>)
                            }
                        </Timeline>
                    </div>
                    <div>
                        <Tree
                            showBorder={true}
                            showItemsNumber={true}
                            showIcon={true}
                            ParentIcon={<img src={folder} className='w-[45px]' />}
                            ChildIcon={<File size={26} />}
                            nodes={moduleOutline}
                            itemStyle='text-white'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outline;