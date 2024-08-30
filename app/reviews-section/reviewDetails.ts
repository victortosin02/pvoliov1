import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import kemi from "../../public/kemi.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import robert from "../../public/robert.jpeg";
import umar from "../../public/umar.jpeg";
import joshua from "../../public/joshua.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Joshua Emmanuel",
    role: "Technical Lead ",
    company: "CloudWare Technologies",
    profileImg: joshua,
    testimonial:
      "Victor is incredibly talented, super easy to work with, and always goes above and beyond in getting job done",
  },
  {
    name: "Robert Gibb",
    role: "Product Manager",
    company: "Symbl AI",
    profileImg: robert,
    testimonial:
      "Victor's work is truly outstanding. He speaheaded one of our solutions on conversational intelligence for call center agent. Since launch, we've seen a significant jump in subscription to the solution.",
  },
  {
    name: "Oluwakemi Oluwadare",
    role: "Project Manager",
    company: "SterlingPRO Business Applications",
    profileImg: kemi,
    testimonial:
      "I am delighted to recommend Victor Oladejo for job opportunities. During our time working together at Cloudware Technologies , Victor consistently demonstrated exceptional skills and dedication.",
  },
  {
    name: "Anil Kumar",
    role: "Technical Lead",
    company: "Hackerrank",
    profileImg: umar,
    testimonial:
      "Victor is hardworking and has great sense of ownership. He was able to contribute in engineering efficient data pipelines. I’m confident he will be a great asset to any engineering team.",
  },
  {
    name: "Prabhu N.V",
    role: "Technical Recruiter",
    company: "Hackerrank Inc",
    profileImg: olamide,
    testimonial:
      "I had the pleasure of working with Victor on a Hadoop and Kafka project at Hackerrank, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  },
  {
    name: "Israel Imru",
    role: "Technical Lead",
    company: "Fixstars Technologies",
    profileImg: alan,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  
];
