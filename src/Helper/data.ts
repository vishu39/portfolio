export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  /** Sortable start marker "YYYY-MM" — drives the chronological timeline order */
  start: string;
  /** Short label shown on the timeline node */
  yearLabel: string;
  workType?: string;
  current?: boolean;
  summary?: string;
  categories: {
    title: string;
    items: {
      title: string;
      description: string;
      tech?: string[];
    }[];
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  branch?: string;
  period: string;
  /** Sortable start marker "YYYY-MM" — drives the chronological timeline order */
  start: string;
  /** Short label shown on the timeline node */
  yearLabel: string;
  location?: string;
  note?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend" | "Mobile" | "AI & Integration";
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillItem {
  name: string;
  tag: string;
  emoji: string;
  color?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  emoji: string;
  skills: SkillItem[];
}

export const personal_details = {
  first_name: "Vishu",
  last_name: "Sharma",
  full_name: "Vishu Sharma",
  title: "Full Stack Developer",
  experience_years: "4.5+",
  tagline: "Building scalable web platforms, real-time architectures & cross-platform mobile apps with modern technologies.",
  phone_number: "+91 9997048252",
  email: "vipulsharmak@gmail.com",
  location: "Ghaziabad, Uttar Pradesh, India",
  summary: `I am a Full Stack Developer with 4.5+ years of experience working across Angular, React, Ionic, and Node.js. I have worked on a wide range of projects — from building complex frontend modules and real-time features to developing backend APIs, cron jobs, and mobile apps. I enjoy taking ownership of features, architecting scalable solutions, and writing clean, maintainable code.`,
  social_links: {
    github: "https://github.com/vishu39",
    linkedin: "https://www.linkedin.com/in/vishu-sharma-0628501b6",
    facebook: "https://www.facebook.com/share/1Vwd7befMa/",
    instagram: "https://www.instagram.com/vishusharmak?igsh=MWdmbmJycGlrbTd2bA==",
  },
};

export const workExperiences: WorkExperience[] = [
  {
    id: "simplifymvt",
    company: "SimplifyMVT",
    role: "Full Stack Developer",
    location: "Mumbai (Remote / WFH)",
    period: "Sept 2023 – Present",
    start: "2023-09",
    yearLabel: "2023",
    current: true,
    summary: "Led full stack product engineering across AI-powered email intelligence, real-time communications, PWA notifications, and cross-platform mobile apps using Ionic.",
    categories: [
      {
        title: "Full Stack & AI Integrations",
        items: [
          {
            title: "Email Intelligence with ChatGPT & IMAP",
            description: "Engineered automated pipeline fetching emails via IMAP, storing in MongoDB, and querying ChatGPT API to compute trust scores and auto-populate intake forms dynamically.",
            tech: ["ChatGPT API", "IMAP", "Node.js", "MongoDB", "React"],
          },
          {
            title: "Real-time Message Fetching",
            description: "Integrated Periskope APIs for bidirectional message ingestion into MongoDB and live reactive UI rendering.",
            tech: ["Periskope API", "Node.js", "MongoDB", "Socket.io"],
          },
          {
            title: "Secure OTP Authentication System",
            description: "Engineered passwordless email OTP auth utilizing Nodemailer, Mustache HTML templating, and MongoDB TTL auto-expiring tokens (10 min).",
            tech: ["Nodemailer", "Mustache", "MongoDB TTL", "Express.js"],
          },
          {
            title: "Audit & Login History Module",
            description: "Designed security telemetry system tracking user login timestamps, IP geolocation, and device metadata.",
            tech: ["Node.js", "MongoDB", "Security"],
          },
          {
            title: "Automated Invoice & Agreement Generation",
            description: "Built dynamic PDF generation engine using html-pdf for hospital/facilitator billing and full end-to-end agreement lifecycles.",
            tech: ["html-pdf", "REST APIs", "React", "Node.js"],
          },
        ],
      },
      {
        title: "Frontend Engineering & Real-time UI",
        items: [
          {
            title: "Master Analytics Dashboard & Permission Engine",
            description: "Built unified operational dashboards and revamped role-based access control (RBAC) permission management interfaces.",
            tech: ["React", "Ant Design", "RBAC", "TypeScript"],
          },
          {
            title: "Interactive Query Management Lifecycle",
            description: "Built end-to-end multi-stage query lifecycle system handling Opinion, Proforma, Pre-initiation, VIL, and Confirmation stages.",
            tech: ["React", "REST APIs", "State Management"],
          },
          {
            title: "Real-Time Sync with Socket.io & PWA",
            description: "Architected real-time event updates bypassing manual page refreshes and configured Progressive Web App with browser web push notifications.",
            tech: ["Socket.io", "PWA", "Web Push APIs"],
          },
          {
            title: "Calendar, Doctor & Hospital Management",
            description: "Integrated interactive calendar event management and scalable directory search/detail modules for medical providers.",
            tech: ["React", "Calendar APIs", "AntD"],
          },
        ],
      },
      {
        title: "Backend Services & Document OCR",
        items: [
          {
            title: "Automated Cron Jobs & Background Processing",
            description: "Scheduled recurring background workers for email fetching via IMAP and real-time frontend broadcasting.",
            tech: ["Node Cron", "IMAP", "Socket.io"],
          },
          {
            title: "Google Vision API OCR Integration",
            description: "Implemented smart document text scanning and validation across user uploads using Google Vision API.",
            tech: ["Google Vision API", "OCR", "Node.js"],
          },
          {
            title: "RESTful API Development & Optimization",
            description: "Designed, maintained, and scaled high-throughput REST APIs using Express.js and MongoDB aggregations.",
            tech: ["Node.js", "Express.js", "MongoDB"],
          },
        ],
      },
      {
        title: "Mobile App Development (Ionic)",
        items: [
          {
            title: "Cross-Platform iOS & Android App",
            description: "Developed comprehensive mobile client mirroring full web capabilities including Email Intelligence, Message Fetch, and document management.",
            tech: ["Ionic Framework", "Capacitor", "Angular/React", "Android & iOS"],
          },
          {
            title: "Mobile Push Notifications & Android Send Intent",
            description: "Integrated native mobile push alerts for live updates and built Android Send Intent handlers to allow direct content sharing into the app.",
            tech: ["Push Notifications", "Android Send Intent", "Ionic"],
          },
        ],
      },
    ],
  },
  {
    id: "shippigo-emiza",
    company: "Shippigo by Emiza",
    role: "Frontend Developer – WDE-1",
    location: "Gurugram (Hybrid)",
    period: "Jan 2022 – Sept 2023",
    start: "2022-01",
    yearLabel: "2022",
    current: false,
    summary: "Built high-performance logistics dashboards, warehouse management systems, finance panels, and B2B booking modules handling thousands of shipments daily.",
    categories: [
      {
        title: "Logistics & Dashboard Modules",
        items: [
          {
            title: "Unified Single Sign-On (SSO) Auth Project",
            description: "Developed central authentication portal controlling secure access across multiple shipping and operational dashboards.",
            tech: ["React", "JWT Auth", "TypeScript"],
          },
          {
            title: "Warehouse Management System (WMS)",
            description: "Built warehouse analytics, seller onboarding channel integrations, and complete invoice return-order flows.",
            tech: ["React", "SCSS", "Data Visualizations"],
          },
          {
            title: "Seller & Converse Multichannel Dashboards",
            description: "Engineered seller analytics charts, KYC verification pipelines, and multi-channel performance tracking (SMS, Email, WhatsApp).",
            tech: ["React", "Chart.js / AntD", "REST APIs"],
          },
          {
            title: "Finance & Admin Panel",
            description: "Developed seller KYC approval queues, wallet transactions ledger with balance top-ups, and cross-dashboard billing systems.",
            tech: ["React", "State Management", "Financial Tables"],
          },
          {
            title: "B2B Order Booking & Weight Discrepancy (Angular)",
            description: "Implemented complex multi-step B2B order booking workflows, rate calculators, and dispute management modules with granular filtering.",
            tech: ["Angular", "RxJS", "TypeScript", "SCSS"],
          },
        ],
      },
    ],
  },
  {
    id: "shippigo-intern",
    company: "Shippigo",
    role: "Frontend Developer Intern",
    location: "Gurugram",
    period: "Oct 2021 – Jan 2022",
    start: "2021-10",
    yearLabel: "2021",
    current: false,
    summary: "Contributed to core admin and user panel bug resolutions, learned enterprise Angular service architectures, and built reusable component libraries.",
    categories: [
      {
        title: "Core Contributions",
        items: [
          {
            title: "Reusable Component Architecture",
            description: "Refactored UI components into reusable Angular modules and integrated RESTful APIs with RxJS Observables.",
            tech: ["Angular", "RxJS", "REST APIs", "CSS3"],
          },
        ],
      },
    ],
  },
];

export const educations: Education[] = [
  {
    id: "class-10",
    degree: "Secondary School (10th Grade)",
    institution: "Dayawati Modi Public School",
    period: "2014 – 2015",
    start: "2014-04",
    yearLabel: "2014",
    location: "Modinagar, UP",
    note: "Where the first lines of code happened.",
  },
  {
    id: "class-12",
    degree: "Senior Secondary (12th Grade)",
    institution: "Dayawati Modi Public School",
    period: "2016 – 2017",
    start: "2016-04",
    yearLabel: "2016",
    location: "Modinagar, UP",
    note: "PCM + Computer Science stream.",
  },
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    period: "2017 – 2021",
    start: "2017-07",
    yearLabel: "2017",
    location: "Modinagar, Delhi NCR",
    note: "Four years of CS fundamentals, DSA and full stack side-projects.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "CodeOutlined",
    emoji: "🎨",
    skills: [
      { name: "React", tag: "UI Library", emoji: "⚛️", color: "#00d8ff", featured: true },
      { name: "Angular", tag: "Enterprise", emoji: "🅰️", color: "#dd0031", featured: true },
      { name: "TypeScript", tag: "Type-Safe", emoji: "🔷", color: "#3178c6", featured: true },
      { name: "JavaScript (ES6+)", tag: "Modern JS", emoji: "💛", color: "#f7df1e", featured: true },
      { name: "Redux Toolkit", tag: "State Mgmt", emoji: "💜", color: "#764abc", featured: true },
      { name: "RxJS", tag: "Observables", emoji: "🔮", color: "#b7178c", featured: false },
      { name: "HTML5 & CSS3/SCSS", tag: "Styling", emoji: "💎", color: "#a259ff", featured: true },
      { name: "Socket.io Client", tag: "Real-time", emoji: "⚡", color: "#00e5ff", featured: false },
      { name: "PWA & Web Push", tag: "Native Feel", emoji: "🔔", color: "#ff7d3b", featured: false },
      { name: "Ant Design", tag: "Design Sys", emoji: "🧩", color: "#1890ff", featured: true },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "ApiOutlined",
    emoji: "🚀",
    skills: [
      { name: "Node.js", tag: "Runtime", emoji: "🟢", color: "#68a063", featured: true },
      { name: "Express.js", tag: "REST Engine", emoji: "🚂", color: "#ffffff", featured: true },
      { name: "RESTful APIs", tag: "Architecture", emoji: "🔌", color: "#00e5ff", featured: true },
      { name: "Cron Schedulers", tag: "Background", emoji: "⏰", color: "#ffc857", featured: false },
      { name: "Nodemailer", tag: "Mail / Auth", emoji: "✉️", color: "#a259ff", featured: false },
      { name: "Socket.io Server", tag: "Live Sockets", emoji: "⚡", color: "#6a2bff", featured: true },
    ],
  },
  {
    category: "Mobile App Development",
    icon: "MobileOutlined",
    emoji: "📱",
    skills: [
      { name: "Ionic Framework", tag: "Cross-Platform", emoji: "📲", color: "#3880ff", featured: true },
      { name: "Capacitor", tag: "Native Bridge", emoji: "🌉", color: "#119eff", featured: true },
      { name: "Android & iOS", tag: "Mobile Builds", emoji: "🤖", color: "#a4c639", featured: true },
      { name: "Push Notifications", tag: "Alerts", emoji: "🚨", color: "#ff7d3b", featured: false },
      { name: "Send Intent", tag: "Native Share", emoji: "📤", color: "#00e5ff", featured: false },
    ],
  },
  {
    category: "Database & Cloud",
    icon: "DatabaseOutlined",
    emoji: "🍃",
    skills: [
      { name: "MongoDB", tag: "NoSQL DB", emoji: "🍃", color: "#13aa52", featured: true },
      { name: "Mongoose ODM", tag: "Schemas", emoji: "🗄️", color: "#880000", featured: true },
      { name: "MongoDB TTL", tag: "Auto-Expiry", emoji: "⏳", color: "#ffc857", featured: false },
      { name: "Aggregations", tag: "Pipelines", emoji: "📊", color: "#6a2bff", featured: false },
    ],
  },
  {
    category: "AI, OCR & Tools",
    icon: "RobotOutlined",
    emoji: "🤖",
    skills: [
      { name: "ChatGPT / OpenAI", tag: "LLM & Intel", emoji: "🧠", color: "#10a37f", featured: true },
      { name: "Google Vision OCR", tag: "Document OCR", emoji: "👁️", color: "#4285f4", featured: true },
      { name: "IMAP Mail Streams", tag: "Email Fetch", emoji: "📬", color: "#ff7d3b", featured: false },
      { name: "Periskope APIs", tag: "Messaging", emoji: "💬", color: "#00e5ff", featured: false },
      { name: "Git & GitHub", tag: "Version Ctrl", emoji: "🐙", color: "#f05032", featured: true },
      { name: "Postman", tag: "API Testing", emoji: "🚀", color: "#ff6c37", featured: false },
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "simplify-platform",
    title: "SimplifyMVT Medical Platform & Mobile App",
    category: "Full Stack",
    description: "Enterprise medical facilitator platform and cross-platform Ionic mobile app with AI email intelligence, OCR scanning, and real-time Socket.io updates.",
    highlights: [
      "AI Email Intelligence calculating trust scores & auto-filling data via ChatGPT API",
      "Real-time event sync with Socket.io & PWA Web Push notifications",
      "Full cross-platform Ionic app with Android Send Intent & push alerts",
      "Automated PDF invoice generation and agreement workflows",
    ],
    techStack: ["React", "Ionic", "Node.js", "Express", "MongoDB", "Socket.io", "ChatGPT API", "Google Vision"],
  },
  {
    id: "shippigo-suite",
    title: "Shippigo Logistics & Warehouse Suite",
    category: "Frontend",
    description: "High-scale multi-dashboard shipping ecosystem featuring Warehouse Management, Seller Analytics, Finance Portals, and B2B Booking.",
    highlights: [
      "Unified Single Sign-On (SSO) authentication for multiple platform dashboards",
      "Warehouse analytics, seller channel integrations, and return-order invoice lifecycles",
      "B2B order booking engine and weight discrepancy management modules",
      "Real-time communication performance dashboard (SMS, Email, WhatsApp)",
    ],
    techStack: ["React", "Angular", "TypeScript", "SCSS", "RxJS", "Redux", "Ant Design"],
  },
  {
    id: "ecommerce-fullstack",
    title: "Full Stack E-Commerce Platform",
    category: "Full Stack",
    description: "Complete full-stack online shopping platform featuring product catalog, state-managed cart, secure user checkout, and admin order fulfillment.",
    highlights: [
      "React + Redux Toolkit frontend with responsive glassmorphism UI",
      "Node.js & Express REST API with MongoDB data persistence",
      "JWT-based user authentication and order management workflow",
    ],
    techStack: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "SCSS"],
  },
  {
    id: "ecommerce-angular",
    title: "Angular E-Commerce Web App",
    category: "Frontend",
    description: "Modern Angular web application utilizing Fake Store API for dynamic product discovery, category filtering, cart operations, and responsive checkout.",
    highlights: [
      "RxJS Observable streams for real-time state management",
      "Modular components with lazy-loaded route structure",
      "Clean SCSS responsive styling and interactive feedback",
    ],
    techStack: ["Angular", "RxJS", "TypeScript", "Bootstrap", "Fake Store API"],
  },
  {
    id: "task-manager-app",
    title: "Collaborative Task & Todo Management App",
    category: "Full Stack",
    description: "Full-stack productivity web app supporting real-time task workflows, user authentication sessions, priority tags, and status tracking.",
    highlights: [
      "Full CRUD functionality with MongoDB persistence",
      "Redux Toolkit client state with instant optimistic updates",
      "Filter by status, priority, and date with search capability",
    ],
    techStack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
  },
];

export const services = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Development",
    icon: "CodeOutlined",
    description: "Architecting end-to-end web applications with modern frontend frameworks (React, Angular) and robust Node.js/Express backends.",
    bullets: ["Scalable Component Architectures", "RESTful API Design & Integration", "State Management (Redux, RxJS)"],
  },
  {
    id: "mobile-dev",
    title: "Cross-Platform Mobile Apps",
    icon: "MobileOutlined",
    description: "Building fast, native-like mobile applications for iOS and Android using Ionic Framework & Capacitor with push notifications and native intents.",
    bullets: ["Android & iOS Deployment", "Native Plugin Integrations", "Offline & Cache Optimization"],
  },
  {
    id: "realtime-systems",
    title: "Real-Time & Background Systems",
    icon: "ThunderboltOutlined",
    description: "Building responsive real-time data streaming with Socket.io, scheduled cron workers, PWA push notifications, and IMAP listeners.",
    bullets: ["Socket.io Event Streaming", "Automated Background Cron Jobs", "PWA Web Push Notifications"],
  },
  {
    id: "ai-ocr-integration",
    title: "AI & OCR Integrations",
    icon: "RobotOutlined",
    description: "Empowering applications with OpenAI/ChatGPT APIs for intelligent analysis and Google Vision API for automated document text extraction.",
    bullets: ["ChatGPT Prompt & Trust Scoring", "Google Vision Document OCR", "Automated Form Auto-filling"],
  },
];
