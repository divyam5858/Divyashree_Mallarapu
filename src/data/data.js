// certifications------------------------------------------------------------------------------------------------------------>
import computerVision from "../assets/Computer_Vision_Infosys.pdf";
import deepLearning from "../assets/DeepLearning_TensorFlow_IBM.pdf";
import dhee from "../assets/Dhee-coding-labs.pdf";
import internPe from "../assets/InternPe_Certificate.pdf";
import nptel from "../assets/NPTEL_C_Programming.pdf";
import resoluteAI from "../assets/ResoluteAI_Certificate.jpg";

export const certifications = [
  {
    id: 1,
    title: "MERN Stack Internship",
    issuer: "Dhee Coding Lab",
    type: "Internship Certificate",
    description:
      "Successfully completed an internship programme in MERN Stack at Dhee Coding Lab, gaining practical experience in full-stack web development.",
    file: dhee,
  },

  {
    id: 2,
    title: "AI Engineer Internship",
    issuer: "ResoluteAI Software Pvt. Ltd.",
    type: "Internship Certificate",
    description:
      "Certificate recognizing AI engineering internship experience involving machine learning, computer vision, and AI application development.",
    file: resoluteAI,
  },

  {
    id: 3,
    title: "Computer Vision",
    issuer: "Infosys",
    type: "Certification",
    description:
      "Certification focused on computer vision concepts and practical applications.",
    file: computerVision,
  },

  {
    id: 4,
    title: "Deep Learning with TensorFlow",
    issuer: "IBM",
    type: "Certification",
    description:
      "Certification covering deep learning concepts and TensorFlow-based machine learning techniques.",
    file: deepLearning,
  },

  {
    id: 5,
    title: "AI/ML Internship",
    issuer: "InternPe",
    type: "Internship Certificate",
    description:
      "Internship certification recognizing practical experience in Artificial Intelligence and Machine Learning.",
    file: internPe,
  },

  {
    id: 6,
    title: "Programming in C",
    issuer: "NPTEL",
    type: "Certification",
    description:
      "NPTEL certification for completing the Programming in C course.",
    file: nptel,
  },
];

