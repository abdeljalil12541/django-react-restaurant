import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import {
    Dialog,
  } from "@material-tailwind/react";

  

export default function Gallery() {

    const {t, i18n} = useTranslation("global")
    const [showSlider, setShowSlider] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [galleries, setGalleries] = useState([]);
    const [images, setImages] = useState([]); 
    const [open, setOpen] = useState(false);
    const dialogRef = useRef(null); // Create a ref for the dialog

    const handleOpen = () => setOpen(!open);

    const openSlider = (index) => {
        setCurrentIndex(index);
        setShowSlider(true);
        handleOpen(); // Open the dialog when slider is opened
    };

    const closeSlider = () => {
        setShowSlider(false);
        handleOpen(); // Close the dialog
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/galleries/').then((response) => {
            const galleriesImageWithBaseUrl = response.data.galleries.map(gallery => ({
                ...gallery,
                image1: `http://127.0.0.1:8000${gallery.image1}`,
                image2: `http://127.0.0.1:8000${gallery.image2}`,
                image3: `http://127.0.0.1:8000${gallery.image3}`,
                image4: `http://127.0.0.1:8000${gallery.image4}`,
                image5: `http://127.0.0.1:8000${gallery.image5}`,
                image6: `http://127.0.0.1:8000${gallery.image6}`,
            }));
            setGalleries(galleriesImageWithBaseUrl);
            const allImages = galleriesImageWithBaseUrl.flatMap(gallery => [
                gallery.image1,
                gallery.image2,
                gallery.image3,
                gallery.image4,
                gallery.image5,
                gallery.image6,
            ]);
            setImages(allImages);
            console.log('response', response.data.galleries);
        });
    }, []);

    // Close modal when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                closeSlider(); // Close the slider if clicked outside
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Clean up the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <>
            <div className={`${open? "modalBg": "bg-none"}`}></div>
            <h2 className="text-4xl font-bold text-[#d1b26b] text-center galerie">{t("gallery.title")}</h2>
            <div className="container mx-auto px-5 lg:px-32 lg:mt-4 mb-8">
                {galleries.map((gallery, galleryIndex) => (
                    <div key={galleryIndex} className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div onClick={() => openSlider(galleryIndex * 6 + 0)} className="w-1/2 small-thumbnails p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block galleryImg h-full w-full rounded-lg object-cover object-center"
                                    src={gallery.image1} />
                            </div>
                            <div onClick={() => openSlider(galleryIndex * 6 + 1)} className="w-1/2 small-thumbnails p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block galleryImg h-full w-full rounded-lg object-cover object-center"
                                    src={gallery.image2} />
                            </div>
                            <div onClick={() => openSlider(galleryIndex * 6 + 2)} className="w-full p-1 big-thumbnails md:p-2">
                                <img
                                    alt="gallery"
                                    className="block galleryImg h-full w-full rounded-lg object-cover object-center"
                                    src={gallery.image3} />
                            </div>
                        </div>
                        <div className="flex w-1/2 small-thumbnails flex-wrap">
                            <div onClick={() => openSlider(galleryIndex * 6 + 3)} className="w-full p-1 big-thumbnails md:p-2">
                                <img
                                    alt="gallery"
                                    className="block galleryImg h-full w-full rounded-lg object-cover object-center"
                                    src={gallery.image4} />
                            </div>
                            <div onClick={() => openSlider(galleryIndex * 6 + 4)} className="w-1/2 small-thumbnails p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block galleryImg h-full w-full rounded-lg object-cover object-center"
                                    src={gallery.image5} />
                            </div>
                            <div onClick={() => openSlider(galleryIndex * 6 + 5)} className="w-1/2 small-thumbnails p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block galleryImg h-full w-full rounded-lg object-cover object-center"
                                    src={gallery.image6} />
                            </div>
                        </div>
                    </div>
                ))}

                {open ? ( // Only render the dialog when open is true
                    <Dialog
                        open={open}
                        handler={handleOpen}
                        className="fixed inset-0 flex items-center justify-center bg-none bg-opacity-.1" // Center the dialog with background opacity
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                          }}
                    >
                        <div ref={dialogRef} className="relative">
                            {showSlider && (
                                <div className="flex items-center justify-center relative px-9">
                                    <button onClick={prevSlide} className="absolute left-0 text-white">
                                        <svg fill="#fff" version="1.1" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" width="32px" height="32px" viewBox="0 0 42.00 42.00" xml:space="preserve" stroke="#000000" stroke-width="1.47" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon fill-rule="evenodd" points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "></polygon> </g></svg>
                                    </button>
                                    <img
                                        alt="slideshow"
                                        className="rounded-lg slidesShowModal object-cover"
                                        src={images[currentIndex]}
                                    />
                                    <button onClick={nextSlide} className="absolute right-0 text-white">
                                        <svg fill="#fff" version="1.1" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" width="32px" height="32px" viewBox="0 0 42.00 42.00" xml:space="preserve" stroke="#000000" stroke-width="1.47"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon fill-rule="evenodd" points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "></polygon> </g></svg>         
                                    </button>
                                </div>
                            )}
                        </div>
                    </Dialog>
                ): ""}
            </div>
        </>
    );
}