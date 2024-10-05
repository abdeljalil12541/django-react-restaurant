import React, { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export default function HomeGellry() {
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
        <section class="bg-zinc-50 overflow-hidden py-3" style={{marginBottom: '200px', backgroundColor: '#f6f4ea'}}>
            <div class="2xl:max-w-screen-3xl px-8 py-12 md:px-12 mx-auto  flex flex-col justify-center"  style={{position: 'absolute', zIndex: '999', backgroundColor: '#f6f4ea'}}>
            <div class="absolute mb-1 bottom-2 right-8 text-black hover:text-[#a28419] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#a28419] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#a28419] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <Link to="/gallery" className="font-medium text-[#d1b26b]">{t("visitGallery.visit_gallery")} <HiArrowLongRight className="inline-block" /></Link>
            </div>
                <div class="flex flex-col sm:flex-row mx-auto">
                    <img src={homeGalleyImage[0]} class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover transform origin-bottom" alt="image 1"  style={{width: '360px', height: '200px', cursor: 'pointer'}} />
                    <img src={homeGalleyImage[1]} class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover transform origin-bottom" alt="image 2"  style={{width: '360px', height: '200px', cursor: 'pointer'}} /> 
                    <img src={homeGalleyImage[2]} class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover transform origin-bottom" alt="image 3"  style={{width: '360px', height: '200px', cursor: 'pointer'}} />
                    <img src={homeGalleyImage[3]} class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover transform origin-bottom" alt="image 4" style={{width: '360px', height: '200px', cursor: 'pointer'}} />   
                </div>
            </div>
        </section>
    );
}
