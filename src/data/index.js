export const personal = {
  name: 'Prasanna R',
  role: 'Software Engineer',
  location: 'Coimbatore, Tamil Nadu, India',
  experience: '4+',
  email: 'prasannar.0505@gmail.com',
  github: 'https://github.com/prasanna-r15',
  linkedin: 'https://www.linkedin.com/in/prasanna-r-77530916b',
  resume: '/assets/docs/Prasanna_R_CV.pdf',
  photo: '/assets/images/prasanna-profile.png',
  summary:
    'Software Engineer with 4+ years of experience building enterprise-grade banking and payment gateway systems, AI-powered learning platforms and full-stack web applications. Progressed from backend development to full-stack delivery across EdTech and Banking domains, with deep expertise in Java, Spring Boot, React.js, ISO8583, ISO 20022 and OpenAI integrations.',
};

export const heroTech = [
  'Java',
  'Spring Boot',
  'React.js',
  'Groovy/Grails',
  'Python',
  'MySQL',
  'ISO8583',
  'ISO 20022',
  'OpenAI APIs',
  'Microservices',
];

export const heroStats = [
  { value: '4+', label: 'Years of Experience' },
  { value: '3', label: 'Companies' },
  { value: '20+', label: 'Technologies' },
  { value: '2', label: 'Core Domains' },
];

export const domains = [
  {
    id: 'banking',
    name: 'Banking & Payments',
    mark: 'BP',
    color: '#00D4FF',
    description:
      'Payment gateway systems for real-time and batch transactions across Singapore, Indonesia, Thailand and beyond — connecting banking networks with multi-format message processing.',
    capabilities: [
      'Payment Gateway Integrations',
      'ISO8583 & ISO 20022 Messaging',
      'eGIRO Mandate Workflows',
      'Real-time & Batch Processing',
      'PGP Encryption & Security',
      'High-availability Transaction Systems',
    ],
  },
  {
    id: 'edtech',
    name: 'EdTech',
    mark: 'ED',
    color: '#00FFA3',
    description:
      'Full-stack learning platforms from corporate soft-skill tools to early childhood education — integrated with AI content generation, real-time video and interactive assessments.',
    capabilities: [
      'Learning Management Systems',
      'OpenAI Content Generation',
      'Real-time Video (OpenVidu)',
      'AI Participant Evaluation',
      'Interactive Early Learning Games',
      'Jira & Third-party Integrations',
    ],
  },
];

export const skillCategories = [
  { title: 'Backend', mark: 'BE', skills: ['Java', 'Spring Boot', 'Groovy/Grails', 'Python'] },
  { title: 'Frontend', mark: 'FE', skills: ['React.js', 'JavaScript', 'HTML5', 'SCSS', 'CSS3'] },
  { title: 'Databases', mark: 'DB', skills: ['MySQL', 'PostgreSQL', 'SQL'] },
  {
    title: 'Banking & Payments',
    mark: 'BP',
    skills: ['ISO8583', 'ISO 20022', 'Fixed-length', 'eGIRO', 'Payment Gateways', 'PGP Encryption'],
  },
  {
    title: 'Messaging & Infra',
    mark: 'MQ',
    skills: ['Kafka', 'IBM MQ', 'ActiveMQ', 'SwiftMQ', 'TCP/IP', 'OpenShift', 'Jenkins'],
  },
  {
    title: 'AI & Integrations',
    mark: 'AI',
    skills: ['OpenAI APIs', 'OpenVidu', 'GitLab API', 'Jira API', 'REST APIs'],
  },
];

