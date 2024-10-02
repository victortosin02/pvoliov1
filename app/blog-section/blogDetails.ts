export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
  index: number;
};

export const blogDetails = [
  {
    title:
      "Pandas with Python & SQL Queries",
    image:
      "https://raw.githubusercontent.com/victortosin02/pvoliov1/main/uploads/pandas.jpg",
    date: "AUG 2024",
    url: "https://griddb.net/en/blog/pandas-with-python-griddb-sql-queries",
    available: true,
  },
  {
    title: "Building a Motion Tracker",
    image:
      "https://raw.githubusercontent.com/victortosin02/pvoliov1/main/uploads/motion%20tracker.png",
    date: "MAY 2024",
    url: "https://griddb.net/en/blog/3d-motion-tracker",
    available: true,
  },
  {
    title: "Processing Image Data using GPT4-Vision",
    image:
      "https://raw.githubusercontent.com/victortosin02/pvoliov1/main/uploads/blog-gpt4grid.jpg",
    date: "FEB 2024",
    url: "https://griddb.net/en/blog/processing-image-data-using-gpt4-vision-node-js-and-griddb",
    available: true,
  },
];
