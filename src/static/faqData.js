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
  {
    id: 3,
    question: "How does ProofMail work?",
    answer: `ProofMail works through a simple 3-step process:
      <ul>
        <li>Write your email as usual in Gmail.</li>
        <li>Connect your Phantom Wallet to authenticate</li>
        <li>Compose emails as usual - ProofMail automatically adds cryptographic signatures</li>
      </ul>
      <p>Each signature is verified on the Solana blockchain for maximum security.</p>`,
  },
  {
    id: 4,
    question: "What is your pricing model?",
    answer: `Our pricing is designed to be flexible and affordable:
      <ul>
        <li><strong>Free Plan:</strong> Up to 50 signed emails per month</li>
        <li><strong>Pro Plan:</strong> $9.99/month for unlimited emails</li>
        <li><strong>Enterprise:</strong> Custom pricing for teams and organizations</li>
      </ul>`,
  },
  {
    id: 5,
    question: "What are the main benefits of using ProofMail?",
    answer: `ProofMail offers several key advantages:
      <ol>
        <li>Prevents email spoofing and impersonation</li>
        <li>Builds trust with recipients through verified signatures</li>
        <li>Seamless integration with existing Gmail workflow</li>
        <li>Blockchain-based verification for ultimate security</li>
        <li>Easy setup with Phantom Wallet integration</li>
      </ol>`,
  },
];

// Cara 2: Menggunakan object dengan array untuk jawaban yang lebih terstruktur
export const faqDataStructured = [
  {
    id: 1,
    question: "What is ProofMail?",
    answer: {
      type: "text",
      content:
        "ProofMail is a browser extension that ensures every email you send is cryptographically signed by you, using your Phantom Wallet on the Solana blockchain. It adds a tamper-proof digital signature in your email footer so your recipients can instantly trust the real sender, you.",
    },
  },
  {
    id: 2,
    question: "Which email service does ProofMail support?",
    answer: {
      type: "text",
      content:
        "Right now, ProofMail works seamlessly with Gmail, the world's most popular email service. Support for other platforms is on our roadmap, so stay tuned!",
    },
  },
  {
    id: 3,
    question: "How does ProofMail work?",
    answer: {
      type: "list",
      intro: "ProofMail works through a simple 3-step process:",
      items: [
        "Install the ProofMail browser extension",
        "Connect your Phantom Wallet to authenticate",
        "Compose emails as usual - ProofMail automatically adds cryptographic signatures",
      ],
      conclusion:
        "Each signature is verified on the Solana blockchain for maximum security.",
    },
  },
  {
    id: 4,
    question: "What is your pricing model?",
    answer: {
      type: "list",
      intro: "Our pricing is designed to be flexible and affordable:",
      items: [
        "**Free Plan:** Up to 50 signed emails per month",
        "**Pro Plan:** $9.99/month for unlimited emails",
        "**Enterprise:** Custom pricing for teams and organizations",
      ],
    },
  },
  {
    id: 5,
    question: "What are the main benefits of using ProofMail?",
    answer: {
      type: "numbered_list",
      intro: "ProofMail offers several key advantages:",
      items: [
        "Prevents email spoofing and impersonation",
        "Builds trust with recipients through verified signatures",
        "Seamless integration with existing Gmail workflow",
        "Blockchain-based verification for ultimate security",
        "Easy setup with Phantom Wallet integration",
      ],
    },
  },
];
