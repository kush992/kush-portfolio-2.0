/* eslint-disable @next/next/no-img-element */
import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './backgroundCircles'

interface Props {
    pageInfo: PageInfo
}

const Hero = ({ pageInfo}: Props) => {
    const [text] = useTypewriter({
        words: [
            'Hillow hillow, Kush this side!!!!',
            'Tea.tsx',
            '<ProfessionalReactDeveloper />'
        ],
        loop: true,
        delaySpeed: 3000
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                alt='kush-bhalodi-profile-pic'
                src={urlFor(pageInfo?.heroImage).url()}
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-lg md:text-2xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>

            </div>
            <div className='pt-5 flex'>
                <a href="#about"><button className='hero-btn'>About</button></a>
                <a href="#experience"><p className='hero-btn'>Experience</p></a>
                <a href="#skills"><p className='hero-btn'>Skills</p></a>
                <a href="#projects"><p className='hero-btn'>Projects</p></a>
            </div>
        </div >
    )
}

export default Hero