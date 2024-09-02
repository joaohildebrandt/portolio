"use client";

import { Fragment, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Experience } from "~/data";

type ExperiencesProps = {
  data: Experience[];
};

export const Experiences = ({ data }: ExperiencesProps) => {
  const [experiences, setExperiences] = useState(data.slice(0, 2));

  const allExperienciesAreShown = experiences.length === data.length;

  const setMoreExperiences = () => {
    if (!allExperienciesAreShown) {
      setExperiences(data);
    }
  };
  return (
    <>
      {experiences.map((experience) => (
        <div key={experience.id} className="mb-4">
          <Card className="py-4">
            <CardContent>
              <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.start_year} -{" "}
                {experience.end_year === "present" ? (
                  <span className="text-green-400">Present</span>
                ) : (
                  experience.end_year
                )}
              </time>

              <h3 className="text-lg font-semibold mb-1">
                {experience.company.name}
              </h3>

              {typeof experience.role === "string" ? (
                <>
                  <p className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
                    {experience.role}
                  </p>

                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {experience.description}
                  </p>
                </>
              ) : (
                experience.role.map((role, index) => (
                  <Fragment key={index}>
                    <p className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
                      {role.name}
                    </p>

                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {role.description}
                    </p>
                  </Fragment>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      ))}
      <div className="flex justify-center">
        {!allExperienciesAreShown && (
          <Button
            className="m-auto"
            variant="outline"
            onClick={() => setMoreExperiences()}
          >
            Show all
          </Button>
        )}
      </div>
    </>
  );
};
