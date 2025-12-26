import { BenefitItem, FaqItem, FeatureItem } from "./types";

export const BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: "Save weeks of back and forth",
    description: "Don't wait for KDP's slow review process just to get rejected.",
    iconName: 'clock'
  },
  {
    id: 2,
    title: "Avoid costly print errors",
    description: "Catch margin issues and bleed errors before you order proofs.",
    iconName: 'shield'
  },
  {
    id: 3,
    title: "See problems visually",
    description: "We show you exactly where the error is on your actual PDF page.",
    iconName: 'search'
  },
  {
    id: 4,
    title: "Upload with confidence",
    description: "Know your file is 100% compliant before you hit publish.",
    iconName: 'check'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "PDF Book Scan",
    description: "Instantly scans interior files for 50+ common KDP blocking issues.",
    iconName: "scan"
  },
  {
    id: 2,
    title: "KDP Fix Finder",
    description: "Translates technical error codes into plain English instructions.",
    iconName: "fix"
  },
  {
    id: 3,
    title: "Page Perfector",
    description: "Automatically suggests layout adjustments for margins and gutters.",
    iconName: "page"
  },
  {
    id: 4,
    title: "Book Cover Analysis",
    description: "Checks spine width, bleed zones, and barcode placement.",
    iconName: "cover"
  },
  {
    id: 5,
    title: "Visual Error Check",
    description: "Overlays red highlights directly on your pages so you miss nothing.",
    iconName: "eye"
  },
  {
    id: 6,
    title: "Report History",
    description: "Keep track of your versions and previous scan results.",
    iconName: "history"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Is Publish Perfect Pal only for Amazon KDP?",
    answer: "While we are laser-focused on Amazon KDP standards, our formatting checks are extremely helpful for IngramSpark, Draft2Digital, and other print-on-demand platforms that share similar requirements."
  },
  {
    id: 2,
    question: "Do I need design or technical skills?",
    answer: "No! Our reports are written in plain language. We don't just say 'transparency flattening error', we tell you 'remove the transparent shadow on page 4'."
  },
  {
    id: 3,
    question: "What happens after my trial ends?",
    answer: "You can choose to upgrade to a Pro plan to keep scanning, or your account will pause. We keep your data safe in case you want to come back later."
  },
  {
    id: 4,
    question: "Can I cancel my subscription?",
    answer: "Yes, absolutely. You can cancel anytime from your account settings with one click, or by emailing us at hello@madebyakosua.com. No phone calls needed."
  },
  {
    id: 5,
    question: "How is 'lifetime' defined?",
    answer: "The Lifetime Bundle gives you access for the lifetime of the product, including all future Pro updates, without ever paying a monthly fee again."
  },
  {
    id: 6,
    question: "Is my manuscript safe?",
    answer: "Yes. We use enterprise-grade encryption for uploads and storage. We never share your intellectual property with third parties."
  }
];