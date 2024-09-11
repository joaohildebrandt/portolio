import Image from "next/image";
import { ChevronDownCircle } from "lucide-react";

import { BackgroundBeams } from "~/components/ui/animation/background-beams";
import { Badge } from "~/components/ui/badge";
import { CareerList } from "~/components/career-list";
import { CompanyImagesCarousel } from "~/components/companies-carousel";
import { EducationList } from "~/components/education-list";
import { LinksMenu } from "~/components/links-menu";
import { ScrollLink } from "~/components/scroll-button";

import { companiesImages, educations, careers, menuLinks } from "~/data";

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto h-full gap-16">
      <main className="col-span-12 pb-1">
        <section
          className="min-h-screen flex justify-center items-center"
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
                    <LinksMenu data={menuLinks} />
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

        <section className="pt-16 mt-8 min-h-screen" id="about">
          <Badge className="mb-8 inline-block w-min">About</Badge>

          <div className="col-span-12 flex flex-col">
            <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-5xl mb-4">
              Bring your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
                vision
              </span>{" "}
              to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                life.
              </span>
            </h1>

            <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-16 mt-4 md:mt-12">
              <div className="col-span-12 md:col-span-4 flex items-center justify-center">
                <Image
                  className="rounded-full grayscale"
                  src="/images/avatar.jpeg"
                  width={230}
                  height={230}
                  alt={"Avatar"}
                />
              </div>

              <div className="col-span-12 md:col-span-8 flex flex-col justify-start">
                <p className="leading-7 text-md">
                  Fascinated by technology since childhood, I’ve always been
                  driven to understand how devices like computers and the
                  internet work. My passion for full-stack development continues
                  to grow, leading me to craft high-performance web solutions
                  that combine technical precision with creativity to solve
                  complex problems.
                </p>

                <br />

                <p className="leading-7 text-md">
                  With a foundation in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    React
                  </span>
                  ,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                    Node.Js
                  </span>
                  , and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
                    Next.JS
                  </span>
                  , I specialize in building scalable, efficient applications
                  with seamless user experiences. From dynamic, responsive
                  interfaces to modernizing outdated systems, I prioritize
                  quality, collaboration, and long-term success.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-32 ">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400 text-2xl font-bold text-center mb-4">
              Trusted by Leading Companies
            </p>
            <CompanyImagesCarousel images={companiesImages} />
          </div>
        </section>

        <section className="mb-32 mt-8" id="experiences">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8">
              <Badge className="mb-8">Career</Badge>
              <CareerList data={careers} />
            </div>

            <div className="col-span-12 md:col-span-4">
              <Badge className="mb-8">Education</Badge>
              <div>
                <EducationList data={educations} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
