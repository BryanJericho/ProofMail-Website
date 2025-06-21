import { FaBolt } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { SiHiveBlockchain } from "react-icons/si";

export const features = [
  {
    icon: <FaBolt size={20} />,
    title: "Instant Verification by the Recipient",
    description:
      "Recipients can instantly see if an email is truly from the right sender. The extension automatically validates the signature and shows the verified name and email, giving instant peace of mind.",
  },
  {
    icon: <GrSecure size={20} />,
    title: "Authenticity of Emails Guaranteed",
    description:
      "Every email sent through VerifSol includes a unique digital signature, proving that the message is truly from the original sender. No more doubts, no more impersonation.",
  },
  {
    icon: <SiHiveBlockchain size={20} />,
    title: "Wallet-Based Web3 Security",
    description:
      "VerifSol turns your digital wallet into your trusted identity. No more passwords, just cryptographic proof that you truly own your wallet, giving you a safer, tamper-proof way to verify who you are.",
  },
];
