import { Download, Github, Gitlab, Linkedin, Mail } from "lucide-react";

import { CompaniesCarouselProps } from "~/components/companies-carousel";
import { LinkMenuProps } from "~/components/links-menu";

export type Career = {
  id: number;
  start_year: number;
  end_year: number | "present";
  place: string;
  company: {
    name: string;
    link: string;
  };
  role: string;
  description: string;
  projects?: {
    id: number;
    name: string;
    link: string;
  }[];
  tecnologies?: {
    name: string;
    icon: string;
    color: string;
  }[];
};

export type Education = {
  id: number;
  start_year: number;
  end_year: number | "present";
  name: string;
  description: string;
  image_url: string;
};

export const careers: Career[] = [
  {
    id: 6,
    start_year: 2022,
    end_year: "present",
    place: "Porto, Portugal",
    company: {
      name: "Aubay",
      link: "https://aubay.pt/",
    },
    projects: [
      {
        id: 1,
        name: "Betfair",
        link: "https://www.betfair.com",
      },
    ],
    role: "Front-end Developer",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    taque necessitatibus ipsum temporibus eos error fugit reiciendis suscipit, unde architecto magnam aspernatur at ipsam velit debitis similique, 
    voluptas dolore ullam. In.
  `,
  },
  {
    id: 5,
    start_year: 2022,
    end_year: 2023,
    place: "Lisboa, Portugal",
    company: {
      name: "Alter Solutions",
      link: "https://www.alter-solutions.pt/",
    },
    projects: [
      {
        id: 2,
        name: "Kantar XTEL",
        link: "https://www.xtel-group.com/",
      },
    ],
    role: "Front-end Developer",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    taque necessitatibus ipsum temporibus eos error fugit reiciendis suscipit, unde architecto magnam aspernatur at ipsam velit debitis similique, 
    voluptas dolore ullam. In.
  `,
  },
  {
    id: 4,
    start_year: 2021,
    end_year: 2023,
    place: "Rio de Janeiro, Brazil",
    company: {
      name: "Softo",
      link: "https://sof.to/",
    },
    projects: [
      {
        id: 3,
        name: "Doare",
        link: "https://www.doare.org/",
      },
    ],
    role: "Software Engineer",
    description: `I was part of the team responsible for developing the software for a fintech client. 
      We migrated a legacy system to a new, more scalable architecture. We significantly improved and simplified
      the end-to-end flow of the application.

      I continually receive recognition from my colleagues, clients, and superiors for the value of my 
      contributions and my interpersonal relationships ability.`,
  },
  {
    id: 3,
    start_year: 2019,
    end_year: 2023,
    place: "Rio de Janeiro, Brazil",
    company: {
      name: "Super Desenvolvedores",
      link: "https://www.superdesenvolvedores.com.br/",
    },
    projects: [
      {
        id: 4,
        name: "Super Desenvolvedores",
        link: "https://www.superdesenvolvedores.com.br/",
      },
      {
        id: 5,
        name: "Apex Bank",
        link: "https://www.superdesenvolvedores.com.br/",
      },
    ],
    role: "Software Engineer",
    description: `
      Super Developers was an entrepreneurial effort around three main ideas: to make it easier to teach 
      technology in Brazil, to create projects that solved financial management problems, and to develop an 
      e-commerce platform that targeted technology lovers.
      I was incredibly pleased to be mentored by someone who made me grow in the development area. I learned 
      skills that made me a professional more prepared for the job market, but mainly a better human being.
  `,
  },
  {
    id: 2,
    start_year: 2019,
    end_year: 2020,
    place: "Rio de Janeiro, Brazil",
    company: {
      name: "OLX",
      link: "https://olx.com.br/",
    },
    role: "Intern",
    description: `Once I completed the Apprentice program, I was proudly invited to become an intern, with added
      responsibilities assisting the audit team. I was the liaison between the Customer Experience and Technology
      teams in a task force assembled to create automated internal processes. I had the opportunity to demonstrate
      some of my software development knowledge. For instance, I made animated panels to show the ranking of the 
      best attendants of the month and the customizations needed for the help center. I was responsible for 
      managing the catalog used by clients to advertise their cars in the OLX online selling platform.`,
  },
  {
    id: 1,
    start_year: 2018,
    end_year: 2019,
    place: "Rio de Janeiro, Brazil",
    company: {
      name: "OLX",
      link: "https://olx.com.br/",
    },
    role: "Apprentice",
    description: `I joined OLX as an apprentice, a national program designed to help the youth initiate 
      their professional career. I had the opportunity to learn about the culture of a bottom-top company 
      while working in the customer experience department. Among other assignments, I was responsible for 
      developing automated spreadsheets for the audit team to evaluate the service team’s performance.`,
  },
];

export const educations: Education[] = [
  {
    id: 1,
    start_year: 2020,
    end_year: 2022,
    name: "FIAP",
    description: "B.Sc. Computer Science",
    image_url: "images/fiap.jpg",
  },
];

export const companiesImages: CompaniesCarouselProps["images"] = [
  {
    id: 1,
    url: "/images/betfair.svg",
    width: 180,
    height: 180,
    alt: "Betfair logo",
  },
  {
    id: 2,
    url: "/images/kantar.svg",
    width: 180,
    height: 180,
    alt: "Kantar logo",
  },
  {
    id: 3,
    url: "/images/olx.svg",
    width: 180,
    height: 180,
    alt: "OLX logo",
  },
  {
    id: 4,
    url: "/images/softo.svg",
    width: 180,
    height: 180,
    alt: "Softo logo",
  },
  {
    id: 5,
    url: "/images/alter-solutions.svg",
    width: 180,
    height: 180,
    alt: "Alter Solutions logo",
  },
  {
    id: 6,
    url: "/images/aubay.svg",
    width: 180,
    height: 180,
    alt: "Aubay logo",
  },
];

export const menuLinks: LinkMenuProps["data"] = [
  {
    id: 1,
    target: "_blank",
    href: "https://www.linkedin.com/in/joao-hildebrandt",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    id: 2,
    target: "_blank",
    href: "https://github.com/JoaoHildebrandt",
    icon: <Github className="h-4 w-4" />,
  },
  {
    id: 3,
    target: "_blank",
    href: "https://gitlab.com/joaop.hildebrandt",
    icon: <Gitlab className="h-4 w-4" />,
  },
  {
    id: 4,
    target: "_blank",
    href: "mailto:work@joaohildebrandt.com",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    id: 5,
    target: "_blank",
    href: "/Joao Hildebrandt - Curriculum.pdf",
    rel: "noopener noreferrer",
    download: true,
    icon: <Download className="mr-2 h-4 w-4" />,
    label: "Resume",
  },
];
