export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
   {
    id: 0,
    name: "Squemart Ecommerce",
    description:
      "Squemart is an online hub for gadgets, appliances and accessories with proof of quality and excellence in delivery.",
    technologies: ["NextJS", "Open AI", "Paystack"],
    github: "https://github.com/victortosin02/squemart-ecommerce",
    demo: "https://squemart.com/",
    image: require("../../public/projects/squemart-website.png"),
    available: true,
  },
  {
    id: 1,
    name: "Squemart Admin",
    description:
      "Squemart Admin is a management interface for the Squemart e-commerce platform, allowing administrators to manage products, orders, and users.",
    technologies: ["NextJS", "Open AI", "Paystack"],
    github: "https://github.com/victortosin02/squemart-ecommerce",
    demo: "https://admin.squemart.com/",
    image: require("../../public/projects/admin-squemart-website.png"),
    available: true,
  },
  {
    id: 1,
    name: "MedHub",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments.",
    technologies: ["NextJS", "Tailwind CSS", "Twilio"],
    github: "https://github.com/victortosin02/health-checkup-booking-app",
    demo: "https://health-checkup-booking-app-2.onrender.com/",
    image: require("../../public/projects/medhub (1).png"),
    available: true,
  },
  {
    id: 2,
    name: "SmartSky",
    description:
      "SmartSky is a comprehensive weather application that provides real-time weather data, daily forecasts, and a five-day outlook.",
    technologies: ["Next.js", "TailwindCSS", "Open Weather API"],
    github: "https://github.com/victortosin02/weather-app",
    demo: "https://weather-app-1-v9xe.onrender.com/",
    image: require("../../public/projects/weather.jpg"),
    available: true,
  },
  {
    id: 3,
    name: "DigiBank",
    description:
      "DigiBank is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money.",
    technologies: ["React/NextJS", "Tailwind CSS", "Plaid"],
    github: "https://github.com/victortosin02/digibank",
    demo: "https://digibank.onrender.com",
    image: require("../../public/projects/auth-photo.jpg"),
    available: true,
  }
];
