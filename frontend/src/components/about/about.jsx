import moroccanChefImg from "../../static/images/moroccanChef1.jpg";
import moroccanTeam from "../../static/images/team.png";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function About() {
    const [homeGalleyImage, setHomeGalleyImage] = useState([])
    const {t, i18n} = useTranslation("global")
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get-home-gallery/').then((response) => {
            const listImages = response.data.images_list.map(gallery_image => (
                `http://127.0.0.1:8000${gallery_image}`
            ));
            setHomeGalleyImage(listImages)
            console.log(homeGalleyImage)
        }).catch((error) => {
            console.log('error', error)
        })
    }, [])


    return(
        <section>
            <div 
                style={{
                    backgroundImage: `url(${moroccanChefImg})`, // Set the image as the background
                    backgroundSize: 'cover', // Ensure the background image covers the div
                    backgroundPosition: 'center', // Center the background image
                    position: 'relative', // Position relative for absolute children
                    height: '85vh', // Set height for the div
                }}
            >
                <div 
                    style={{
                        backgroundColor: 'black', 
                        position: 'absolute', // Position absolutely to overlay
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1, // Ensure the gradient is above the image
                        opacity: 0.8 // Adjust opacity as needed
                }}
                >


                </div>
                    <div className="grid grid-cols-5 relative z-10 ">
                        <div className="pl-24 pr-9 col-span-3">
                            <h3 className="text-4xl font-bold text-[#d1b26b] relative z-10 text-center" style={{paddingTop: '50px'}}>{t("aboutUs.title")}</h3>
                            <p className=" text-2xl font-bold text-white relative z-10 text-left pt-5">{t("aboutUs.pMain")}</p>

                            <p className="text-white py-3">{t("aboutUs.p1")}</p>                    
                            <p className="text-white py-3">{t("aboutUs.p2")}</p>                    
                            <p className="text-white py-3">{t("aboutUs.p3")}</p>                    
                        
                        </div>

                        <div className="group col-span-2 mt-24 mr-16 ">
                            <img src={moroccanTeam} className="transition-transform transform scale-100 group-hover:scale-105"/>
                        </div>
                    </div>
            </div>

            <section class="text-gray-700 body-font mb-9" id="gallery">

                <div className="flex justify-center space-x-96 mt-14 grid-cols-4">
                    <Link to="/réservation" class="flex items-center text-[#a28419] py-2 px-9 gap-2 duration-300 hover:bg-gray-200 rounded inline-flex items-center">
                        <span>
                            {t("aboutUs.reservation")}
                        </span>
                        <svg class="w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                    <Link to="/menu" class="flex items-center text-[#a28419] py-2 px-9 gap-2 duration-300 hover:bg-gray-200 rounded inline-flex items-center">
                        <span>
                            {t("aboutUs.visitMenu")}
                        </span>
                        <svg class="w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                </div>

                <div class="grid grid-cols-1 mt-11 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

                    <div class="group relative">
                        <img
                        src={homeGalleyImage[6]}
                        alt="Image 1"
                        class="aspect-[2/3] h-60 w-60 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                    </div>


                    <div class="group relative">
                        <img
                        src={homeGalleyImage[7]}
                        alt="Image 1"
                        class="aspect-[2/3] h-60 w-60 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                    </div>
                    <div class="group relative">
                        <img
                        src={homeGalleyImage[8]}
                        alt="Image 1"
                        class="aspect-[2/3] h-60 w-60 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                    </div>
                    <div class="group relative">
                        <img
                        src={homeGalleyImage[9]}
                        alt="Image 1"
                        class="aspect-[2/3] h-60 w-60 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                    </div>



                </div>

            </section>
        </section>
    );
}