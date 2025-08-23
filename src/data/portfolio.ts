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
    title: "Options Trading Platform (Python + SQL)",
    description: "Designed a trading simulator supporting Black-Scholes + Monte Carlo option pricing, analyzing 1000+ contracts daily. Integrated SQL backend and Python dashboard to track option Greeks and portfolio risk exposure, helping users model real-world hedging strategies.",
    technologies: ["Python", "SQL", "Black-Scholes", "Monte Carlo", "Option Greeks", "Portfolio Risk"],
    githubUrl: "#",
    demoUrl: "#",
    impact: "Analyzed 1000+ contracts daily with real-world hedging strategies"
  },
  {
    title: "Inbox-to-Insights (Gmail Summarizer, Python + GPT API)",
    description: "Built a natural language processing pipeline to parse and summarize emails using OpenAI APIs, classifying 500+ emails/month into actionable insights. Automated Excel + email-ready reports, saving end users 5+ hours weekly.",
    technologies: ["Python", "GPT API", "Gmail API", "NLP", "OpenAI", "Excel Automation"],
    githubUrl: "https://github.com/Dinusanth12/inbox-to-insights",
    demoUrl: "#",
    impact: "Saved users 5+ hours weekly on email processing"
  },
  {
    title: "Quant Backtester Pro (Python, Streamlit)",
    description: "Developed a modular backtesting engine in Python with Sharpe ratio, drawdown, and volatility metrics, enabling 10+ strategies to be tested efficiently. Integrated Streamlit UI for interactive visualization, allowing real-time portfolio analysis.",
    technologies: ["Python", "Streamlit", "Sharpe Ratio", "Drawdown", "Volatility", "Backtesting"],
    githubUrl: "https://github.com/Dinusanth12/quant-backtester",
    demoUrl: "#",
    impact: "Enabled testing of 10+ strategies efficiently with hedge-fund style metrics"
  }
];

