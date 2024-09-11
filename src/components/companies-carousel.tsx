"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export type CompaniesCarouselProps = {
  images: {
    id: number;
    url: string;
    width: number;
    height: number;
    alt: string;
  }[];
};

export const CompanyImagesCarousel = ({ images }: CompaniesCarouselProps) => {
  return (
    <Carousel
      opts={{
        loop: true,
        watchDrag: false,
      }}
      className="w-full"
      //@ts-ignore
      plugins={[AutoScroll({ playOnInit: true })]}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem
            key={image.id}
            className="basis-1/3 md:basis-1/4 flex items-center justify-center"
          >
            <Image
              className="grayscale dark:invert"
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
