import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, Twitter, Youtube } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  const socialLinks = [
    {
      href: site.socials.linkedin,
      label: "LinkedIn",
      icon: <Linkedin size={16} />,
    },
    {
      href: site.socials.youtube,
      label: "YouTube",
      icon: <Youtube size={16} />,
    },
    {
      href: site.socials.instagram,
      label: "Instagram",
      icon: <Instagram size={16} />,
    },
    {
      href: site.socials.x,
      label: "X",
      icon: <Twitter size={16} />,
    },
    {
      href: site.socials.discord,
      label: "Discord",
      icon: <MessageCircle size={16} />,
    },
  ].filter((link) => Boolean(link.href));

  return (
    <footer>
      <Image
        src="/images/adhvan-logo.png"
        alt="Adhvan Game Studios"
        width={90}
        height={90}
      />

      <nav aria-label="Footer navigation">
        <Link href="/press-kit">Press Kit</Link>
        <a href={`mailto:${site.contact.general}`}>
          {site.contact.general}
        </a>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="footerSocial"
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <p>
        © {new Date().getFullYear()} Adhvan Game Studios. All rights reserved.
      </p>
    </footer>
  );
}
