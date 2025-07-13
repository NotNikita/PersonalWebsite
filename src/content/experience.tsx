import React from "react";

export type TechStackItem = {
  name: string;
  icon?: React.FC<{ className?: string; size?: number; strokeWidth?: number }>;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  start:
    | {
        month: string;
        year: string;
      }
    | string;
  end:
    | {
        month: string;
        year: string;
      }
    | string;
  logo?: string;
  redirectUrl?: string;
  description?: string;
  additional?: string[];
  techStack?: TechStackItem[];
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "FullStack Developer",
    organization: "Finteum, London",
    start: {
      month: "December",
      year: "2022",
    },
    end: {
      month: "August",
      year: "2025",
    },
    redirectUrl: "https://finteum.com/",
    description:
      "Helped transitioning Application from Redux to Tanstack-query and introduced form state manager (using Typescript, Tanstack-query, Yup, react-hook-form). Designed and implemented precise fee calculation service in Go, including PDF generation and thorough test coverage.",
    techStack: [
      {
        name: "Typescript",
      },
      {
        name: "Golang",
      },
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
      {
        name: "Fiber",
      },
      {
        name: "Tanstack-query",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Kafka",
      },
      {
        name: "Cypress/TestCafe",
      },
    ],
  },

  {
    title: "Fullstack Developer",
    organization: "Idelic/Targsoft, Belarus",
    start: {
      month: "June",
      year: "2022",
    },
    end: {
      month: "December",
      year: "2022",
    },
    description:
      `Creating microservices for Driver Claims, maintaining and understanding existing legacy code.
Developed internal-facing dashboards. Investigated user-reported bugs. Helped building
microfrontend for document and feedback management. Creating MVPs for new ideas, A/B testing`,
    techStack: [
      {
        name: "Next.js",
      },
      {
        name: "Golang",
      },
      {
        name: "AWS",
      },
      {
        name: "S3",
      },
      {
        name: "RabbitMQ",
      },
      {
        name: "Docker",
      },
      {
        name: "MongoDB",
      }
    ],
  },
  {
    title: "Frontend Developer",
    organization: "Medoo/Targsoft, Belarus",
    start: {
      month: "August",
      year: "2020",
    },
    end: {
      month: "June",
      year: "2022",
    },
    redirectUrl: "https://idelic.com",
    description:
      `Outsourcing. Working on Medoo Project (aided in implementing collaborative document editing).
Creating UI and file storage`,
    techStack: [
      {
        name: "TypeScript",
      },
      {
        name: "Node.js",
      },
      {
        name: "GraphQL",
      },
      {
        name: "AWS",
      },
      {
        name: "S3",
      },
      {
        name: "FluentUI",
      },
    ],
  },
];
