import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactForm from "./contactForm";

const Contact = () => {

   return (
      <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg">
            Contact Me
         </h3>

         <div className="flex flex-col space-y-10">
            <h4 className="mt-10 text-xl md:text-4xl font-semibold text-center">
               I have got just what you need.{" "}
               <span className="decoration-[#f7ab0a]/50 underline">
                  Lets Talk.
               </span>
            </h4>

            <div className="space-y-5">
               <div className="flex items-center space-x-2 justify-center">
                  <PhoneIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
                  <p className="text-md md:text-2xl">+48517568485</p>
               </div>
               <div className="flex items-center space-x-2 justify-center">
                  <EnvelopeIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
                  <p className="text-md md:text-2xl">kush.bhal1999@gmail.com</p>
               </div>
               <div className="flex items-center space-x-2 justify-center">
                  <MapPinIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
                  <p className="text-md md:text-2xl">Warsaw Poland</p>
               </div>
            </div>

            <ContactForm />
            <p>KUSH BHALODI</p>
         </div>
      </div>
   );
};

export default Contact;
