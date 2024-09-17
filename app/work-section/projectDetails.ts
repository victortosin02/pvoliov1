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
    name: "MedHub",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications.",
    technologies: ["NextJS", "Tailwind CSS", "Twilio"],
    github: "https://github.com/victortosin02/health-checkup-booking-app",
    demo: "https://health-checkup-booking-app-2.onrender.com/",
    image: require("../../public/projects/medhub (1).png"),
    available: true,
  },
  {
    id: 1,
    name: "SmartSky",
    description:
      "SmartSky is a comprehensive weather application that provides real-time weather data, daily forecasts, and a five-day outlook. The application also offers detailed information on UV Index, air pollution, wind conditions, and sunset times.",
    technologies: ["Next.js", "TailwindCSS", "Open Weather API"],
    github: "https://github.com/victortosin02/weather-app",
    demo: "https://weather-app-1-v9xe.onrender.com/",
    image: require("../../public/projects/weather.png"),
    available: true,
  },
  {
    id: 2,
    name: "DigiBank",
    description:
      "DigiBank is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    technologies: ["React/NextJS", "Tailwind CSS", "Plaid"],
    github: "https://github.com/victortosin02/digibank",
    demo: "https://digibank.onrender.com",
    image: require("../../public/projects/auth-photo.jpg"),
    available: true,
  }
];
