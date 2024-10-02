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
      "This project provides an end-to-end data processing and visualization of visa numbers in Japan using PySpark and Plotly. The spark clusters are set up using Docker.",
    technologies: ["Python", "Spark", "Azure"],
    github: "https://github.com/victortosin02/japan_visa_pipeline",
    image: require(".//../../public/projects/visa.png"),
    available: true,
  },
  {
    id: 1,
    name: "Helmfix",
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
      "360Retail is a platform that enhances marketing and sales strategies by leveraging data from various customer touchpoints.",
    technologies: ["Databricks", "ADF", "Synapse Analytics"],
    github: "https://github.com/victortosin02/azure_databricks_dbt",
    image: require(".//../../public/projects/retail.jpeg"),
    available: true,
  },
  {
    id: 3,
    name: "EveryWhere",
    description:
      "This pipeline performs data analytics on delivery and logistics company's data using various tools and technologies, including GCP Storage, Python, and other services.",
    technologies: ["Big Query", "Mage AI", "Looker"],
    github: "https://github.com/victortosin02/Everywhere_Logistics_etl_pipeline",
    image: require(".//../../public/projects/mage.jpg"),
    available: true,
  },
  {
    id: 4,
    name: "Tradr",
    description:
      "An application that can extract, transform and load the data from the source data system to a SQL-based database within AWS.",
    technologies: ["Airflow", "Docker", "AWS"],
    github: "https://github.com/victortosin02/Stock_Market_Data_With_Airflow",
    image: require(".//../../public/projects/pipeline-components.jpg"),
    available: true,
  },
];