import DegreeHat from "~/assets/icons/degreeHat";
import BriefCase from "~/assets/icons/briefCase";

const education = {
  title: "Education",
  icon: DegreeHat,
  experience: [
    {
      time: "2020-2021",
      major: "Software Development",
      school: "Moringa School",
    },
    {
      time: "2012-2016",
      major: "Disaster Management",
      school: "Masinde Muliro Universiity",
    },
  ],
};

const experience = {
  title: "Experience",
  icon: BriefCase,
  experience: [
    {
      time: "2022 - Present",
      job: "Technical Mentor",
      company: "Moringa School",
    },
    {
      time: "2021-2022",
      job: "Website Development ",
      company: "Village 2 Nation",
    },
  ],
};

const workSkills = {
  title: "Work Skills",
  list: [
    "NEXT.js",
    "NEXT.js",
    "HTML 5",
    "CSS 3",
    "Tailwind CSS",
    "Figma",
    "JavaScript",
    "Mongo DB",
    "SQL",
    "Angular",
    "Android",
    "Git",
  ],
};

const softSkills = {
  title: "Soft Skills",
  list: [
    "Time Management",
    "Mentorship",
    "Impeccable Communication",
    "Flexibility",
    "Research",
    "Writing",
  ],
};

export { education, experience, workSkills, softSkills };
