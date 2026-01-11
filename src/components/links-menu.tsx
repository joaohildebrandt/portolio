import Link from "next/link";
import type { HTMLAttributeAnchorTarget, ReactElement } from "react";

import { Button } from "./ui/button";

export type LinkMenuProps = {
  data: {
    id: number;
    icon: ReactElement;
    label?: string;
    rel?: string;
    target: HTMLAttributeAnchorTarget;
    href: string;
    download?: boolean;
  }[];
};

export const LinksMenu = ({ data }: LinkMenuProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {data.map((link) => (
        <Button
          key={link.id}
          asChild
          variant="outline"
          size={link.label ? "default" : "icon"}
        >
          <Link
            target={link.target}
            href={link.href}
            rel={link.rel}
            download={link.download}
          >
            {link.icon}
            {link.label}
          </Link>
        </Button>
      ))}
    </div>
  );
};
