export type Experience = {
  id: number;
  start_year: number;
  end_year: number | "present";
  company: {
    name: string;
    link: string;
  };
  role:
    | string
    | {
        name: string;
        description: string;
      }[];
  description?: string;
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

type Data = {
  experiences: Experience[];
  educations: Education[];
};

export const data: Data = {
  experiences: [
    {
      id: 1,
      start_year: 2022,
      end_year: "present",
      company: {
        name: "Kantar XTEL",
        link: "",
      },
      role: "Front End Developer",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    taque necessitatibus ipsum temporibus eos error fugit reiciendis suscipit, unde architecto magnam aspernatur at ipsam velit debitis similique, 
    voluptas dolore ullam. In.
  `,
    },
    {
      id: 2,
      start_year: 2021,
      end_year: 2022,
      company: {
        name: "Doare",
        link: "",
      },
      role: "Full Stack Developer",
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
      company: {
        name: "Super Desenvolvedores",
        link: "",
      },
      role: "Full Stack Developer",
      description: `
      Super Developers was an entrepreneurial effort around three main ideas: to make it easier to teach 
      technology in Brazil, to create projects that solved financial management problems, and to develop an 
      e-commerce platform that targeted technology lovers.
      I was incredibly pleased to be mentored by someone who made me grow in the development area. I learned 
      skills that made me a professional more prepared for the job market, but mainly a better human being.
  `,
    },
    {
      id: 4,
      start_year: 2018,
      end_year: 2020,
      company: {
        name: "OLX",
        link: "",
      },
      role: [
        {
          name: "Intern",
          description: `Once I completed the Apprentice program, I was proudly invited to become an intern, with added
          responsibilities assisting the audit team. I was the liaison between the Customer Experience and Technology
          teams in a task force assembled to create automated internal processes. I had the opportunity to demonstrate
          some of my software development knowledge. For instance, I made animated panels to show the ranking of the 
          best attendants of the month and the customizations needed for the help center. I was responsible for 
          managing the catalog used by clients to advertise their cars in the OLX online selling platform.`,
        },
        {
          name: "Apprentice",
          description: `I joined OLX as an apprentice, a national program designed to help the youth initiate 
          their professional career. I had the opportunity to learn about the culture of a bottom-top company 
          while working in the customer experience department. Among other assignments, I was responsible for 
          developing automated spreadsheets for the audit team to evaluate the service team’s performance.`,
        },
      ],
    },
  ],

  educations: [
    {
      id: 1,
      start_year: 2020,
      end_year: 2022,
      name: "FIAP",
      description: "B.Sc. Computer Science",
      image_url: "images/fiap.jpg",
    },
  ],
};