// PROJECTS---------------------------------------------------------------------------------------------------------------------------->
export const projects = [
  // AI / ML / NLP / CV PROJECTS ------------------------------------------------------------------------------------------------------->

  {
    id: 1,
    title: "NeuroSense",
    category: "AI/ML",
    type: "Project",
    description:
      "AI-powered clinical decision support platform for early risk assessment of Alzheimer’s, Parkinson’s, and Dementia using multimodal clinical data and machine learning.",
    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "XGBoost",
      "LightGBM",
      "PostgreSQL",
    ],
    github: "https://github.com/divyam5858/NeuroSense",
    live: "https://urbanupscaleproperties.com/neurosense/",
  },

  {
    id: 2,
    title: "AI Image Generator",
    category: "AI/ML",
    type: "Project",
    description:
      "Generative AI application that converts text prompts into images using diffusion-based generative models.",
    technologies: [
      "Python",
      "Diffusion Models",
      "Generative AI",
      "Streamlit",
    ],
    github: "https://github.com/divyam5858/AI_Image_Generater",
    live: "https://aiimagegenerater.streamlit.app/",
  },

  {
    id: 3,
    title: "RAG Document Chatbot",
    category: "NLP",
    type: "Project",
    description:
      "Retrieval Augmented Generation chatbot that answers questions from uploaded documents using embeddings and large language models.",
    technologies: [
      "Python",
      "RAG",
      "LLM",
      "Embeddings",
      "Streamlit",
    ],
    github: "https://github.com/divyam5858/RAG-Document-Chatbot",
    live: "https://rag-document-chatbot-7848.streamlit.app/",
  },

  {
    id: 4,
    title: "PDF Question Answering App",
    category: "NLP",
    type: "Project",
    description:
      "Context-aware question answering application for uploaded PDF documents using vector retrieval and the Flan-T5 language model.",
    technologies: [
      "Python",
      "LangChain",
      "HuggingFace",
      "FAISS",
      "Flan-T5",
      "Streamlit",
    ],
    github: "https://github.com/divyam5858/PDF_QA",
    live: "https://pdf-query-answer.streamlit.app/",
  },

  {
    id: 5,
    title: "Political Bias Detection App",
    category: "NLP",
    type: "Project",
    description:
      "NLP-based classification application that analyzes political news articles and categorizes them as Left, Center, or Right.",
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "Streamlit",
    ],
    github:
      "https://github.com/divyam5858/Political-Bias-Detection-App",
    live: "https://political-bias-detection-app.streamlit.app/",
  },

  {
    id: 6,
    title: "Defect Detection using YOLO & SAM",
    category: "CV",
    type: "Project",
    description:
      "Computer vision system for detecting and segmenting defects in images using YOLO-based object detection and SAM-based segmentation.",
    technologies: [
      "Python",
      "YOLO",
      "SAM",
      "Computer Vision",
      "Object Detection",
      "Image Segmentation",
    ],
    github:
      "https://github.com/divyam5858/Defect_detection-YOLO-SAM",
    live: "",
  },

  {
    id: 7,
    title: "Fault Recognition System",
    category: "CV",
    type: "Project",
    description:
      "Computer vision system for recognizing faults and anomalies from image data using machine learning and computer vision techniques.",
    technologies: [
      "TypeScript",
      "Computer Vision",
      "Machine Learning",
    ],
    github: "https://github.com/divyam5858/fault-recognition",
    live: "",
  },

  {
    id: 8,
    title: "OCR Document Recognition",
    category: "CV",
    type: "Project",
    description:
      "OCR-based application for extracting and processing text from images and documents using computer vision techniques.",
    technologies: [
      "Python",
      "OCR",
      "Computer Vision",
      "PaddleOCR",
      "EasyOCR",
    ],
    github: "https://github.com/divyam5858/ocr_project",
    live: "",
  },

  {
    id: 9,
    title: "Freezer Item Counting",
    category: "CV",
    type: "Project",
    description:
      "Computer vision application for detecting and counting items inside freezer images using object detection techniques.",
    technologies: [
      "Python",
      "Computer Vision",
      "Object Detection",
      "Deep Learning",
    ],
    github:
      "https://github.com/divyam5858/Computer-Vision-Freezer-Item-Counting",
    live: "",
  },

  {
    id: 10,
    title: "Japanese Handwritten Recognition System",
    category: "CV",
    type: "Project",
    description:
      "Computer vision and deep learning system for recognizing handwritten Japanese characters from images.",
    technologies: [
      "Python",
      "Computer Vision",
      "Deep Learning",
      "OCR",
    ],
    github:
      "https://github.com/divyam5858/Japanese_Handrwritten_Recognition_system",
    live: "",
  },

  {
    id: 11,
    title: "Predictive Maintenance for Industrial Machinery",
    category: "ML",
    type: "Project",
    description:
      "Machine learning system that analyzes industrial sensor data and predicts equipment failures to support proactive maintenance.",
    technologies: [
      "Python",
      "Machine Learning",
      "Time Series",
      "scikit-learn",
    ],
    github:
      "https://github.com/divyam5858/Predictive-Maintenance-Industrial-Machinery",
    live: "",
  },

  {
    id: 12,
    title: "Predictive Maintenance MLOps",
    category: "ML",
    type: "Project",
    description:
      "MLOps pipeline for predictive maintenance including model training, deployment, automation, and monitoring workflows.",
    technologies: [
      "Python",
      "MLOps",
      "Machine Learning",
      "CI/CD",
    ],
    github:
      "https://github.com/divyam5858/predictive-maintenance-mlops",
    live: "",
  },

  {
    id: 13,
    title: "Air Quality Index Predictor",
    category: "ML",
    type: "Project",
    description:
      "Regression-based machine learning application that predicts Air Quality Index using weather and pollution-related features.",
    technologies: [
      "Python",
      "Regression",
      "Machine Learning",
      "Streamlit",
      "Data Visualization",
    ],
    github: "https://github.com/divyam5858/AQI-Predictor",
    live: "https://airqualityindex-predictor.streamlit.app/",
  },


  // FULL STACK PROJECTS------------------------------------------------------------------------------------------------------->
 

  {
    id: 14,
    title: "Appointment Booking System",
    category: "Full Stack",
    type: "Project",
    description:
      "Full-stack appointment management system with authentication, appointment booking, management, and tracking functionality.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/divyam5858/Appointment",
    live: "https://appointment-frontend-delta.vercel.app",
  },

  {
    id: 15,
    title: "Notes App",
    category: "Full Stack",
    type: "Project",
    description:
      "Full-stack notes management application supporting CRUD operations with persistent database storage.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/divyam5858/Notes-App",
    live: "",
  },

  {
    id: 16,
    title: "Signup & Login System",
    category: "Full Stack",
    type: "Project",
    description:
      "Authentication application implementing signup and login flows with form validation and a responsive interface.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/divyam5858/Signup-Login",
    live:'https://bolt-assign-frontend.vercel.app/',
  },

  // FRONTEND PROJECTS------------------------------------------------------------------------------------------------------->
  {
    id: 17,
    title: "Box Makers India",
    category: "Frontend",
    type: "Project",
    description:
      "Responsive business website showcasing products, company information, catalogs, and contact details for a box manufacturing company.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "CSS Animations",
      "Flexbox",
      "Grid",
    ],
    github: "https://github.com/divyam5858/Box-Makers-India",
    live: "https://box-makers-india.vercel.app/",
  },

  {
    id: 18,
    title: "EatFit Blog Website Replica",
    category: "Frontend",
    type: "Project",
    description:
      "Responsive recreation of a blog website focusing on layout accuracy, typography, visual hierarchy, Flexbox, and CSS Grid.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flexbox",
      "CSS Grid",
    ],
    github: "https://github.com/divyam5858/Eatfitblog",
    live: "https://eatfitblog.vercel.app/",
  },

  {
    id: 19,
    title: "Dhee Coding Lab Homepage Replica",
    category: "Frontend",
    type: "Project",
    description:
      "Responsive homepage recreation demonstrating modern CSS layouts, reusable styling patterns, and responsive web design.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    github: "https://github.com/divyam5858/dcl_HP_replica",
    live: "https://dcl-clone.vercel.app/",
  },

  // PRACTICE PROJECTS------------------------------------------------------------------------------------------------------->
  {
    id: 20,
    title: "QR Code Generator",
    category: "Frontend",
    type: "Practice",
    description:
      "Interactive frontend tool for generating QR codes from user-provided input.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "QR Code API",
    ],
    github: "https://github.com/divyam5858/qr-code-generator",
    live: "",
  },

  {
    id: 21,
    title: "Password Generator",
    category: "Frontend",
    type: "Practice",
    description:
      "Interactive password generator with configurable length and character options.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/password-generator",
    live: "",
  },

  {
    id: 22,
    title: "OTP Generator",
    category: "Frontend",
    type: "Practice",
    description:
      "Interactive OTP interface with countdown timer and resend functionality.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/otp-generator",
    live: "",
  },

  {
    id: 23,
    title: "Menu Card App",
    category: "Frontend",
    type: "Practice",
    description:
      "Interactive menu application with category filtering and responsive item layout.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/menu-card",
    live: "",
  },

  {
    id: 24,
    title: "Calendar App",
    category: "Frontend",
    type: "Practice",
    description:
      "Interactive calendar application with date navigation and event display functionality.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/calendar",
    live: "",
  },

  {
    id: 25,
    title: "Calculator",
    category: "Frontend",
    type: "Practice",
    description:
      "Functional calculator implementing basic arithmetic operations with a clean user interface.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/calculator",
    live: "",
  },

  {
    id: 26,
    title: "ATM App",
    category: "Frontend",
    type: "Practice",
    description:
      "Simulated ATM interface implementing balance checking, deposits, and withdrawals.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/atm-app",
    live: "",
  },

  {
    id: 27,
    title: "Digital Clock",
    category: "Frontend",
    type: "Practice",
    description:
      "Real-time digital clock displaying the current time and date with a responsive interface.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/digital-clock",
    live: "",
  },

  {
    id: 28,
    title: "Products App",
    category: "Frontend",
    type: "Practice",
    description:
      "Product listing interface with filtering functionality and responsive grid layout.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/products-app",
    live: "",
  },

  {
    id: 29,
    title: "Todo App",
    category: "Frontend",
    type: "Practice",
    description:
      "Task management application with add, delete, and completion functionality.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/divyam5858/todo-app",
    live: "",
  },
];

