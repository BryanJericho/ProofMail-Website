"use client";
import {
  MdWarning,
  MdEmail,
  MdSecurity,
  MdPeople,
  MdClose,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";

const problems = [
  {
    icon: <MdWarning className="w-6 h-6" />,
    stat: "3.4B",
    label: "phishing emails sent daily",
    description:
      "Cybercriminals flood your inbox with fake messages designed to steal everything you own",
  },
  {
    icon: <MdEmail className="w-6 h-6" />,
    stat: "96%",
    label: "of cyber attacks start with email",
    description:
      "Your email is the #1 target for hackers - and they're getting smarter every day",
  },
  {
    icon: <MdSecurity className="w-6 h-6" />,
    stat: "1 in 4,200",
    label: "emails are malicious traps",
    description:
      "Every email could be a trap waiting to destroy your digital life",
  },
  {
    icon: <MdPeople className="w-6 h-6" />,
    stat: "$18B",
    label: "stolen through email fraud",
    description:
      "Billions lost because people can't tell real emails from fake ones",
  },
];

export default function EmailProblemsSection() {
  return (
    <section className="py-16 px-4 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6 leading-tight">
            Your Inbox Is a Danger Zone
          </h2>

          <p className="text-lg md:text-xl text-[#111827] max-w-3xl mx-auto leading-relaxed opacity-80">
            Every single day, <strong>millions of fake emails</strong> are
            designed to trick you. Without proof of who really sent them, you're
            gambling with your security every time you click.
          </p>
        </div>

        {/* Problem Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-[#3B82F6]">
                {problem.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#111827] mb-1">
                {problem.stat}
              </div>
              <div className="text-sm font-medium text-[#3B82F6] mb-3">
                {problem.label}
              </div>
              <p className="text-sm text-[#111827] opacity-70 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 text-center border border-blue-100"
          style={{
            background: "rgba(59, 130, 246, 0.2)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
              The Shocking Truth: Anyone Can Pretend to Be Anyone
            </h3>
            <p className="text-lg text-[#111827] opacity-80 mb-6 leading-relaxed">
              Your bank, your boss, your best friend -{" "}
              <strong>anyone can fake their email identity in seconds</strong>.
              Traditional email was never designed for security, leaving you
              defenseless against increasingly sophisticated scams.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white px-4 py-2 rounded-full text-[#3B82F6] font-medium shadow-sm flex items-center gap-1">
                <IoClose className="w-5 h-5 text-red-500" /> Zero Identity Proof
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-[#3B82F6] font-medium shadow-sm flex items-center gap-1">
                <IoClose className="w-5 h-5 text-red-500" /> Easy Address
                Spoofing
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-[#3B82F6] font-medium shadow-sm flex items-center gap-1">
                <IoClose className="w-5 h-5 text-red-500" /> No Trust Signals
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-[#3B82F6] font-medium shadow-sm flex items-center gap-1">
                <IoClose className="w-5 h-5 text-red-500" /> You're Flying Blind
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
