import Link from "next/link";

import { Career } from "~/data";

type CareerListProps = {
  data: Career[];
};

export const CareerList = ({ data }: CareerListProps) => {
  return (
    <>
      {data.map((career) => (
        <div key={career.id} className="flex flex-col mb-4">
          <h4 className="font-medium text-md">{career.role}</h4>
          <p>
            <Link
              className="font-normal text-md underline"
              href={career.company.link}
              target="_blank"
            >
              {career.company.name}
            </Link>
            <span className="text-muted-foreground"> • {career.place}</span>
          </p>
          {career?.projects && (
            <p>
              ↳ <span className="font-medium">Projects</span>
              {" - "}
              <span className="inline-flex flex-wrap gap-1">
                {career.projects.map((project) => (
                  <Link
                    key={project.id}
                    className="font-normal text-md underline"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                  </Link>
                ))}
              </span>
            </p>
          )}

          <span className="text-muted-foreground text-md">
            {career.start_year} - {career.end_year}
          </span>
        </div>
      ))}
    </>
  );
};
