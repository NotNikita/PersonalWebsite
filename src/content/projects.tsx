export type ProjectItem = {
  name: string;
  role: string;
  description: string;
  href: string;
  image: string;
  backgroundColor: string;
};

export const projectsItems: ProjectItem[] = [
  {
    name: "Big Great Golang Project",
    role: "Creator",
    description: "Big BE project with multiple Go microservices, communicating between themselfes via Kafka, gRPC. Connected to PostgreSQL, utilizing transactions and observability.",
    href: "https://github.com/NotNikita/OrderStockManager",
    image: "https://img-c.udemycdn.com/course/480x270/4665696_b31d.jpg",
    backgroundColor: "frogger",
  },
  {
    name: "Next.js Restaurant Helper",
    role: "Creator",
    description: "Coming soon, now private. Using SSR and Next.js to create a restaurant helper app.",
    href: "https://github.com/NotNikita/TutMenu",
    image: "./calendar.svg",
    backgroundColor: "frogger",
  },
  {
    name: "Web3Wallet",
    role: "Creator",
    description: "Fullstack Golang-Next.js webapp for creating short links",
    href: "https://github.com/NotNikita?tab=repositories",
    image: "./wallet.svg",
    backgroundColor: "languagefix",
  },
  {
    name: "Udemy Message Queues Course",
    role: "Student",
    description: "Small, self-contained, loosely coupled microservices that will will communicate with one another and a simple front-end application with a REST API, with RPC, over gRPC, and by sending and consuming messages using AMQP",
    href: "https://github.com/NotNikita/GoMicroservices",
    image: "https://img-c.udemycdn.com/course/480x270/4665696_b31d.jpg",
    backgroundColor: "2fa",
  },
  {
    name: "Puppeteer Web Scrapper",
    role: "Creator",
    description:
      "An node.js + telegram application, crawling through certain websites and sending notifications to the user. Effective and optimize to get info anonymously",
    href: "https://github.com/NotNikita/PuppeteerScraper",
    image: "./crawler.svg",
    backgroundColor: "voluntime",
  },
  {
    name: "VodoProf",
    role: "Creator",
    description: "A landing page for local business, integrated with SEO analytics and Maps API.",
    href: "https://github.com/NotNikita/VodoProf",
    image: "./maps.svg",
    backgroundColor: "partygames",
  },
];
