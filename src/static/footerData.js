import { FaLinkedin, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const GmailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const quickLinks = [
  { name: "How it Works", path: "/how-it-works" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/#" },
  { name: "Terms of Service", path: "/#" },
  { name: "Cookie Policy", path: "/#" },
  { name: "GDPR Compliance", path: "/#" },
];

const supportLinks = [
  { name: "Help Center", path: "/#" },
  { name: "Documentation", path: "/#" },
  { name: "API Reference", path: "/#" },
  { name: "System Status", path: "/#" },
];

const socialLinks = [
  {
    name: "Twitter",
    path: "#",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    path: "#",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "Discord",
    path: "#",
    icon: <FaDiscord className="w-5 h-5" />,
  },
  {
    name: "Gmail",
    path: "#",
    icon: <GmailIcon className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    path: "#",
    icon: <FaInstagram className="w-5 h-5" />,
  },
];

export { quickLinks, legalLinks, supportLinks, socialLinks };
