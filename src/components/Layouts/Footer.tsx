import Logo from "@/assets/Logo/Logo";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Features", href: "/features" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Help Center", href: "/contact" },
      { name: "Contact Us", href: "/contact" },
      { name: "About Us", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/contact" },
      { name: "Terms of Service", href: "/contact" },
      { name: "Security", href: "/features" },
      { name: "Cookie Policy", href: "/contact" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/HassanNahid10", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://www.facebook.com/HassanNahid10", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "https://x.com/HassanNahid100", label: "X" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/in/hassan-nahid", label: "LinkedIn" },
];


const Footer = ({
 
  sections = defaultSections,
  description = "WalletX - Your trusted digital wallet solution. Built by Hassan Nahid.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 WalletX. Developed by Hassan Nahid. All rights reserved."
}: Footer7Props) => {
  return (
    <section className="container mx-auto px-4 md:px-6 mt-8">
      <div className="">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Logo/> <span className="font-bold text-3xl">WalletX</span>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground  flex flex-col justify-between gap-4 border-t text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer
