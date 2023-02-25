import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Twitter from "../images/icons/twitter.svg";
import Facebook from "../images/icons/facebook.svg";
import Instagram from "../images/icons/instagram.svg";
import Linkedin from "../images/icons/linkedin.svg";
import Image from "next/image";
import deved from "../images/pics/hacker.png";
import design from "../images/pics/design.png";
import code from "../images/pics/code.png";
import Consulting from "../images/pics/consulting.png";
import Malwaredev from "../images/pics/malware-dev.jpg";
import MalwareAnalyzer from "../images/pics/malwareana.jpg"
import { useState } from "react";

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
          <nav className=" py-5 mb-10 flex justify-between md:text-sm">
            <h1 className=" text-xl font-burtons bg-gradient-to-r  from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md shadow-lg shadow-cyan-400">
              Developed by Vzsecure
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl text-black dark:text-white "
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r  from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 shadow-lg shadow-cyan-400"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl drop-shadow-lg">
              Vaibhav Zadane
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
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
          <div className=" text-xl flex justify-center gap-16 py-3 text-gray-600 ">
            <a href="#">
              <Image src={Twitter} alt="Twitter" />
            </a>
            <a href="#">
              <Image src={Linkedin} alt="Linkedin" />
            </a>
            <a href="#">
              <Image src={Facebook} alt="Facebook" />
            </a>
            <a href="#">
              <Image src={Instagram} alt="Instagram" />
            </a>
          </div>
          <div className=" shadow-lg shadow-cyan-400 relative bg-gradient-to-b overflow-hidden from-white rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96 dark:from-lime-500 dark:to-teal-500">
            <Image src={deved} layout="fill" objectFit="cover" alt="deved" />
          </div>
        </section>
        <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 drop-shadow-xl" />
        <section className=" text-center mt-10">
          <div>
            <h2 className=" text-3xl py-1 dark:text-white">
              Services We Offer
            </h2>
            <p className=" text-lg py-5 leading-8 text-gray-800 md:text-xl mal-w-xl mx-auto lg:mr-60 lg:ml-60 dark:text-white">
              We offer a range of high-quality services to help our clients
              achieve their business goals. Our services include all the topics
              which are mentioned below. We as Experienced professionals will
              provide the service and delivery result that our client is
              expecting from us. We believe in building long-term relationships
              with our clients based on trust and respect.
            </p>
          </div>
          <div className=" lg:grid lg:grid-cols-3 gap-10 flex-row">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} width={100} height={100} alt="design" />
              <h2 className=" text-3xl font-bold pt-8 pb-2">
                Website Application <br />
                Development
              </h2>
              <p className="py-2">
                Everyone in there own Industry want to do some <br />
                creative so to get the attention of public and make the profit
                <br />
                of our business. For website development <br />
                we will fulfield you needs.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <p className=" text-gray-800 py-1">Front-End Designing</p>
              <p className=" text-gray-800 py-1">Back-End Management</p>
              <p className=" text-gray-800 py-1">Wordpress</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
              <Image src={code} width={100} height={100} alt="code" />
              <h2 className=" text-3xl font-bold pt-8 pb-2">
                Vulnerability Analysis & <br /> Penetration Testing
              </h2>
              <p className="py-2">
                Security is the main concern in the business industries. <br />
                If there is lack of security there may be chanches of loss
                <br /> of financial and reputaion.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <p className=" text-gray-800 py-1">
                WEB/Mobile/API Penetration Testing.
              </p>
              <p className=" text-gray-800 py-1">
                Network Penetration Testing.
              </p>
              <p className=" text-gray-800 py-1">Source Code Reviewing.</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={Consulting}
                width={100}
                height={100}
                alt="consultins"
              />
              <h2 className=" text-3xl font-bold pt-8 pb-2">
                Spreading Security <br /> Awareness
              </h2>
              <p className="py-2 ">
                In our day to day life the most of people not know about <br />
                security.Some people are getting tricked by Social <br />
                Engineering Attacks.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <p className=" text-gray-800 py-1">Taking a live Seminar</p>
              <p className=" text-gray-800 py-1">
                Teaching about Cyber Security
              </p>
              <p className=" text-gray-800 py-1">
                How to prevent those activities.
              </p>
            </div>
          </div>
          <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 drop-shadow-xl" />
        </section>
        <section className=" text-center">
          <div>
            <h2 className=" text-3xl py-1 dark:text-white">PROJECTS</h2>
            <p className=" text-lg py-2 leading-8 text-gray-800 dark:text-white">
              Some of mine recent work
            </p>
          </div>
          <div className=" lg:grid lg:grid-cols-4 flex-row gap-10">
            <div>
              <a href="#">
              <div className=" bg-gradient-to-b dark:from-green-200 dark:to-emerald-500 p-10 my-10 rounded-3xl relative w-20 h-20 mt-10 mx-auto md:h-80 md:w-80 overflow-hidden shadow-zinc-500 hover:shadow-lg hover:shadow-cyan-500 ">
              <Image src={Malwaredev} alt="code" layout="fill" objectFit="none" />
              </div>
              </a>
              <div>
                <h2 className=" text-teal-600 lg:text-3xl text-lg">
                  Malware <br />Development
                </h2>
                <p className=" pt-5 dark:text-white lg:text-lg">
                  I have Developed a Malware with the help of socket programming (Python)
                  in which when the user use the exe application it will execute the cmd and 
                  get the Reverse Shell of user machine.
                </p>
              </div>
            </div>

            <div>
              <a href="#">
              <div className=" bg-gradient-to-b dark:from-green-200 dark:to-emerald-500 p-10 my-10 dark:bg-white rounded-3xl relative w-20 h-20 mt-10 mx-auto md:h-80 md:w-80 overflow-hidden shadow-zinc-500 hover:shadow-lg hover:shadow-cyan-500 ">
              <Image src={MalwareAnalyzer} alt="code" layout="fill" objectFit="none" />
              </div>
              </a>
              <div>
                <h2 className=" text-teal-600 lg:text-3xl text-lg">
                  Malware <br />Analysis
                </h2>
                <p className=" pt-5 dark:text-white lg:text-lg">
                  While learning about Malware Analysis I have tested one malware sample
                  which is WannaCry Ransomeware which is well known in Cyber domain.
                  I have gone through every detail working of the malware.
                </p>
              </div>
            </div>

            <div>
              <a href="#">
              <div className=" bg-gradient-to-b dark:from-green-200 dark:to-emerald-500 p-10 my-10 dark:bg-white rounded-3xl relative w-20 h-20 mt-10 mx-auto md:h-80 md:w-80 overflow-hidden shadow-zinc-500 hover:shadow-lg hover:shadow-cyan-500 ">
              <Image src={MalwareAnalyzer} alt="code" layout="fill" objectFit="none" />
              </div>
              </a>
              <div>
                <h2 className=" text-teal-600 lg:text-3xl text-lg">
                  Website <br />Development
                </h2>
                <p className=" pt-5 dark:text-white lg:text-lg">
                  While learning about Malware Analysis I have tested one malware sample
                  which is WannaCry Ransomeware which is well known in Cyber domain.
                  I have gone through every detail working of the malware.
                </p>
              </div>
            </div>

            <div>
              <a href="#">
              <div className=" bg-gradient-to-b dark:from-green-200 dark:to-emerald-500 p-10 my-10 dark:bg-white rounded-3xl relative w-20 h-20 mt-10 mx-auto md:h-80 md:w-80 overflow-hidden shadow-zinc-500 hover:shadow-lg hover:shadow-cyan-500 ">
              <Image src={MalwareAnalyzer} alt="code" layout="fill" objectFit="none" />
              </div>
              </a>
              <div>
                <h2 className=" text-teal-600 lg:text-3xl text-lg">
                  Comming <br />Soon
                </h2>
                <p className=" pt-5 dark:text-white lg:text-lg">
                  While learning about Malware Analysis I have tested one malware sample
                  which is WannaCry Ransomeware which is well known in Cyber domain.
                  I have gone through every detail working of the malware.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
