export const faqData = [
  {
    id: 1,
    question: "What is ProofMail?",
    answer:
      "ProofMail is a browser extension that ensures every email you send is cryptographically signed by you, using your Phantom Wallet on the Solana blockchain. It adds a tamper-proof digital signature in your email footer so your recipients can instantly trust the real sender, you.",
  },
  {
    id: 2,
    question: "Which email service does ProofMail support?",
    answer:
      "Right now, ProofMail works seamlessly with Gmail, the world's most popular email service. Support for other platforms is on our roadmap, so stay tuned!",
  },
  // {
  //   id: 3,
  //   question: "How does ProofMail work?",
  //   answer: `ProofMail works through a simple 3-step process:
  //     <ul>
  //       <li>Write your email as usual in Gmail.</li>
  //       <li>Connect your Phantom Wallet to authenticate</li>
  //       <li>Compose emails as usual - ProofMail automatically adds cryptographic signatures</li>
  //     </ul>
  //     <p>Each signature is verified on the Solana blockchain for maximum security.</p>`,
  // },
  {
    id: 4,
    question: "Does ProofMail read my email content?",
    answer: `Absolutely not. ProofMail never reads, stores, or analyzes your email content. It only attaches a signature in the footer.`,
  },
  {
    id: 5,
    question: "Does ProofMail require blockchain transaction fees?",
    answer:
      "No, ProofMail does not send any transactions to the blockchain, it only uses signMessage locally in your Phantom Wallet. No gas fees.",
  },
  {
    id: 6,
    question: "Why do I need a Phantom Wallet?",
    answer:
      "ProofMail uses your Phantom Wallet to securely sign each email with your unique cryptographic key. Phantom is secure, simple, and widely trusted in the Solana ecosystem. Currently, ProofMail supports Phantom only, but we plan to add support for more wallets in the future.",
  },
  {
    id: 7,
    question: "Is ProofMail free?",
    answer: `<p>Yes, ProofMail offers a free plan with daily limits:</p>
      <ul>
        <li>Create signature: 10 emails/day.</li>
        <li>Verify signature: 100 emails/day</li>
      </ul>
      <p>If you need more, you can upgrade to Pro or Enterprise.</p>`,
  },
  {
    id: 8,
    question: "Does the recipient need ProofMail too?",
    answer:
      "Yes. To automatically verify your signature, the recipient should also have the ProofMail extension installed. We’re working on making signature verification accessible to everyone in the future.",
  },
  {
    id: 9,
    question: "What if I don't have a Phantom Wallet?",
    answer: `You'll need to create a Phantom Wallet first. It's free and simple to set up. If you need help, you can follow the official steps at <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer">phantom.app</a>.`,
  },
];