export const projects = [
  {
    id: 1,
    number: '01',
    title: 'Payment Gateway — Real-time & Batch Processing',
    domain: 'Banking',
    domainColor: '#00D4FF',
    problem: 'Banks across Singapore, Indonesia and Thailand needed a unified gateway handling multiple message formats in both real-time and batch modes.',
    solution: 'Architected fault-tolerant pipelines supporting ISO8583, ISO 20022, fixed-length and JSON formats with Kafka, IBM MQ and ActiveMQ for mission-critical reliability.',
    tech: ['Java', 'ISO8583', 'ISO 20022', 'Kafka', 'IBM MQ', 'ActiveMQ', 'PostgreSQL'],
    achievement: '99.9% SLA across high-throughput real-time and batch transaction flows.',
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
  },
  {
    id: 2,
    number: '02',
    title: 'eGIRO Mandate Integration',
    domain: 'Banking',
    domainColor: '#7B61FF',
    problem: 'The gateway needed to support Singapore\'s eGIRO direct-debit scheme — mandate creation, amendments and cancellations aligned with banking regulations.',
    solution: 'Played a key role in designing and integrating the full eGIRO flow into the payment gateway, covering mandate lifecycle management end-to-end.',
    tech: ['Java', 'Spring Boot', 'ISO 20022', 'TCP', 'PostgreSQL', 'OpenShift'],
    achievement: 'Successfully delivered eGIRO compliance for direct-debit banking operations.',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #00D4FF 100%)',
  },
  {
    id: 3,
    number: '03',
    title: 'Human Transformation @ FRECKLED',
    domain: 'EdTech',
    domainColor: '#00FFA3',
    problem: 'Organisations needed a structured soft-skill development platform with AI-powered content and real-time coaching capabilities.',
    solution: 'Built the platform from the ground up — starting as a backend developer with Groovy/Grails, expanding into full-stack React.js development, and integrating OpenAI for AI-driven interactions and GitLab for automated error monitoring.',
    tech: ['React.js', 'Groovy/Grails', 'Java', 'OpenAI', 'GitLab API', 'MySQL', 'AWS'],
    achievement: 'Grew from backend engineer to full-stack developer delivering a production-grade AI learning platform.',
    gradient: 'linear-gradient(135deg, #00FFA3 0%, #00D4FF 100%)',
  },
  {
    id: 4,
    number: '04',
    title: 'ImageofAChild — Early Learning Platform',
    domain: 'EdTech',
    domainColor: '#FFB86B',
    problem: 'Nursery children needed an engaging digital learning environment covering listening, reading, writing, speaking and interactive games — with live coaching and performance evaluation.',
    solution: 'Developed the full platform with OpenVidu-powered real-time video sessions and an AI evaluation engine that scores each participant\'s performance after every session.',
    tech: ['React.js', 'Java', 'Spring Boot', 'OpenVidu', 'OpenAI', 'MySQL'],
    achievement: 'Delivered AI-scored live sessions across listening, reading, writing and speaking modules.',
    gradient: 'linear-gradient(135deg, #FFB86B 0%, #FF6B9D 100%)',
  },
  {
    id: 5,
    number: '05',
    title: 'Jira Integration for E-Box Platform',
    domain: 'EdTech',
    domainColor: '#FF6B9D',
    problem: 'HCL trainees using the e-box learning platform had to switch between tabs to monitor their Jira sprint progress — a friction-heavy workflow during active training sessions.',
    solution: 'Integrated Jira directly into the e-box platform: sprint CRUD, real-time progress tracking and analytics, eliminating the need to leave the learning environment.',
    tech: ['Java', 'Groovy/Grails', 'Jira API', 'REST APIs', 'MySQL'],
    achievement: 'Eliminated context-switching for HCL trainees by embedding Jira sprint management in-platform.',
    gradient: 'linear-gradient(135deg, #FF6B9D 0%, #7B61FF 100%)',
  },
  {
    id: 6,
    number: '06',
    title: 'ISO8583 Simulator & TCP Messaging Tool',
    domain: 'Banking',
    domainColor: '#00D4FF',
    problem: 'Payment teams needed a controlled environment to test and inspect ISO8583 financial messages before connecting to live bank networks.',
    solution: 'Built configurable message simulation with field-level inspection and TCP request-response tooling to validate financial messaging behaviour end-to-end.',
    tech: ['Java', 'ISO8583', 'TCP/IP', 'Message Parsing', 'Spring Boot'],
    achievement: 'Shortened financial messaging diagnosis and improved integration test confidence.',
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #00FFA3 100%)',
  },
];

