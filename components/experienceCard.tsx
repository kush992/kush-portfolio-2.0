/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity';

interface Props {
    experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] h-[550px] md:w-[400px] xl:w-[650px] xl:h-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='w-16 h-16 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
                alt='kush-bhalodi-img'
                src={urlFor(experience?.companyImage).url()}
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-md md:text-2xl xl:text-4xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-sm md:text-2xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies?.map((technology) => (
                        <img key={technology?._id} src={urlFor(technology?.image).url()} alt="" className='h-4 w-4 md:h-6 md:w-6' />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300 text-[12px] md:text-md'>{experience?.dateStarted} - {experience?.isCurrentlyWorking ? 'present' : experience?.dateEnded}</p>

                <ul className='list-disc space-y-2 text-sm md:text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#f7ab0a]/80'>
                    {experience.points?.map((point, key) => (
                        <li key={key} className='text-[14px] leading-5'>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard