// Site content sourced from devsphere-website.vercel.app

export const company = {
  name: "DevSphere Solutions",
  tagline:
    "Premium full-stack agency building websites, SaaS platforms, mobile apps and admin dashboards for India, Dubai, Oman & global clients.",
  email: "devsspheresolutions@gmail.com",
  phones: [
    { label: "+91 94578 18861", href: "tel:+919457818861" },
    { label: "+91 93894 41961", href: "tel:+919389441961" },
  ],
  whatsapp: "https://wa.me/919457818861",
  location: "Uttar Pradesh, India",
  responseTime: "1–2 business days",
  socials: [
    { label: "LinkedIn", short: "in", handle: "DevSphere Solutions", href: "https://www.linkedin.com/company/devspheresolutions/" },
    { label: "Instagram", short: "ig", handle: "@dev.spheresolutions", href: "https://www.instagram.com/dev.spheresolutions/" },
    { label: "WhatsApp", short: "wa", href: "https://wa.me/919457818861" },
  ],
};

export const team = [
  {
    name: "Syed Ali Zadi",
    role: "Founder",
    bio: "Syed Ali founded DevSphere Solutions to give growing businesses a single, dependable technology partner. He leads the company's vision, client partnerships and delivery — working closely with founders and business owners across India, Dubai and Oman to turn their ideas into scalable websites, SaaS platforms and business software.",
    photo: "/founder.png",
    focus: "45% 22%",
    linkedin: "https://www.linkedin.com/in/ali-saqulain-7404a8287/",
    phone: { label: "+91 94578 18861", href: "tel:+919457818861" },
    whatsapp: "https://wa.me/919457818861",
  },
  {
    name: "Mohd Anas Ansari",
    role: "Co-Founder",
    bio: "Anas co-founded DevSphere Solutions and drives how products get built and shipped. He works hands-on with the team across planning, development and deployment — making sure every project goes live production-ready, performs fast and keeps improving long after launch.",
    photo: "/co-founder.png",
    focus: "55% 18%",
    linkedin: "https://www.linkedin.com/in/anas-ansari-45147b27a",
    phone: { label: "+91 93894 41961", href: "tel:+919389441961" },
    whatsapp: "https://wa.me/919389441961",
  },
];

export const heroStats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Team Members" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Production-Ready Code" },
  { value: 8, suffix: "+", label: "Service Areas" },
];

export const markets = ["India", "Dubai", "Oman", "Global"];

