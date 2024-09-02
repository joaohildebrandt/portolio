"use client";
import React, { PropsWithChildren } from "react";
import { Button } from "./ui/button";

type ScrollLinkProps = {
  targetId: string;
} & PropsWithChildren;

const ScrollLink = ({ children, targetId }: ScrollLinkProps) => {
  const handleScroll: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };
  return (
    <Button variant="link" onClick={handleScroll}>
      {children}
    </Button>
  );
};
export default ScrollLink;
