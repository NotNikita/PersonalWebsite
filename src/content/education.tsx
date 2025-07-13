export type EducationItem = {
  title: string;
  schoolName: string;
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
};

export const educationItems: EducationItem[] = [
  // Todo: add certifications
  {
    title: "Ozon Route256 2025 graduate",
    schoolName: "Ozon tech",
    start: {
      month: "May",
      year: "2025",
    },
    end: {
      month: "August",
      year: "2025",
    },
    redirectUrl: "https://route256.ozon.ru",
    additional: ["• Practice-intensive course for Middle golang developers", "• Learned insights from industry-leading experts in high-load apps"],
  },
  {
    title: "Bachelor's in Computer Science",
    schoolName: "Belarussian State University of Informatics and Radioelectronics",
    start: {
      month: "September",
      year: "2018",
    },
    end: {
      month: "June",
      year: "2022",
    },
    redirectUrl: "https://www.bsuir.by/en/",
    additional: ["• Finished with honors with a grade of 9.1/10"],
  },
  {
    title: "Internship",
    schoolName: "Silverscreen",
    start: {
      month: "July",
      year: "2021",
    },
    end: {
      month: "August",
      year: "2021",
    },
    redirectUrl: "https://github.com/NotNikita/PieChart-javafx",
    additional: ["• Was an intern in company that has network of cinemas", "• Created a PieChart animation application using JavaFX"],
  },
  {
    title: "Studied Web development",
    schoolName: "The Rolling Scopes School",
    start: {
      month: "June",
      year: "2020",
    },
    end: {
      month: "August",
      year: "2021",
    },
    description: "• Summer camp school from one of the biggest IT companies in Eastern Europe",
  },
];
