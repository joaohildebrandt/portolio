"use client";

import type React from "react";
import type { PropsWithChildren } from "react";

import { Button } from "./ui/button";

type ScrollLinkProps = {
	targetId: string;
} & PropsWithChildren;

export const ScrollLink = ({ children, targetId }: ScrollLinkProps) => {
	const handleScroll: React.MouseEventHandler<HTMLButtonElement> = () => {
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