// contacts------------------------------------------------------------------------------------------------------------------------>

export const contacts = [
  {
    id: 1,
    name: "Email",
    value: "mdivya0212@gmail.com",
    url: "mailto:mdivya0212@gmail.com",
    icon: "mail",
  },

  {
    id: 2,
    name: "LinkedIn",
    value: "in/divyashree-mallarapu",
    url: "https://in.linkedin.com/in/divyashree-mallarapu",
    icon: "linkedin",
  },

  {
    id: 3,
    name: "GitHub",
    value: "@divyam5858",
    url: "https://github.com/divyam5858",
    icon: "github",
  },

  {
    id: 4,
    name: "LeetCode",
    value: "Problem Solving",
    url: "https://leetcode.com/u/Divyashree-Mallarapu",
    icon: "leetcode",
  },

  {
    id: 5,
    name: "HackerRank",
    value: "Practice Profile",
    url: "https://www.hackerrank.com/profile/divyamallarapu",
    icon: "hackerrank",
  },

  {
    id: 6,
    name: "Amazon Author",
    value: "Published Author",
    url: "https://www.amazon.com/author/divyashree-mallarapu",
    icon: "book",
  },
];



// achievements------------------------------------------------------------------------------------------------------------>
export const achievements = [
  {
    id: 1,
    title: "Best Outgoing Student",
    description: "Department of AI & ML, PESITM",
    icon: "award",
  },
  {
    id: 2,
    title: "Published Technical Author",
    description: "Author of technical books on Compiler Design and Data Structures & Algorithms",
    icon: "book",
  },
  {
    id: 3,
    title: "AI/ML Hackathon Mentor",
    description: "Guided student teams on machine learning project development and delivery",
    icon: "users",
  },
  {
    id: 4,
    title: "Workshop Contributor",
    description: "Conducted Python and GitHub workshops for juniors",
    icon: "terminal",
  },
];

