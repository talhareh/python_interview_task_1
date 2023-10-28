import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare, FaWhatsappSquare, } from "react-icons/fa"

function Footer() {
    return (
        <div className="max-w-[1500px] mx-auto text-white grid py-5 pt-20">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">DRPage.</h1>
                <p className="p-4 py-3">“Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.” – Anthony Bourdain</p>
                <div className="flex md:w-[75%] justify-between p-10 py-20">
                    <FaFacebookSquare  size={30}/>
                    <FaInstagramSquare  size={30}/>
                    <FaTwitterSquare  size={30}/>
                    <FaWhatsappSquare  size={30}/>
                    <FaLinkedinIn  size={30}/>
                </div>
            </div>
            <div className=" flex w-[100%] px-3 justify-between">
                <div className="md:w-1/3 w-1/2">
                        <h1 className="font-bold ">POPULAR LOCATIONS</h1>
                        <ul className="pt-3">
                            <li>kolkata</li>
                            <li>Mumbai</li>
                            <li>Chennai</li>
                            <li>Pune</li>
                        </ul>
                </div>
                <div className="md:w-1/3 w-1/2">
                        <h1 className="font-bold ">ABOUT US</h1>
                        <ul className="pt-3">
                            <li>About DRPage</li>
                            <li>Travel Destinations</li>
                            <li>Contact Us</li>
                        </ul>
                </div>
                <div className="md:w-1/3 w-1/2">
                        <h1 className="font-bold ">Support</h1>
                        <ul className="pt-3">
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal & Privacy information</li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
