import {
  FiMessageSquare,
  FiShield,
  FiUsers,
  FiHelpCircle,
} from "react-icons/fi";

const contactReasons = [
  {
    icon: <FiHelpCircle className="w-6 h-6" />,
    title: "General Support",
    description: "Get help with ProofMail setup, features, or troubleshooting",
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Security Concerns",
    description: "Report phishing attempts or security vulnerabilities",
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Partnership Inquiries",
    description:
      "Interested in integrating ProofMail or business collaboration",
  },
  {
    icon: <FiMessageSquare className="w-6 h-6" />,
    title: "Feature Requests",
    description: "Share your ideas to help us improve ProofMail",
  },
];

export default contactReasons;
