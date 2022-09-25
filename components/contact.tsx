import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputInterface {
   name: string;
   email: string;
   subject: string;
   message: string;
}

const Contact = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormInputInterface>();

   const onSubmit: SubmitHandler<FormInputInterface> = (formData) => {
      location.href = `mailto:kush.bhal1999@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
   };

   const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   return (
      <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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

            <form
               onSubmit={handleSubmit(onSubmit)}
               className="flex flex-col space-y-2 w-[350px] md:w-fit mx-auto"
            >
               <div className="grid grid-cols-2 space-x-2">
                  <input
                     {...register("name", { required: true })}
                     placeholder="Name"
                     className={`contact-input ${errors.name ? "border border-b-red-500" : ""}`}
                     type="text"
                  />
                  <input
                     {...register("email", {
                        required: true,
                        pattern: emailRegex,
                     })}
                     placeholder="Email"
                     className={`contact-input ${errors.email ? "border border-b-red-500" : ""}`}
                     type="email"
                  />
               </div>
               <input
                  {...register("subject", { required: true })}
                  placeholder="Subject"
                  className={`contact-input ${errors.subject ? "border border-b-red-500" : ""}`}
                  type="text"
               />
               <textarea
                  {...register("message", { required: true })}
                  placeholder="Message"
                  className={`contact-input ${errors.message ? "border border-b-red-500" : ""}`}
               />
               <button
                  type="submit"
                  className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
