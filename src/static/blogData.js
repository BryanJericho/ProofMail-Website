// Sample blog data with more comprehensive content
const blogPosts = [
  {
    id: 1,
    title:
      "Blockchain 101: Your Complete Beginner's Guide to Understanding Blockchain",
    excerpt:
      "Never heard of blockchain? Start here! Learn the fundamentals of blockchain technology in simple terms and discover how it's revolutionizing digital security.",
    level: "Beginner",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Blockchain",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 2,
    title:
      "Why ProofMail is the Future of Email Security: A Game-Changing Solution",
    excerpt:
      "Discover how ProofMail's revolutionary blockchain-based approach is solving email security problems that traditional solutions simply can't handle.",
    level: "Beginner",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "ProofMail",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Crypto Wallet 101: Your First Steps into Digital Asset Security",
    excerpt:
      "Complete beginner's guide to cryptocurrency wallets. Learn what they are, how they work, and why they're essential for interacting with blockchain applications like ProofMail.",
    level: "Beginner",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Crypto",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 4,
    title:
      "Digital Security 101: Why Your Online Safety Matters More Than Ever",
    excerpt:
      "In 2024, cyber attacks cost businesses $4.5 trillion globally. Learn why digital security isn't optional anymore and how to protect yourself effectively.",
    level: "Beginner",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "The $12 Billion Problem: How Email Fraud is Destroying Businesses",
    excerpt:
      "Email fraud costs organizations $12 billion annually. Learn shocking statistics about email-based attacks and why traditional security measures are failing.",
    level: "Beginner",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 6,
    title:
      "Solana 101: Why This Blockchain Powers ProofMail's Lightning-Fast Security",
    excerpt:
      "Discover why Solana's revolutionary architecture makes it perfect for real-time email verification. Learn the technical advantages that set ProofMail apart.",
    level: "Beginner",
    date: "March 3, 2024",
    readTime: "9 min read",
    category: "Blockchain",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 7,
    title:
      "ProofMail vs Traditional Email Security: Why There's No Competition",
    excerpt:
      "See why ProofMail's blockchain-based verification system outperforms traditional email security solutions in every measurable way. The results will surprise you.",
    level: "Intermediate",
    date: "March 1, 2024",
    readTime: "12 min read",
    category: "ProofMail",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 8,
    title:
      "The Hidden Cost of Poor Email Security: Real Business Impact Stories",
    excerpt:
      "Real stories of businesses that lost millions due to email security breaches. Learn why investing in proper email security like ProofMail isn't just smart—it's essential.",
    level: "Beginner",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 9,
    title:
      "Smart Contracts 101: The Technology Behind ProofMail's Unbreakable Security",
    excerpt:
      "Understand how smart contracts work and why they make ProofMail's email verification impossible to hack, forge, or manipulate. Security you can trust.",
    level: "Beginner",
    date: "February 25, 2024",
    readTime: "11 min read",
    category: "Blockchain",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 10,
    title: "Installing ProofMail: From Zero to Maximum Protection in 5 Minutes",
    excerpt:
      "Complete step-by-step guide to installing and configuring ProofMail. Join thousands of users who've already upgraded their email security with our extension.",
    level: "Beginner",
    date: "February 22, 2024",
    readTime: "6 min read",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 11,
    title: "Privacy in the Digital Age: Why Your Email Metadata Matters",
    excerpt:
      "Your email reveals more than you think. Learn how traditional email exposes your privacy and why ProofMail's decentralized approach keeps you truly anonymous.",
    level: "Intermediate",
    date: "February 20, 2024",
    readTime: "9 min read",
    category: "Privacy",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 12,
    title:
      "Cryptocurrency 101: Essential Knowledge for the Modern Internet User",
    excerpt:
      "From Bitcoin to DeFi, understand the crypto landscape and why blockchain literacy is becoming as important as basic computer skills in 2024.",
    level: "Beginner",
    date: "February 18, 2024",
    readTime: "12 min read",
    category: "Crypto",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 13,
    title:
      "The Science Behind ProofMail: How Cryptographic Proof Prevents Email Spoofing",
    excerpt:
      "Deep dive into the mathematical principles that make email spoofing impossible with ProofMail. Understanding the cryptographic innovation that changes everything.",
    level: "Advanced",
    date: "February 15, 2024",
    readTime: "18 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 14,
    title:
      "Web3 Security: How Decentralized Systems Protect Your Digital Identity",
    excerpt:
      "Learn why decentralized systems like ProofMail offer superior security compared to centralized alternatives. The future of digital identity is here.",
    level: "Intermediate",
    date: "February 12, 2024",
    readTime: "14 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 15,
    title:
      "ProofMail Success Stories: How Organizations Eliminated Email Fraud",
    excerpt:
      "Real testimonials and case studies from organizations that implemented ProofMail. See measurable results: 100% reduction in successful phishing attempts.",
    level: "Beginner",
    date: "February 10, 2024",
    readTime: "10 min read",
    category: "ProofMail",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 16,
    title: "The Economics of Email Security: Why ProofMail Pays for Itself",
    excerpt:
      "Calculate the true cost of email security breaches vs. ProofMail implementation. Spoiler: ProofMail typically pays for itself within the first prevented attack.",
    level: "Intermediate",
    date: "February 8, 2024",
    readTime: "8 min read",
    category: "ProofMail",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 17,
    title: "Wallet Security Best Practices: Protecting Your Crypto Assets",
    excerpt:
      "Master the essential security practices for cryptocurrency wallets. From seed phrase protection to hardware wallet setup, secure your digital assets properly.",
    level: "Intermediate",
    date: "February 5, 2024",
    readTime: "15 min read",
    category: "Crypto",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=240&fit=crop&crop=center",
  },
  {
    id: 18,
    title: "The Psychology of Phishing: Why Smart People Fall for Email Scams",
    excerpt:
      "Understand the psychological techniques that make phishing so effective, and learn how ProofMail's verification system eliminates the human element of vulnerability.",
    level: "Beginner",
    date: "February 3, 2024",
    readTime: "7 min read",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=240&fit=crop&crop=center",
  },
];

const categories = [
  "All",
  "Security",
  "Blockchain",
  "Crypto",
  "Technology",
  "Tutorial",
  "Privacy",
  "ProofMail",
];

export { blogPosts, categories };