export const experience: Experience[] = [
  {
    title: "Automation Analyst",
    company: "Royal Bank of Canada",
    duration: "May 2025 - Dec 2025",
    description: [
      "Rewrote legacy Python scripts into production-grade systems for enterprise automation; pushed code into production",
      "Built and deployed a backend pipeline to convert 1000+ financial records/week into structured CSVs, by reducing parsing failures and improving ledger consistency",
      "Collaborated refactored, unit tested, and documented multiple previous legacy codes for production while developing a root cause analysis using NLP specifically BERT"
    ]
  },
  {
    title: "Software Engineer",
    company: "LB Connect – Mortgage Startup",
    duration: "July 2025 - Dec 2025",
    description: [
      "Collaborated directly with CTO to plan task sprints and maintain <5% bug regression rate post-release",
      "Promoted to codebase gatekeeper after 2 months, approved backend code pushes, reviewed PRs, and managed production releases",
      "Directed database refactor for SAP Concur exports, added indexing, error handling, and schema validation which improved consistency 4x"
    ]
  },
  {
    title: "Software Analyst",
    company: "Tremeng Inc.",
    duration: "May 2023 - Aug 2023",
    description: [
      "Redesigned client-facing dashboards using JavaScript, HTML, and CSS, improving load speeds by 25% and enhancing user experience",
      "Debugged and optimized front-end components, resolving 90% of reported UI bugs ahead of release deadlines",
      "Collaborated with senior engineers to integrate user feedback into design improvements, boosting client satisfaction metrics"
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
    title: "Young People Achieving Milestones (YPAM)",
    organization: "Youth Organization",
    role: "Executive Treasurer | Volunteer Program Leader | Program Coordinator",
    description: "Progressive leadership journey from volunteer leader to Program Coordinator to Executive Treasurer, reflecting consistent impact and leadership in youth initiatives. Oversaw budget and financial planning for youth programs and events, managing $10K+ in annual funds to ensure sustainable growth. Organized annual spelling bee and mentorship programs with 300+ participants, scaling event reach and engagement each year.",
    icon: "🌟",
    impact: "5+ years progressive leadership, $10K+ annual budget management, 300+ participants in programs"
  },
  {
    title: "Youth Volunteer Outreach (YVO)",
    organization: "Non-Profit Organization",
    role: "Founder | CEO",
    description: "Directed a team of 50+ volunteers, implementing scheduling automation to cut event coordination time by 35%. Organized fundraising and mentorship programs serving 500+ community members, increasing annual participation by 40%. Built digital infrastructure (Google Workspace + Microsoft Office + automation) to streamline internal communications.",
    icon: "💻",
    impact: "50+ volunteers managed, 500+ community members served, 35% reduction in coordination time"
  },
  {
    title: "Nilal Clothing - Custom Clothing Brand",
    organization: "Streetwear Brand",
    role: "Founder | CEO | Designer",
    description: "Automated order tracking + sales reporting using Python + Google Sheets API → saved 10+ hrs/week. Managed end-to-end operations: supplier sourcing, logistics, and customer support. Optimized marketing campaigns through A/B testing and analytics-driven insights, increasing conversion rates by 15%.",
    icon: "👕",
    impact: "10+ hours saved weekly through automation, 15% increase in conversion rates, end-to-end operations"
  }
];

export const goals = [
  "Secure May 2026 Co-op/Internship opportunities in quantitative development and financial engineering",
  "Continue building production-grade automation systems and quantitative trading platforms",
  "Develop expertise in distributed systems, fault tolerance, and high-frequency trading systems",
  "Expand quant research capabilities with advanced backtesting strategies and risk management",
  "Master financial modeling, option pricing, and portfolio optimization techniques",
  "Scale impact through education and mentorship programs in quantitative finance",
  "Build comprehensive portfolio of automation tools, quant platforms, and financial models"
];

export const timeline = [
  {
    year: "2025",
    events: [
      "Automation Analyst at Royal Bank of Canada (May-Dec)",
      "Software Engineer at LB Connect (July-Dec)",
      "Built Options Trading Platform with Black-Scholes pricing",
      "Developed Inbox-to-Insights AI Email Summarizer",
      "Enhanced Quant Backtester Pro strategy engine",
      "Implemented Monte Carlo simulation for option pricing"
    ]
  },

  {
    year: "2023",
    events: [
      "Software Analyst at Tremeng Inc. (May-Aug)",
      "Founded Youth Volunteer Outreach (YVO)",
      "Launched Nilal Clothing brand",
      "Built automation tools with Python + APIs",
      "Started quantitative finance self-study"
    ]
  },
  {
    year: "2018-2022",
    events: [
      "Started YPAM leadership journey",
      "Began math tutoring career",
      "Developed foundational programming skills",
      "Established community leadership experience",
      "Built strong mathematical foundation for quant work"
    ]
  },
  {
    year: "2028",
    events: [
      "Graduate with Bachelor of Technology in Chemical Engineering",
      "Complete Advanced Diploma and Business Certificate",
      "Enter workforce with strong technical and quantitative foundation",
      "Continue building impact through automation, education, and quantitative finance",
      "Pursue quantitative development roles at top financial institutions",
      "Scale automation systems and quantitative trading platforms",
      "Lead innovation in financial engineering and risk management",
      "Build comprehensive portfolio of production-grade quant systems"
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
  interests: ["Backend Engineering", "Automation Systems", "Data Pipelines", "Quantitative Tools", "Production Systems", "Quantitative Finance"],
  skills: {
    "Programming Languages": ["Python", "C++", "Java", "JavaScript", "SQL", "HTML/CSS"],
    "Quantitative Libraries": ["Pandas", "NumPy", "SciPy", "Matplotlib", "Scikit-learn", "QuantLib"],
    "Financial Tools": ["Black-Scholes", "Monte Carlo", "Option Greeks", "Portfolio Risk", "Sharpe Ratio", "Backtesting"],
    "Development Tools": ["Git/GitHub", "Docker", "VS Code", "PyCharm", "Jupyter Notebooks"],
    "Cloud & DevOps": ["AWS (EC2, S3)", "CI/CD Pipelines", "Windows"],
    "Data Processing": ["ETL Pipelines", "Data Cleaning", "Feature Engineering", "Time Series Analysis", "Statistical Analysis"]
  },
  certificates: [
    "Meta - Programming in Python",
    "Meta - Introduction to Back-End Development",
    "Meta - Version Control",
    "Automate the Boring Stuff with Python Programming",
    "Microsoft Excel – Excel Beginner to Advanced"
  ]
}; 