// publications------------------------------------------------------------------------------------------------------------------------>

export const publications = [
  {
    id: 1,
    title: "Kickstart Compiler Design Fundamentals",
    type: "Book",
    year: "2025",
    status: "Published",
    description:
      "A practical and beginner-friendly guide to compiler design covering lexical analysis, parsing, semantic analysis, code generation, optimization, and real-world compiler techniques.",
    role: "Co-Author",
    publisher: "OrangeAVA",
    links: [
      {
        name: "OrangeAVA",
        url: "https://orangeava.com/products/kickstart-compiler-design-fundamentals",
      },
      {
        name: "Amazon",
        url: "https://www.amazon.com/Kickstart-Compiler-Design-Fundamentals-Optimization/dp/B0FDMFPWZW",
      },
    ],
  },

  {
    id: 2,
    title: "Kickstart Modern Data Structures and Algorithms",
    type: "Textbook",
    year: "2026",
    status: "Published",
    description:
      "A structured textbook covering data structures, algorithms, problem-solving patterns, advanced data structures, dynamic programming, backtracking, and interview-focused techniques.",
    role: "Author",
    publisher: "OrangeAVA",
    links: [
      {
        name: "OrangeAVA",
        url: "https://orangeava.in/products/kickstart-modern-data-structures-and-algorithms",
      },
      {
        name: "Amazon",
        url: "https://www.amazon.com/Kickstart-Modern-Data-Structures-Algorithms/dp/934988738X",
      },
    ],
  },

  {
    id: 3,
    title: "Practical MLOps with ZenML and MLflow",
    type: "Textbook",
    year: "2027",
    status: "Coming Soon",
    description:
      "A practical textbook focused on building, deploying, managing, and monitoring machine learning workflows using modern MLOps tools and practices.",
    role: "Author",
    publisher: "",
    links: [],
  },
];


