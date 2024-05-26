import { Button, Navbar } from "keep-react";
import menu from "../../assets/mn.png"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.png"
import { NavLink } from "react-router-dom";
import { useState } from 'react'
import { Pen, SignOut, Users } from 'phosphor-react'
import { Drawer } from 'keep-react'

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=" sticky top-0 z-[9999]">
            <Navbar fluid={true} className=" bg-gradient-to-r from-[#0D042A] to-[#37084D]">
                <Navbar.Container className="flex items-center justify-between px-[0%] lg:px-[5%]">

                    <Navbar.Brand>
                        <div className="flex items-center gap-3">
                            <img src={logo} className="w-[45px] lg:w-[70px]" alt="" />
                            <h1 className=" text-[14px] lg:text-[22px] text-white">DreamWeave Stations</h1>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8"
                    >
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-[22px] text-[#FFCA28]" : "text-[22px] text-white"}>Home</NavLink>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? "text-[22px] text-[#FFCA28]" : "text-[22px] text-white"}>Courses</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-[22px] text-[#FFCA28]" : "text-[22px] text-white"}>About</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-[22px] text-[#FFCA28]" : "text-[22px] text-white"}>Blog</NavLink>

                    </Navbar.Container>

                    <Navbar.Collapse collapseType="sidebar" className=" bg-gradient-to-r from-[#0D042A] to-[#37084D]">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            <NavLink to="/" className="text-[18px] text-white">Home</NavLink>
                            <NavLink to="/" className="text-[18px] text-white">Courses</NavLink>
                            <NavLink to="/" className="text-[18px] text-white">About</NavLink>
                            <NavLink to="/" className="text-[18px] text-white">Blog</NavLink>
                        </Navbar.Container>
                    </Navbar.Collapse>

                    <Navbar.Container className="flex items-center gap-3">

                        <Button onClick={() => setIsOpen(!isOpen)} size="sm" variant="link">
                            <div className="flex items-center gap-3">
                                <h1 className=" text-[16px] lg:text-[22px] text-white">Showaib</h1>
                                <img src={profile} className="w-[45px] lg:w-[50px] border-2 border-[#8758FA] rounded-full" alt="" />
                            </div>
                        </Button>
                        <Drawer className="z-[999999]" isOpen={isOpen} onClose={() => setIsOpen(false)}>
                            <Drawer.Content className="flex items-center justify-center">
                                <div className="mx-auto max-w-lg space-y-3 px-6 py-5 lg:px-0">
                                    <div className="flex flex-col items-center gap-2">
                                        <img src={profile} className="w-[120px] rounded-full" alt="" />
                                        <h1 className="text-[22px]">Hello Showaib bin Nasir</h1>
                                        <NavLink>
                                            <div className="flex items-center gap-2">
                                                <Users size={24} />
                                                <h1 className="text-[18px]">Profile</h1>
                                            </div>
                                        </NavLink>
                                        <NavLink>
                                            <div className="flex items-center gap-2">
                                                <Pen size={24} />
                                                <h1 className="text-[18px]">Edit Profile</h1>
                                            </div>
                                        </NavLink>
                                        <NavLink>
                                            <div className="flex items-center gap-2">
                                                <SignOut size={24} />
                                                <h1 className="text-[18px]">Log Out</h1>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </Drawer.Content>
                        </Drawer>
                        <Navbar.Toggle openIcon={<img className="w-[40px]" src={menu} />} closeIcon={<img className="w-[40px]" src={menu} />} className="text-white" />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;