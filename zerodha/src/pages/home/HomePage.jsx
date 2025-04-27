import React from "react";

import OpenAccount from "../../components/OpenAccount";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

export default function HomePage(){
    return (
        <div>
              <Hero/>
               <Awards/>  
                <Stats/>
                <Pricing/>
                <Education/>
                <OpenAccount/>
        </div>
    )
}