// skills----------------------------------------------------------------------------------------------------------------------------->

export const skills = [
  {
    category: "Programming & DSA",
    skills: [
      "JavaScript",
      "Python",
      "Data Structures & Algorithms",
      "Problem Solving",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "React Router",
      "DOM Manipulation",
      "Vite",
      "Axios",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB"],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Hugging Face",
      "NLP",
      "NumPy",
      "Pandas",
    ],
  },
  {
    category: "Computer Vision",
    skills: [
      "OpenCV",
      "YOLO",
      "SAM",
      "SAM 2",
      "Image Segmentation",
      "OCR",
    ],
  },
  {
    category: "Tools / Deployment",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Render",
      "Streamlit",
      "Hugging Face Spaces",
    ],
  },
];

// experience---------------------------------------------------------------------------------------------------------------------->
export const experience = [
    
  {
    id: 1,
    role: "AI Engineer Intern",
    company: "ResoluteAI Software Pvt. Ltd.",
    duration: "Aug 2024 – Feb 2025",
    type: "Internship",

    description:
      "Worked on computer vision and AI/ML solutions for industrial inspection and automation use cases.",

    responsibilities: [
      "Built YOLO-based object detection models for industrial inspection use cases.",
      "Developed OCR pipelines using PaddleOCR and EasyOCR for structured text extraction.",
      "Handled computer vision preprocessing, dataset annotation, and model evaluation.",
      "Deployed model demos and internal tools with Streamlit for stakeholder review.",
    ],

    technologies: [
      "YOLO",
      "PaddleOCR",
      "EasyOCR",
      "OpenCV",
      "PyTorch",
      "SAM",
      "Streamlit",
    ],
  },
  {
    id: 2,
    role: "Enterprise MERN-Stack Training",
    company: "Dhee Coding Lab",
    duration: "2026",
    type: "Training Program",

    description:
      "Completed intensive MERN stack training covering frontend, backend, databases, APIs, and full-stack application development.",

    responsibilities: [
      "Completed intensive MERN stack training covering frontend, backend, and database layers.",
      "Built REST APIs using Node.js and Express.js with MongoDB data modelling.",
      "Developed responsive React.js interfaces with routing and state management.",
      "Practised full-stack application development from setup to deployment.",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
];

// education---------------------------------------------------------------------------------------------------------------------->
export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Artificial Intelligence & Machine Learning",
    institution: "PES Institute of Technology and Management, Shivamogga",
    university: "Visvesvaraya Technological University (VTU)",
    period: "2022 — 2026",
    graduation: "2026",
    cgpa: "8.98 CGPA",

    highlights: [
      "Coursework across machine learning, deep learning, computer vision, DBMS and algorithms.",
      "Best Outgoing Student, Department of AI & ML.",
    ],

    website: "https://pestrust.edu.in/pesitm/"
  },

  {
    id: 2,
    degree: "Pre-University Course",
    field: "",
    institution: "Narayana PU College, Bengaluru",
    university: "Karnataka Pre-University Education Board",
    period: "2018 — 2020",
    graduation: "2020",
    cgpa: "82%",

    highlights: [
      "Subjects: Physics, Chemistry, Mathematics, Biology.",
    ],

    website: "https://narayanapuccollege.com/"
  },

  {
    id: 3,
    degree: "Secondary Education",
    field: "",
    institution: "SJES Central School, Bengaluru",
    university: "Central Board of Secondary Education",
    period: "2008 — 2018",
    graduation: "2018",
    cgpa: "77.2%",

    highlights: [
      "Subjects: English, Mathematics, Science, Social Studies, Hindi, Computers",
    ],

    website: "https://www.sjescollege.com/"
  },
];
