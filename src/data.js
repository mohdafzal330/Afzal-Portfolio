// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Md Afzal Khan",
  status: "Senior Software Engineer II @ Lyric · Hyderabad",
  email: "mohdafzal330@gmail.com",
  whatsapp: "https://wa.me/919842139786?text=" + encodeURIComponent("Hi Afzal, I came across your portfolio and would love to connect!"),
  github: "https://github.com/mohdafzal330",
  linkedin: "https://linkedin.com/in/mohammed-afzal-khan",
  website: "https://crafterhack.com/",
  resume: "Md_Afzal_Khan_Resume.pdf",
  photo: "profile.jpg",
};

export const typedPhrases = [
  "scalable platforms",
  "secure microservices",
  "delightful UIs",
  "cloud-native systems",
  "AI-powered tools",
];

export const heroChips = [
  { icon: "⚛", label: "React" },
  { icon: "◆", label: ".NET Core" },
  { icon: "☁", label: "AWS · Azure" },
  { icon: "✦", label: "Agentic AI" },
];

export const stats = [
  { value: 7, suffix: "+", label: "Years building software" },
  { value: 5, label: "Companies, from startups to Amazon" },
  { value: 700, suffix: "+", label: "DSA problems solved" },
  { value: 60, suffix: "%", label: "AWS cost reduced at Amazon" },
];

export const pillars = [
  { icon: "⌘", title: "Full‑stack delivery", text: "React, Angular, React Native on the front; .NET Core, Node, NestJS on the back." },
  { icon: "☁", title: "Cloud & scale", text: "Microservices, AWS & Azure, cost‑aware architecture that holds up under load." },
  { icon: "⛨", title: "Security first", text: "RBAC, multi‑tenant isolation, vulnerability remediation, HIPAA workflows." },
  { icon: "✦", title: "AI‑native tooling", text: "Gen‑AI, agentic workflows and RAG pipelines built with Claude." },
];

// Bullet text supports **bold** markup.
export const experience = [
  {
    role: "Senior Software Engineer II",
    company: "Lyric India",
    url: "https://www.lyric.ai",
    period: "Sep 2025 — Present",
    location: "Hyderabad",
    current: true,
    summary: "Advanced AI for healthcare payer solutions.",
    points: [
      "Building **Studio42**, a multi‑tenant healthcare platform on .NET Core microservices and React micro‑frontends.",
      "Own end‑to‑end **Sourcing** and **Change Request** modules — REST APIs, workflows and data models.",
      "Led integration with the User and Organization services, enabling authentication, profiles and tenant management.",
      "Authored **Architecture Decision Records** and drove database schema design across services.",
      "Implemented **RBAC**, led secure‑coding adoption with **Snyk**, and was recognized for resolving vulnerabilities.",
    ],
    tech: [".NET Core", "React", "Micro‑frontends", "RBAC", "Snyk", "ADRs"],
  },
  {
    role: "Senior Software Engineer",
    company: "British Petroleum · via Talent Beacon",
    period: "Oct 2023 — May 2025",
    location: "Bengaluru · Remote",
    summary: "Castrol digital products for the India market.",
    points: [
      "Launched Turkey's **CARAMA** app in India as the **Castrol Connect** MVP.",
      "Designed and built new MVP features, plus new features for the **TRM** app.",
      "Revamped the app with a modern, responsive UI.",
      "Made user search faster with debouncing and better algorithms.",
      "Conducted technical interviews and contributed to hiring decisions.",
    ],
    tech: ["React Native", "React", "TypeScript", "Node.js", "UI/UX"],
  },
  {
    role: "Software Development Engineer II",
    company: "Amazon",
    period: "Oct 2022 — Oct 2023",
    location: "Bengaluru",
    summary: "E‑commerce and cloud at global scale.",
    points: [
      "Designed and developed the **monitoring service for Amazon Dash Cart**.",
      "Delivered end‑to‑end features for an internal **RCA tool**.",
      "Re‑architected parts of the system, **reducing AWS cost by 60%**.",
      "Improved logging code with OOP design by 80%, and owned components with scaling problems.",
      "Contributed to the Engineering Excellence program.",
    ],
    tech: ["Java", "AWS", "DynamoDB", "S3", "Observability"],
  },
  {
    role: "Senior Software Engineer",
    company: "Nagarro",
    period: "Jun 2021 — Sep 2022",
    location: "Gurgaon",
    summary: "End‑to‑end digital solutions for global clients.",
    points: [
      "Designed the end‑to‑end **Deposit & Payments** module, used by 1,000+ customers.",
      "Built secure attachment downloads from email links, with authentication and authorization.",
      "Added a distribution mechanism that shows how payments are split.",
      "Optimized the existing codebase by 25%.",
      "Mentored junior developers and led onboarding.",
    ],
    tech: ["C#", "ASP.NET", "Angular", "SQL Server", "Payments"],
  },
  {
    role: "Software Engineer",
    company: "Mindfire Solutions",
    period: "May 2019 — Jun 2021",
    location: "Noida",
    summary: "Healthcare billing and claims software.",
    points: [
      "Built **HIPAA‑standard** forms to generate insurance claims.",
      "Integrated patient accounts, visit lists and statement generation.",
      "Automated **SFTP** transfer of 100+ claim files a day to clearing houses.",
      "Wrote complex stored procedures and functions, tuned SQL, and fixed live production issues.",
    ],
    tech: ["ASP.NET MVC", "C#", "SQL Server", "SFTP", "HIPAA"],
  },
];

