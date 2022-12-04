import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './experienceCard'
import { Experience } from '../typings'

interface Props {
    experiences: Experience[];
}

const Experience = ({ experiences }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative overflow-hidden h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg'>Experience</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#f7ab0a]/80'>
                {experiences?.map((experience) => (
                    <ExperienceCard key={experience?._id} experience={experience} />
                ))}
            </div>
        </motion.div>
    )
}

export default Experience