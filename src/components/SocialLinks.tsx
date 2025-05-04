
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <Button variant="outline" size="icon" asChild className="rounded-full" aria-label={label}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  </Button>
);

const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      <SocialLink href="https://github.com/" icon={<Github className="h-4 w-4" />} label="GitHub" />
      <SocialLink href="https://linkedin.com/" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
      <SocialLink href="https://twitter.com/" icon={<Twitter className="h-4 w-4" />} label="Twitter" />
      <SocialLink href="https://instagram.com/" icon={<Instagram className="h-4 w-4" />} label="Instagram" />
    </div>
  );
};

export default SocialLinks;
