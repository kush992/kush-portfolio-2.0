import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputInterface {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputInterface>();

    const onSubmit: SubmitHandler<FormInputInterface> = (formData) => {
        location.href = `mailto:kush.bhal1999@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return (
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
        </form>)
}

export default ContactForm;