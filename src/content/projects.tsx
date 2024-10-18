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
    name: "Next.js Restaurant Helper",
    role: "Creator",
    description: "Coming soon, now private. Using SSR and Next.js to create a restaurant helper app.",
    href: "https://github.com/NotNikita/TutMenu",
    image: "/images/svg/calendar.svg",
    backgroundColor: "frogger",
  },
  {
    name: "Pokemon dashboard",
    role: "Creator",
    description: "todo",
    href: "https://github.com/NotNikita/Pokemons",
    image: "/images/svg/pokemon.svg",
    backgroundColor: "2fa",
  },
  {
    name: "Puppeteer Web Scrapper",
    role: "Creator",
    description:
      "An node.js + telegram application, crawling through certain websites and sending notifications to the user. Effective and optimize to get info anonymously",
    href: "https://github.com/NotNikita/PuppeteerScraper",
    image: "/images/svg/crawler.svg",
    backgroundColor: "voluntime",
  },
  {
    name: "Web3Wallet",
    role: "Creator",
    description: "A simple, yet useful web3 wallet that allows you to interact with the Ethereum blockchain.",
    href: "https://github.com/NotNikita/Web3Wallet",
    image: "/images/svg/wallet.svg",
    backgroundColor: "languagefix",
  },
  {
    name: "VodoProf",
    role: "Creator",
    description: "A landing page for local business, integrated with SEO analytics and Maps API.",
    href: "https://github.com/NotNikita/VodoProf",
    image: "/images/svg/maps.svg",
    backgroundColor: "partygames",
  },
];
