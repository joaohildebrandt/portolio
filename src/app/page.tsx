import {
  ChevronDownCircle,
  Github,
  Gitlab,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Experiences } from "~/components/experiences";
import ScrollLink from "~/components/scroll-button";
import { BackgroundBeams } from "~/components/ui/animation/background-beams";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

import { data } from "~/data";

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto h-full gap-16">
      <main className="col-span-12 pb-1">
        <section
          className="h-screen flex justify-center items-center"
          id="hero"
        >
          <BackgroundBeams className="-z-[1]" />

          <div className="grid grid-cols-12">
            <div className="col-span-12 flex items-center justify-center">
              <div className="flex flex-col gap-32">
                <div>
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl text-center mb-8">
                    Hello! <br />I am{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
                      João Paulo
                    </span>
                    <br />A Full Stack Developer!
                  </h1>
                  <p className="mb-8 text-center font-medium max-w-[600px]">
                    I craft high-performance, scalable web solutions with a
                    passion for turning complex challenges into seamless user
                    experiences.
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Button asChild variant="outline" size="icon">
                      <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/joao-hildebrandt"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <Link
                        target="_blank"
                        href="https://github.com/JoaoHildebrandt"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <Link
                        target="_blank"
                        href="https://gitlab.com/joaop.hildebrandt "
                      >
                        <Gitlab className="h-4 w-4" />
                      </Link>
                    </Button>

                    <Button asChild variant="outline" size="icon">
                      <Link
                        target="_blank"
                        href="mailto:work@joaohildebrandt.com"
                      >
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center">
                  <p className="uppercase text-xs font-medium opacity-40">
                    Scroll for more
                  </p>
                  <ScrollLink targetId="about">
                    <ChevronDownCircle
                      className="animate-bounce transition-colors text-primary hover:text-primary/90"
                      size={32}
                    />
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-16 mt-8 h-screen" id="about">
          <Badge className="mb-8">About</Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-5xl mb-4">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
              project
            </span>{" "}
            is one step ahead to be <br /> turned in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
              reality.
            </span>
          </h1>
          <p className="leading-relaxed">
            Lorem ipsum sit dolor ament, lorem ipsum sit dolor Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Ad, blanditiis quo odio
            laboriosam distinctio quidem tempora aperiam, totam aut ea molestiae
            dolore quibusdam voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugiat molestiae quas minima
            cupiditate nihil, sequi odit, quam, voluptas repellat iure ab
            impedit nulla ex beatae debitis dolorem quisquam corrupti quaerat.
          </p>
          <div className="flex items-center">companies</div>
        </section>

        <section className="mb-32 mt-8" id="experiences">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8">
              <Badge className="mb-8">Experiences</Badge>
              <Experiences data={data.experiences} />
            </div>

            <div className="col-span-12 md:col-span-4">
              <Badge className="mb-8">Education</Badge>
              <div>
                {data.educations.map((education) => (
                  <div className="flex items-center gap-4" key={education.id}>
                    <Avatar>
                      <AvatarImage
                        src={education.image_url}
                        alt={`Logo ${education.name}`}
                      />
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

                      <h3 className="text-lg font-semibold mb-1">
                        {education.name}
                      </h3>

                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        {education.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
