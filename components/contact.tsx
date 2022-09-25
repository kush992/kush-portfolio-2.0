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
  const { register, handleSubmit } = useForm<FormInputInterface>();
  const onSubmit: SubmitHandler<FormInputInterface> = (formData) =>{
    location.href = `mailto:kush.bhal1999@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+48517568485</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">kush.bhal1999@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Warsaw Poland</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact-input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact-input"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contact-input"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact-input"
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
