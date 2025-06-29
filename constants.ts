
import { Project, SkillCategory, ExperienceItem } from './types';

export const RESUME_TEXT = `
Akash E
Chennai, Tamil Nadu, India
akash1021998@gmail.com | +91-9597657757
GitHub: github.com/akash1021998 | LinkedIn: linkedin.com/in/akash1021

PROFESSIONAL SUMMARY
React & React Native Developer with over 2 years of experience building scalable, cross-platform mobile and web applications with full ownership from architecture to production. Skilled in integrating third-party SDKs, API systems, and real-time features for reliable, high-performance products. Actively working with Large Language Models (LLMs), RAG concepts, and AI integration to build smarter, user-centric experiences. Strong in independent development, problem-solving, and collaboration across technical teams.

TECHNICAL SKILLS
- Languages: JavaScript (ES6+), TypeScript, Python
- Web: React.js, Redux, Zustand, Context API, Formik, Axios, React Router
- Mobile: React Native, Expo, Android Studio, XCode, GraphQL, Razorpay, Google Maps API, React Navigation, Lottie, Reanimated
- Tools: Git, GitHub, Bitbucket, Postman, VS Code, npm, Yarn
- APIs & Integrations: OAuth (Google, Instagram, YouTube), Firebase (Auth, FCM), REST APIs, GraphQL, ChatGPT API, Third-Party SDK Integration (Payments, Maps, Analytics, etc.)
- AI/ML: Axolotl, Ollama, RAG Concepts, OpenCV, InsightFace, NumPy

EMERGING FOCUS AREAS
- LLM Training Pipelines & AI-Powered Product Integration
- Retrieval-Augmented Generation (RAG) & Vector Search Systems
- Multi-Modal Agents & Instruction Tuning Fundamentals

OBJECTIVE
To leverage my expertise in React Native and end-to-end app development to build robust, user-centric solutions for impactful organizations, with a strong interest in AI-integrated products.

EXPERIENCE
Energetics.ai Pvt Ltd - Software Engineer - React / React Native
Chennai, India | April 2023 - Present
- End-to-end ownership of multiple cross-platform mobile applications as a solo developer, including production deployment to Android and iOS.
- Contributed significantly to web-based admin dashboards and internal tools using React.js for each project, supporting backend workflows and real-time monitoring.
- Led all development efforts for SafeCommute, Expats AI assistant, Splendid Creators, and Mindn platforms.
- Integrated key services including Google Maps, ChatGPT API, OAuth (YouTube, Instagram), Firebase Push Notifications, and analytics tools.
- Collaborated closely with design, backend, and QA teams to ensure performance, security, and scalability across both mobile and web platforms.

KEY PROJECTS AT ENERGETICS.AI
- Expats – AI Travel Assistant (2025 - Present): Built a smart travel assistant using ChatGPT API and RAG for contextual chat and document analysis. Designed for seamless onboarding and personalized insights. Technologies: React Native, Firebase, Node.js, ChatGPT API.
- SafeCommute – Driver App - (2024 - Present): Created a driver-facing app with real-time trip tracking, route syncing, and background location services. Integrated Google Maps and FCM notifications, reducing sync lag by 30%. Available on Play Store: play.google.com/scdriver
- SafeCommute – Employee App - (2024 - Present): Developed a ride-booking app with Pusher and push notification-based live updates. Enhanced booking flow, reduced failed bookings by over 20%. Available on Play Store: play.google.com/scemployee
- Splendid Creators – Mobile App - (2024 - Present): Built OAuth-based integrations for YouTube and Instagram for media content viewing. Fully managed deployment and asset optimization, reducing load time by 45%. Available on Play Store: play.google.com/splendidcreators and App Store: apps.apple.com/splendidcreators.
- Mindn - Mental Wellness Tablet App - (2023 - 2024): Improved video calling UX by integrating Jitsi SDK and a custom media player. Reduced UI latency by 60% and optimized app for large-screen Android/iOS tablets. Play Store: play.google.com/mindn
- Face Recognition Attendance System - (2024): Designed a multi-user face recognition system using InsightFace and OpenCV. Integrated real-time CCTV feed processing and backend API syncing. Achieved 90%+ accuracy with live detection up to 15 FPS.

EDUCATION
B.E. in Mechanical Engineering, Sri Venkateswara College of Engineering, Chennai
`;


