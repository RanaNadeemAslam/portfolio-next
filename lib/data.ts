// ─── Types ───────────────────────────────────────────────────────────────────

export type Highlight = {
  number: string;
  label: string;
};

export type Platform = 'android' | 'ios' | 'both';

export type CaseStudy = {
  challenge: string;
  solution: string;
  result: string;
};

export type Project = {
  title: string;
  platform: Platform;
  description: string;
  tags: string[];
  stat: string;
  downloads?: string;
  rating?: string;
  storeUrl: string;
  icon: string;
  screenshots: string[];
  caseStudy?: CaseStudy;
  featured: boolean;
};

export type Experience = {
  date: string;
  title: string;
  company: string;
  description: string;
};

export type Testimonial = {
  text: string;
  author: string;
  country: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SocialLinks = {
  linkedin: string;
  github: string;
  fiverr: string;
  whatsapp: string;
  email: string;
};

export type About = {
  paragraphs: string[];
  details: {
    specialization: string;
    location: string;
    experience: string;
  };
};

// ─── Data ────────────────────────────────────────────────────────────────────

export const highlights: Highlight[] = [
  {
    number: '5M+',
    label: 'Total downloads across Play Store and App Store',
  },
  {
    number: '25+',
    label: 'Production apps shipped on both platforms',
  },
  {
    number: '30K+',
    label: 'User ratings across published applications',
  },
  {
    number: '6+',
    label: 'Years building Android & iOS apps professionally',
  },
];

export const skills: string[] = [
  'Kotlin',
  'Java',
  'Swift',
  'SwiftUI',
  'Flutter',
  'Jetpack Compose',
  'MVVM',
  'KMM',
  'Firebase',
  'Clean Architecture',
  'REST APIs',
  'Material Design',
  'CI/CD',
];

export const projects: Project[] = [
  // ── 1. Virtual 5G (featured) ──────────────────────────────────────────────
  {
    title: 'Virtual 5G',
    platform: 'android',
    description:
      'Secure proxy and network optimization app with 5M+ installs on Play Store. Advanced networking, subscription monetization, and 23K+ user ratings.',
    tags: ['Kotlin', 'MVVM', 'Network Security', 'Material Design'],
    stat: '8.9M downloads · 4.4★ · 23K+ ratings',
    downloads: '8.9M downloads',
    rating: '4.4★ · 23K+ ratings',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.adaranet.android.droidproxyclient2',
    icon: '/assets/icon-virtual5g.png',
    screenshots: [
      '/assets/ss-virtual5g-1.jpg',
      '/assets/ss-virtual5g-2.jpg',
      '/assets/ss-virtual5g-3.jpg',
      '/assets/ss-virtual5g-4.jpg',
      '/assets/ss-virtual5g-5.jpg',
    ],
    caseStudy: {
      challenge:
        'Build a network optimization app that scales to millions of users while maintaining fast speeds and low battery drain.',
      solution:
        'Engineered proxy architecture in Kotlin with MVVM, plus subscription monetization with Unity Ads integration.',
      result:
        '8.9M downloads, 4.0-star rating, 23K+ reviews. Top network tools category performer.',
    },
    featured: true,
  },

  // ── 2. VPN Express Android (featured) ─────────────────────────────────────
  {
    title: 'VPN Express: Secure & Fast VPN',
    platform: 'android',
    description:
      'High-performance VPN achieving 1M+ downloads. Led a team of 5 engineers, integrated Unity ads and subscription model increasing monthly revenue by 35%.',
    tags: ['Kotlin', 'MVVM', 'Firebase', 'Unity Ads', 'REST APIs'],
    stat: '1.7M downloads · 4.5★ · 7K ratings',
    downloads: '1.7M downloads',
    rating: '4.5★ · 7K ratings',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.adaranet.vgep',
    icon: '/assets/icon-vgep.png',
    screenshots: [
      '/assets/ss-vgep-1.jpg',
      '/assets/ss-vgep-2.jpg',
      '/assets/ss-vgep-3.jpg',
      '/assets/ss-vgep-4.jpg',
      '/assets/ss-vgep-5.jpg',
    ],
    caseStudy: {
      challenge:
        'Create a high-performance VPN with seamless server switching and strong encryption, while monetizing without hurting UX.',
      solution:
        'Led 5 engineers to build native Kotlin VPN. Balanced Unity ads with subscriptions for optimal revenue-UX tradeoff.',
      result:
        '1.7M downloads, 35% revenue increase. Successfully launched iOS counterpart.',
    },
    featured: true,
  },

  // ── 3. NetOptimizer iOS (featured) ────────────────────────────────────────
  {
    title: 'NetOptimizer: Virtual5GExpress',
    platform: 'ios',
    description:
      'Network optimization app for iOS enhancing mobile connectivity and performance. Supports 19 languages and Apple Vision. Clean SwiftUI interface with real-time monitoring.',
    tags: ['Swift', 'SwiftUI', 'Network APIs', 'Performance'],
    stat: '4.5★ · 41 ratings · 19 languages',
    rating: '4.5★ · 41 ratings',
    downloads: '19 languages',
    storeUrl:
      'https://apps.apple.com/us/app/netoptimizer-virtual5gexpress/id6499292158',
    icon: '/assets/icon-netoptimizer-ios.png',
    screenshots: [],
    featured: true,
  },

  // ── 4. VPN Express iOS (featured) ─────────────────────────────────────────
  {
    title: 'VPN Express: Fast, Secure VPN',
    platform: 'ios',
    description:
      'iOS counterpart of the flagship VPN. Strong encryption, no-logs policy, 500+ servers across 12+ locations optimized for gaming and streaming. Subscription-based monetization.',
    tags: ['Swift', 'UIKit', 'Network Extension', 'Security'],
    stat: '4.0★ · 24 ratings',
    rating: '4.0★ · 24 ratings',
    storeUrl:
      'https://apps.apple.com/us/app/vpn-express-fast-secure-vpn/id6740760260',
    icon: '/assets/icon-vpnexpress-ios.png',
    screenshots: [
      '/assets/ss-vpnexpress-ios-1.png',
      '/assets/ss-vpnexpress-ios-2.png',
      '/assets/ss-vpnexpress-ios-3.png',
    ],
    featured: true,
  },

  // ── 5. Smart IPTV Xtream Player (featured) ────────────────────────────────
  {
    title: 'Smart IPTV Xtream Player',
    platform: 'android',
    description:
      'Smart IPTV client for streaming live TV on Android devices. Built with ExoPlayer for smooth, buffer-free playback. Supports multiple playlist types including Xtream, M3U, and file import.',
    tags: ['Kotlin', 'ExoPlayer', 'Streaming', 'MVVM'],
    stat: '50K+ downloads',
    downloads: '50K+ downloads',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.invotyx.tv.smartiptv',
    icon: '/assets/icon-smartiptv.png',
    screenshots: [
      '/assets/ss-smartiptv-1.jpg',
      '/assets/ss-smartiptv-2.jpg',
      '/assets/ss-smartiptv-3.jpg',
    ],
    featured: true,
  },

  // ── 6. Orion AI (featured) ────────────────────────────────────────────────
  {
    title: 'Orion AI — Chatbot Assistant',
    platform: 'ios',
    description:
      'Intelligent AI-powered chatbot with image generation, image analysis, and conversational AI. Supports multiple AI models including Gemini and Claude. Built with SwiftUI.',
    tags: ['Swift', 'AI/ML', 'Core Data', 'SwiftUI', 'Image Generation'],
    stat: '4.5★ · 35 ratings',
    rating: '4.5★ · 35 ratings',
    storeUrl:
      'https://apps.apple.com/us/app/orion-ai-chatbot-assistant/id6744879088',
    icon: '/assets/icon-orion-ios.png',
    screenshots: [
      '/assets/ss-orion-1.png',
      '/assets/ss-orion-2.png',
      '/assets/ss-orion-3.png',
    ],
    caseStudy: {
      challenge:
        'Build an AI chatbot supporting multiple models with a polished native iOS experience and offline capability.',
      solution:
        'SwiftUI + Core Data for offline persistence. Integrated Gemini and Claude backends with image generation and analysis.',
      result:
        '4.5-star App Store rating, 35 ratings. Users praised the clean, intuitive interface.',
    },
    featured: true,
  },

  // ── 7. Roku Remote ────────────────────────────────────────────────────────
  {
    title: 'Roku Remote: Smart TV Control',
    platform: 'android',
    description:
      'Remote control app for Roku and smart TVs. Auto device discovery, d-pad and swipe navigation modes, voice control, and a polished dark UI — no setup required.',
    tags: ['Kotlin', 'Network APIs', 'UI/UX', 'Material Design'],
    stat: '5K+ downloads',
    downloads: '5K+ downloads',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.roku.remote.smart.tv.control',
    icon: '/assets/icon-roku.png',
    screenshots: [
      '/assets/ss-roku-1.jpg',
      '/assets/ss-roku-2.jpg',
      '/assets/ss-roku-3.jpg',
      '/assets/ss-roku-4.jpg',
    ],
    featured: false,
  },

  // ── 8. Doctoc ─────────────────────────────────────────────────────────────
  {
    title: 'Doctoc — Healthcare',
    platform: 'both',
    description:
      'Healthcare communication platform for seamless care. Features voicemail, secure messaging, calendar scheduling, and on-call management for medical professionals.',
    tags: ['Kotlin', 'Firebase', 'REST APIs', 'Healthcare', 'Secure Messaging'],
    stat: '',
    storeUrl:
      'https://play.google.com/store/apps/details?id=net.doctoc.doctoc',
    icon: '/assets/icon-doctoc.png',
    screenshots: [
      '/assets/ss-doctoc-1.png',
      '/assets/ss-doctoc-2.png',
      '/assets/ss-doctoc-3.png',
    ],
    featured: false,
  },

  // ── 9. News Insight ───────────────────────────────────────────────────────
  {
    title: 'News Insight: Newshub Global',
    platform: 'android',
    description:
      'Aggregated global news reader pulling from top sources like Forbes, CNN, BBC, and NYT. Multi-country support, search, and a clean reading experience.',
    tags: ['Kotlin', 'REST APIs', 'Caching', 'Material Design'],
    stat: 'News & Media',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.newshub.free.news.magazine',
    icon: '/assets/icon-newshub.png',
    screenshots: [
      '/assets/ss-newshub-1.jpg',
      '/assets/ss-newshub-2.jpg',
      '/assets/ss-newshub-3.jpg',
      '/assets/ss-newshub-4.jpg',
      '/assets/ss-newshub-5.jpg',
    ],
    featured: false,
  },

  // ── 10. Invoice Maker ─────────────────────────────────────────────────────
  {
    title: 'Invoice Maker: Easy Bill',
    platform: 'android',
    description:
      'Professional invoice and billing app with 50+ custom templates, logo upload, digital signatures, and one-tap share/export. Built for freelancers and businesses.',
    tags: ['Kotlin', 'PDF Generation', 'Templates', 'Material Design'],
    stat: 'Business & Productivity',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.invoice.bill.ai',
    icon: '/assets/icon-invoice.png',
    screenshots: [
      '/assets/ss-invoice-1.jpg',
      '/assets/ss-invoice-2.jpg',
      '/assets/ss-invoice-3.jpg',
      '/assets/ss-invoice-4.jpg',
      '/assets/ss-invoice-5.jpg',
    ],
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    date: '2021 — Present',
    title: 'Senior Mobile Developer',
    company: 'Invotyx · Islamabad, Pakistan',
    description:
      'Led team of 5 engineers. Built 15+ Android & iOS apps with 5M+ combined downloads. Increased revenue 35%. Improved performance 30% and retention 20%.',
  },
  {
    date: '2022 — Present',
    title: 'Freelance Mobile Developer',
    company: 'Fiverr · Level 2 Seller',
    description:
      '69 five-star reviews from clients across US, UK, Canada, Netherlands, and Saudi Arabia. Built native and cross-platform apps for international clients with repeat business.',
  },
  {
    date: '2020 — 2021',
    title: 'Mobile Developer',
    company: 'FHA Technology · Islamabad, Pakistan',
    description:
      'Developed 3 mobile apps. Built location-based app with Google Maps, backup app with Drive API (10K+ users), and file-sharing app (4.5★). Mentored junior devs.',
  },
  {
    date: '2019 — 2020',
    title: 'Mobile Developer',
    company: 'DevSoft · Sargodha, Pakistan',
    description:
      'Contributed to e-commerce app with Firebase real-time updates. Reduced crash rates by 15% through rigorous debugging.',
  },
  {
    date: '2015 — 2019',
    title: 'BS Computer Science',
    company: 'University of Sargodha',
    description: '',
  },
];

export const testimonials: Testimonial[] = [
  {
    text: "Working with Nadeem is always exceptional. He don't only fix the problem you have, he gives you awesome tips and solutions for future issues. I've worked with Nadeem since 2022. I recommend 100%.",
    author: 'lavoz7',
    country: 'United States',
  },
  {
    text: 'Nadeem works very quickly, and does not back down from a challenge. I had some relatively unusual requests for my app, and he figured out how to get them all working. Will be asking for more of his help in the future.',
    author: 'samfishx',
    country: 'United States',
  },
  {
    text: 'Quick and to the point. Very well done. Communication is clear and delivery was fast. Very happy!',
    author: 'tijnsnijders78',
    country: 'Netherlands',
  },
  {
    text: 'He handled the Flutter development with confidence and clarity. The app feels stable, responsive, and well put together from both a user and technical point of view.',
    author: 'abualumar',
    country: 'Saudi Arabia',
  },
  {
    text: 'It was a pleasure to work with Nadeem. He completed the iOS and Android apps in a short time. I recommend to work with this guy. I hope he will be my apps developer from now on.',
    author: 'ramonbatista402',
    country: 'Dominican Republic',
  },
  {
    text: 'Nadeem is also reliable in terms of communication, specifications with attention to details. Another successful collaboration.',
    author: 'yhuchard',
    country: 'Luxembourg',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'What platforms do you develop for?',
    answer:
      'I build native Android apps using Kotlin and Java with Jetpack Compose and MVVM architecture, native iOS apps using Swift and SwiftUI with Core Data and Combine, and cross-platform apps using Flutter and React Native for simultaneous Android and iOS deployment. I also work with Kotlin Multiplatform (KMM) for sharing business logic across platforms while keeping native UIs. My Android development typically follows Clean Architecture with repositories, use cases, and ViewModels, while my iOS projects use SwiftUI with the Observation framework. I choose the platform and framework based on the project\'s requirements — native for performance-critical apps like VPNs and streaming players, cross-platform for MVPs and content-driven apps where faster time-to-market matters most.',
  },
  {
    question: 'What types of apps have you built?',
    answer:
      'I have built VPN and networking apps with a combined 8.9M+ downloads including Virtual 5G and VPN Express, streaming and IPTV players like Smart IPTV Xtream Player (50K+ downloads) with ExoPlayer integration, AI chatbot assistants like Orion AI (4.5 stars on App Store) with multi-model support for Gemini and Claude, healthcare communication platforms like Doctoc with secure messaging and scheduling, smart TV remote control apps with auto device discovery, news aggregator apps pulling from sources like Forbes, CNN, and BBC, and business tools like Invoice Maker with 50+ templates and PDF generation. In total I have shipped 25+ production apps across both Google Play Store and Apple App Store with 5M+ combined downloads and 30K+ user ratings.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, I work with clients worldwide and have completed projects for businesses and individuals in the United States, United Kingdom, Canada, Netherlands, Saudi Arabia, Luxembourg, and Dominican Republic. I am a Level 2 Seller on Fiverr with 69 five-star reviews and a perfect 5.0 rating. I communicate in English, maintain a 1-hour average response time during business hours, and use tools like Slack, Jira, and GitHub for project collaboration. My timezone is Pakistan Standard Time (UTC+5) and I typically overlap with both European and US East Coast business hours for real-time communication.',
  },
  {
    question: 'Can you handle the full app lifecycle?',
    answer:
      'Absolutely. I handle every stage of mobile app development from initial ideation and architecture planning through UI/UX implementation, backend integration, testing, Play Store and App Store deployment, and post-launch maintenance and updates. I have published 25+ apps across both stores and understand the submission guidelines, review processes, and optimization strategies for each. For Android I manage signing, ProGuard configuration, and staged rollouts. For iOS I handle certificates, provisioning profiles, and App Store Connect submission. I also set up CI/CD pipelines, crash reporting with Firebase Crashlytics, and analytics tracking to monitor app performance after launch.',
  },
  {
    question: 'How can I hire you?',
    answer:
      'You can hire me through several channels depending on your preference. For freelance projects, I am available on Fiverr at fiverr.com/nadeem585 where I have 69 five-star reviews as a Level 2 Seller. You can also contact me directly via email at link2nadeemaslam@gmail.com or through WhatsApp at +92 301 531 1113 for a faster initial conversation. I am available for both short-term projects like bug fixes and feature additions as well as long-term contracts for full app development. My typical engagement starts with a free consultation to understand your requirements, followed by a detailed proposal with timeline and cost breakdown.',
  },
];

export const socialLinks: SocialLinks = {
  linkedin: 'https://www.linkedin.com/in/nadeem-aslam-android/',
  github: 'https://github.com/RanaNadeemAslam',
  fiverr: 'https://www.fiverr.com/nadeem585',
  whatsapp: 'https://wa.me/923015311113',
  email: 'mailto:link2nadeemaslam@gmail.com',
};

export const about: About = {
  paragraphs: [
    "I'm Nadeem Aslam, a mobile developer with 6+ years of experience shipping Android and iOS apps. My work has reached millions of users across Play Store and App Store.",
    'At Invotyx, I lead a team of 5 engineers building production apps in Kotlin, Swift, and Jetpack Compose. Our flagship VPN app crossed 5M+ downloads with a 4.5-star rating. I\'ve also integrated monetization strategies that boosted revenue by 35%.',
    "Outside of my full-time role, I take on freelance projects. If you need a reliable developer for your next mobile app, let's talk.",
  ],
  details: {
    specialization: 'Android & iOS Apps',
    location: 'Pakistan',
    experience: '6+ Years',
  },
};
