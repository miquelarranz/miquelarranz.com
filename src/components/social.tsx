import { IconBrandLinkedin as Linkedin } from "@tabler/icons-react";
import { IconMail as Mail } from "@tabler/icons-react";

export const Social = () => {
  return (
    <nav className="flex gap-2 prose prose-a:text-blue-400 prose-a:no-underline">
      <a
        href="https://www.linkedin.com/in/miquel-arranz-santa-olalla-31257890/"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a href="mailto:miquelarranz@gmail.com" target="_blank">
        <Mail />
      </a>
    </nav>
  );
};