export const SKILLS_DATA: SkillCategory[] = [
  { title: 'Languages', skills: [{ name: 'JavaScript (ES6+)' }, { name: 'TypeScript' }, { name: 'Python' }] },
  { title: 'Web Development', skills: [{ name: 'React.js' }, { name: 'Redux' }, { name: 'Zustand' }, { name: 'Context API' }, { name: 'Axios' }, { name: 'React Router' }] },
  { title: 'Mobile Development', skills: [{ name: 'React Native' }, { name: 'Expo' }, { name: 'React Navigation' }, { name: 'Reanimated' }] },
  { title: 'AI / ML', skills: [{ name: 'RAG Concepts' }, { name: 'LLM Integration' }, { name: 'Axolotl' }, { name: 'Ollama' }, { name: 'OpenCV' }, { name: 'InsightFace' }] },
  { title: 'APIs & Integrations', skills: [{ name: 'REST APIs' }, { name: 'GraphQL' }, { name: 'OAuth' }, { name: 'Firebase' }, { name: 'ChatGPT API' }] },
  { title: 'Tools & Platforms', skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'VS Code' }, { name: 'Postman' }, { name: 'npm' }, { name: 'Yarn' }] }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        company: 'Energetics.ai Pvt Ltd',
        role: 'Software Engineer - React / React Native',
        location: 'Chennai, India',
        period: 'April 2023 - Present',
        points: [
            'Owned end-to-end development of multiple cross-platform mobile apps, from concept to production on Android and iOS.',
            'Built and maintained web-based admin dashboards with React.js for real-time monitoring and backend workflow support.',
            'Led development for key platforms: SafeCommute, Expats AI assistant, Splendid Creators, and Mindn.',
            'Integrated essential services like Google Maps, ChatGPT API, OAuth, Firebase Notifications, and analytics tools.',
            'Collaborated with design, backend, and QA to ensure high performance, security, and scalability.'
        ]
    }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Expats – AI Travel Assistant',
    period: '2025 - Present',
    description: 'A smart travel assistant using ChatGPT API and RAG for contextual chat and document analysis, designed for seamless onboarding and personalized insights.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'ChatGPT API', 'RAG'],
    links: {}
  },
  {
    title: 'Splendid Creators – Mobile App',
    period: '2024 - Present',
    description: 'Built OAuth-based integrations for YouTube and Instagram for media content viewing. Fully managed deployment and asset optimization, reducing load time by 45%.',
    technologies: ['React Native', 'OAuth', 'Firebase'],
    links: {
      playStore: 'https://play.google.com/splendidcreators',
      appStore: 'https://apps.apple.com/splendidcreators',
    }
  },
  {
    title: 'SafeCommute – Driver & Employee Apps',
    period: '2024 - Present',
    description: 'A driver-facing app with real-time trip tracking, and a ride-booking app with live updates. Reduced sync lag by 30% and failed bookings by over 20%.',
    technologies: ['React Native', 'Google Maps', 'FCM', 'Pusher'],
    links: {
      playStore: 'https://play.google.com/scdriver',
    }
  },
  {
    title: 'Mindn - Mental Wellness Tablet App',
    period: '2023 - 2024',
    description: 'Improved video calling UX by integrating Jitsi SDK and a custom media player. Reduced UI latency by 60% and optimized for large-screen tablets.',
    technologies: ['React Native', 'Jitsi SDK', 'Android/iOS Optimization'],
    links: {
      playStore: 'https://play.google.com/mindn',
    }
  },
  {
    title: 'Face Recognition Attendance System',
    period: '2024',
    description: 'A multi-user face recognition system using InsightFace and OpenCV with real-time CCTV feed processing. Achieved 90%+ accuracy with live detection.',
    technologies: ['OpenCV', 'InsightFace', 'Python', 'Backend API'],
    links: {}
  }
];
