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
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                alt='kush-bhalodi-img'
                src={urlFor(experience?.companyImage).url()}
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology)=>(
                        <img key={technology?._id} src={urlFor(technology?.image).url()} alt="" className='h-6 w-6'/>
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>{experience?.dateStarted} - {experience?.isCurrentlyWorking ? 'present' : experience?.dateEnded}</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points?.map((point, key)=>(
                        <li key={key}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard