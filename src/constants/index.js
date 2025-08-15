import {
  mobile,
  backend,
  creator,
  react,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  eventsphere,
  Todo,
  nova,
  Acmegrade,
  Tutedude,
  github,
  Sales,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN stack Developer",
    icon: react,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  /*{
    title: "Content Creator",
    icon: creator,
  },*/
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  /*{
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  /*{
    name: "figma",
    icon: figma,
  },*/
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  /* {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
  {
    title: "Data Scientist",
    company_name: "Acmegrade",
    icon: Acmegrade,
    iconBg: "#383E56",
    date: "Feb 2025 - Mar 2025",
    points: [
      "Successfully completed a comprehensive training program in Data Science, earning a Certificate of Training Completion from Acmegrade.",
      "Demonstrated competency in data science concepts and techniques, showcasing dedication and promise throughout the one-month term.",
      "Engaged in hands-on learning and practical exercises under the guidance of the Academic Head, Challa Rohit, enhancing skills in data analysis and problem-solving.",
      "Validated achievement with a verifiable certificate, featuring a unique QR code for authenticity (Certificate ID: AGC26030335).",
    ],
  },
  {
    title: "Mern stack Developer",
    company_name: "Tutedude",
    icon: Tutedude,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Currently enrolled in an ongoing MERN Stack development course, focusing on MongoDB, Express.js, React, and React.js.",
      "Gaining hands-on experience in building full-stack web applications, with the course commenced on June 26, 2025.",
      "Developing skills in modern web development frameworks, API integration, and database management to create robust, scalable applications.",
      "Actively progressing through the curriculum to enhance expertise in end-to-end software development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Well done Alok ! Your work on the portfolio is impressive and showcases your skills effectively.",
    name: "Ayush",
    designation: "Student",
    company: "inverties university",
    image: "ayush,jpg",
  },
  {
    testimonial:
      "Excellent starting with react framework carryon doing project.",
    name: "Ahqaf Ali",
    designation: "student",
    company: "inverties university",
    image: "Ahqaf.jpg",
  },
  {
    testimonial:
      "Alok, your portfolio is a testament to your dedication and skill in web development and Ai model . Keep up the great work!",
    name: "nitin",
    designation: "student",
    company: "inverties university",
    image: "E:\my portfolio\portfolio\project_3D_developer_portfolio\src\constants\nitin.jpg",
  },
];

const projects = [
  {
    name: "Eventsphere",
    description:
      "This full-stack event planner application, built as a personal project, enables users to discover, create, and manage events in an intuitive platform. Inspired by real-world event discovery tools, it features a clean, modern interface with user authentication, event creation capabilities, and a dynamic homepage that showcases upcoming events via a calendar view. The app emphasizes usability, allowing users to search for events by location or category and add new events seamlessly. The frontend is responsive and styled for a visually appealing experience, making it suitable for both desktop and mobile users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eventsphere,
    source_code_link: "https://github.com/Alokzhan/eventsphere",
  },
  {
    name: "Todo App",
    description:
      "Created a dynamic Todo management webpage using React and Vite, offering an efficient solution for task organization. This project allows users to add, track, and manage their to-do lists with intuitive features, including marking tasks as complete and a delete function for easy cleanup. Enhanced with a sleek, responsive design using minimal Tailwind CSS, the application showcases proficiency in React for state management, Vite for fast development, and front-end styling, demonstrating a strong foundation in modern web development practices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Todo,
    source_code_link: "https://github.com/Alokzhan/ToDoContext",
  },
  {
    name: "Nova App",
    description:
      "Developed a cutting-edge desktop AI assistant, Nova, using Python, designed to provide seamless voice and chat interactions. This innovative application supports real-time training, enabling it to adapt and improve based on user interactions. Key features include natural language processing for intuitive communication, multitasking capabilities, and task automation, making it a versatile tool for productivity. Built with a focus on performance and user experience, Nova integrates advanced libraries and offers a customizable interface, demonstrating expertise in AI development, Python programming, and real-time data processing.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
    ],
    image: nova,
    source_code_link: "https://github.com/Alokzhan/nova",
  },
  {
    name: "Sales Forecasting System",
    description:
      "This project demonstrates a time series forecasting model to predict future sales using the ARIMA (AutoRegressive Integrated Moving Average) algorithm. The model analyzes historical sales data, visualizes trends, and generates forecasts to assist in business decision-making. The project showcases proficiency in time series analysis, data preprocessing, and model evaluation using Python.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: Sales,
    source_code_link: "https://github.com/Alokzhan/Sale-Forecasting",
  },
];

export { services, technologies, experiences, testimonials, projects };