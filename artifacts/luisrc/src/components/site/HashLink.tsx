import type { ReactNode } from "react";
import { useLocation } from "wouter";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Link to a section anchor on the homepage; navigates home first if elsewhere. */
export function HashLink({
  href,
  className,
  style,
  children,
}: {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  const [location, navigate] = useLocation();
  const target = href.includes("#") ? href.split("#")[1] : "";
  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        if (location === "/") {
          scrollToId(target);
        } else {
          navigate("/");
          window.setTimeout(() => scrollToId(target), 120);
        }
      }}
    >
      {children}
    </a>
  );
}
