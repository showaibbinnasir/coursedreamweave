import one from "../../../assets/stuTwo.png"
import two from "../../../assets/stuOne.png"
import three from "../../../assets/stuThree.png"
import { Carousel } from 'keep-react'
import { useState } from 'react'
import { CloudArrowUp } from 'phosphor-react'
import { Button, Modal } from 'keep-react'
import { plugin } from "postcss"
const Review = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const review = [
        {
            name: "Pranto Das Joy",
            rating: "4",
            image: one,
            text: "A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions."
        },
        {
            name: "Samad Rifat",
            rating: "5",
            image: two,
            text: "A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions."
        },
        {
            name: "Delwar Hosen",
            rating: "5",
            image: three,
            text: "A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions."
        },
        {
            name: "Pranto Das Joy",
            rating: "4",
            image: one,
            text: "A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions."
        }
    ]
    return (
        <div className="my-14 mx-5 lg:mx-28">

            <div className="flex justify-center mb-14">
                <div className='bg-[#8758FA] rounded-lg p-2 flex items-center'>
                    <h1 className="text-white text-[32px]">Student's Review</h1>
                </div>
            </div>
            <div>
                <Carousel options={{ loop: true }}>
                    <Carousel.Slides>
                        {review.map((item, i) => (
                            <Carousel.Item key={i}>
                                <div className="flex items-center justify-center rounded-xl shadow-2xl bg-gradient-to-r from-[#0D042A] to-[#37084D] p-20">
                                    <div>
                                        <div className="flex justify-center">
                                            <img src={item.image} className="w-[80px] rounded-full" alt="" />
                                        </div>
                                        <h1 className="text-[#8758FA] text-2xl text-center">{item.name}</h1>
                                        {
                                            item.text.length > 100 ?
                                                <div>
                                                    <h1 className="text-white w-[300px] lg:w-[550px]">
                                                        {item.text.substring(0, 110)}...
                                                    </h1>
                                                    <h1 onClick={openModal} className="text-[#8758FA] cursor-pointer">Read Full</h1>
                                                    <Modal isOpen={isOpen} onClose={closeModal}>
                                                        <Modal.Body className="space-y-3 bg-gradient-to-r from-[#0D042A] to-[#37084D]">
                                                            
                                                            <Modal.Content>
                                                                <h1 className="text-white">{item.text}</h1>
                                                            </Modal.Content>
                                                            <Modal.Footer>
                                                                <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
                                                                    Close
                                                                </Button>
                                                                
                                                            </Modal.Footer>
                                                        </Modal.Body>
                                                    </Modal>
                                                </div> :
                                                <h1>
                                                    {item.text}
                                                </h1>
                                        }
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel.Slides>
                    <Carousel.Control>
                        <Carousel.Buttons>
                            <Carousel.PrevButton />
                            <Carousel.NextButton />
                        </Carousel.Buttons>
                        <Carousel.Indicators />
                    </Carousel.Control>
                </Carousel>
            </div>

        </div>
    );
};

export default Review;