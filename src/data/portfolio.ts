export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  impact?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Extracurricular {
  title: string;
  organization: string;
  role: string;
  description: string;
  icon?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    title: "Inbox-To-Insights: AI Email Summarizer + Task Engine",
    description: "Engineered a task management system integrating Gmail, Notion, and Google Sheets using GPT. Minimized data duplication by establishing metadata-based protocols, saving users 5 hours per week on administrative tasks. Integrated unsubscribe prompt detection into task management system using Python and GPT, reducing manual email filtering by 90% and saving users 3 hours per week.",
    technologies: ["Python", "GPT", "Gmail API", "Notion API", "Google Sheets API"],
    githubUrl: "https://github.com/Dinusanth12/inbox-to-insights",
    demoUrl: "#",
    impact: "Saved users 8 hours per week on administrative tasks"
  },
  {
    title: "Quant Backtester Pro: Modular Strategy Engine",
    description: "Implemented hedge-fund style metrics (Sharpe, Drawdown) and automated reporting to validate trading strategies at scale. Increased code testability by 85% with CI-ready unit tests and complete separation of concerns across strategy/engine/UI layers. Used to simulate alpha strategies by myself and peers on 50k–100k row datasets, mimicking workflows used by quant research desks.",
    technologies: ["Python", "Polars", "Matplotlib", "Streamlit", "PostgreSQL", "Pytest"],
    githubUrl: "https://github.com/Dinusanth12/quant-backtester",
    demoUrl: "#",
    impact: "Increased code testability by 85% with CI-ready unit tests"
  }
];

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "LB Connect – Mortgage Startup",
    duration: "July 2025 - Present",
    description: [
      "Maintained <5% bug regression rate post-release while collaborating directly with CTO on task sprints",
      "Promoted to codebase gatekeeper after 2 months, approved backend code pushes, reviewed PRs, and managed production releases",
      "Improved database consistency 4x through refactoring SAP Concur exports with indexing, error handling, and schema validation"
    ]
  },
  {
    title: "Automation Analyst",
    company: "Royal Bank of Canada",
    duration: "May 2025 - Dec 2025",
    description: [
      "Reduced data processing time by 90% by optimizing backends with Polars, CI/CD pipelines, and modular Python architecture",
      "Tripled financial audit speeds by automating the parsing of 1,000+ transaction records/week into structured CSVs",
      "Reduced manual QA effort by 60% through enterprise-grade testing and CI/CD setup"
    ]
  },
  {
    title: "Math Tutor",
    company: "A4ActiveLearning / TutorTuber",
    duration: "Sept 2018 - Present",
    description: [
      "Began as a 1-on-1 math tutor for Grades 2–3, specializing in foundational arithmetic and student engagement",
      "Rapidly progressed to teaching small groups and high school students across Grades 9–12, covering Ontario curriculum, advanced functions, calculus, and data management",
      "Designed personalized lesson plans and mock assessments to adapt to diverse learning styles, boosting average student performance by 25–30% across the board"
    ]
  }
];

export const extracurriculars: Extracurricular[] = [
  {
    title: "YPAM",
    organization: "Youth Organization",
    role: "Executive Treasurer",
    description: "Progressive leadership journey from volunteer to Executive Treasurer, overseeing financial operations and strategic initiatives for youth development programs. Led cross-functional teams in executing high-impact events including academic competitions and community outreach programs. Managed end-to-end project delivery, stakeholder coordination, and operational excellence across multiple concurrent initiatives.",
    icon: "🌟",
    impact: "5+ years progressive leadership, Board-level strategic oversight, Multi-event portfolio management"
  },
  {
    title: "Nilal Clothings",
    organization: "Streetwear Brand",
    role: "Co-Founder",
    description: "Co-founded and scaled a minimalist streetwear brand targeting Gen Z and university demographics, driving end-to-end business operations from concept development to market launch. Led strategic brand positioning, creative direction, and go-to-market execution. Orchestrated comprehensive digital marketing campaigns including social media strategy, content development, and influencer partnerships, achieving organic growth across target student communities.",
    icon: "📚",
    impact: "2+ years entrepreneurial leadership, Full business lifecycle management, Digital marketing expertise, Target market expansion"
  },
  {
    title: "Youth Volunteer Outreach",
    organization: "Non-Profit Organization",
    role: "Founder & CEO",
    description: "Established and scaled a student-led non-profit organization from inception, driving strategic initiatives across education, community care, and environmental sectors. Built and managed high-performing team of 20+ student organizers across multiple municipalities, orchestrating end-to-end program delivery including stakeholder engagement, partnership development, and operational execution.",
    icon: "💻",
    impact: "3+ years entrepreneurial leadership, 20+ team members managed, Multi-city program expansion, Strategic partnership development"
  }
];

export const goals = [
  "Secure May 2026 Co-op/Internship opportunities at top-tier companies",
  "Continue building production-grade automation systems and data pipelines",
  "Develop expertise in distributed systems and fault tolerance",
  "Expand quant research capabilities with advanced backtesting strategies",
  "Scale impact through education and mentorship programs"
];

export const timeline = [
  {
    year: "2025",
    events: [
      "Started Automation Analyst role at RBC",
      "Joined LB Connect as Software Engineer",
      "Built Inbox-To-Insights AI Email Summarizer",
      "Developed Quant Backtester Pro strategy engine"
    ]
  },
  {
    year: "2026",
    events: [
      "Seeking May 2026 Co-op/Internship opportunities",
      "Continue building production-grade systems",
      "Expand quant research portfolio",
      "Scale automation and data pipeline expertise"
    ]
  },
  {
    year: "2027-2028",
    events: [
      "Complete advanced coursework in C++ and OOP",
      "Develop expertise in distributed systems",
      "Build comprehensive portfolio of automation tools",
      "Prepare for graduation and career opportunities"
    ]
  },
  {
    year: "2028",
    events: [
      "Graduate with Bachelor of Technology in Chemical Engineering",
      "Complete Advanced Diploma and Business Certificate",
      "Enter workforce with strong technical foundation",
      "Continue building impact through automation and education"
    ]
  }
];

export const personalInfo = {
  name: "Dinusanth Surendran",
  title: "Software Engineer",
  university: "McMaster University",
  graduation: "December 2028",
  location: "Hamilton, ON, Canada",
  email: "surendrd@mcmaster.ca",
  github: "https://github.com/dinusanth12",
  linkedin: "https://linkedin.com/in/dinusanth-surendran",
  interests: ["Backend Engineering", "Automation Systems", "Data Pipelines", "Quantitative Tools", "Production Systems"],
  skills: {
    "Languages": ["Python", "C++", "Java", "SQL", "JavaScript", "VBA"],
    "Frameworks/Tools": ["Flask", "REST APIs", "Git", "Firebase", "Streamlit", "Notion API", "Matplotlib", "Pytest"],
    "Systems": ["CI/CD Pipelines", "Docker", "Kubernetes", "Jenkins", "SAP Concur", "Outlook Automation"],
    "Core Concepts": ["Distributed Systems", "Fault Tolerance", "Modular Architecture", "Unit Testing", "Load Testing"]
  }
}; 