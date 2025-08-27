export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  github: string;
  webapp: string;
  image: string;
  highlights: string[][];
}

export const projects: Project[] = [
  {
    id: 'authenticator',
    title: "Authenticator",
    date: "July 2025",
    description: "A full-stack MERN application for secure user authentication and account management. It leverages JWT for robust session handling, Redux for centralized state management, and a responsive Tailwind-powered UI for seamless user experience.",
    image: "/projects/Authenticator.png",
    tags: [ "React.js", "MongoDB", "Node.js", "Express.js", "Redux", "Tailwind", "REST APIs", "JWT" ],
    category: "web-app",
    github: "https://github.com/amritdubey1600/admin-app",
    webapp: "https://admin-app-sypg.onrender.com/",
    highlights: [
      ["Secure Authentication", "Implemented JWT-based login and signup system."],
      ["Role-Based Access", "Ensured users have restricted and secure access control."],
      ["State Management", "Used Redux for global state and authentication flow."],
    ]
  },
  {
    id: 'cinephile',
    title: "Cinephile",
    date: "August 2025",
    description: "A Next.js and Firebase-powered movie booking platform that allows users to register, authenticate securely, and book movie tickets in real time. Designed with TypeScript and Zustand for strong typing and predictable state management.",
    image: "/projects/Cinephile.png",
    tags: [ "Next.js", "Typescript", "Firebase", "Zustand", "Tailwind", "REST APIs", "JWT" ],
    category: "web-app",
    github: "https://github.com/amritdubey1600/cinephile",
    webapp: "https://cinephile-sepia-six.vercel.app/",
    highlights: [
      ["JWT Secured Auth", "Enabled secure signup and login flow."],
      ["Real-time Bookings", "Used Firebase for instant ticket updates."],
      ["State Management", "Managed booking flow using Zustand."],
    ]
  },
  {
    id: 'smoke-city',
    title: "Smoke City",
    date: "August 2025",
    description: "A weather app built with Next.js and TypeScript. It integrates the OpenWeather API to provide real-time forecasts and Redis caching for optimized performance, making it a practical daily air-quality tracking tool.",
    image: "/projects/Smoke-City.png",
    tags: [ "Next.js", "Typescript", "Tailwind", "Redis", "Openweather API" ],
    category: "web-app",
    github: "https://github.com/amritdubey1600/smoke-city",
    webapp: "https://smoke-city.vercel.app/",
    highlights: [
      ["Health Management", "Users can track realtime AQI."],
      ["Weather Integration", "Integrated OpenWeather API for real-time data."],
      ["Optimized Caching", "Redis used for faster API responses."],
    ]
  },
  {
    id: 'career-assistant',
    title: "Career Assistant",
    date: "April 2025",
    description: "An AI-powered career guidance platform built with Streamlit, LangChain, and OpenAI APIs. It parses resumes, extracts skills, and recommends career paths by leveraging LLMs for intelligent insights and personalized suggestions.",
    image: "/projects/Career-Assistant.png",
    tags: [ "Python", "Streamlit", "LangChain", "Open AI", "Adzuna API" ],
    category: "aiml",
    github: "https://github.com/amritdubey1600/resume_app_final",
    webapp: "https://career-achiever.onrender.com/",
    highlights: [
      ["AI Integration", "Leveraged LangChain and OpenAI for career guidance."],
      ["Interactive UI", "Streamlit-based interface for user interaction."],
      ["Resume Parsing", "Extracted skills and matched them to roles using Adzuna API."],
    ]
  },
  {
    id: 'krate',
    title: "Krate",
    date: "June 2025",
    description: "A modern React.js web app showcasing interactive UI and animations using GSAP. Built with Tailwind for responsive design, it delivers smooth transitions and engaging visualization through a clean, minimal interface.",
    image: "/projects/Krate.png",
    tags: [ "React.js", "Tailwind", "GSAP" ],
    category: "web-app",
    github: "https://github.com/amritdubey1600/Krate",
    webapp: "https://krate-rd0a.onrender.com/",
    highlights: [
      ["Modern UI", "Built responsive design with Tailwind CSS."],
      ["Animations", "Smooth transitions implemented via GSAP."],
      ["Interactive Layout", "Provided engaging user experience for user."],
    ]
  },
  {
    id: 'blogger',
    title: "Blogger",
    date: "July 2025",
    description: "A blogging platform built with Next.js, TypeScript, and Firebase that enables users to create, edit, and read posts. Designed with a Tailwind-powered UI and REST APIs for scalable, responsive, and efficient content management.",
    image: "/projects/Blogger.png",
    tags: [ "Next.js", "Typescript", "Firebase", "Tailwind", "REST APIs" ],
    category: "web-app",
    github: "https://github.com/amritdubey1600/blog-app",
    webapp: "https://blog-app-eta-cyan.vercel.app/",
    highlights: [
      ["Rich Text Editor", "Users can write and edit posts using an in-built rich text editor."],
      ["Firebase Backend", "Handled authentication and storage."],
      ["Responsive UI", "Tailwind used for adaptive layouts."],
    ]
  },
  {
    id: 'churn-modelling',
    title: "Churn Modelling",
    date: "July 2023",
    description: "A machine learning project that builds an ANN model with TensorFlow and Keras to predict customer churn. Trained on Kaggle datasets, it provides actionable insights for banks to identify and retain at-risk customers.",
    image: "/projects/Churn-Modelling.png",
    tags: [ "Python", "Keras", "TensorFlow" ],
    category: "aiml",
    github: "https://github.com/amritdubey1600/Churn-Modelling",
    webapp: "https://colab.research.google.com/drive/1uIIjLTGqScoN7OWQgUGVJbDDPI_OiRKK?usp=sharing",
    highlights: [
      ["Deep Learning", "Built ANN model for churn prediction."],
      ["Model Training", "Trained with TensorFlow & Keras on Kaggle dataset."],
      ["Performance Analysis", "Evaluated accuracy and churn patterns."],
    ]
  },
  {
    id: 'loan-risk-analyzer',
    title: "Loan Risk Analyzer",
    date: "July 2023",
    description: "A Python-based financial analysis project using Random Forest Classifier to predict borrower creditworthiness. Features extensive preprocessing and model evaluation, providing insights into loan approval risks.",
    image: "/projects/Loan-Risk-Analyzer.png",
    tags: [ "Python", "Random Forest Classifier", "Scikit Learn" ],
    category: "aiml",
    github: "https://github.com/amritdubey1600/LoanRiskAnalyzer",
    webapp: "https://github.com/amritdubey1600/LoanRiskAnalyzer/blob/main/LoanRiskAnalyzer.ipynb",
    highlights: [
      ["Machine Learning", "Used Random Forest for loan risk classification."],
      ["Feature Engineering", "Extracted key borrower attributes for prediction."],
      ["Model Evaluation", "Analyzed precision and recall metrics."],
    ]
  },
];
