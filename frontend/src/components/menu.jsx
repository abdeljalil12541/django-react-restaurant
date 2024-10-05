import React, { useState } from 'react'; // Import useState
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MagnifierContainer, MagnifierZoom } from "react-image-magnifiers";
import "../static/css/menu.css"

import Menu1 from '../static/images/menu/menu1.png';
import Menu2 from '../static/images/menu/menu2.png';
import Menu3 from '../static/images/menu/menu3.png';

const Menu = () => {
    const Menus = [Menu1, Menu2, Menu3];
    const [currentImage, setCurrentImage] = useState(Menus[0]);
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    const openModal = (image) => {
        console.log("Opening modal with image:", image); // Debugging statement
        setCurrentImage(image);
        setModalOpen(true);
    };

    const closeModal = (e) => {
        e.stopPropagation(); // Prevent event propagation
        console.log("Closing modal"); // Debugging statement
        setModalOpen(false);
    };

    const goToPrevSlide = () => {
        const currentIndex = Menus.indexOf(currentImage);
        const newIndex = currentIndex === 0 ? Menus.length - 1 : currentIndex - 1;
        console.log("Current Index (Prev):", currentIndex); // Log current index before change
        console.log("New Index (Prev):", newIndex); // Log new index after change
        setCurrentImage(Menus[newIndex]);
    };
    
    const goToNextSlide = () => {
        const currentIndex = Menus.indexOf(currentImage);
        const newIndex = currentIndex === Menus.length - 1 ? 0 : currentIndex + 1;
        console.log("Current Index (Next):", currentIndex); // Log current index before change
        console.log("New Index (Next):", newIndex); // Log new index after change
        setCurrentImage(Menus[newIndex]);
    };

    return (
        <div className="w-80 h-full container mx-auto my-5 magnifier-carousel">


            <div className='flex'>
                <MagnifierContainer>
                    <Carousel showThumbs={true} onChange={(index) => {
                        console.log("Carousel index changed to:", index); // Log carousel index change
                        setCurrentImage(Menus[index]);
                    }}>
                        {Menus.map((menu, index) => 
                            <div style={{cursor: 'pointer'}} key={index} onClick={() => openModal(menu)}> {/* Open modal on click */}
                                <img src={menu} alt={`Menu item ${index + 1}`} style={{ cursor: 'pointer' }} />
                            </div>
                        )}
                    </Carousel>
                    <div className="magnifier-content" style={{ width: '50px' }}>
                        <div className="magnifier-zoom">
                            <MagnifierZoom style={{ height: "400px", width: '40%', position: 'absolute', top: '128px', left: '-45px' }} imageSrc={currentImage} />
                        </div>
                    </div>
                </MagnifierContainer>
            </div>

            {/* Modal for Full-Screen Image */}
            {isModalOpen && (
                <div className="modal relative" onClick={closeModal} style={modalStyles}>
                    <svg onClick={(e) => { e.stopPropagation(); goToPrevSlide(); }} style={{cursor: 'pointer'}} className='menuSvg mr-5' fill="gray" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.00 330.00" xmlSpace="preserve" stroke="#000000" strokeWidth="0.0033" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_2_"> <path id="XMLID_4_" d="M145.606,74.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l69.393,69.392 l-69.393,69.395c-5.858,5.858-5.858,15.355,0,21.213C127.322,258.536,131.161,260,135,260s7.678-1.464,10.606-4.394l80-80.002 c2.814-2.813,4.394-6.628,4.394-10.607c0-3.979-1.58-7.794-4.394-10.607L145.606,74.393z"></path> <path id="XMLID_5_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"></path> </g> </g>
                    </svg>
                    <img onClick={(e) => e.stopPropagation()} src={currentImage} alt="Full Screen" style={fullScreenImageStyles} />
                    <svg onClick={(e) => { e.stopPropagation(); goToNextSlide(); }} style={{cursor: 'pointer'}} className='menuSvg ml-5' fill="gray" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.00 330.00" xmlSpace="preserve" stroke="#000000" strokeWidth="0.0033">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_2_"> <path id="XMLID_4_" d="M145.606,74.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l69.393,69.392 l-69.393,69.395c-5.858,5.858-5.858,15.355,0,21.213C127.322,258.536,131.161,260,135,260s7.678-1.464,10.606-4.394l80-80.002 c2.814-2.813,4.394-6.628,4.394-10.607c0-3.979-1.58-7.794-4.394-10.607L145.606,74.393z"></path> <path id="XMLID_5_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"></path> </g> </g>
                    </svg>
                    <div className='absolute top-5 right-5 p-1 rounded XIcon'>
                        <svg className='hover:text-white menuSvg' fill="gray" height="19px" width="19px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-46.08 -46.08 552.93 552.93" xml:space="preserve" stroke="#000000" stroke-width="0.00460775"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="10.137049999999999"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
                    </div>
                </div>

            )}
        </div>
    );
}

// Styles for the modal and full-screen image
const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    border: '2px solid gray', // Added border for visibility
};

const fullScreenImageStyles = {
    maxWidth: '90%',
    cursor: 'pointer',
    maxHeight: '90%',
};

export default Menu;