export const featuredProject = {
  kind: "Personal · 2023",
  title: "Crafter Hack — DSA prep platform",
  description:
    "A platform for practicing data structures and algorithms, with live coding rooms, mock interviews, leaderboards and a curated set of 75 hard challenges.",
  highlights: [
    "**+40%** session engagement from real‑time WebSocket coding rooms",
    "Weekly challenges with automated scheduling and reminders",
    "Timed mock interviews with feedback, plus progress tracking and stats",
  ],
  tech: ["React", "Node.js", "WebSockets", "MongoDB"],
  url: "https://crafterhack.com/",
  linkLabel: "Visit crafterhack.com ↗",
  codeLines: [
    "for (let i = 0; i < n; i++)",
    "dp[i] = max(dp[i-1], ...)",
    'socket.on("submit", run)',
    "leaderboard.update(user)",
    "return binarySearch(lo, hi)",
  ],
};

// `art` picks one of the animated illustrations in ProjectArt.jsx.
export const projects = [
  {
    art: "studio",
    kind: "Lyric · 2025",
    title: "Studio42",
    description: "A multi‑tenant healthcare platform. I own the Sourcing and Change Request modules, plus tenant‑aware RBAC across services.",
    tech: [".NET Core", "Micro‑frontends", "RBAC"],
  },
  {
    art: "dash",
    kind: "Amazon · 2023",
    title: "Dash Cart Monitoring",
    description: "A monitoring service and RCA tooling for Amazon's smart shopping cart, re‑architected to cut AWS spend by 60%.",
    tech: ["AWS", "Java", "DynamoDB"],
  },
  {
    art: "castrol",
    kind: "BP · 2024",
    title: "Castrol Connect (India MVP)",
    description: "Adapted the CARAMA app from Turkey for India, adding new MVP features and a refreshed, responsive UI.",
    tech: ["React Native", "TypeScript"],
  },
  {
    art: "pay",
    kind: "Nagarro · 2022",
    title: "Deposits & Payments",
    description: "An end‑to‑end deposit and payment module with distribution views and secure, authenticated email attachments.",
    tech: ["C#", "Angular", "SQL Server"],
  },
  {
    art: "edu",
    kind: "University · 2017",
    title: "E‑assignment System",
    description: "Online submissions for 15+ departments, with role‑based auth and server‑side filtering, paging and sorting. It cut manual errors by 25%.",
    tech: ["ASP.NET", "SQL"],
  },
];

export const marquee = [
  "React", ".NET Core", "TypeScript", "Node.js", "AWS", "Azure", "NestJS", "Angular",
  "C#", "Java", "MongoDB", "SQL Server", "Agentic AI", "RAG", "Claude",
];

export const skillGroups = [
  { icon: "◧", title: "Frontend", items: ["React JS", "Angular", "React Native", "TypeScript", "JavaScript", "Micro‑frontends"] },
  { icon: "⚙", title: "Backend", items: [".NET Core", "C#", "ASP.NET MVC", "Node JS", "Express JS", "NestJS", "Java", "REST APIs", "LINQ"] },
  { icon: "☁", title: "Cloud & DevOps", items: ["AWS", "S3", "DynamoDB", "Azure", "Git", "Liquibase", "Snyk"] },
  { icon: "▤", title: "Data", items: ["SQL Server", "MongoDB", "DynamoDB", "Stored Procedures", "Schema Design"] },
  { icon: "✦", title: "AI", items: ["Gen‑AI", "Agentic AI", "RAG Systems", "Claude", "Native AI"] },
  { icon: "◎", title: "Craft", items: ["Data Structures", "System Design", "ADRs", "RBAC", "Mentoring", "Interviewing"] },
];

export const achievements = [
  { icon: "★", title: "700+ problems solved", text: "On LeetCode and NADOS, with a consistent focus on algorithms and data structures." },
  { icon: "🏆", title: "1st Runner‑Up", text: "Coding competition at EXORDIUM Fest, on campus." },
  { icon: "◈", title: "Rank 9, Codernity", text: "Codernity Programming Contest at Internity." },
  { icon: "⛨", title: "Security recognition", text: "Recognized at Lyric for finding and fixing vulnerabilities across services." },
];

export const education = {
  degree: "Bachelor of Technology",
  school: "MJP Rohilkhand University · 2015 — 2019",
};

export const languages = [
  { name: "English", level: 80 },
  { name: "Hindi", level: 100 },
  { name: "Urdu", level: 80 },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
];
