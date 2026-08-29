export interface ProjectItemData {
  number: string;
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  status?: string;
}

export const DEVELOPER_INFO = {
  name: "YUVARAJ PG",
  shortName: "YUVARAJ",
  role: "Web Developer",
  location: "Salem, Tamil Nadu, India",
  tagline: "I build web applications and digital interfaces with focus on detail and performance.",
  bio: [
    "I am a web developer specializing in building modern user interfaces and web applications using React, Next.js, TypeScript, and Tailwind CSS.",
    "My focus is on writing clean, maintainable code and delivering responsive, user-friendly digital products."
  ],
  education: {
    degree: "B.E. Electronics and Communication Engineering",
    institution: "AVS Engineering College",
    period: "2023 — 2027",
    location: "Salem, Tamil Nadu, India",
  },
  socials: {
    github: "https://github.com/YuvarajPG",
    linkedin: "https://www.linkedin.com/in/yuvarajpg",
    email: "yvuvarajpg@gmail.com",
    resume: "/Yuvaraj P G Resume -- new style.pdf",
    locationMap: "https://www.google.com/maps/place/Salem,+Tamil+Nadu"
  }
};

export const ACADEMIC_JOURNEY = [
  {
    id: "college",
    period: "2023 — Present",
    title: "B.E. Electronics and Communication Engineering",
    institution: "AVS Engineering College",
    department: "Electronics and Communication Engineering (ECE)",
    location: "Salem, Tamil Nadu, India",
    status: "Currently pursuing"
  },
  {
    id: "hs-12th",
    period: "2021 — 2023",
    title: "Higher Secondary Education (12th)",
    institution: "Bharathi Vidyalaya Higher Secondary School",
    department: "Salem",
    location: "Salem, Tamil Nadu, India",
    status: "Completed"
  },
  {
    id: "sslc-10th",
    period: "2020 — 2021",
    title: "Secondary School Education (10th / SSLC)",
    institution: "Bharathi Vidyalaya Higher Secondary School",
    department: "Salem",
    location: "Salem, Tamil Nadu, India",
    status: "Completed"
  }
];

export const PROJECTS_INDEX: ProjectItemData[] = [
  {
    number: "01",
    id: "portfolio",
    title: "Portfolio Website",
    year: "2026",
    category: "Web Engineering",
    summary: "A personal developer portfolio built with Next.js, React, TypeScript, and Framer Motion featuring custom dark/light theme switching.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/portfolio.png",
    githubUrl: "https://github.com/YuvarajPG/portfolio",
    liveUrl: "#hero"
  },
  {
    number: "02",
    id: "todo-app",
    title: "Todo App",
    year: "2025",
    category: "Frontend Application",
    summary: "A task management web application built with React and Tailwind CSS featuring task state persistence and interactive filtering.",
    technologies: ["React JS", "TypeScript", "Tailwind CSS", "JavaScript", "LocalStorage"],
    image: "/todo_preview.png",
    githubUrl: "https://github.com/YuvarajPG/todo",
    liveUrl: "https://todo-yuva.vercel.app/"
  },
  {
    number: "03",
    id: "inventory-management-system",
    title: "Inventory Management System",
    year: "2026",
    category: "Full-Stack Application",
    summary: "A comprehensive full-stack inventory management system for tracking products, stock levels, pricing, and automated inventory operations.",
    technologies: ["TypeScript", "React JS", "REST APIs", "Tailwind CSS", "Express.js", "Node.js"],
    image: "/IMS.png",
    githubUrl: "https://github.com/YuvarajPG/Inventory-Managent-System",
    liveUrl: "https://inventory-managent-system-seven.vercel.app/",
    status: "on going"
  }
];

export const SKILLS_CATEGORIES = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    items: ["Node.js", "express.js", "REST APIs"]
  },
  {
    title: "Tools & Environment",
    items: ["Git", "GitHub", "Linux", "VS Code", "Vercel"]
  }
];

export const DEVELOPMENT_JOURNEY = [
  {
    period: "2023 — 2027",
    title: "B.E. Electronics & Communication Engineering",
    organization: "AVS Engineering College",
    description: "Pursuing undergraduate degree in ECE with focus on core engineering principles, hardware-software interfaces, and modern programming languages."
  },
  {
    period: "2024",
    title: "Web Engineering & Application Development",
    organization: "Personal Projects",
    description: "Building production-ready applications including Todo App and Portfolio Website using React, Next.js, TypeScript, and Tailwind CSS."
  },
  {
    period: "2023",
    title: "Foundations of Programming",
    organization: "Self-Driven Studies",
    description: "Mastered fundamental web technologies (HTML, CSS, JavaScript) and modern frontend development frameworks."
  }
];
