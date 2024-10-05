import { Component } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useTranslation } from 'react-i18next';


const Location = () => {
    
    const {t, i18n} = useTranslation("global")

        return(
            <div className="min-h-[90vh] pl-5 bg-[#f6f4ea] items-center">
                <h1 className="text-3xl text-center pt-5 text-[#d1b26b] font-bold"> <span>{t("location.title")}</span> <MapPinIcon width={35} className=" pb-2 inline-block" style={{color: '#d1b26b'}} /></h1>
                    <div className="flex px-5 flex justify-center">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.409873183311!2d-7.632624497509974!3d33.59615810115904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d284a391f735%3A0x7e53f04c7d19a9ed!2sDar%20Beida!5e0!3m2!1sen!2sma!4v1726871581320!5m2!1sen!2sma" 
                            width="1000" 
                            height="480" 
                            className="pt-5"
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            </div>
        );
}
export default Location