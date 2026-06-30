export const personalInfo = {
  name: "Aaira Wajahat Rao",
  title: "Full-Stack Developer · Mobile & Web · CS Student",
  tagline:
    "Software engineer building scalable, cross-platform applications with Flutter, Kotlin, Firebase, and the MERN stack — focused on real-time systems, secure authentication, and production-ready UI/UX.",
  email: "aairawajahat@gmail.com",
  phone: "+92 334 7475355",
  location: "Multan, Pakistan",
  github: "https://github.com/AairaRao",
  linkedin: "https://www.linkedin.com/in/aairawajahatrao",
  resume: "/resume.pdf",
  availableForWork: true,
};

/** Keywords recruiters & LinkedIn ATS systems scan for */
export const industryKeywords = [
  "Full-Stack Development",
  "Cross-Platform Mobile",
  "Software Engineering",
  "RESTful APIs",
  "Cloud Computing",
  "Firebase",
  "Real-Time Systems",
  "System Design",
  "Data Structures & Algorithms",
  "OOP",
  "Agile / SDLC",
  "Git & Version Control",
  "UI/UX Design",
  "RBAC",
  "Scalable Applications",
  "Problem Solving",
  "MongoDB",
  "React",
  "Flutter",
  "Kotlin",
  "Machine Learning",
  "TensorFlow",
  "Computer Vision",
  "Deep Learning",
];

export const about = {
  paragraphs: [
    "I'm a software developer specializing in full-stack and cross-platform mobile development. I ship end-to-end products using Flutter, Kotlin, Firebase, React, and Python — from RESTful APIs and cloud backends to polished, user-centered interfaces.",
    "My experience includes building scalable e-commerce platforms, HR management systems, AI-powered computer vision tools, and native Android apps with role-based access control (RBAC), real-time databases, and admin dashboards. I follow Agile SDLC practices, Git-based workflows, and clean code principles.",
  ],
  highlights: [
    { label: "Role", value: "Full-Stack & Mobile Developer" },
    { label: "Stack", value: "Flutter · Kotlin · Firebase · MERN · Python" },
    { label: "Education", value: "BS CS — Air University (2027)" },
  ],
};

export const skills = [
  {
    category: "Languages & Core CS",
    items: [
      "Dart",
      "Kotlin",
      "Python",
      "JavaScript",
      "C++",
      "Data Structures",
      "Algorithms",
      "OOP",
      "System Design",
    ],
  },
  {
    category: "Mobile & Cross-Platform",
    items: [
      "Flutter",
      "Android SDK",
      "Material Design",
      "Cross-Platform Dev",
      "XML",
    ],
  },
  {
    category: "Web & Backend",
    items: [
      "MERN Stack",
      "React",
      "RESTful APIs",
      "Flask",
      "Node.js",
      "API Integration",
    ],
  },
  {
    category: "Cloud & Databases",
    items: [
      "Firebase",
      "Firestore",
      "Cloud Computing",
      "MongoDB",
      "SQL",
      "Real-Time DB",
    ],
  },
  {
    category: "DevOps & Workflow",
    items: [
      "Git",
      "GitHub",
      "Agile / SDLC",
      "VS Code",
      "Android Studio",
      "Version Control",
    ],
  },
  {
    category: "Product & Security",
    items: [
      "UI/UX Design",
      "RBAC",
      "Authentication",
      "Responsive Design",
      "Admin Panels",
      "Scalable Architecture",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "TensorFlow",
      "Keras",
      "Computer Vision",
      "CNN",
      "Grad-CAM",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Gradio",
    ],
  },
];

export const projects = [
  {
    title: "Cross-Platform E-Commerce Application",
    description:
      "Scalable e-commerce platform with cloud backend, real-time inventory sync, and full admin dashboard.",
    highlights: [
      "Secure authentication & Firestore real-time database",
      "Admin panel for users, products, and delivery management",
      "Product catalog, checkout flow, and live order tracking",
    ],
    tags: ["Flutter", "Firebase", "Firestore", "RBAC"],
    github: null as string | null,
    live: null as string | null,
    featured: true,
    category: "mobile" as const,
  },
  {
    title: "Clothing E-Commerce Website",
    description:
      "Full-stack MERN clothing store with separate Customer and Admin portals for shopping and store management.",
    highlights: [
      "Responsive React frontend with cart, wishlist, checkout, and order tracking",
      "RESTful APIs with Node.js & Express backed by MongoDB",
      "Admin dashboard for products, inventory, and customer orders",
    ],
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    github: null,
    live: null,
    featured: true,
    category: "web" as const,
  },
  {
    title: "HR Attendee Application",
    description:
      "Enterprise workforce app with role-based access, real-time attendance, and leave management workflows.",
    highlights: [
      "RBAC authentication for admin and employee roles",
      "Leave request system with approval/rejection pipeline",
      "Real-time attendance monitoring and analytics",
      "Business logic for late arrival & early leave detection",
    ],
    tags: ["Flutter", "Firebase", "Real-Time", "RBAC"],
    github: null,
    live: null,
    featured: true,
    category: "mobile" as const,
  },
  {
    title: "Flight Management System",
    description:
      "Full-stack web platform for flight search, booking, and AI-assisted customer support.",
    highlights: [
      "RESTful API backend with MongoDB & Flask",
      "AI chatbot integration for automated support",
      "Third-party API integration & booking engine",
    ],
    tags: ["Python", "Flask", "MongoDB", "REST API", "AI"],
    github: null,
    live: null,
    featured: true,
    category: "web" as const,
  },
  {
    title: "Coffee Shop Application",
    description:
      "Native Android app with Material Design UI, menu management, and dual-role access control.",
    highlights: [
      "Category-based menu browsing & filtering",
      "Admin / Customer role-based access control",
      "Material Design UI built with Android SDK",
    ],
    tags: ["Kotlin", "Android SDK", "Material Design", "RBAC"],
    github: null,
    live: null,
    featured: true,
    category: "mobile" as const,
  },
  {
    title: "AI Image Forgery Detection System",
    description:
      "AI-powered forensic platform for detecting manipulated images using deep learning and error-level analysis.",
    highlights: [
      "Dual-Stream CNN with Error Level Analysis (ELA) for image authenticity detection",
      "Grad-CAM visualization for highlighting manipulated regions in images",
      "Metadata analysis with copy-move and splicing detection pipelines",
      "Automated forensic reports stored in SQLite for analysis history",
      "Model evaluation using accuracy, precision, ROC-AUC, and confusion matrix",
    ],
    tags: ["Python", "TensorFlow", "EfficientNetB0", "OpenCV", "Gradio"],
    github: null,
    live: null,
    featured: true,
    category: "ai" as const,
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Air University Islamabad, Multan Campus",
    period: "Expected 2027",
    gpa: null as string | null,
    details: [
      "Coursework: Software Engineering, Data Structures, Algorithms, Database Systems, System Design",
    ],
  },
];

export const experience = [
  {
    role: "Flutter App Developer",
    company: "Multan, Pakistan",
    period: "July 2025 — September 2025",
    details: [
      "Engineered Firebase cloud integration for authentication and real-time database sync",
      "Built secure authentication & payment transaction systems following SDLC best practices",
      "Developed RESTful API connectivity for checkout and third-party services",
      "Designed responsive, user-centered UI/UX for cross-platform mobile applications",
      "Collaborated on full-stack feature delivery from backend to production-ready frontend",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
