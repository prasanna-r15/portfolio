export const personal = {
  name: 'Prasanna R',
  role: 'Software Engineer',
  location: 'Coimbatore, Tamil Nadu, India',
  experience: '3+',
  email: 'prasannar.0505@gmail.com',
  github: 'https://github.com/prasannar',
  linkedin: 'https://www.linkedin.com/in/prasanna-r-77530916b',
  resume: '/assets/docs/Prasanna_R_CV.pdf',
  photo: '/assets/images/prasanna-profile.png',
  summary:
    'Software Engineer with experience building enterprise-grade banking and payment solutions, learning management platforms, AI-powered educational products and scalable backend systems. Skilled in designing secure APIs, payment integrations, transaction processing systems, microservices architectures and modern web applications.',
};

export const heroTech = [
  'Java',
  'Spring Boot',
  'React.js',
  'Groovy/Grails',
  'Python',
  'MySQL',
  'REST APIs',
  'Microservices',
  'ISO8583',
  'Payment Integrations',
  'AI Integrations',
];

export const heroStats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '15+', label: 'Enterprise Features' },
  { value: '20+', label: 'Technologies Worked' },
  { value: '2', label: 'Core Domains' },
];

export const domains = [
  {
    id: 'banking',
    name: 'Banking & Payments',
    mark: 'BP',
    color: '#00D4FF',
    description:
      'Secure, resilient transaction systems that connect banking networks, payment providers and enterprise applications.',
    capabilities: [
      'Payment Gateway Integrations',
      'ISO8583 Messaging',
      'Transaction Processing',
      'Secure API Development',
      'Encryption & PGP Processing',
      'High Availability Systems',
    ],
  },
  {
    id: 'edtech',
    name: 'EdTech',
    mark: 'ED',
    color: '#00FFA3',
    description:
      'Scalable learning products that combine modern full-stack engineering with practical AI-assisted workflows.',
    capabilities: [
      'Learning Management Systems',
      'AI Generated Content',
      'Student Assessments',
      'OpenAI Integrations',
      'Scalable Educational Platforms',
      'Workflow Automation',
    ],
  },
];

export const skillCategories = [
  { title: 'Backend', mark: 'BE', skills: ['Java', 'Spring Boot', 'Groovy/Grails', 'Python'] },
  { title: 'Frontend', mark: 'FE', skills: ['React.js', 'JavaScript', 'HTML5', 'SCSS'] },
  { title: 'Databases', mark: 'DB', skills: ['MySQL', 'PostgreSQL'] },
  {
    title: 'Banking & Payments',
    mark: 'BP',
    skills: ['ISO8583', 'Payment Gateways', 'Transaction Processing', 'Encryption', 'PGP'],
  },
  { title: 'Cloud & DevOps', mark: 'DO', skills: ['Docker', 'Git', 'CI/CD', 'Jenkins'] },
  {
    title: 'AI & Automation',
    mark: 'AI',
    skills: ['OpenAI APIs', 'Prompt Engineering', 'Workflow Automation'],
  },
];

export const projects = [
  {
    id: 1,
    number: '01',
    title: 'Banking Transaction Processing Platform',
    domain: 'Banking',
    domainColor: '#00D4FF',
    problem: 'Banks need reliable processing across multiple message formats and high-volume transaction flows.',
    solution: 'Built fault-tolerant real-time and batch pipelines with financial message validation and routing.',
    tech: ['Java', 'ISO8583', 'ISO 20022', 'Kafka', 'IBM MQ'],
    achievement: 'Supported high-throughput processing and 99.9% production SLA targets.',
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
  },
  {
    id: 2,
    number: '02',
    title: 'Payment Gateway Integration System',
    domain: 'Payments',
    domainColor: '#7B61FF',
    problem: 'Enterprise applications needed a consistent way to integrate multiple bank and payment providers.',
    solution: 'Designed secure gateway adapters, transaction workflows and asynchronous messaging integrations.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'TCP', 'ActiveMQ'],
    achievement: 'Enabled reusable multi-bank integrations across synchronous and asynchronous flows.',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #00D4FF 100%)',
  },
  {
    id: 3,
    number: '03',
    title: 'AI-Powered LMS Platform',
    domain: 'EdTech',
    domainColor: '#00FFA3',
    problem: 'Educators spent significant time creating learning content and assessments manually.',
    solution: 'Integrated OpenAI-assisted content, assessment generation and personalized learning workflows.',
    tech: ['React.js', 'Groovy/Grails', 'OpenAI', 'MySQL'],
    achievement: 'Accelerated content creation and delivered personalized, AI-assisted learning experiences.',
    gradient: 'linear-gradient(135deg, #00FFA3 0%, #00D4FF 100%)',
  },
  {
    id: 4,
    number: '04',
    title: 'Dynamic Project Generation Platform',
    domain: 'AI & Automation',
    domainColor: '#FFB86B',
    problem: 'Starting new software projects required repetitive setup and manual scaffolding.',
    solution: 'Created prompt-driven generation workflows that produce structured project foundations.',
    tech: ['Java', 'React.js', 'AI APIs', 'File Processing'],
    achievement: 'Reduced repetitive project initialization and improved rapid prototyping workflows.',
    gradient: 'linear-gradient(135deg, #FFB86B 0%, #FF6B9D 100%)',
  },
  {
    id: 5,
    number: '05',
    title: 'PGP Encryption & Decryption Framework',
    domain: 'Security',
    domainColor: '#FF6B9D',
    problem: 'Sensitive banking payloads required secure exchange between enterprise systems.',
    solution: 'Implemented reusable encryption, decryption, signature validation and key-handling components.',
    tech: ['Java', 'Bouncy Castle', 'PGP', 'Spring Boot'],
    achievement: 'Standardized secure payload processing with auditable, reusable components.',
    gradient: 'linear-gradient(135deg, #FF6B9D 0%, #7B61FF 100%)',
  },
  {
    id: 6,
    number: '06',
    title: 'ISO8583 Simulator & TCP Messaging Tool',
    domain: 'Transaction Systems',
    domainColor: '#00D4FF',
    problem: 'Payment teams needed a controlled way to test financial messages before bank connectivity.',
    solution: 'Built configurable message simulation, field inspection and TCP request-response tooling.',
    tech: ['Java', 'ISO8583', 'TCP/IP', 'Message Parsing'],
    achievement: 'Improved integration testing and shortened diagnosis of financial messaging issues.',
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #00FFA3 100%)',
  },
];

