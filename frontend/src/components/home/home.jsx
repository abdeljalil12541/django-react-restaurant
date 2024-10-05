import React from "react";
import Slideshow from '../SlideShow';
import HomePage2 from '../HomePage2';
import Location from '../Location';
import HomeGellry from '../HomeGellry';
import WaveDesign from "../WaveDesign";


export default function Home() {
    
    return(
        <div>
            <Slideshow />
            <HomeGellry />
            <HomePage2 />
            <Location />
            <WaveDesign />
        </div>
    );
}