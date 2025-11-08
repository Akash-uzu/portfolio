import { Project, SkillCategory, ExperienceItem } from "./types";

export const RESUME_TEXT = `Akash E
 Software Engineer– Frontend (React & React Native, Web + Mobile Apps)
 Chennai, Tamil Nadu, India
 akash1021998@gmail.com — +91-9597657757
 linkedin.com/in/akash1021 — github.com/akash1021998
 Portfolio: sudo-hire-akash.netlify.app
 PROFESSIONAL SUMMARY
 Self-driven Software Engineer with 2.5+ years of experience in React.js, React Native, and full
cycle app development. Specialized in building complete products from scratch to production.
 Skilled in frontend architecture, API integration, and deployment of scalable mobile and web applications.
 Experienced in integrating ChatGPT API, RAG systems, and AI-based features. Strong focus
 on performance, reliability, and seamless user experiences.
 TECHNICAL SKILLS– Frontend Development: React.js, React Native, Redux, Zustand, Context API, React Router,
 Tailwind CSS, Styled Components– Mobile Development: Expo, Android Studio, XCode, Google Maps API, Razorpay, GraphQL,
 Native Modules (Bluetooth LE, Broadcasting, Proximity Detection)– Languages: JavaScript (ES6+), TypeScript, Python– Backend & APIs: Node.js, Express.js, REST APIs, GraphQL, Firebase (Auth, Firestore, FCM),
 MongoDB– AI & MLIntegration: ChatGPT API, Axolotl, Ollama, RAG, OpenCV, InsightFace– Tools & Workflow: Git, GitHub, Bitbucket, Postman, VS Code, npm, Yarn, Figma– Integrations & SDKs: OAuth (Google, Instagram, YouTube), Payment Gateways, Notifications,
 Analytics, Location Services
 PROFESSIONAL EXPERIENCE
 Energetics.ai Pvt Ltd, Chennai– Software Engineer– React / React Native April 2023– Present– Independently built, deployed, and maintained multiple production-grade mobile and web apps
 for Energetics.ai.– Owned the complete development cycle — architecture, design, API integration, testing, and deploy
ment.– Delivered products like SafeCommute (Driver & Employee Apps), Expats AI Assistant,
 Splendid, and Mindn.– Contributed to React.js-based admin dashboards for monitoring data, managing trips, and real-time
 updates.– Integrated ChatGPT API, Google Maps, Firebase FCM, OAuth systems, and analytics
 SDKs.– Ensured code scalability, UI performance, and secure communication across platforms.
 MAJORPROJECTSDEVELOPEDFORENERGETICS.AI(END-TO-END
 OWNERSHIP)
 SafeCommute– Driver & Employee Apps (2024– Present)–– Independently developed and deployed both Driver and Employee apps used daily by partner
 companies for real-time commute management.
 1
– Driver App: Implemented Google Maps integration, background location tracking, and Blue
tooth LE proximity detection for trip validation.– Employee App: Integrated live ride-booking, push notifications, and Bluetooth LE broadcasting
 via Native Modules for seamless driver-device communication.– Developed companion web admin dashboard in React.js for trip monitoring and live updates.– Both apps are in active production with 500+ daily users.
 Driver: play.google.com/scdriver
 Employee: play.google.com/scemployee
 Expats– AI Travel Assistant (2025)–– Fully developed an AI-powered travel assistant app using ChatGPT API and RAG for con
textual Q&A and document analysis.– Integrated seamless onboarding, document scanning, and personalization features.– Tech Stack: React Native, Firebase, Node.js, ChatGPT API.
 Splendid– Brand-Creator Collaboration Platform (2024– Present)–– Built a social commerce app connecting brands, creators, and sellers for collaboration and product
 promotion.– Owned complete frontend development lifecycle — from architecture and UI/UX to deployment and
 store publication.– Optimized performance and reduced load time by 45% via lazy loading and asset optimization.
 Play Store: play.google.com/splendidcreators
 App Store: apps.apple.com/splendidcreators
 Mindn– Mental Wellness Tablet App (2023– 2024)–– Independently developed and optimized tablet app using React Native for Android and iOS.– Integrated Jitsi SDK for video calls and reduced UI latency by 60%.
 Play Store: play.google.com/mindn
 Face Recognition Attendance System (2024)–– Designed a real-time facial recognition attendance system using InsightFace and OpenCV.– Integrated CCTV feed and backend API sync achieving 90%+ accuracy at 15 FPS.
 EDUCATION
 Bachelor of Engineering (B.E.)– Mechanical Engineering
 Sri Venkateswara College of Engineering, Chennai
 EMERGING FOCUS AREAS– LLM Training Pipelines & AI-Powered Product Integration– Retrieval-Augmented Generation (RAG) & Vector Search Systems– Multi-Modal Agents & Instruction Tuning Fundamentals
 `;

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Python" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "Zustand" },
      { name: "Context API" },
      { name: "Axios" },
      { name: "React Router" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "React Navigation" },
      { name: "Reanimated" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "RAG Concepts" },
      { name: "LLM Integration" },
      { name: "Axolotl" },
      { name: "Ollama" },
      { name: "OpenCV" },
      { name: "InsightFace" },
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "OAuth" },
      { name: "Firebase" },
      { name: "ChatGPT API" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "npm" },
      { name: "Yarn" },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Energetics.ai Pvt Ltd",
    role: "Software Engineer - React / React Native",
    location: "Chennai, India",
    period: "April 2023 - Present",
    points: [
      "Owned end-to-end development of multiple cross-platform mobile apps, from concept to production on Android and iOS.",
      "Built and maintained web-based admin dashboards with React.js for real-time monitoring and backend workflow support.",
      "Led development for key platforms: SafeCommute, Expats AI assistant, Splendid Creators, and Mindn.",
      "Integrated essential services like Google Maps, ChatGPT API, OAuth, Firebase Notifications, and analytics tools.",
      "Collaborated with design, backend, and QA to ensure high performance, security, and scalability.",
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Expats – AI Travel Assistant",
    period: "2025 - Present",
    description:
      "A smart travel assistant using ChatGPT API and RAG for contextual chat and document analysis, designed for seamless onboarding and personalized insights.",
    technologies: ["React Native", "Firebase", "Node.js", "ChatGPT API", "RAG"],
    links: {},
  },
  {
    title: "Splendid Creators – Mobile App",
    period: "2024 - Present",
    description:
      "Built OAuth-based integrations for YouTube and Instagram for media content viewing. Fully managed deployment and asset optimization, reducing load time by 45%.",
    technologies: ["React Native", "OAuth", "Firebase"],
    links: {
      playStore: "https://play.google.com/splendidcreators",
      appStore: "https://apps.apple.com/splendidcreators",
    },
  },
  {
    title: "SafeCommute – Driver & Employee Apps",
    period: "2024 - Present",
    description:
      "A driver-facing app with real-time trip tracking, and a ride-booking app with live updates. Reduced sync lag by 30% and failed bookings by over 20%.",
    technologies: ["React Native", "Google Maps", "FCM", "Pusher"],
    links: {
      playStore: "https://play.google.com/scdriver",
    },
  },
  {
    title: "Mindn - Mental Wellness Tablet App",
    period: "2023 - 2024",
    description:
      "Improved video calling UX by integrating Jitsi SDK and a custom media player. Reduced UI latency by 60% and optimized for large-screen tablets.",
    technologies: ["React Native", "Jitsi SDK", "Android/iOS Optimization"],
    links: {
      playStore: "https://play.google.com/mindn",
    },
  },
  {
    title: "Face Recognition Attendance System",
    period: "2024",
    description:
      "A multi-user face recognition system using InsightFace and OpenCV with real-time CCTV feed processing. Achieved 90%+ accuracy with live detection.",
    technologies: ["OpenCV", "InsightFace", "Python", "Backend API"],
    links: {},
  },
];