export const experience = [
  {
    id: 1,
    company: 'MVI Technologies',
    role: 'Software Engineer',
    period: 'Mar 2025 - Present',
    type: 'Full-time',
    location: 'Chennai, India - Hybrid',
    domains: ['Banking', 'Payment Systems'],
    highlights: [
      'Architected real-time and batch payment gateway systems for multi-bank integrations across ISO 20022, ISO8583, JSON and fixed-length formats.',
      'Engineered eGIRO mandate creation and cancellation workflows aligned with direct-debit banking requirements.',
      'Built fault-tolerant transaction pipelines using Kafka, IBM MQ, ActiveMQ and SwiftMQ for mission-critical services.',
      'Tuned high-throughput transaction systems to maintain performance and reliability under peak loads.',
    ],
    skills: ['Core Java', 'ISO8583', 'ISO 20022', 'Kafka', 'IBM MQ', 'PostgreSQL', 'TCP', 'Jenkins'],
    color: '#00D4FF',
  },
  {
    id: 2,
    company: 'FrecklEd AI',
    role: 'Software Engineer',
    period: 'Sep 2022 - Feb 2025',
    type: 'Full-time',
    location: 'Bengaluru, India - On-site',
    domains: ['EdTech', 'AI Products'],
    highlights: [
      'Built Human Transformation at FRECKLED from its early foundation, growing from backend development into a full-stack role.',
      'Integrated OpenAI-powered interactions and content generation for personalized learning experiences.',
      'Automated production error reporting through GitLab issue creation to shorten incident-response workflows.',
      'Delivered learning modules, OpenVidu video experiences and AI-assisted participant evaluation.',
    ],
    skills: ['React.js', 'Groovy', 'Grails', 'Java', 'Spring Boot', 'OpenAI', 'OpenVidu', 'AWS', 'MySQL'],
    color: '#7B61FF',
  },
  {
    id: 3,
    company: 'Amphisoft Technologies Pvt. Ltd.',
    role: 'Product Engineer / Intern',
    period: 'Nov 2021 - Aug 2022',
    type: 'Career start',
    location: 'Coimbatore, India - On-site',
    domains: ['EdTech', 'Product Engineering'],
    highlights: [
      'Earned a full-time offer after recognition as a Star Performer during the internship.',
      'Integrated Jira sprint creation, monitoring, CRUD operations and analytics into an EdTech product.',
      'Contributed to the early foundation of FRECKLED and improved live-product stability through targeted fixes.',
    ],
    skills: ['Java', 'React.js', 'Groovy', 'Grails', 'Jira', 'REST APIs', 'SQL', 'Git'],
    color: '#00FFA3',
  },
];

export const whyHireMe = [
  { mark: '01', title: 'Banking Domain Expertise', text: 'Hands-on experience with payment flows, ISO standards and transaction systems.' },
  { mark: '02', title: 'Strong Backend Engineering', text: 'Secure APIs, resilient messaging and production-focused Java systems.' },
  { mark: '03', title: 'Full Stack Development', text: 'Backend depth paired with responsive React product development.' },
  { mark: '04', title: 'AI Integration Experience', text: 'Practical OpenAI integrations for content, evaluation and automation.' },
  { mark: '05', title: 'Performance Optimization', text: 'Experience tuning high-throughput services and critical workflows.' },
  { mark: '06', title: 'Enterprise Architecture', text: 'Comfortable across integration patterns, security and system design decisions.' },
];

export const achievements = [
  { label: 'Years Experience', value: '3+', mark: 'YE', color: '#00D4FF' },
  { label: 'Enterprise Features', value: '15+', mark: 'EF', color: '#7B61FF' },
  { label: 'Banking Integrations', value: '5+', mark: 'BI', color: '#00FFA3' },
  { label: 'Core Technologies', value: '20+', mark: 'CT', color: '#FFB86B' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
