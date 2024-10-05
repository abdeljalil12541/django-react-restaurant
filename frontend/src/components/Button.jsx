import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import MoroccanDishImg from "../static/images/moroccan-dish.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Button = () => {
    const gradientStyle = {
      backgroundColor: '#f6f4ea',
    };

    const {t, i18n} = useTranslation("global")

    return (
      <div className="grid grid-cols-5 items-center font-worksans min-h-[250px]" style={gradientStyle}>
        {/* Left Column: Text and button container */}
        <div className="ml-4 col-span-3 w-full space-y-4 p-5">
          {/* Left-aligned small text */}
          <div className="flex justify-start">
            <p className="text-sm pl-5">{t("ButtonPage.title")}</p>
          </div>

          {/* Center-aligned large text */}
          <div className="flex justify-center">
            <p className="text-3xl pl-8 font-extrabold text-center  dark:text-white" style={{ color: '#a28419' }}>
              {t("ButtonPage.p1")}
            </p>
          </div>

          {/* Right-aligned button */}
          <div className="flex justify-end">
            <DrawOutlineButton className="text-sm font-semibold">
              <Link to="/réservation">{t("ButtonPage.btn")} <HiArrowLongRight className="text-xl inline-block mb-1" /></Link>
            </DrawOutlineButton>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-span-2 flex justify-end">
          <img 
            src={MoroccanDishImg}
            alt="Moroccan Dish" 
            className="w-full h-auto object-cover"  // Full width, maintain aspect ratio
            style={{ height: '250px', width: '80%' }}  //
          />
        </div>
      </div>
    );
  };

  const DrawOutlineButton = ({ children, ...rest }) => {
    return (
      <button
        {...rest}
        className="group relative px-4 py-2 font-medium text-slate-700 transition-colors duration-[400ms] hover:text-[#a28419]"
      >
        <span>{children}</span>

      </button>
    );
};

export default Button;
