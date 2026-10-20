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
  location: "Muzaffarnagar, Uttar Pradesh, India",
  responseTime: "1–2 business days",
  socials: [
    { label: "LinkedIn", short: "in", handle: "DevSphere Solutions", href: "https://www.linkedin.com/company/devspheresolutions/" },
    { label: "Instagram", short: "ig", handle: "@dev.spheresolutions", href: "https://www.instagram.com/dev.spheresolutions/" },
    { label: "WhatsApp", short: "wa", href: "https://wa.me/919457818861" },
  ],
};

export const team = [
  {
    name: "Syed Ali Zaddi",
    role: "Founder",
    bio: "Syed Ali founded DevSphere Solutions to give growing businesses a single, dependable technology partner. He leads the company's vision, client partnerships and delivery — working closely with founders and business owners across India, Dubai and Oman to turn their ideas into scalable websites, SaaS platforms and business software.",
    linkedin: "https://www.linkedin.com/in/ali-saqulain-7404a8287/",
    phone: { label: "+91 94578 18861", href: "tel:+919457818861" },
    whatsapp: "https://wa.me/919457818861",
  },
  {
    name: "Mohd Anas Ansari",
    role: "Co-Founder",
    bio: "Anas co-founded DevSphere Solutions and drives how products get built and shipped. He works hands-on with the team across planning, development and deployment — making sure every project goes live production-ready, performs fast and keeps improving long after launch.",
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
  { title: "Website Development", text: "Fast, SEO-friendly business and brand websites built to rank and convert.", icon: "M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01", tags: ["Next.js", "SEO", "Performance"], image: "/projects/royal-metro-ev-full.jpg" },
  { title: "Full-Stack Web Apps", text: "End-to-end web applications with secure backends, APIs and modern frontends.", icon: "M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12", tags: ["React", "Node.js", "REST / GraphQL"], image: "/projects/crossline-cricket-stadium-full.jpg" },
  { title: "SaaS Development", text: "Multi-tenant SaaS platforms with subscriptions, auth and scalable cloud architecture.", icon: "M7 18a4 4 0 01-.5-8 6 6 0 0111.5 1.5A3.5 3.5 0 0117.5 18H7z", tags: ["Auth", "Subscriptions", "Cloud"], image: "/projects/digital-career-center-full.jpg" },
  { title: "E-commerce Development", text: "Online stores with payments, inventory and seamless checkout experiences.", icon: "M3 4h2l2.4 11h11L21 7H6.2M9 20h.01M18 20h.01", tags: ["Payments", "Inventory", "B2B / B2C"], image: "/projects/marina-muse-international-full.jpg" },
  { title: "Mobile App Development", text: "Cross-platform iOS & Android apps with Flutter, React Native and Expo.", icon: "M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2", tags: ["Flutter", "React Native", "Expo"], image: "/projects/fixigo-repair-full.jpg" },
  { title: "Admin Dashboards", text: "CRMs, billing, inventory and analytics dashboards that run your operations.", icon: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z", tags: ["CRM", "Billing", "Analytics"], image: "/projects/chacha-mobile-crm-full.jpg" },
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
    title: "Chacha Mobile CRM",
    category: "CRM / Business Management",
    location: "India",
    text: "Tally-like Sales & Purchase CRM system with inventory control, billing, and customer tracking — built after a successful website delivery.",
    stats: [["5,000+", "SKUs Managed"], ["1,200+", "Partner Shops"]],
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    image: "/projects/chacha-mobile-crm.jpg",
    url: "https://chachamobile.in",
  },
  {
    title: "Royal Metro EV",
    category: "Electric Vehicles / Brand Website",
    location: "India",
    text: "Modern, SEO-optimized electric vehicle platform with futuristic UI, ultra-fast performance, and conversion-focused design.",
    stats: [["60V", "Battery"], ["150 KM", "Range"]],
    tech: ["Next.js", "Tailwind CSS", "SEO Optimization", "Performance Tuning"],
    image: "/projects/royal-metro-ev.jpg",
    url: "https://royalmetroev.com",
  },
  {
    title: "Digital Career Center",
    category: "EdTech / IT Training",
    location: "India",
    text: "Official IT training and career advancement platform with fast, scalable, and fully responsive web experience.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    image: "/projects/digital-career-center.jpg",
    url: "https://digitalcareercenter.com",
  },
  {
    title: "Crossline Cricket Stadium",
    category: "Sports Booking Platform",
    location: "India",
    text: "Cricket stadium website with booking system, admin slot management, match updates, income/expense tracking, and inventory management.",
    tech: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    image: "/projects/crossline-cricket-stadium.jpg",
    url: "https://crosslinecricketstadium.in",
  },
  {
    title: "Dunex Dubai",
    category: "Real Estate / Investment",
    location: "UAE",
    text: "Dubai real estate investment platform with property listings, ROI-focused content, lead generation, and authentication flows.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    image: null,
    url: "https://dunexdubai.com",
  },
  {
    title: "MPCPCT",
    category: "EdTech / Exam Platform",
    location: "India",
    text: "Online exam preparation and typing test platform with admin dashboard, certificates, and Hindi/English typing features.",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    image: "/projects/mpcpct.jpg",
    url: "https://mpcpct.com",
  },
  {
    title: "Marina Muse International",
    category: "E-commerce / Export & Manufacturing",
    location: "India · Global",
    text: "B2C retail store and B2B wholesale platform for premium nautical instruments and handcrafted brass décor — with trade accounts, bulk quotes, custom manufacturing, worldwide shipping and AI-powered product search.",
    stats: [["B2C + B2B", "Storefronts"], ["Worldwide", "Shipping"]],
    tech: ["Next.js", "E-commerce", "B2B Wholesale", "AI Search"],
    image: "/projects/marina-muse-international.jpg",
    url: "https://marinamuseinternational.com",
  },
  {
    title: "Fixigo Repair",
    category: "Doorstep Repair Services",
    location: "India",
    text: "Doorstep electronics and home-appliance repair platform for Muzaffarnagar, Shamli, Meerut & Saharanpur — online booking via WhatsApp, live repair-status tracking, device recycling and local SEO.",
    stats: [["4.9/5", "Customer Rating"], ["10+", "Technicians"]],
    tech: ["Next.js", "WhatsApp Booking", "Repair Tracking", "Local SEO"],
    image: "/projects/fixigo-repair.jpg",
    url: "https://www.fixigorepair.in",
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
  { name: "Mohammed Hassan", role: "Business Development Manager, Dunex Dubai", place: "UAE", text: "Outstanding service and delivery. DevSphere demonstrated deep market understanding, and the platform became central to our business success." },
  { name: "Priya Sharma", role: "E-Commerce Director, The Accessory Center MZN", place: "India", text: "Our platform exceeded expectations. Responsive team, professional execution, and a seamless customer experience." },
  { name: "Dr. James Wilson", role: "CTO, MPCPCT", place: "Global", text: "A robust EdTech platform with excellent reliability. DevSphere is an ideal long-term technology partner." },
];

export const projectTypes = ["Website", "SaaS Platform", "Mobile App", "E-commerce", "Admin Dashboard", "Other"];
export const budgets = ["Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "₹5,00,000+"];
