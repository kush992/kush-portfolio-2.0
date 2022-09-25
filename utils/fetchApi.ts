import * as fetchInterface from "../typings";
import axios from "axios";

export const fetchData = async (module: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${module}`
  );
  return data;
};

export const fetchSkills = async () => {
  const data = await fetchData("getSkill");
  const skills: fetchInterface.Skill[] = data.skills;
  return skills;
};

export const fetchPageInfo = async () => {
  const data = await fetchData("getPageInfo");
  const pageInfo: fetchInterface.PageInfo = data.pageInfo;
  return pageInfo;
};

export const fetchSocial = async () => {
  const data = await fetchData("getSocial");
  const socials: fetchInterface.Social[] = data.socials;
  return socials;
};

export const fetchExperience = async () => {
  const data = await fetchData("getExperience");
  const experiences: fetchInterface.Experience[] = data.experience;
  return experiences;
};

export const fetchProject = async () => {
  const data = await fetchData("getProject");
  const projects: fetchInterface.Project[] = data.project;
  return projects;
};
