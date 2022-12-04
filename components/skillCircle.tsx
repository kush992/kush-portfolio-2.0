import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

interface Props {
  skill: Skill;
}

const SkillCircle = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={urlFor(skill?.image).url()}
        className={`rounded-full border border-gray-500 object-cover w-14 h-14 xl:w-20 xl:h-20 filter transition duration-300 ease-in-out ${skill?.progress && 'group-hover:grayscale'}`}
      />
    </div>
  );
};

export default SkillCircle;
