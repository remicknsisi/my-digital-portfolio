import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <div className="flex justify-around pb-5">
            <div className="flex flex-wrap">
                <IoIosMail />
                <p className="pl-2">remicknsisi@gmail.com</p>
            </div>
            <div className="flex flex-wrap">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/sienna-remick/" className="pl-2 hover:text-red">
                    Linkedin
                </a>
            </div>
        </div>
    )
}

export default Footer;
