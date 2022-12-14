/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

interface Props {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#f7ab0a]/80">
                {projects.map((project, i) => (
                    <div
                        key={project?._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                            alt=""
                            className="md:h-[200px] w-[400px]"
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-xl md:text-4xl font-semibold text-center">
                                <span className="underline decoration-[#f7ab0a]/50">
                                    Case Study {i + 1} of {projects?.length}:
                                </span>
                                {" "} {project?.title}
                            </h4>
                        </div>
                        <p className="text-md md:text-lg text-center md:text-left">
                            {project?.summary}
                        </p>
                        <Link href={project?.linkToBuild}><p className='text-sm'>Link to Project</p></Link>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
        </div>
    );
};

export default Projects;
