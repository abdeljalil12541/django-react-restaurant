import React, { useState, useRef, useEffect } from "react";
import { FaPaperclip, FaCamera, FaMicrophone, FaPlus } from "react-icons/fa"; // Icons from react-icons
import { motion } from "framer-motion"; // Framer Motion for animations

const FAB = () => {
  const [open, setOpen] = useState(false); // State to toggle icons visibility
  const wrapperRef = useRef(null); // Create a ref to track the wrapper element

  const toggleMenu = () => {
    setOpen(!open); // Toggle the menu
  };


  const handleClickOutside = (event) => {
    console.log("Clicked outside:", event.target);
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setOpen(false);
      }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{zIndex: '9999'}} className="fixed bottom-8 left-8 flex flex-col items-center space-y-2">
      {/* Floating Action Button and Icons */}
      <div className="relative flex flex-col items-center space-y-2">
        {/* Secondary buttons */}
        {open && (
          <>
            <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{
                duration: .3, // Makes the animation slower
                ease: "easeInOut", // Smooth easing
            }}
                className="w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg"
                >
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="color-element" cx="19.4395" cy="19.4395" r="19.4395" fill="#03E78B"></circle><path d="M19.3929 14.9176C17.752 14.7684 16.2602 14.3209 14.7684 13.7242C14.0226 13.4259 13.1275 13.7242 12.8292 14.4701L11.7849 16.2602C8.65222 14.6193 6.11623 11.9341 4.47529 8.95057L6.41458 7.90634C7.16046 7.60799 7.45881 6.71293 7.16046 5.96705C6.56375 4.47529 6.11623 2.83435 5.96705 1.34259C5.96705 0.596704 5.22117 0 4.47529 0H0.745882C0.298353 0 5.69062e-07 0.298352 5.69062e-07 0.745881C5.69062e-07 3.72941 0.596704 6.71293 1.93929 9.3981C3.87858 13.575 7.30964 16.8569 11.3374 18.7962C14.0226 20.1388 17.0061 20.7355 19.9896 20.7355C20.4371 20.7355 20.7355 20.4371 20.7355 19.9896V16.4094C20.7355 15.5143 20.1388 14.9176 19.3929 14.9176Z" transform="translate(9.07179 9.07178)" fill="white"></path></svg>
            </motion.button>
            
            <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
                duration: .3, // Makes the animation slower
                ease: "easeInOut", // Smooth easing
            }}
            className="w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg"
            >
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="color-element" cx="19.4395" cy="19.4395" r="19.4395" fill="#49E670"></circle><path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="#FAFAFA"></path><path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" stroke-width="0.2"></path></svg>
            </motion.button>


            <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
                duration: .3, // Makes the animation slower
                ease: "easeInOut", // Smooth easing
            }}
            className="w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg"
            >
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="color-element" cx="19.4395" cy="19.4395" r="19.4395" fill="#FF549C"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M2.60298 0H16.9194C18.351 0 19.5224 1.19321 19.5224 2.65158V14.5838C19.5224 16.0421 18.351 17.2354 16.9194 17.2354H7.4185L3.64418 20.4173C3.51402 20.5499 3.38388 20.5499 3.25372 20.5499H2.99344C2.73314 20.4173 2.60298 20.1521 2.60298 19.887V17.2354C1.17134 17.2354 0 16.0421 0 14.5838V2.65158C0 1.19321 1.17134 0 2.60298 0ZM2.60316 11.2696C2.60316 11.6673 2.86346 11.9325 3.25391 11.9325H4.5554C5.5966 11.9325 6.50764 11.0044 6.50764 9.94376C6.50764 8.88312 5.5966 7.95505 4.5554 7.95505C4.16496 7.95505 3.90465 7.68991 3.90465 7.29218C3.90465 6.89441 4.16496 6.62927 4.5554 6.62927H5.85689C6.24733 6.62927 6.50764 6.36411 6.50764 5.96637C6.50764 5.56863 6.24733 5.30347 5.85689 5.30347H4.5554C3.51421 5.30347 2.60316 6.23154 2.60316 7.29218C2.60316 8.35281 3.51421 9.28085 4.5554 9.28085C4.94585 9.28085 5.20613 9.54602 5.20613 9.94376C5.20613 10.3415 4.94585 10.6067 4.5554 10.6067H3.25391C2.86346 10.6067 2.60316 10.8718 2.60316 11.2696ZM14.9678 11.9325H13.6664C13.2759 11.9325 13.0156 11.6673 13.0156 11.2696C13.0156 10.8718 13.2759 10.6067 13.6664 10.6067H14.9678C15.3583 10.6067 15.6186 10.3415 15.6186 9.94376C15.6186 9.54602 15.3583 9.28085 14.9678 9.28085C13.9267 9.28085 13.0156 8.35281 13.0156 7.29218C13.0156 6.23154 13.9267 5.30347 14.9678 5.30347H16.2693C16.6598 5.30347 16.9201 5.56863 16.9201 5.96637C16.9201 6.36411 16.6598 6.62927 16.2693 6.62927H14.9678C14.5774 6.62927 14.3171 6.89441 14.3171 7.29218C14.3171 7.68991 14.5774 7.95505 14.9678 7.95505C16.009 7.95505 16.9201 8.88312 16.9201 9.94376C16.9201 11.0044 16.009 11.9325 14.9678 11.9325ZM10.4126 11.2697C10.4126 11.6674 10.6729 11.9326 11.0633 11.9326C11.4538 11.9326 11.7141 11.6674 11.8442 11.2697V5.96649C11.8442 5.70135 11.5839 5.43619 11.3236 5.30362C10.9332 5.30362 10.6729 5.43619 10.5427 5.70135L9.76186 7.15973L8.98094 5.70135C8.85081 5.43619 8.46034 5.17102 8.20006 5.30362C7.93977 5.43619 7.67946 5.70135 7.67946 5.96649V11.2697C7.67946 11.6674 7.93977 11.9326 8.33022 11.9326C8.72066 11.9326 8.98094 11.6674 8.98094 11.2697V8.75067L9.1111 8.88327C9.37138 9.28101 10.0221 9.28101 10.2825 8.88327L10.4126 8.75067V11.2697Z" transform="translate(9.67801 10.4601)" fill="white"></path></svg>
            </motion.button>
            
            

            <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
                duration: .3, // Makes the animation slower
                ease: "easeInOut", // Smooth easing
            }}
            className="w-9 h-9 rounded-full text-white flex items-center justify-center shadow-lg"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 512 512" id="tripadvisor">
                <path d="M64 0h384c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0z" fill="#589541"></path>
                <path d="M256 136c-53.3 0-93.3 13.4-133.3 53.4H56s0 20 26.7 26.7c-12 16.3-26.7 44.7-26.7 66.6 0 55 38.3 93.3 93.3 93.3 31.2 0 61.7-17.5 80-40l26.7 40 26.7-40c18.3 22.5 48.8 40 80 40 55 0 93.3-38.3 93.3-93.3 0-21.9-14.7-50.2-26.7-66.7 26.7-6.7 26.7-26.7 26.7-26.7h-66.7c-40-40-80-53.3-133.3-53.3zm0 13.3c66.7 0 106.7 40 106.7 40-53.4 0-106.7 66.7-106.7 133.4 0-66.7-53.3-133.3-106.7-133.3 0-.1 40-40.1 106.7-40.1zM149.3 216c36.8 0 66.7 29.8 66.7 66.7 0 36.8-29.8 66.7-66.7 66.7s-66.7-29.8-66.7-66.7c.1-36.8 29.9-66.7 66.7-66.7zm213.4 0c36.8 0 66.7 29.8 66.7 66.7 0 36.8-29.8 66.7-66.7 66.7S296 319.5 296 282.7c0-36.8 29.8-66.7 66.7-66.7zm-213.4 26.7c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm213.4 0c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zM149.3 256c14.7 0 26.7 12 26.7 26.7s-12 26.7-26.7 26.7-26.7-11.9-26.7-26.7c.1-14.7 12-26.7 26.7-26.7zm213.4 0c14.7 0 26.7 12 26.7 26.7s-12 26.7-26.7 26.7-26.7-12-26.7-26.7 11.9-26.7 26.7-26.7zm-213.4 13.3c-7.4 0-13.3 6-13.3 13.3 0 7.4 6 13.3 13.3 13.3 7.4 0 13.3-6 13.3-13.3.1-7.3-5.9-13.3-13.3-13.3zm213.4 0c-7.4 0-13.3 6-13.3 13.3 0 7.4 6 13.3 13.3 13.3 7.4 0 13.3-6 13.3-13.3 0-7.3-6-13.3-13.3-13.3z" fill="#fff"></path>
                </svg>
            </motion.button>

            <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
                duration: .3, // Makes the animation slower
                ease: "easeInOut", // Smooth easing
            }}
            className="w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg"
            >
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="color-element" cx="19.4395" cy="19.4395" r="19.4395" fill="#FF485F"></circle><path d="M20.5379 14.2557H1.36919C0.547677 14.2557 0 13.7373 0 12.9597V1.29597C0 0.518387 0.547677 0 1.36919 0H20.5379C21.3594 0 21.9071 0.518387 21.9071 1.29597V12.9597C21.9071 13.7373 21.3594 14.2557 20.5379 14.2557ZM20.5379 12.9597V13.6077V12.9597ZM1.36919 1.29597V12.9597H20.5379V1.29597H1.36919Z" transform="translate(8.48619 12.3117)" fill="white"></path><path d="M10.9659 8.43548C10.829 8.43548 10.692 8.43548 10.5551 8.30588L0.286184 1.17806C0.012346 0.918864 -0.124573 0.530073 0.149265 0.270879C0.423104 0.0116857 0.833862 -0.117911 1.1077 0.141283L10.9659 7.00991L20.8241 0.141283C21.0979 -0.117911 21.5087 0.0116857 21.7825 0.270879C22.0563 0.530073 21.9194 0.918864 21.6456 1.17806L11.3766 8.30588C11.2397 8.43548 11.1028 8.43548 10.9659 8.43548Z" transform="translate(8.47443 12.9478)" fill="white"></path><path d="M9.0906 7.13951C8.95368 7.13951 8.81676 7.13951 8.67984 7.00991L0.327768 1.17806C-0.0829894 0.918864 -0.0829899 0.530073 0.190849 0.270879C0.327768 0.0116855 0.738525 -0.117911 1.14928 0.141282L9.50136 5.97314C9.7752 6.23233 9.91212 6.62112 9.63828 6.88032C9.50136 7.00991 9.36444 7.13951 9.0906 7.13951Z" transform="translate(20.6183 18.7799)" fill="white"></path><path d="M0.696942 7.13951C0.423104 7.13951 0.286185 7.00991 0.149265 6.88032C-0.124573 6.62112 0.012346 6.23233 0.286185 5.97314L8.63826 0.141282C9.04902 -0.117911 9.45977 0.0116855 9.59669 0.270879C9.87053 0.530073 9.73361 0.918864 9.45977 1.17806L1.1077 7.00991C0.970781 7.13951 0.833862 7.13951 0.696942 7.13951Z" transform="translate(8.47443 18.7799)" fill="white"></path></svg>
            </motion.button>

            <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
                duration: .3, // Makes the animation slower
                ease: "easeInOut", // Smooth easing
            }}
            className="w-9 h-9 rounded-full text-white flex items-center justify-center shadow-lg"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" id="instagram">
                    <defs>
                        <radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                        <stop offset=".09" stop-color="#fa8f21"></stop>
                        <stop offset=".78" stop-color="#d82d7e"></stop>
                        </radialGradient>
                        <radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                        <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
                        <stop offset="1" stop-color="#8c3aaa"></stop>
                        </radialGradient>
                    </defs>
                    <path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                    <path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                    <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
              </svg>
            </motion.button>
          </>
        )}

        {/* Main FAB button */}
        <motion.button
          onClick={toggleMenu}
          className="w-10 h-10 FABBtn rounded-full bg-black text-white flex items-center justify-center shadow-lg"
          style={{boxShadow: '0 0 10px .1px white'}}
          animate={{ rotate: open ? 360 : 0 }}
        >
            {!open? (
            <svg
            className="FABBtn"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="-496.8 507.1 54 54"
            xmlSpace="preserve"
            >
            {/* Styles moved into JSX-friendly format */}
            <style type="text/css">
                {`.chaty-sts1-0 { fill: #ffffff; }
                .chaty-sts2 { fill: none; stroke: #808080; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }`}
            </style>

            {/* Circle background */}
            <g>
                <circle cx="-469.8" cy="534.1" r="27" fill="#000" />
            </g>

            {/* Main white icon path */}
            <path
                className="chaty-sts1-0"
                d="M-459.5,523.5H-482c-2.1,0-3.7,1.7-3.7,3.7v13.1c0,2.1,1.7,3.7,3.7,3.7h19.3l5.4,5.4c0.2,0.2,0.4,0.2,0.7,0.2c0.2,0,0.2,0,0.4,0
                c0.4-0.2,0.6-0.6,0.6-0.9v-21.5C-455.8,525.2-457.5,523.5-459.5,523.5z"
            />

            {/* Gray stroke paths */}
            <path
                className="chaty-sts2"
                d="M-476.5,537.3c2.5,1.1,8.5,2.1,13-2.7"
            />
            <path
                className="chaty-sts2"
                d="M-460.8,534.5c-0.1-1.2-0.8-3.4-3.3-2.8"
            />
            </svg>) : ( <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="26" cy="26" rx="26" ry="26" fill="#000"></ellipse><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="#ffffff"></rect><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="#ffffff"></rect></svg> )}

        </motion.button>
      </div>
    </div>
  );
};

export default FAB;
