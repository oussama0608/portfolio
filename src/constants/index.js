import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  bilbao,
  threejs,
} from "../assets";

const links = {
  email: "mailto:oussama0608@outlook.es",
  github: "https://github.com/oussama0608",
  upwork: "https://www.upwork.com/freelancers/~0153f9c41073ea874f",
  linkedin: "https://www.linkedin.com/in/oussama-brahmi-lurnova/",

  leadGenDemo:
    "https://www.upwork.com/freelancers/~0153f9c41073ea874f?p=2004258160348950528",
  leadGenCode: "https://github.com/oussama0608/researcher-agent",

  ragDemo:
    "https://www.upwork.com/freelancers/~0153f9c41073ea874f?p=2003376149992239104",
  ragCode: "https://github.com/oussama0608/hr-policy-bot",
};

export const navLinks = [
  { id: "", title: "Home" },
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  { id: "works", title: "Projects" },
  { id: "tech", title: "Tech Stack" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "AI Automation Backends",
    icon: web,
  },
  {
    title: "RAG / Internal Knowledge Base Systems",
    icon: mobile,
  },
  {
    title: "Lead Generation & Outreach Automation",
    icon: backend,
  },
  {
    title: "API Development",
    icon: creator,
  },
  {
    title: "Data Extraction & Processing",
    icon: backend,
  },
  {
    title: "Google Sheets / CRM / Email Automation",
    icon: web,
  },
];

const technologies = [
  { name: "Python", icon: backend },
  { name: "FastAPI", icon: web },
  { name: "OpenAI API", icon: creator },
  { name: "LangChain", icon: nodejs },
  { name: "LlamaIndex", icon: javascript },
  { name: "PostgreSQL", icon: mongodb },
  { name: "SQLite", icon: git },
  { name: "SQLAlchemy", icon: typescript },
  { name: "Chroma", icon: mongodb },
  { name: "FAISS", icon: threejs },
  { name: "Qdrant", icon: threejs },
  { name: "Docker", icon: docker },
  { name: "REST APIs", icon: web },
  { name: "Web Scraping", icon: html },
  { name: "Google Sheets API", icon: css },
  { name: "Background Tasks", icon: redux },
  { name: "Celery", icon: tailwind },
  { name: "React", icon: reactjs },
];

const experiences = [
  {
    title: "AI Automation Developer",
    company_name: "Project-based backend systems",
    icon: backend,
    iconBg: "#383E56",
    date: "Current focus",
    points: [
      "Build backend workflows that reduce manual work in lead generation, document handling, and internal data organization.",
      "Connect APIs, databases, background jobs, AI models, and business tools into reliable automation systems.",
      "Focus on practical MVPs that can be tested quickly and improved with real user feedback.",
    ],
  },
  {
    title: "FastAPI Backend Developer",
    company_name: "API and automation projects",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Backend services",
    points: [
      "Design FastAPI endpoints for data intake, validation, storage, search, and automation workflows.",
      "Use Python, SQLAlchemy, PostgreSQL or SQLite, background tasks, Docker, and third-party APIs.",
      "Structure backends so frontend demos, internal tools, or CRM integrations can consume them cleanly.",
    ],
  },
  {
    title: "RAG / Document Processing Systems",
    company_name: "Internal knowledge base projects",
    icon: creator,
    iconBg: "#383E56",
    date: "AI document workflows",
    points: [
      "Process uploaded documents, split content into chunks, create embeddings, and store knowledge in vector databases.",
      "Build question-answering endpoints with source-aware responses for internal company files.",
      "Work with OpenAI API, LangChain or LlamaIndex, Chroma, FAISS, Qdrant, and FastAPI.",
    ],
  },
  {
    title: "Fullstack Development Training",
    company_name: "Penascal Koop. Bilbao, Spain",
    icon: bilbao,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - 2024",
    points: [
      "Completed practical fullstack training with JavaScript, React, Vue, APIs, Git, Docker, and responsive interfaces.",
      "Built project demos in small teams using agile planning and iterative delivery.",
      "Use frontend skills mainly to create clear demos for backend and automation projects.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "FastAPI Backend for Automated Lead Generation & Outreach System",
    problem:
      "Agencies, freelancers, B2B companies, and small sales teams often spend too much time collecting, cleaning, and preparing leads manually.",
    solution:
      "A backend system that collects, processes, stores, and prepares leads for outreach, with clean API endpoints and integration-ready records.",
    description:
      "Designed as a practical prospecting backend for teams that want a repeatable lead workflow before connecting a CRM, Google Sheets, or outreach tool.",
    features: [
      "Lead collection",
      "Data cleaning and validation",
      "Database storage",
      "API endpoints",
      "Outreach-ready lead records",
      "CRM / Google Sheets integration ready",
      "Background task support",
      "AI personalization ready",
    ],
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "SQLAlchemy", color: "pink-text-gradient" },
      { name: "PostgreSQL / SQLite", color: "blue-text-gradient" },
      { name: "Background Tasks", color: "green-text-gradient" },
      { name: "Web Scraping", color: "pink-text-gradient" },
      { name: "OpenAI API optional", color: "blue-text-gradient" },
      { name: "Docker optional", color: "green-text-gradient" },
    ],
    image: web,
    demo_link: links.leadGenDemo,
    source_code_link: links.leadGenCode,
    contact_link: "#contact",
  },
  {
    name: "FastAPI Backend for Internal Knowledge Base RAG System",
    problem:
      "Teams lose time searching through PDFs, notes, policies, and internal files when information is scattered across folders and tools.",
    solution:
      "A document-processing backend that lets users upload files, store searchable knowledge, and ask AI questions with source-aware answers.",
    description:
      "Built for small businesses that need a simple internal knowledge base MVP before investing in a larger AI platform.",
    features: [
      "Document upload",
      "PDF/text processing",
      "Chunking",
      "Embeddings",
      "Vector database storage",
      "Semantic search",
      "AI question-answering endpoint",
      "Source-aware answers",
    ],
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "OpenAI API", color: "pink-text-gradient" },
      { name: "LangChain / LlamaIndex", color: "blue-text-gradient" },
      { name: "Chroma / FAISS / Qdrant", color: "green-text-gradient" },
      { name: "PostgreSQL optional", color: "pink-text-gradient" },
      { name: "Docker optional", color: "blue-text-gradient" },
    ],
    image: backend,
    demo_link: links.ragDemo,
    source_code_link: links.ragCode,
    contact_link: "#contact",
  },
];

export { links, services, technologies, experiences, testimonials, projects };