export const services = [
  { title: "Website Development", text: "Fast, SEO-friendly business and brand websites built to rank and convert.", icon: "M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01", tags: ["Next.js", "SEO", "Performance"], image: "/projects/the-vega-wealth-full.jpg", projects: ["The Vega Wealth", "AS Job Placement & Finance", "Royal Metro EV", "Info Gates"] },
  { title: "Full-Stack Web Apps", text: "End-to-end web applications with secure backends, APIs and modern frontends.", icon: "M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12", tags: ["React", "Node.js", "REST / GraphQL"], image: "/projects/crossline-cricket-stadium-full.jpg", projects: ["Crossline Cricket Stadium", "MPCPCT", "Auto Excel Pro"] },
  { title: "SaaS Development", text: "Multi-tenant SaaS platforms with subscriptions, auth and scalable cloud architecture.", icon: "M7 18a4 4 0 01-.5-8 6 6 0 0111.5 1.5A3.5 3.5 0 0117.5 18H7z", tags: ["Auth", "Subscriptions", "Cloud"], image: "/projects/digital-career-center-full.jpg", projects: ["Krishi Kutumb", "Digital Career Center", "MPCPCT"] },
  { title: "E-commerce Development", text: "Online stores with payments, inventory and seamless checkout experiences.", icon: "M3 4h2l2.4 11h11L21 7H6.2M9 20h.01M18 20h.01", tags: ["Payments", "Inventory", "B2B / B2C"], image: "/projects/laptopsecure-full.jpg", projects: ["LaptopSecure", "Marina Muse International"] },
  { title: "Mobile App Development", text: "Cross-platform iOS & Android apps with Flutter, React Native and Expo.", icon: "M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2", tags: ["Flutter", "React Native", "Expo"], image: "/projects/krishi-kutumb-full.jpg", projects: ["Krishi Kutumb", "Fixigo Repair"] },
  { title: "Admin Dashboards", text: "CRMs, billing, inventory and analytics dashboards that run your operations.", icon: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z", tags: ["CRM", "Billing", "Analytics"], image: "/projects/chacha-mobile-crm-full.jpg", projects: ["Chacha Mobile CRM", "Crossline Cricket Stadium", "Auto Excel Pro"] },
];

export const serviceTags = ["Web Dev", "Full-Stack", "SaaS", "Mobile", "Dashboards", "AI", "Cloud", "SEO"];

export const whyChoose = [
  ["End-to-End Delivery", "From discovery to deployment — we handle the complete product lifecycle."],
  ["Fast Development", "Agile sprints with rapid prototyping and iterative delivery."],
  ["Production-Ready Code", "Clean, scalable, maintainable code built for long-term growth."],
  ["SEO-Friendly Websites", "Technical SEO, schema markup, and performance optimization built-in."],
  ["Mobile-First Design", "Pixel-perfect responsive UI across all devices and screen sizes."],
  ["Secure Backend", "Authentication, validation, and security best practices on every project."],
  ["Cloud Deployment", "AWS, Vercel, and CI/CD pipelines for reliable production releases."],
  ["Client Support", "Dedicated post-launch support, updates, and long-term partnership."],
];

export const process = [
  ["Discovery", "Understand your goals, users, and business requirements."],
  ["UI/UX Planning", "Wireframes, design systems, and user journey mapping."],
  ["Development", "Agile development with regular demos and transparent progress."],
  ["Testing", "QA, performance testing, and cross-browser validation."],
  ["Deployment", "Cloud deployment with monitoring and CI/CD setup."],
  ["Maintenance", "Ongoing support, updates, and feature enhancements."],
];

export const projects = [
  {
    title: "LaptopSecure",
    category: "E-commerce / Laptop Marketplace",
    location: "Uttar Pradesh, India",
    text: "Premium laptop marketplace to buy, sell, upgrade and repair — new, refurbished and gaming laptops, custom PC builds, trade-ins and certified repairs, with WhatsApp ordering, EMI options and pan-India delivery.",
    client: "LaptopSecure sells new, refurbished and second-hand laptops, gaming PCs and accessories, and runs repair, trade-in and custom-build services for customers across India.",
    highlights: [
      "Category storefront for gaming, business, student and refurbished laptops plus accessories",
      "Flash-deal section with live countdown timers and discount badges",
      "Product cards with specs, condition grade, ratings and savings at a glance",
      "One-tap “Buy Now” that opens a pre-filled WhatsApp order",
      "Sell & trade-in flow with instant quote requests and free pickup",
      "Repair menu with starting prices and WhatsApp booking",
      "Wishlist, side-by-side compare and newsletter sign-up",
      "Trust layer: 12-month warranty, 50-point QC, EMI options and reviews",
    ],
    stats: [["25,000+", "Customers"], ["4.9/5", "Avg Rating"]],
    tech: ["Next.js", "E-commerce", "WhatsApp Orders", "Repair Booking"],
    image: "/projects/laptopsecure.jpg",
    url: "https://www.laptopsecure.in",
  },
  {
    title: "Marina Muse International",
    category: "E-commerce / Export & Manufacturing",
    location: "India · Global",
    text: "B2C retail store and B2B wholesale platform for premium nautical instruments and handcrafted brass décor — with trade accounts, bulk quotes, custom manufacturing, worldwide shipping and AI-powered product search.",
    client: "Marina Muse International is an Indian exporter, manufacturer and supplier of handcrafted brass, nautical and armour products, selling to both retail buyers and trade partners worldwide.",
    highlights: [
      "Retail catalogue for binoculars, compasses, telescopes, sconces and lamps",
      "Separate wholesale portal with trade-account registration and login",
      "Custom-manufacturing enquiries and bulk-quote requests for trade buyers",
      "Cards, UPI, bank transfer and trade-term payment options",
      "Worldwide shipping with 14-day return support",
      "AI-powered product search, wishlist and cart",
    ],
    stats: [["B2C + B2B", "Storefronts"], ["Worldwide", "Shipping"]],
    tech: ["Next.js", "E-commerce", "B2B Wholesale", "AI Search"],
    image: "/projects/marina-muse-international.jpg",
    url: "https://marinamuseinternational.com",
  },
  {
    title: "The Vega Wealth",
    category: "Finance / Wealth Management",
    location: "Dubai, UAE",
    text: "Premium website for a Dubai wealth management firm — financial planning, investment, insurance, estate and mortgage advisory for investors, HNIs and business owners, designed to turn visitors into consultations.",
    client: "The Vega Wealth is a wealth management and financial advisory firm on Sheikh Zayed Road, Dubai, serving investors, high-net-worth individuals and business owners.",
    highlights: [
      "Premium, editorial brand design built to signal trust to HNI clients",
      "Service pages for financial planning, investment and insurance advisory",
      "Estate planning and mortgage advisory offerings",
      "“Schedule a Consultation” conversion path on every key page",
      "Client testimonials and a “Why Choose Us” trust section",
      "Dubai office details, WhatsApp chat and compliant privacy & terms pages",
    ],
    tech: ["Next.js", "Tailwind CSS", "SEO Optimization", "Lead Generation"],
    image: "/projects/the-vega-wealth.jpg",
    url: "https://www.thevegawealth.com",
  },
  {
    title: "Chacha Mobile CRM",
    category: "CRM / Business Management",
    location: "Western UP, India",
    text: "Spare-parts storefront plus a Tally-like sales & purchase CRM with inventory control, billing and customer tracking — built after a successful website delivery.",
    client: "Chacha Mobile supplies mobile spare parts — displays, batteries, charging parts, cameras and body assemblies — to repair shops across Western Uttar Pradesh.",
    highlights: [
      "Online spare-parts catalogue with category and brand filters",
      "Grade labels (Original, High, Low) on every product",
      "Add-to-cart and WhatsApp ordering with context pre-filled",
      "City landing pages for Meerut and Shamli",
      "Sales & purchase CRM with billing, inventory and stock control",
      "Customer and partner-shop tracking for repeat B2B orders",
    ],
    stats: [["5,000+", "SKUs Managed"], ["1,200+", "Partner Shops"]],
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    image: "/projects/chacha-mobile-crm.jpg",
    url: "https://chachamobile.in",
  },
  {
    title: "Krishi Kutumb",
    category: "AgriTech / FPO Management",
    location: "India",
    text: "FPO management platform and mobile app for farmer producer companies — members, governance, finance, GST and compliance in one register, in 10 Indic languages with an offline mode.",
    client: "Krishi Kutumb (K2) helps Farmer Producer Organisations replace paper registers with one digital system that every role — from board to field staff — can use.",
    highlights: [
      "Single register for members, governance, finance, compliance and trade",
      "Annual returns, GST, meetings and audit workflows",
      "Mobile app with desk, issue box, produce, store and services modules",
      "Available in 10 Indic languages",
      "Offline-capable Lite mode for low-connectivity villages",
      "FPO login, demo booking and data owned by the FPO",
    ],
    stats: [["10", "Indic Languages"], ["Offline", "Lite Mode"]],
    tech: ["Next.js", "Mobile App", "Multilingual", "Offline-First"],
    image: "/projects/krishi-kutumb.jpg",
    url: "https://krishikutumb.com",
  },
  {
    title: "AS Job Placement & Finance",
    category: "Visa & Immigration Consultancy",
    location: "Uttar Pradesh, India",
    text: "Visa, passport, work-permit and immigration consultancy platform with country-wise applications, consultation booking, air-ticket and hotel services, and local SEO.",
    client: "AS Job Placement & Finance is a travel, visa and immigration consultancy in Uttar Pradesh helping clients secure visas, work permits and PR across 15+ countries.",
    highlights: [
      "Service pages for visas, passports, work permits, PR and air tickets",
      "Country-specific “Apply Now” links into a single enquiry form",
      "Click-to-call and WhatsApp contact on every page",
      "Visa & immigration blog and a detailed FAQ for SEO",
      "Google-rating, testimonials and success-rate trust signals",
      "Light / dark theme and cookie-consent compliance",
    ],
    stats: [["5,000+", "Applications"], ["98%", "Success Rate"]],
    tech: ["Next.js", "Lead Generation", "Local SEO", "WhatsApp Integration"],
    image: "/projects/as-job-placement-finance.jpg",
    url: "https://www.asjobplacement.com",
  },
  {
    title: "Fixigo Repair",
    category: "Doorstep Repair Services",
    location: "Uttar Pradesh, India",
    text: "Doorstep electronics and home-appliance repair platform for Shamli, Meerut & Saharanpur — online booking via WhatsApp, live repair-status tracking, device recycling and local SEO.",
    client: "Fixigo Repair provides doorstep repair for phones, laptops, TVs, ACs, RO purifiers and more across Western Uttar Pradesh.",
    highlights: [
      "Online booking form that routes requests straight to WhatsApp",
      "Track Repair page for live repair-status updates",
      "Dedicated service pages for mobile, laptop, TV, AC, RO and more",
      "Recycle Device flow for old electronics",
      "Testimonials and FAQ sections for trust and SEO",
      "Click-to-call, WhatsApp and email contact throughout",
    ],
    stats: [["4.9/5", "Customer Rating"], ["10+", "Technicians"]],
    tech: ["Next.js", "WhatsApp Booking", "Repair Tracking", "Local SEO"],
    image: "/projects/fixigo-repair.jpg",
    url: "https://www.fixigorepair.in",
  },
  {
    title: "Royal Metro EV",
    category: "Electric Vehicles / Brand Website",
    location: "Uttar Pradesh, India",
    text: "Modern, SEO-optimised brand website for an electric-vehicle maker — futuristic UI, ultra-fast performance and a conversion-focused enquiry flow.",
    client: "Royal Metro EV manufactures e-rickshaws, e-bikes and electric scooters from Uttar Pradesh.",
    highlights: [
      "Model pages for the Classic and Elite ranges",
      "Spec highlights: 60V battery, up to 150 km range, 3–4 hr charging",
      "Callback request form for dealer and buyer enquiries",
      "FAQ on range, charging, warranty, financing and test drives",
      "Google Maps location and WhatsApp chat widget",
    ],
    stats: [["60V", "Battery"], ["150 KM", "Range"]],
    tech: ["Next.js", "Tailwind CSS", "SEO Optimization", "Performance Tuning"],
    image: "/projects/royal-metro-ev.jpg",
    url: "https://royalmetroev.com",
  },
  {
    title: "Crossline Cricket Stadium",
    category: "Sports Booking Platform",
    location: "Uttar Pradesh, India",
    text: "Cricket stadium website with ground booking, admin slot management, match updates, income/expense tracking and inventory management.",
    client: "Crossline Cricket Stadium & Sports Academy is a cricket ground, academy and tournament venue in Uttar Pradesh, open 6 AM – 11 PM daily.",
    highlights: [
      "Online ground booking with “Book your slot” flow",
      "Admin panel for slot management and booking control",
      "Sports academy, tournaments and gallery sections",
      "Latest-updates feed for matches and events",
      "Income, expense and inventory tracking for the venue",
      "WhatsApp enquiries and multi-contact support",
    ],
    tech: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    image: "/projects/crossline-cricket-stadium.jpg",
    url: "https://crosslinecricketstadium.in",
  },
  {
    title: "MPCPCT",
    category: "EdTech / Exam Platform",
    location: "Madhya Pradesh, India",
    text: "Online exam-preparation and typing-test platform for CPCT and CCC aspirants — with learning, skill-test and exam modes, Hindi/English typing and an admin dashboard.",
    client: "MPCPCT helps students in Madhya Pradesh prepare for CPCT, CCC and typing tests required for government jobs.",
    highlights: [
      "Interactive typing and computer lessons in Learning mode",
      "Skill Test measuring speed, accuracy and consistency",
      "Exam Mode with timed CPCT and CCC mock tests",
      "Bilingual Hindi and English typing practice",
      "Topic-wise MCQ practice with video and PDF notes",
      "Admin dashboard and certificate generation",
    ],
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    image: "/projects/mpcpct.jpg",
    url: "https://mpcpct.com",
  },
  {
    title: "Digital Career Center",
    category: "EdTech / IT Training",
    location: "India",
    text: "IT training and career platform with online, offline and self-paced courses, lifetime access, certificates and a companion app.",
    client: "Digital Career Center is a training provider teaching digital marketing, web development, SEO, video editing, data and AI.",
    highlights: [
      "Course catalogue across marketing, development, SEO, video, data and AI",
      "Online, offline and self-paced learning options",
      "Student accounts with My Courses, My Apps and support",
      "Lifetime access to purchased course content",
      "Downloadable completion certificates",
      "Responsive on every device, plus a downloadable app",
    ],
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    image: "/projects/digital-career-center.jpg",
    url: "https://digitalcareercenter.com",
  },
  {
    title: "Auto Excel Pro",
    category: "Business Operations Platform",
    location: "Global",
    text: "Operations platform that streamlines day-to-day workflows and customer management — helping the team work more efficiently and grow measurably.",
    client: "Auto Excel Pro needed one place to run daily operations and customer relationships instead of scattered spreadsheets and manual follow-ups.",
    highlights: [
      "Central dashboard for daily operations and key business metrics",
      "Customer records with history, notes and follow-up tracking",
      "Automated workflows that replace repetitive manual data entry",
      "Role-based access for owners, managers and staff",
      "Reports and exports for faster, data-driven decisions",
      "Responsive interface that works on desktop, tablet and mobile",
    ],
    tech: ["React", "Node.js", "Dashboard", "Automation"],
    image: null,
    url: "https://autoexcelpro.com",
  },
  {
    title: "Info Gates",
    category: "Business Website",
    location: "India",
    text: "Fast, SEO-friendly business website with a clean, responsive design and conversion-focused enquiry flow.",
    client: "Info Gates wanted a modern online presence that explains its services clearly and turns visitors into qualified enquiries.",
    highlights: [
      "Clean, modern brand design with a clear service structure",
      "Dedicated service pages written for search and conversion",
      "Enquiry and contact forms with click-to-call and WhatsApp",
      "Technical SEO: meta tags, schema markup and sitemap",
      "Fast loading with optimised images and code",
      "Fully responsive across mobile, tablet and desktop",
    ],
    tech: ["Next.js", "Tailwind CSS", "SEO Optimization", "Performance Tuning"],
    image: null,
    url: "https://www.info-gates.com",
  },
];

// Full-page screenshots for the hover-scroll previews, and URL slugs for /work/[slug]
projects.forEach((p) => {
  if (p.image) p.full = p.image.replace(".jpg", "-full.jpg");
  p.slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
});

export const projectHref = (p) => `/work/${p.slug}`;

export const technologies = [
  ["Frontend", ["Next.js", "React", "Vue.js", "Angular", "Svelte", "Remix"]],
  ["Mobile", ["Flutter", "React Native", "Expo"]],
  ["Languages", ["TypeScript", "JavaScript", "Python", "PHP"]],
  ["Backend", ["Node.js", "Express.js", "NestJS", "Django", "FastAPI", "Laravel"]],
  ["Databases", ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase", "Firebase", "Prisma"]],
  ["API & Architecture", ["REST API", "GraphQL", "tRPC", "WebSockets"]],
  ["Styling", ["Tailwind CSS", "Shadcn UI", "Material UI", "Bootstrap", "Sass", "CSS3"]],
  ["Animation", ["Framer Motion", "GSAP", "Lottie"]],
  ["Cloud", ["AWS", "Vercel", "Google Cloud", "Azure", "Cloudflare", "DigitalOcean"]],
  ["DevOps", ["Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Nginx", "PM2"]],
  ["AI & ML", ["OpenAI API", "Claude API", "Gemini API", "LangChain", "TensorFlow"]],
  ["CMS & E-commerce", ["Shopify", "WordPress", "WooCommerce", "Strapi"]],
  ["Tools & Testing", ["Git", "Figma", "Postman", "Jest", "Cypress", "Playwright", "Vite", "Webpack", "ESLint"]],
  ["Payments & Integrations", ["Razorpay", "Stripe", "Twilio", "WhatsApp API", "Nodemailer"]],
];

export const marqueeTech = ["Next.js", "React", "Node.js", "TypeScript", "Flutter", "React Native", "Laravel", "MongoDB", "PostgreSQL", "AWS", "Vercel", "Docker", "OpenAI", "Tailwind CSS", "Razorpay", "Shopify"];

export const testimonials = [
  { name: "Ahmed Al-Mansoori", role: "CEO, Vega Wealth", place: "Dubai, UAE", text: "DevSphere Solutions delivered a world-class platform that transformed our client engagement. Professional, strategic, and exceeded expectations." },
  { name: "Rajesh Kumar", role: "Founder & Managing Director, Krishi Kutumb", place: "India", text: "They understood our business needs from day one and delivered a solution that significantly improved operational efficiency." },
  { name: "Sarah Mitchell", role: "Operations Director, Auto Excel Pro", place: "Global", text: "The platform transformed our operations — increased efficiency, better customer relationships, and measurable growth." },
  { name: "Priya Sharma", role: "E-Commerce Director, The Accessory Center", place: "India", text: "Our platform exceeded expectations. Responsive team, professional execution, and a seamless customer experience." },
  { name: "Dr. James Wilson", role: "CTO, MPCPCT", place: "Global", text: "A robust EdTech platform with excellent reliability. DevSphere is an ideal long-term technology partner." },
];

export const projectTypes = ["Website", "SaaS Platform", "Mobile App", "E-commerce", "Admin Dashboard", "Other"];
export const budgets = ["Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "₹5,00,000+"];
