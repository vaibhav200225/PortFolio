import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import deved from "../images/pics/hacker.png";
import { useState } from "react";
import next from "next";
import Projects from "./components/Projects.js";
import Halloffame from "./components/halloffame.js";
import Services from "./components/Services.js";
import Contactme from "./components/contactme.js"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio of VZsecure</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 dark:bg-gray-900">
        <section className="min-h-screen">
          <div>
            <nav className=" py-5 mb-10 flex justify-between md:text-sm">
              <h1 className=" text-xl font-burtons bg-gradient-to-r  from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md shadow-lg shadow-cyan-400">
                Developed by Vzsecure
              </h1>
              <ul className="flex items-center gap-10 right-10">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl text-black dark:text-white "
                  />
                </li>
                <li className=" text-xl font-burtons bg-gradient-to-b from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md shadow-lg shadow-cyan-400">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl drop-shadow-lg font-serif">
              Vaibhav Zadane
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white font-serif">
              CyberSecurity Exert and Malware Analyzer
            </h3>
            <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 drop-shadow-xl" />
            <p className=" text-lg py-5 leading-8 text-gray-800 md:text-xl mal-w-xl mx-auto lg:mr-60 lg:ml-60 dark:text-white">
              Hello, I am Cyber Security and Malware Analyzer from India. My
              journey started off 1.5 years ago with lot of difficulties and
              problems. Those difficulties and problem make me stronger and
              right now I am showcasing you my skill to you all. Woking hard to
              achiving the goals and turning my passion into goal. Right now I
              am completing my BSC-IT degree and getting valueable knowledge. I
              work Freelance as Bug Bounty Hunter and spread the knwoldege to
              all folks related to these domain.
            </p>
          </div>
          
          <div className=" shadow-lg shadow-cyan-400 relative bg-gradient-to-b overflow-hidden from-white rounded-full w-80 h-80 mx-auto md:h-96 md:w-96 dark:from-lime-500 dark:to-teal-500">
            <Image src={deved} layout="fill" objectFit="cover" alt="deved" />
          </div>
        </section>
        
        <Services />

        <Projects />

        <Halloffame />

        <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 drop-shadow-xl " />

        <Contactme />
        
      </main>
    </div>
  );
}
