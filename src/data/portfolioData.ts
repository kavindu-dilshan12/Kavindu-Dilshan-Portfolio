export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  status?: string;
  isInDevelopment?: boolean;
  technologies: string[];
  description: string;
  bullets: string[];
  plannedBullets?: string[];
  githubUrl?: string; // Optional: Hidden if empty
  liveDemoUrl?: string; // Optional: Hidden if empty
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status?: string;
  coursework?: string[];
  notes?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    role: string;
    heroSubtitle: string;
    institution: string;
    location: string;
    phoneDisplay: string;
    phoneLink: string;
    email: string;
    emailLink: string;
    linkedInUrl: string;
    gitHubUrl: string;
    badgeText: string;
    photoUrl?: string;
    heroIntro: string;
    aboutText: string;
    /**
     * Resume URL configuration:
     * To activate the "Download CV" button, provide the path or URL to Kavindu_Dilshan_CV.pdf
     * (e.g. '/Kavindu_Dilshan_CV.pdf' or a hosted link).
     * Initially empty as required.
     */
    resumeUrl: string;
    resumeFileName: string;
  };
  skills: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  navLinks: { label: string; href: string }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Kavindu Dilshan",
    monogram: "KD",
    role: "IT Undergraduate & Aspiring Software Developer",
    heroSubtitle: "IT Undergraduate | Aspiring Software Developer",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "Malabe, Sri Lanka",
    phoneDisplay: "+94 76 615 4145",
    phoneLink: "tel:+94766154145",
    email: "kavindudilshan196811@gmail.com",
    emailLink: "mailto:kavindudilshan196811@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/kavindu-dilshan12",
    gitHubUrl: "https://github.com/kavindu-dilshan12",
    badgeText: "Seeking IT Internship Opportunities",
    photoUrl: "/profile.png",
    heroIntro:
      "I’m an Information Technology undergraduate at SLIIT, interested in building practical software solutions and growing through hands-on development.",
    aboutText:
      "Information Technology undergraduate at SLIIT with knowledge of Java, Python, C++, web development, and database management. Interested in building practical software solutions and expanding technical skills through hands-on learning. Seeking an IT internship to apply academic knowledge and contribute to a development team.",
    resumeUrl: "/Kavindu_Dilshan_CV.pdf",
    resumeFileName: "Kavindu_Dilshan_CV.pdf",
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    {
      title: "Programming Languages",
      iconName: "Code2",
      description: "Core languages for algorithmic logic, OOP, and systems programming.",
      skills: ["Java", "Python", "JavaScript", "C++"],
    },
    {
      title: "Frontend Development",
      iconName: "Layout",
      description: "Modern UI engineering with reactive frameworks and component styling.",
      skills: ["React", "HTML", "CSS", "Vite"],
    },
    {
      title: "Backend Development",
      iconName: "Server",
      description: "Service architecture, REST API design, and enterprise server logic.",
      skills: ["Spring Boot", "REST APIs"],
    },
    {
      title: "Databases",
      iconName: "Database",
      description: "Relational schema design and document-oriented storage solutions.",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Authentication & Security",
      iconName: "ShieldCheck",
      description: "Session management, token verification, and secure route guarding.",
      skills: ["JWT", "User Authentication"],
    },
    {
      title: "Tools & Development",
      iconName: "Wrench",
      description: "Version control workflows, modern IDEs, and developer tooling.",
      skills: ["Git", "GitHub", "Visual Studio Code", "IntelliJ IDEA"],
    },
  ],
  projects: [
    {
      id: "cloud-notes",
      title: "Cloud Notes",
      type: "Full-Stack Web Application",
      technologies: ["Java", "Spring Boot", "React", "Vite", "MySQL", "JWT"],
      description:
        "A full-stack note-management application with authentication and integrated AI-assistant functionality.",
      bullets: [
        "Developed user registration and login with JWT authentication and protected routes.",
        "Implemented note creation and editing using a React frontend, Spring Boot backend, and MySQL database.",
        "Integrated AI-assistant functionality.",
        "Organised the application into authentication, note-management, and AI-service components.",
      ],
      githubUrl: "", // Hidden until configured
      liveDemoUrl: "", // Hidden until configured
      accentColor: "from-cyan-500 to-blue-600",
    },
    {
      id: "ai-crypto-bot",
      title: "AI Crypto Trading Bot",
      type: "Personal Project",
      status: "In Development",
      isInDevelopment: true,
      technologies: ["Python", "Binance Testnet API"],
      description:
        "A Python-based cryptocurrency trading bot under development, with a working Binance Testnet connection.",
      bullets: [
        "Built the initial Python project foundation and successfully connected it to Binance Testnet.",
        "Configured the development environment and API client for testing without real funds.",
      ],
      plannedBullets: [
        "Planned further development of market analysis, automated trading, and AI-driven features.",
      ],
      githubUrl: "", // Hidden until configured
      liveDemoUrl: "", // Hidden until configured
      accentColor: "from-amber-500 to-cyan-500",
    },
  ],
  education: [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2024 – Present",
      status: "Undergraduate",
      coursework: [
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Database Design and Development",
        "Software Engineering",
        "Web and Mobile Development",
      ],
    },
    {
      degree: "GCE Advanced Level – Commerce Stream",
      institution: "Ministry of Education, Sri Lanka",
      period: "2023 (Examination held in 2024)",
      notes: "Completed secondary education in Commerce Stream.",
    },
  ],
};
