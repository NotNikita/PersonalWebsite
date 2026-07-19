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
    title: "Full Stack Developer",
    organization: "Finteum · Full-time · London, United Kingdom · Remote",
    start: {
      month: "January",
      year: "2023",
    },
    end: "Present",
    redirectUrl: "https://finteum.com/",
    additional: [
      "• Delivered full-stack features across React frontend and Go backend in a fintech startup building interbank lending solutions on Corda blockchain",
      "• Built event-driven data pipelines processing blockchain events in real time — with guaranteed ordering, filtering, aggregation, and retry handling",
      "• Designed and implemented a fee calculation service in Go from scratch, including PDF generation and full test coverage",
      "• Led migration from Redux to TanStack Query and introduced a structured form state management layer (React Hook Form, Yup, TypeScript)",
      "• Worked on 3rd party exchange-rates integrations and prepared for fallback scenarious",
      "• Provided fullstack support in backend-oriented teams, collaborating closely with backend engineers and designers",
      "• Worked across the stack: React, Go, PostgreSQL, Kafka, AWS (SNS, SQS, DynamoDB), Docker, Kubernetes",
      "• Proposed and participated in development of new testing approaches (E2E, Visual Regressions) and their time duration in CI/CD pipeline.",
    ],
    techStack: [
      { name: "Go" },
      { name: "Kafka" },
      { name: "PostgreSQL" },
      { name: "AWS" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "TanStack Query" },
      { name: "Docker" },
      { name: "Kubernetes" },
    ],
  },
  {
    title: "FullStack Developer",
    organization: "Idelic · Full-time · Pittsburgh, Ohio, United States · Remote",
    start: {
      month: "August",
      year: "2020",
    },
    end: {
      month: "December",
      year: "2022",
    },
    redirectUrl: "https://idelic.com",
    additional: [
      "• Built a React Microfrontend for claim tracking and document management in a small 2-person team, owning the feature end-to-end",
      "• Developed backend features in Go microservices and Apollo Server (GraphQL), improving system performance and API reliability",
      "• Implemented real-time collaborative document editing using Remirror.js over WebSocket",
      "• Designed and delivered a library of custom Storybook components used across the product for consistent UI",
      "• Worked across the full stack — React, Go, GraphQL — within a microservices and microfrontend architecture",
      "• Integrated Microsoft Fluent UI, Chakra UI, and Ant Design into production applications",
    ],
    techStack: [
      { name: "React" },
      { name: "Go" },
      { name: "GraphQL" },
      { name: "Apollo Server" },
      { name: "Remirror.js" },
      { name: "Storybook" },
      { name: "Fluent UI" },
      { name: "Chakra UI" },
      { name: "Ant Design" },
    ],
  },
];
