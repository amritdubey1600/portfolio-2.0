export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 0,
    img: "https://www.piratesalert.com/images/logo.png",
    role: "Fullstack Developer Intern",
    company: "Pirates Alert",
    date: "Aug 2023 - Oct 2023",
    desc: "Independently designed and developed a full-stack web application using Material UI and React for a modern, responsive user interface. Built RESTful APIs with Node.js and Express.js, seamlessly integrating with a MySQL database. Implemented robust backend solutions to ensure efficient data handling and optimized overall system performance. Conducted thorough troubleshooting and optimization to deliver a refined and reliable end product.",
    skills: [
      "React.js",
      "Material UI",
      "MySQL",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JavaScript"
    ],
  },
  {
    id: 2,
    img: "https://diversion2k23.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F9044596e7312430784e65eb7aa15d54f%2Fassets%2Ffavicon%2F216.png&w=1440&q=75",
    role: "Open Source Contributor",
    company: "Diversion",
    date: "Jan 2023 - Feb 2023",
    desc: "Actively contributed to a variety of open-source projects, each serving as a pivotal learning experience that not only enriched my understanding but also provided avenues for skill refinement and collaborative engagement within the open-source community.",
    skills: ["Open Source", "Collaboration", "Git", "GitHub", "Community Engagement"],
  },
];