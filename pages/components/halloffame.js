import React from "react";
import Image from "next/image";
import PlanetArt from "../../images/pics/planet.png";
import WebsiteBuild from "../../images/pics/webbuilder.png";

export default function halloffame() {
    return(
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

          <div className=" pt-10 flex space-x-20 ">
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
            <div>
              <Image src={PlanetArt} width={100} height={100} alt="Planet" className=" rounded-full "/>
            </div>
            <div>
              <Image src={WebsiteBuild} width={100} height={100} alt="WebsiteBuilder" className=" rounded-full"/>
            </div>
            <div></div>
          </div>
          <div className=" pb-12"></div>
        </section>
    )
}