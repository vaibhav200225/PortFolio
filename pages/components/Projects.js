import React from "react";
import Malwaredev from "../../images/pics/malware-dev.jpg";
import MalwareAnalyzer from "../../images/pics/malwareana.jpg";
import WebsiteDevelopment from "../../images/pics/websitedev.png";
import Image from "next/image";
import NetworkPentesting from "../../images/pics/networkpen.png"

export default function Projects() {
  return (
    <>
    <section className=" lg:h-screen lg:snap-start lg:items-center lg:justify-center">
      <br className=" mt-5"/>
      <section className=" text-center md:mt-7">
        <div>
          <h2 className=" text-4xl py-1 text-teal-600 font-semibold font-serif">PROJECTS</h2>
            <p className=" lg:mr-60 lg:ml-60 text-xl pt-5 py-3 leading-8 text-gray-800 dark:text-white">
            Here I present my projects that I created with my skills. 
            Some of them are real projects and some are self-made. Have a look if you like.
            </p>
        </div>
      </section>
      <section className=" pt-8 lg:grid lg:grid-cols-4 gap-10 flex-row lg:pl-24 lg:pr-24 group ">
        <div className="lg:transform lg:hover:scale-125 lg:transition lg:duration-500 lg:group-hover:blur-md lg:hover:!blur-none text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={NetworkPentesting} width={150} height={100} alt="consultins" />
          <h2 className=" text-3xl font-bold pt-8 pb-2">Network Penetration Testing</h2>
          <p className="py-2 ">
            In these project I have done complete penetration Testing
            on network. The task was to setup the Metasploitable lab and
            exploiting the port which are exploitable for real world attacks.
          </p>
          <br />
          <a href="https://github.com/vaibhav200225/Network-Pentesting" target="_blank" rel="noreferrer">
            <li className=" text-xl font-burtons bg-gradient-to-b from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-cyan-400">
              Click Here
            </li>
          </a>
        </div>

        <div className=" lg:transform lg:hover:scale-125 lg:transition lg:duration-500 lg:group-hover:blur-md lg:hover:!blur-none text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={MalwareAnalyzer} width={100} height={100} alt="consultins" />
          <h2 className=" text-3xl font-bold pt-8 pb-2">Malware Analysis (WannaCry)</h2>
          <p className="py-2 ">
            I have gone through detail review of malware in which I have discuss 
            about working of the malware in both Static and Dynamic and write an 
            Yara rules.
          </p>
          <br />
          <br />
          <a href="https://github.com/vaibhav200225/Malware-Analysis" target="_blank" rel="noreferrer">
            <li className=" text-xl font-burtons bg-gradient-to-b from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-cyan-400">
              Click Here
            </li>
          </a>
        </div>

        <div className=" lg:transform lg:hover:scale-125 lg:transition lg:duration-500 lg:group-hover:blur-md lg:hover:!blur-none text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={WebsiteDevelopment} width={100} height={100} alt="consultins" />
          <h2 className=" text-3xl font-bold pt-8 pb-2">Website Development</h2>
          <p className="py-2 ">
            This is my self project for showcasing my skills. I have
            developed website which is portfolio category. These is build with
            including React js
          </p>
          <br />
          <br />
          <a href="https://github.com/vaibhav200225/Portfolio" target="_blank" rel="noreferrer">
            <li className=" text-xl font-burtons bg-gradient-to-b from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-cyan-400">
              Click Here
            </li>
          </a>
        </div>

        <div className=" lg:transform lg:hover:scale-125 lg:transition lg:duration-500 lg:group-hover:blur-md lg:hover:!blur-none text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={Malwaredev} width={100} height={100} alt="consultins" />
          <h2 className=" text-3xl font-bold pt-8 pb-2">Malware Development</h2>
          <p className="py-2 ">
            I have Developed a Malware with the help of socket programming
            (Python) in which when the user use the exe application it will
            execute the cmd and get the Reverse Shell of user machine.
          </p>
          <br />
          <a href="#" target="_blank" rel="noreferrer">
            <li className=" text-xl font-burtons bg-gradient-to-b from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-cyan-400">
              Click Here
            </li>
          </a>
        </div>
      </section>
    </section>
    </>
  );
}
