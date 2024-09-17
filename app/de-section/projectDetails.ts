export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Visaa",
    description:
      "This project provides an end-to-end data processing and visualization of visa numbers in Japan using PySpark and Plotly. The spark clusters are set up within a Docker container on Azure.",
    technologies: ["Python", "Spark", "Microsoft Azure"],
    github: "https://github.com/victortosin02/japan_visa_pipeline",
    image: require(".//../../public/projects/visa.png"),
    available: true,
  },
  {
    id: 1,
    name: "Streamfix",
    description:
      "This project aims to securely manage, streamline, and perform analysis on the structured and semi-structured videos from Streamfix real time data.",
    technologies: ["Python", "AWS Services"],
    github: "https://github.com/victortosin02/streaming-application-pipeline",
    image: require(".//../../public/projects/architecture.jpeg"),
    available: true,
  },
  {
    id: 2,
    name: "360Retail",
    description:
      "360Retail is a platform that enhances marketing and sales strategies by leveraging data from various customer touchpoints—such as in-store purchases, online shopping behavior, social media interactions, and customer service inquiries.",
    technologies: ["Azure Databricks", "Azure Data Factory", "Azure Synapse Analytics"],
    github: "https://github.com/victortosin02/azure_databricks_dbt",
    image: require(".//../../public/projects/retail.jpeg"),
    available: true,
  },
];