import { branchAssets, statsAssets } from "./assets";

export const siteConfig = {
  name: "Yes Genesis Fintech",
  legalName: "Yes Genesis Fintech Private Limited",
  description:
    "India's leading loan distribution network. Yes Genesis Fintech connects customers with trusted banks and NBFCs for personal, business, home, mortgage, car and education loans across 200+ cities.",
  phone: "+91 95178 89999",
  email: "info@yesgenesis.in",
  address: "302, 3rd Floor, Krishna Plaza, Khairatabad, Hyderabad 500004",
  url: "https://www.yesgenesis.in",
};

// Loans dropdown (CIBIL Score intentionally excluded)
export const loanLinks = [
  { label: "Personal Loan", href: "/loans/personal-loan" },
  { label: "Business Loan", href: "/loans/business-loan" },
  { label: "Home Loan", href: "/loans/home-loan" },
  { label: "Mortgage Loan", href: "/loans/mortgage-loan" },
  { label: "Car Loan", href: "/loans/car-loan" },
  { label: "Education Loan", href: "/loans/education-loan" },
];

// Primary nav (CIBIL Score intentionally excluded)
export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Loans", href: "#loans", children: loanLinks },
  { label: "EMI Calculator", href: "/emi-calculator" },
];

export const journeyStats = [
  { value: "200+", label: "Cities Served", icon: statsAssets.icons[0] },
  { value: "647+", label: "Branch Locations", icon: statsAssets.icons[1] },
  { value: "4K+", label: "Employees", icon: statsAssets.icons[2] },
  { value: "149+", label: "Lending Partners", icon: statsAssets.icons[3] },
  { value: "24K+", label: "Active Connectors", icon: statsAssets.icons[4] },
];

export type Branch = {
  name: string;
  image: string;
};

export const branches: Branch[] = [
  { name: "Khairatabad Branch", image: branchAssets.khairatabad },
  { name: "Nagaland Branch", image: branchAssets.nagaland },
  { name: "Bengaluru Branch", image: branchAssets.bengaluru },
  { name: "Vizag Branch", image: branchAssets.vizag },
  { name: "Tirupati Branch - A.P", image: branchAssets.tirupati },
  { name: "Panjagutta Branch", image: branchAssets.panjagutta },
  { name: "L.B Nagar Branch", image: branchAssets.lbNagar },
  { name: "Kurnool Branch", image: branchAssets.kurnool },
  { name: "Chennai Branch", image: branchAssets.chennai },
  { name: "Mahbubnagar Branch", image: branchAssets.mahbubnagar },
];

export const partnerStats = [
  { value: "150+", label: "Banking Partners" },
  { value: "65+", label: "NBFC Partners" },
  { value: "25,000+", label: "Happy Customers" },
  { value: "Pan India", label: "Service Network" },
];

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sunil Kumar",
    quote:
      "They are very friendly people to work with. I got a loan at a decent rate which helped me at the time of my emergency. I would be happy to recommend this company to my peers. Keep it up guys! You are doing a great job. I hope everyone should get advantage of this good process of loan.",
    rating: 5,
  },
  {
    name: "Priya Reddy",
    quote:
      "Getting a home loan always seemed complicated, but Yes Genesis Fintech made the entire process stress-free. Their team was patient, answered all my questions, and kept me updated at every stage. I was impressed with how quickly they completed the verification and approval process. Their honest guidance and excellent customer support made a huge difference. Thank you for helping me achieve my dream of owning a home.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    quote:
      "Choosing Yes Genesis Fintech was one of the best decisions I made during my home loan journey. They compared multiple banks, negotiated the best possible terms, and completed the entire process without any hassle. I was kept informed at every stage, and the staff ensured all documentation was handled accurately. Their dedication, transparency, and quick response made the experience pleasant. I sincerely thank the entire team for their outstanding support.",
    rating: 5,
  },
];

type FooterLinkColumn = {
  heading: string;
  links: { label: string; href: string }[];
  address?: undefined;
  email?: undefined;
  phone?: undefined;
};

type FooterContactColumn = {
  heading: string;
  links?: undefined;
  address: string;
  email: string;
  phone: string;
};

export const footerColumns: (FooterLinkColumn | FooterContactColumn)[] = [
  {
    heading: "Loans",
    links: loanLinks,
  },
  {
    heading: "Information",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy & Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Apply For Yes Genesis Franchise", href: "/franchise" },
    ],
  },
  {
    heading: "Contact Us",
    address: siteConfig.address,
    email: siteConfig.email,
    phone: siteConfig.phone,
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];
