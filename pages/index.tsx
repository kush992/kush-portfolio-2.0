/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Header from "../components/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import * as fetchInterface from "../typings";
import {
  fetchExperience,
  fetchPageInfo,
  fetchProject,
  fetchSkills,
  fetchSocial,
} from "../utils/fetchApi";

interface Props {
  pageInfo: fetchInterface.PageInfo;
  experience: fetchInterface.Experience[];
  skills: fetchInterface.Skill[];
  socials: fetchInterface.Social[];
  project: fetchInterface.Project[];
}

const Home = ({ pageInfo, experience, skills, socials, project }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-none">
      <Head>
        <title>Kush Bhalodi Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={experience}/>
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={project}/>
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://kush-web.web.app/images/profilepic.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {

  const pageInfo: fetchInterface.PageInfo = await fetchPageInfo();
  const socials: fetchInterface.Social[] = await fetchSocial();
  const skills: fetchInterface.Skill[] = await fetchSkills();
  const project: fetchInterface.Project[] = await fetchProject();
  const experience: fetchInterface.Experience[] = await fetchExperience();

  return {
    props: {
      pageInfo,
      socials,
      skills,
      project,
      experience,
    },
    revalidate: 10000
  };
};
