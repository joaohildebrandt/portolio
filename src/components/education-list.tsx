import { Education } from "~/data";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type EducationListProps = {
  data: Education[];
};

export const EducationList = ({ data }: EducationListProps) => {
  return data.map((education) => (
    <div className="flex items-center gap-4" key={education.id}>
      <Avatar>
        <AvatarImage src={education.image_url} alt={`Logo ${education.name}`} />
        <AvatarFallback>{education.name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {education.start_year} -{" "}
          {education.end_year === "present" ? (
            <span className="text-green-400">Present</span>
          ) : (
            education.end_year
          )}
        </time>

        <h3 className="text-lg font-semibold mb-1">{education.name}</h3>

        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {education.description}
        </p>
      </div>
    </div>
  ));
};
