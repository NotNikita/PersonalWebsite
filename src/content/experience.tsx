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
      month: "September",
      year: "2024",
    },
    redirectUrl: "https://finteum.com/",
    description:
      "I designed and implemented crucial parts of web app. Introduced innovative perfomance-oriented libs. Wrote E2E and unit tests. Implemented precise fee calculation service in Scala, including PDF generation and thorough test coverage.",
    techStack: [
      {
        name: "Typescript",
      },
      {
        name: "Node.js",
      },
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
      {
        name: "Scala",
      },
      {
        name: "Tanstack-query",
      },
      {
        name: "Redux",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "CI/CD",
      },
      {
        name: "Cypress/TestCafe",
      },
    ],
  },

  {
    title: "Fullstack Developer",
    organization: "Medoo/Targsoft, Belarus",
    start: {
      month: "June",
      year: "2022",
    },
    end: {
      month: "December",
      year: "2022",
    },
    description:
      "Aided in implementing collaborative document editing via RemirrorJs. Implemented Backend part on Node,js that would handle document and journal storage. Developed impactful features in Apollo Server+GraphQL, enhancing project capabilities and UX.",
    techStack: [
      {
        name: "TypeScript",
      },
      {
        name: "Node.js",
      },
      {
        name: "React",
      },
      {
        name: "GraphQL",
      },
      {
        name: "RemirrorJs",
      },
      {
        name: "Auth0",
      },
      {
        name: "MongoDB",
      },
      {
        name: "AWS Lambda & S3",
      },
    ],
  },
  {
    title: "Frontend Developer",
    organization: "Idelic/Targsoft, Belarus",
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
      "Built React MicroFrontend for claim tracking and document management in a 2-person team. Had experience with Microsoft Fluent UI, Chakra and Ant libraries Was working with both microfrontends and microservices.",
    techStack: [
      {
        name: "TypeScript",
      },
      {
        name: "React",
      },
      {
        name: "Java",
      },
      {
        name: "Redux",
      },
      {
        name: "Storybook",
      },
      {
        name: "Figma",
      },
      {
        name: "FluentUI",
      },
    ],
  },
];
