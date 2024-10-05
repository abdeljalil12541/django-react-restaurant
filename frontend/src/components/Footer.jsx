import React, { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';
import EngFlag from "../static/images/usa-flag.png";
import FrFlag from "../static/images/Flag-France.png";
import EsFlag from "../static/images/spain-flag.png";
import ArFlag from "../static/images/saudi-flag.png";
import { ToastContainer, toast} from "react-toastify";
import axios from "axios";

export default function Footer() {
  
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleInput = (event) => {
      setEmail(event.target.value);
    }


    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        setIsEmailValid(false);
        toast.error('Please enter a valid email address');
      } else {
        setIsEmailValid(true);
        axios.post('http://127.0.0.1:8000/api/news-letter/', {email}).then(response => {
          console.log('created', response.data)  
        })
        toast.success(`Thank you for subscribing with: ${email}`);
        setEmail("");
      }
    }


    const {t, i18n} = useTranslation("global")

    const handleLanguages = (lang) => {
      i18n.changeLanguage(lang);
    }

    const [open, setOpen] = useState(false)
    const [selectedLng, setSelectedLng] = useState('English')
    const [selectedFlag, setSelectedFlag] = useState(EngFlag)

    const toggleDropdown = () => {
      setOpen(!open)
    }

    const handleSelect = (lng) => {
      setSelectedLng(lng)
      setOpen(false)
    }

    const handleSelectFlag = (flag) => {
      setSelectedFlag(flag)
    }



    return(<>
    <footer>
    <div class="bg-black py-4 text-gray-400">
      <div class="container px-4 mx-auto">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 my-4 w-full xl:w-1/5">
            <h4 className="text-2xl font-bold text-white pl-0 neon-text mb-4">{t("footer.title1")}</h4>
            <p className="text-[#998e5a]">
                <span className="font-bold">{t('footer.p1')}</span> <br />
                {t("footer.p2")} <br />
                {t("footer.p3")} <br />
                {t("footer.p4")} <br />
                {t("footer.p5")} <br />
                {t("footer.p6")}
            </p>
          </div>

          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="text-2xl font-bold text-white pl-0 neon-text mb-4">{t("footer.title2")}</h2>
            </div>
            <ul class="leading-8 text-[#998e5a]">
              <li>{t("footer.p1Tittle2")}</li>
              <li>{t("footer.p2Tittle2")}</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-white mt-3 pl-0 neon-text mb-4">{t("footer.title3")}</h2>
                <div className="relative max-w-sm mx-auto">
                  <button 
                    onClick={toggleDropdown} 
                    className="bg-black border border-[#998e5a] text-[#998e5a] text-sm rounded-lg p-2.5 flex items-center justify-between"
                  >
                    <span className="pr-3">{selectedLng} <img  className="inline-block ml-1" src={selectedFlag} width={20} alt="English Flag" /> </span> 
                    {open? 
                      <svg fill="#998e5a" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.437 407.437" xml:space="preserve" stroke="#000000" stroke-width="14.260295" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon> </g></svg>
                      : <svg fill="#998e5a" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.437 407.437" xml:space="preserve" stroke="#000000" stroke-width="14.260295"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon> </g></svg>
                    }
                    
                  </button>
                  {open && (
                  <ul className="absolute bottom-full mb-1 z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    <li onClick={() => {handleSelect('English'); handleSelectFlag(EngFlag); handleLanguages('en')}} className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
                       <img src={EngFlag} width={20} alt="English Flag" className="ml-2" /> <span className="pl-1">English</span>
                    </li>
                    <li onClick={() => {handleSelect('Français'); handleSelectFlag(FrFlag); handleLanguages('fr')}} className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
                       <img src={FrFlag} width={20} alt="French Flag" className="ml-2 inline-block" /> <span className="pl-1">Français</span>
                    </li>
                    <li onClick={() => {handleSelect('Español'); handleSelectFlag(EsFlag); handleLanguages('es')}} className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
                       <img src={EsFlag} width={20} alt="Spanish Flag" className="ml-2 inline-block" /> <span className="pl-1">Español</span>
                    </li>
                    <li onClick={() => {handleSelect('العربية'); handleSelectFlag(ArFlag); handleLanguages('ar')}} className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
                       <img src={ArFlag} width={20} alt="French Flag" className="ml-2 inline-block" /> <span className="pl-1">العربية</span>
                    </li>
                  </ul>
                  )}
                </div>


          </div>
          <form onSubmit={handleSubmit}>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="text-2xl font-bold text-white pl-0 neon-text mb-4">{t("footer.title4")}</h2>
              </div>
            <p class="text-base font-normal text-[#998e5a] max-md:text-center mb-3">{t("footer.p1Tittle4")}</p>
            <div class="relative max-w-xs max-md:max-w-full max-md:mx-auto  text-gray-500 focus-within:text-gray-900 mb-5">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#998e5a">
                  <path
                    d="M2.95739 5.61072L6.47281 7.80147C8.18826 8.87052 9.04599 9.40504 9.99991 9.40489C10.9538 9.40474 11.8114 8.86994 13.5265 7.80035L17.0509 5.60245M9.16667 16.6663H10.8333C13.976 16.6663 15.5474 16.6663 16.5237 15.69C17.5 14.7137 17.5 13.1424 17.5 9.99967C17.5 6.85698 17.5 5.28563 16.5237 4.30932C15.5474 3.33301 13.976 3.33301 10.8333 3.33301H9.16667C6.02397 3.33301 4.45262 3.33301 3.47631 4.30932C2.5 5.28563 2.5 6.85698 2.5 9.99967C2.5 13.1424 2.5 14.7137 3.47631 15.69C4.45262 16.6663 6.02397 16.6663 9.16667 16.6663Z"
                    stroke="#111827" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <input 
                required
                onChange={handleInput}
                type="text" 
                id="default-search"
                class="block w-full md:max-w-xs pr-4 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-300 bg-transparent border border-[#998e5a] rounded-full placeholder-gray-400 focus:outline-none leading-relaxed"
                placeholder="example@gmail.com" 
                value={email}
                />
            </div>
            <button type="submit" style={{cursor: 'pointer'}}>
                  <span className="font-normal text-[#998e5a] hover:text-gray-800">{t("footer.title5")} <HiArrowLongRight className="text-xl inline-block mb-1" /></span>
            </button>
            </div>

            <ToastContainer />
          </form>
          <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 class="text-2xl font-bold text-white pl-0 neon-text mb-6">{t("footer.title6")}</h2>
            </div>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-[#998e5a] rounded-full mr-1 hover:text-blue-400 hover:border-gray-800">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="#998e5a" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-[#998e5a] rounded-full mr-1 hover:text-blue-400 hover:border-gray-800">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#998e5a" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-[#998e5a] rounded-full mr-1 hover:text-blue-400 hover:border-gray-800">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="#998e5a" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-[#998e5a] rounded-full mr-1 hover:text-blue-400 hover:border-gray-800">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="#998e5a" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-[#998e5a] rounded-full hover:text-blue-400 hover:border-gray-800">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="#998e5a" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#f6f4ea] py-4 text-gray-100">
      <div class="container mx-auto px-4 text-center">
        <div class="-mx-4  text-center">
          <div class="px-4 w-full text-black sm:w-auto">
            Copyright © 2020
            {/* <script>new Date().getFullYear() > 2020 && document.write("- " + new Date().getFullYear())</script>- 2022 */}
            <span></span> Al ikbal. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
    
  </footer>
    </>
    );
}