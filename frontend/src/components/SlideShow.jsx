'use client'
import React, { useState, useRef, Fragment, useEffect } from 'react'; // Added useState import
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import playIcon from '../static/icons/playButton.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiArrowLongRight } from 'react-icons/hi2';
import SliderVideo from '../static/video/sliderVideo.mp4'

export default function Header() {
  const [fadeImages, setFadeImages] = useState([]);

  const {t, i18n} = useTranslation("global")


  useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/banners/').then((response) => {
        // Prepend the base URL to each image path
        const imagesWithBaseUrl = response.data.banners.map(banner => ({
          ...banner,
          image: `http://127.0.0.1:8000${banner.image}` // Prepend base URL
        }));
        setFadeImages(imagesWithBaseUrl); // Set fadeImages to the array of banner objects
        console.log('response', imagesWithBaseUrl);
      }).catch((error) => {
        console.log('error', error);
      });
  }, []);
  
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null); // Define videoRef

  const openVideo = () => {
    setModalOpen(true); // Set modalOpen to true when opening video
  };

  const closeVideo = () => {
    setModalOpen(false); // Set modalOpen to false when closing video
  };

  return (
    <div className="slide-container relative h-[555px]">
      <Fade arrows={false} autoplay={true} duration={3000}>
        {fadeImages.map((fadeImage, index) => ( // Change fadeImages to fadeImage
          <div key={index} className='relative'>
            <img style={{ width: '100%', height:'555px', objectFit: 'cover'}} src={fadeImage.image} alt={fadeImage.alt_text} />

            {/* Gradient background positioned directly over the image */}
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(to right, black, rgba(162, 132, 25, 0.1))', 
              zIndex: 10, 
              opacity: 0.9 // Adjust opacity as needed
            }}></div>

            <img src={playIcon} onClick={openVideo} alt='play icon' className='absolute' style={{zIndex: '899', top:'43%', right:'330px', width: '80px', cursor:'pointer'}} />
            
            <div className='absolute' style={{zIndex: '899', left:'10%', top:'26%'}}>
              <p className='text-5xl font-bold mb-2 text-white' style={{lineHeight: '1.3'}}>{t("slideshow.title")} <span className='text-[#d1b26b] '>Restaurant le <br /> Al Ikbal </span></p>
              <p className='mb-5 text-white text-2xl font-light'>Du Soleil dans vos Assiettes</p>

              <div className='mt-8'>
              <Link
                  to="/menu"
                  className="text-md mr-5 font-normal transition delay-100 duration-[420ms] px-5 py-2 hover:bg-[#d1b26b] hover-border rounded-3xl leading-6 text-white"
                  style={{border: '2px solid #d1b26b'}}
                  dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                >
                  {t("cta.menu")} <HiArrowLongRight className="text-xl inline-block mb-1" />
                </Link>
                <Link 
                to="/réservation" 
                className="text-md font-normal transition delay-100 duration-[420ms] px-5 py-2 hover:bg-[#d1b26b] hover-border rounded-3xl leading-6 text-white" 
                style={{border: '2px solid #d1b26b'}}
                dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                >
                {t("cta.reserveTable")} <HiArrowLongRight className="text-xl inline-block mb-1" />
                </Link>
                {modalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
                      <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
                        {/* 2. The backdrop layer */}
                        <Transition.Child
                          as="div"
                          className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-out duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          aria-hidden="true"
                        />
                        {/* 3. The modal video */}
                        <Transition.Child
                          as="div"
                          className="fixed inset-0 z-[99999] flex p-6"
                          enter="transition ease-out duration-300"
                          enterFrom="opacity-0 scale-75"
                          enterTo="opacity-100 scale-100"
                          leave="transition ease-out duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-75"
                        >
                          <div className="max-w-5xl mx-auto h-full flex items-center">
                            <DialogPanel className="w-full max-h-full rounded-3xl shadow-2xl bg-black overflow-hidden">
                              <video 
                                ref={videoRef} 
                                style={{ 
                                  height: '500px', 
                                }} 
                                loop 
                                controls
                              >
                                <source src={SliderVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </DialogPanel>
                          </div>
                        </Transition.Child>
                      </Dialog>
                    </Transition>
                  </div>
                )}
              </div>
            </div>

            <div className="video" style={{
              width: '800px',
              height: '450px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '50%',
              right: '-32%',
              transform: 'translate(-50%, -50%)',
            }}>
              <div className="play-btn" style={{
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center',
                justifyContent: 'center',
                background: '#d1b26b',
                color: '#fff',
                fontSize: '50px',
                width: '80px',
                height: '80px',
                zIndex: 2,
                borderRadius: '100%',
                position: 'relative',
                animation: 'bloom1 1.5s linear infinite',
              }}>
                <style>
                  {`
                    @keyframes bloom1 {
                      0% { transform: scale(0.5); opacity: 0; }
                      50% { opacity: 1; }
                      100% { transform: scale(1.5); opacity: 0; }
                    }
                    @keyframes bloom2 {
                      0% { transform: scale(0.5); opacity: 0; }
                      50% { opacity: 1; }
                      100% { transform: scale(1.5); opacity: 0; }
                    }
                    .play-btn:before, .play-btn:after {
                      content: '';
                      position: absolute;
                      border: 15px solid #fff;
                      border-radius: 50%;
                      top: -20px;
                      left: -20px;
                      right: -20px;
                      bottom: -20px;
                      opacity: 0;
                      z-index: 1;
                    }
                    .play-btn:before {
                      animation: bloom1 1.5s linear infinite;
                    }
                    .play-btn:after {
                      animation: bloom2 1.5s linear infinite;
                      animation-delay: 0.4s;
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

