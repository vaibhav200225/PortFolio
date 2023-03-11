import emailjs from '@emailjs/browser';
import Linkedin from "../../images/icons/linkedin.png";
import Twitter from "../../images/icons/twitter.png";
import Github from "../../images/icons/github.png";
import Youtube from "../../images/icons/youtube.png"
import Image from "next/image"; 


export default function contactme(){

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dg9goxz', 'template_i0pmssg', e.target, 'JQjzwP5vEzf3zU6l9')
          .then((result) => {
              if (document.getElementById("fullllname").value == ""){
                document.getElementById("errorname").innerHTML == "Please provide your Full Name"
              } else if (document.getElementById("email").value == ""){
                alert("Empty email")    
              } else if (document.getElementById("number").value == ""){
                alert("Empty Number")    
              } else if (document.getElementById("message").value == ""){
                alert("Empty Message")    
              } else{
                console.log(result.text);
                var form = document.getElementById("clear");
                form.reset();
                alert("Thankyou for sending message. We will response you ASAP.")
              }
              
          }, (error) => {
              console.log(error.text);
          });
    };

    return(
        <>
        <div className=" pt-3"></div>
        <div className=" flex items-top justify-center bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className=" max-w-9xl mx-auto sm:px-6 lg:px-2">
                <div className=" mt-8 overflow-x-hidden">
                    <div className=" grid grid-cols-1 md:grid-cols-2">
                        <div className="  p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                            <h1 className=" lg:mt-7 text-4xl sm:text-5xl text-gray-800 dark:text-white font-bold tracking-tight font-serif">
                                Get in Touch
                            </h1>
                            <p className=" lg:mt-5 text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                Fill the form to Contact Us.
                            </p>

                            <div className=" flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <div className=" ml-4 text-md tracking-wide font-semibold w-40">
                                    Mumbai, Maharashtra
                                </div>
                            </div>

                            <div className=" flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <div className=" ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 9370659884
                                </div>
                            </div>

                            <div className=" flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div className=" ml-4 text-md traking-wide font-semibold w-40">
                                    vaibhavmadan2002@gmail.com
                                </div>                            
                            </div>

                            <div className=' flex space-x-8 mt-4'>
                                <div className="transform hover:scale-110 transition duration-500">
                                    <a href="https://twitter.com/vzsecured" target="_blank" rel="noreferrer">
                                        <Image src={Twitter} alt="twitter" width={50} height={50} />
                                    </a>
                                </div>
                                <div className="transform hover:scale-110 transition duration-500">
                                    <a href="https://www.linkedin.com/in/vaibhav-zadane-476461215/" target="_blank" rel="noreferrer">
                                        <Image src={Linkedin} alt="linkedin" width={50} height={50} />
                                    </a>
                                </div>
                                <div className="transform hover:scale-110 transition duration-500">
                                    <a href="https://github.com/vaibhav200225" target="_blank" rel="noreferrer">
                                        <Image src={Github} alt="github" width={50} height={50} />
                                    </a>
                                </div>
                                <div className="transform hover:scale-110 transition duration-500">
                                    <a href="https://www.youtube.com/channel/UCfGM2YPcD6SrhMn6M13Rumw" target="_blank" rel="noreferrer">
                                        <Image src={Youtube} alt="github" width={50} height={50} />
                                    </a>
                                </div>
                            </div>

                            <div className=' flex items-center mt-4 text-gray-600 dark:text-gray-400'>
                                <div></div>
                            </div>
                        </div>
                        <form id='clear' className=" p-6 flex flex-col justify-center" onSubmit={sendEmail}>
                            <div className=" flex flex-col">
                                <label for="name" className=" hidden"> Full Name</label>
                                <input type="name" name="name" id="fullllname" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                <p id='errorname' ></p>
                            </div>

                            <div className=" flex flex-col mt-2">
                                <label for="email" className=" hidden">Email</label>
                                <input type="email" name="user_email" id="email" placeholder="Email" className=" w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div className=" flex flex-col mt-2">
                                <label for="number" className=" hidden">Phone Number</label>
                                <input type="tel" name="user_number" id="number" placeholder="Phone No." className=" w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div className=" flex flex-col mt-3">
                                <label for="mess" className="hidden">Message</label>
                                <textarea id="message" name='message' rows="6" placeholder="Message Here" className=" form-control block w-full px-3 py-1.5 text font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"></textarea>
                            </div>
                            <div className=' flex flex-col mt-4 w-16 text-lg'>
                                <button type='submit' className=' dark:text-white bg-blue-400 rounded-lg'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className=" pt-12"></div>
        </>
    );
}