export const experience = [
  {
    id: 1,
    company: 'MVI Technologies',
    role: 'Software Engineer',
    period: 'Mar 2025 – Present',
    type: 'Full-time',
    location: 'Chennai, India · Hybrid',
    domains: ['Banking', 'Real-time Payments', 'Batch Payments'],
    highlights: [
      'Joined a new domain (Banking) and quickly ramped up on ISO8583, ISO 20022, fixed-length and JSON message formats used in payment gateways across Singapore, Indonesia and Thailand.',
      'Played a key role in developing and integrating the eGIRO flow — covering mandate creation, amendment and cancellation workflows aligned with direct-debit banking standards.',
      'Stepped into batch payment processing, learning INW/OWD file structures and end-to-end batch pipeline behaviour.',
      'Built fault-tolerant transaction pipelines using Kafka, IBM MQ, ActiveMQ and SwiftMQ to ensure reliability for mission-critical payment services.',
      'Tuned high-throughput transaction systems to sustain performance and 99.9% SLA targets under peak loads.',
    ],
    skills: ['Core Java', 'ISO8583', 'ISO 20022', 'ActiveMQ', 'IBM MQ', 'SwiftMQ', 'Kafka', 'PostgreSQL', 'TCP/IP', 'Fixed-length', 'OpenShift', 'Jenkins'],
    color: '#00D4FF',
  },
  {
    id: 2,
    company: 'FrecklEd AI',
    role: 'Software Engineer',
    period: 'Sep 2022 – Feb 2025',
    type: 'Full-time',
    location: 'Bengaluru, India · On-site',
    domains: ['EdTech', 'AI Integration', 'Full-stack'],
    highlights: [
      'Built Human Transformation @ FRECKLED from the ground up — a soft-skill development platform — starting as a backend developer with Groovy/Grails and growing into a full-stack role with React.js.',
      'Integrated OpenAI to power AI-driven content generation and personalised learning interactions across the platform.',
      'Automated production error monitoring by integrating GitLab, enabling real-time issue creation on platform errors and significantly shortening incident-response time.',
      'Contributed to the main FRECKLED website, focusing on a user-friendly and fully responsive interface.',
      'Developed ImageofAChild — an early learning platform for nursery children — with modules for listening, reading, writing, speaking and interactive educational games.',
      'Integrated OpenVidu for real-time video sessions and built an AI evaluation engine to score participants after each session.',
    ],
    skills: ['React.js', 'Groovy', 'Grails', 'Java', 'Spring Boot', 'OpenAI', 'OpenVidu', 'GitLab API', 'AWS', 'MySQL', 'Python'],
    color: '#7B61FF',
  },
  {
    id: 3,
    company: 'Amphisoft Technologies Pvt. Ltd.',
    role: 'Product Intern',
    period: 'Nov 2021 – Aug 2022',
    type: 'Internship → Full-time offer',
    location: 'Coimbatore, India · On-site',
    domains: ['EdTech', 'Backend Development'],
    highlights: [
      'Started with zero IT background — learned C, Java, HTML, CSS, JavaScript and Groovy on Grails during the first three months.',
      'Assigned to the e-box online learning platform (similar to Udemy/Coursera) used by HCL to train freshers.',
      'Integrated Jira into the e-box platform — sprint CRUD, progress tracking and analytics — so HCL trainees could monitor their sprint work without leaving the learning environment.',
      'Gained a solid foundation in REST API design, third-party integrations and backend development through real client work.',
      'Contributed bug fixes to the live platform based on client-raised issues, improving stability for active users.',
      'Recognised as a Star Performer during the internship and received a full-time offer.',
    ],
    skills: ['Java', 'React.js', 'Groovy', 'Grails', 'Jira API', 'REST APIs', 'SQL', 'Git', 'HTML', 'CSS', 'JavaScript'],
    color: '#00FFA3',
  },
];

export const whyHireMe = [
  { mark: '01', title: 'Banking Domain Expertise', text: 'Hands-on experience with payment gateway systems, ISO standards, eGIRO flows and high-throughput transaction processing.' },
  { mark: '02', title: 'Strong Backend Engineering', text: 'Secure APIs, resilient messaging pipelines and production-focused Java systems built for real banks.' },
  { mark: '03', title: 'Full Stack Development', text: 'Grew from backend engineer to full-stack developer — delivering complete features across React.js and Spring Boot.' },
  { mark: '04', title: 'AI Integration Experience', text: 'Practical OpenAI integrations for content generation, participant evaluation and workflow automation.' },
  { mark: '05', title: 'Fast Domain Learner', text: 'Picked up complex banking protocols (ISO8583, ISO 20022, eGIRO) from scratch and delivered production features quickly.' },
  { mark: '06', title: 'Real Product Ownership', text: 'Built products from zero to production — not just features, but full systems used by real clients and end users.' },
];

export const achievements = [
  { label: 'Years Experience', value: '4+', mark: 'YE', color: '#00D4FF' },
  { label: 'Products Built', value: '4+', mark: 'PB', color: '#7B61FF' },
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