import React from "react";
import Image from "next/image";
import PlanetArt from "../../images/pics/planet.png";
import WebsiteBuild from "../../images/pics/webbuilder.png";
import Contactme from "./Contactme.js"

export default function halloffame() {
    return(
      <>
        <section className=" lg:h-screen lg:snap-start lg:flex-col lg:justify-center">
          <br className=" mt-2"/>
          <section className=" text-center">
            <div>
              <h2 className=" text-3xl py-1 text-teal-600  font-serif font-semibold">
                Hall Of Fame
              </h2>
              <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                The Hall of Fame acknowledges the work of researchers who have contributed to a bounty program <br />
                Below are the origanization in which I am listed in their Hall Of Fame
              </p>
            </div>

            <div className="md:8 lg:pt-10 lg:flex lg:space-x-20 ">
              <div>
                <p className=" hidden"></p>
              </div>
              <div>
                <p className=" hidden"></p>
              </div>
              <div>
                <p className=" hidden"></p>
              </div>
              <div>
                <p className=" hidden"></p>
              </div>
              <div>
                <p className=" hidden"></p>
              </div>
              <div>
                <p className=" hidden"></p>
              </div>
              <div>
                <p className=" hidden"></p>
              </div>
              <div>
                <p className=" hidden"></p>
              </div>
              <div>
                <p className=" hidden"></p>
              </div>
              <div className="lg:transform lg:hover:scale-125 lg:transition lg:duration-500">
                <Image src={PlanetArt} width={100} height={100} alt="Planet" className=" rounded-full "/>
              </div>
              <div className="lg:transform lg:hover:scale-125 lg:transition lg:duration-500">
                <Image src={WebsiteBuild} width={100} height={100} alt="WebsiteBuilder" className=" rounded-full"/>
              </div>
              <div></div>
            </div>
            <div className=" pb-12"></div>
          </section>
          <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 drop-shadow-xl " />
          
          <Contactme />
        </section>
      </>
    )
}