import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate()

    return (
        <div className="fixed top-0 z-1000 p-5 left-0 right-0 text-offWhite bg-black">
            <div className="flex justify-around">
                <button onClick={() => navigate('/')} className="text-lg font-bold hover:text-gray">Home</button>
                <button onClick={() => navigate('/about')} className="text-lg font-bold hover:text-gray">About</button>
                <button onClick={() => navigate('/projects')} className="text-lg font-bold hover:text-gray">Projects</button>
                <button onClick={() => navigate('/blog')} className="text-lg font-bold hover:text-gray">Blog</button>
                <button onClick={() => navigate('/contact')} className="text-lg font-bold hover:text-gray">Contact</button>
            </div>
        </div >

    )
}

export default NavBar;
