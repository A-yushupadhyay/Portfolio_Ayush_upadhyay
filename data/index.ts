import { platform } from "os";

export const DATA = {
  home: {
    hero: {
      name: "Ayush Upadhyay",
      title: "Aspiring SDE | Full Stack Developer | Problem Solver",
      subtitle:
        "I build scalable, efficient, and modern web applications with clean architecture and seamless user experience.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Skilled in building full-stack applications, scalable backends, and solving complex problems with modern tools.",
      overview: [
        {
          name: "Frontend Development",
          level: 90,
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Backend Development",
          level: 88,
          icon: "lucide:server",
          color: "primary",
        },
        {
          name: "Databases",
          level: 85,
          icon: "lucide:database",
          color: "success",
        },
        {
          name: "DevOps & Tools",
          level: 80,
          icon: "lucide:settings",
          color: "warning",
        },
      ],
    },
    testimonials: {
      sectionTitle: "What People Say",
      sectionDescription: "Feedback from mentors and peers",
      items: [
        {
          id: 1,
          name: "Peers & Mentors",
          role: "Academic & Project Collaborators",
          content:
            "Ayush consistently demonstrates strong problem-solving skills and a passion for building scalable systems. His ability to quickly learn and adapt is impressive.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Ayush Upadhyay",
      title:
        "Full Stack Developer → Software Engineer | AI/ML Enthusiast | Strong CS Fundamentals | Problem Solver",
      image: "/Ayush05_cropped.png", // place your profile pic inside /public/Ayush.png
      description: [
        "I’m a Computer Science student passionate about designing and building scalable systems with clean architecture and seamless user experiences.",
        "Starting as a Full-Stack Developer, I am transitioning into a Software Engineer with professional-level exposure to modern development practices.",
        "I have hands-on experience integrating OpenAI APIs, third-party services, and building real-world applications with production-grade reliability.",
        "I am looking forward to advancing my expertise in Machine Learning, Large Language Models (LLMs), and strengthening my foundation in Computer Science fundamentals.",
      ],
    },
    education: [
      {
        title: "Bundelkhand Institute of Engineering & Technology (BIET), Jhansi",
        date: "2022 - 2026",
        icon: "mdi:school",
        description: "B.Tech in Computer Science & Engineering | CGPA: 7.01/10",
      },
      {
        title: "Jawahar Lal Nehru Inter College, Kanpur Nagar",
        date: "2020 - 2021",
        icon: "mdi:school-outline",
        description: "Intermediate | Percentage: 78.94%",
      },
    ],
    experience: [
      {
        title: "Full Stack Intern - Uptricks Services Pvt. Ltd.",
        date: "July 2025 – Sept 2025",
        icon: "mdi:briefcase",
        description:
          "Developed **WorkNest**, a full-stack task management and collaboration platform that empowers teams to organize projects and streamline workflows. " +
          "Implemented secure authentication, role-based access, and real-time notifications with Socket.io. " +
          "Enabled management of organizations, projects, boards, and tasks with a clean, professional UI. " +
          "Integrated Google OAuth, guest login, and production-grade error handling to ensure scalability and reliability.",
      },
    ],
    technologies: {
      frontend: {
        description: "Dynamic, responsive UIs using modern JS frameworks.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      backend: {
        description: "Fast APIs and scalable backends with modern stacks.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Express.js", icon: "simple-icons:express" },
          { name: "Django", icon: "simple-icons:django" },
          { name: "MongoDB", icon: "logos:mongodb-icon" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
        ],
      },
      devops: {
        description: "Deployment pipelines, containerization, and CI/CD.",
        tools: [
          { name: "Docker", icon: "logos:docker-icon" },
          { name: "GitHub Actions", icon: "logos:github-actions" },
          { name: "Vercel", icon: "simple-icons:vercel" },
          { name: "Render", icon: "simple-icons:render" },
          { name: "Railway", icon: "simple-icons:railway" },
        ],
      },
      problemSolving: {
        description: "Practicing DSA to strengthen problem-solving ability.",
        tools: [
          { name: "LeetCode", icon: "simple-icons:leetcode" },
          { name: "GeeksforGeeks", icon: "simple-icons:geeksforgeeks" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription: "Some of my recent work in web development & systems.",
    work: [
      {
        id: 1,
        title: "SmartBanking System : FinSphere",
        description:
          "Full-stack fintech platform with dashboards, real-time notifications, CI/CD pipelines, and Docker deployment.",
        image: "/finsphere.png",
        category: "Full Stack",
        github: "https://github.com/A-yushupadhyay/Finsphere",
        live: "https://finsphere-gamma.vercel.app/",
        tech: [
          { name: "MERN", icon: "logos:mongodb-icon" },
          { name: "Docker", icon: "logos:docker-icon" },
          { name: "CI/CD", icon: "logos:github-actions" },
        ],
      },
      {
        id: 2,
        title: "DocOnTime",
        description:
          "AI-powered healthcare booking platform with symptom checker, Razorpay integration, and secure JWT authentication.",
        image: "DoconTime.png",
        category: "Healthcare",
        github: "https://github.com/A-yushupadhyay/dOt",
        live: "https://dot-xgr9.onrender.com/",
        tech: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "MongoDB", icon: "logos:mongodb-icon" },
          { name: "Razorpay", icon: "simple-icons:razorpay" },
        ],
      },
      {
        id: 3,
        title: "AI Restaurant Assistant",
        description:
          "Production-grade AI-powered restaurant chatbot that behaves like a real human waiter using a decision-tree + AI hybrid approach, with session memory, AWS S3 integration, and cloud deployment.",
        image: "/Screenshot (319).png",
        category: "Full Stack / AI",
        github: "https://github.com/A-yushupadhyay/ai-restaurant-assistant",
        live: "https://ai-restaurant-assistant.vercel.app/",
        tech: [
          { name: "React", icon: "simple-icons:react" },
          { name: "FastAPI", icon: "simple-icons:fastapi" },
          { name: "Python", icon: "simple-icons:python" },
          { name: "AWS S3", icon: "simple-icons:amazonaws" },
          { name: "OpenAI", icon: "simple-icons:openai" },
          { name: "Pytest", icon: "simple-icons:pytest" },
        ],
      },
      {
        id: 4,
        title: "Fraud Detector",
        description:
          "ML-based Django app detecting financial fraud with 96%+ accuracy using Random Forest and Logistic Regression.",
        image: "/samrt_fraud_detector.png",
        category: "AI/ML",
        github: "https://github.com/A-yushupadhyay/Fraud_Detector-py-",
        live: "https://fraud-detector-py.onrender.com/users/register/",
        tech: [
          { name: "Django", icon: "simple-icons:django" },
          { name: "ML", icon: "simple-icons:python" },
        ],

      },
      {
        id: 5,
        title: "Worknest",
        description:
          "Collaborative task management platform with JWT auth, WebSocket updates, and modular REST APIs (MERN stack).",
        image: "/WorkNest.png",
        category: "Full Stack",
        github: "https://github.com/A-yushupadhyay/Worknest",
        live: "https://worknest-delta.vercel.app/",
        tech: [
          { name: "React", icon: "simple-icons:react" },
          { name: "Node.js", icon: "simple-icons:nodejs" },
          { name: "Socket.io", icon: "simple-icons:socketdotio" },
          { name: "MongoDB", icon: "logos:mongodb-icon" },
        ],
      },
      {
        id: 6,
        title: "MiniOS",
        description:
          "Custom OS-level CLI system in C++ simulating CPU scheduling, file systems, and basic user authentication.",
        image: "/MInios.png",
        category: "Systems",
        github: "https://github.com/A-yushupadhyay/MiniOS",
        tech: [
          { name: "C++", icon: "simple-icons:cplusplus" },
          { name:"systems programming", icon: "mdi:console" }
          
        ],
      },
      {
        id: 7,
        title: "WanderLust",
        description:
          "A full-stack web application inspired by Airbnb that allows users to explore, create, review, and manage travel listings. Built using Node.js, Express, MongoDB, and EJS with full authentication, session-based access, and flash messaging.",
        image: "/Screenshot (102).png",
        category: "Full Stack",
        github: "https://github.com/A-yushupadhyay/WanderLust",
        live: "https://first-project-1-3p5h.onrender.com/listings",
        tech: [
          { name: "JavaScript", icon: "simple-icons:javascript" },
          { name: "Node.js", icon: "simple-icons:nodejs" },
          { name: "EJS", icon: "simple-icons:ejs" },
          { name: "MongoDB", icon: "logos:mongodb-icon" },
        ],
      },
     
    ],
  },
  contact: {
    heading: "Let’s connect and build something impactful together.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2935679218844!2d80.3319!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4766af2a5c01%3A0x12345!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715701234567!5m2!1sen!2sin",
      address: "Kanpur, Uttar Pradesh, India",
    },
  },
  morphingTexts: {
    about: ["Developer", "Problem Solver", "Learner"] as const,
    projects: ["Work", "Projects", "Solutions"] as const,
    contact: ["Let's", "Connect", "Collaborate"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Ayush Upadhyay",
    description:
      "Passionate about building impactful solutions through software development.",
    contact: {
      email: "puskaru202@gmail.com",
      phone: "+91 9616180577",
      location: "Kanpur, Uttar Pradesh, India",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/A-yushupadhyay",
        icon: "mdi:github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/ayush-upadhyay-230015266/",
        icon: "mdi:linkedin",
      },
      {
        platform: "LeetCode",
        url: "https://leetcode.com/u/ayu-_s7/",
        icon: "simple-icons:leetcode",
      },
      {
        platform: "GFG",
        url: "https://www.geeksforgeeks.org/user/puskarb3n6/",
        icon: "simple-icons:geeksforgeeks",
      },
      {
        platform: "CodeChef",
        url: "https://www.codechef.com/users/ayus124",
        icon: "simple-icons:codechef",

      }, 
    ],
    services: ["Full Stack Development", "Backend Systems", "AI Integration"],
  },
} as const;




