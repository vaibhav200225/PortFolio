import React from "react";
import Malwaredev from "../../images/pics/malware-dev.jpg";
import MalwareAnalyzer from "../../images/pics/malwareana.jpg";
import WebsiteDevelopment from "../../images/pics/websitedev.png";
import Image from "next/image";

export default function Projects() {
  return (

    <section className=" lg:grid lg:grid-cols-4 gap-10 flex-row lg:pl-24 lg:pr-24 group ">
      <div className=" transform hover:scale-125 transition duration-500 group-hover:blur-md hover:!blur-none cursor-pointer text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
        <Image src={Malwaredev} width={100} height={100} alt="consultins" />
        <h2 className=" text-3xl font-bold pt-8 pb-2">Malware Development</h2>
        <p className="py-2 ">
          I have Developed a Malware with the help of socket programming
          (Python) in which when the user use the exe application it will
          execute the cmd and get the Reverse Shell of user machine.
        </p>
      </div>

      <div className=" transform hover:scale-125 transition duration-500 group-hover:blur-md hover:!blur-none cursor-pointer text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
        <Image src={Malwaredev} width={100} height={100} alt="consultins" />
        <h2 className=" text-3xl font-bold pt-8 pb-2">Malware Development</h2>
        <p className="py-2 ">
          I have Developed a Malware with the help of socket programming
          (Python) in which when the user use the exe application it will
          execute the cmd and get the Reverse Shell of user machine.
        </p>
      </div>

      <div className=" transform hover:scale-125 transition duration-500 group-hover:blur-md hover:!blur-none cursor-pointer text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
        <Image src={Malwaredev} width={100} height={100} alt="consultins" />
        <h2 className=" text-3xl font-bold pt-8 pb-2">Malware Development</h2>
        <p className="py-2 ">
          I have Developed a Malware with the help of socket programming
          (Python) in which when the user use the exe application it will
          execute the cmd and get the Reverse Shell of user machine.
        </p>
      </div>

      <div className=" transform hover:scale-125 transition duration-500 group-hover:blur-md hover:!blur-none cursor-pointer text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
        <Image src={Malwaredev} width={100} height={100} alt="consultins" />
        <h2 className=" text-3xl font-bold pt-8 pb-2">Malware Development</h2>
        <p className="py-2 ">
          I have Developed a Malware with the help of socket programming
          (Python) in which when the user use the exe application it will
          execute the cmd and get the Reverse Shell of user machine.
        </p>
      </div>
    </section>
  );
}
