import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  Blocks,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Database,
  Factory,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  PackageCheck,
  Plane,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  UsersRound,
  Wrench,
} from "lucide-react";

export type ContentItem = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  short: string;
  icon: LucideIcon;
  problems: string[];
  capabilities: string[];
  outcomes: string[];
};

export const services: ContentItem[] = [
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    eyebrow: "Start with the problem",
    description: "Tell us what you want to achieve. We will define the product, technology decisions, risks, and a roadmap that makes sense for your organization.",
    short: "From a business challenge to a pragmatic technology plan.",
    icon: BrainCircuit,
    problems: ["Unclear product scope", "Conflicting technology choices", "Legacy constraints", "Uncertain AI opportunities"],
    capabilities: ["Product strategy", "Architecture review", "Technology selection", "Integration mapping", "Security and scalability planning", "Delivery roadmap and estimates"],
    outcomes: ["A sharper problem definition", "Decisions your team can act on", "A staged delivery plan"],
  },
  {
    slug: "product-development",
    title: "Product Development",
    eyebrow: "From insight to release",
    description: "We shape, design, build, and evolve digital products around real users, business constraints, and the path to scale.",
    short: "Strategy, design, engineering, and iteration in one product team.",
    icon: Blocks,
    problems: ["Early product uncertainty", "Slow product delivery", "Misaligned teams", "Features without a clear user need"],
    capabilities: ["Product discovery", "MVP planning", "Interaction design", "Full-stack development", "Product analytics", "Continuous delivery"],
    outcomes: ["A useful first release", "A coherent product system", "A clear next-version backlog"],
  },
  {
    slug: "software-development",
    title: "Custom Software Development",
    eyebrow: "Built around your operations",
    description: "Secure, maintainable software for the processes and opportunities that off-the-shelf tools cannot quite handle.",
    short: "Reliable software tailored to the way your organization works.",
    icon: Code2,
    problems: ["Disconnected workflows", "Spreadsheet-heavy operations", "Rigid packaged tools", "Manual data handoffs"],
    capabilities: ["Business systems", "Internal tools", "API development", "System integrations", "Modernization", "Long-term maintenance"],
    outcomes: ["Less manual work", "Better operational visibility", "A platform that can evolve"],
  },
  {
    slug: "web-development",
    title: "Web Application Development",
    eyebrow: "Fast, accessible, dependable",
    description: "High-performance web applications that feel considered for customers, employees, and administrators alike.",
    short: "Web products with polished experiences and durable engineering.",
    icon: LayoutDashboard,
    problems: ["Slow or fragmented web experiences", "Complex workflows", "Unreliable integrations", "Hard-to-use internal systems"],
    capabilities: ["Web applications", "Customer portals", "SaaS platforms", "E-commerce", "Dashboards", "Progressive web apps"],
    outcomes: ["A faster user experience", "Clearer self-service", "A scalable web foundation"],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    eyebrow: "Useful in the real world",
    description: "Purposeful mobile products for teams and customers who need dependable workflows wherever work happens.",
    short: "Native-feeling mobile experiences for essential workflows.",
    icon: Smartphone,
    problems: ["Field teams without live data", "Manual approvals", "Fragmented customer journeys", "Offline operational work"],
    capabilities: ["iOS and Android apps", "Cross-platform development", "Mobile UX", "Secure authentication", "Push notifications", "Backend integration"],
    outcomes: ["Work that moves with your team", "A connected customer experience", "Fewer paper-based processes"],
  },
  {
    slug: "ai",
    title: "AI Solutions",
    eyebrow: "Applied intelligence",
    description: "Practical AI systems that search knowledge, automate routine work, and make useful information easier to reach.",
    short: "Generative AI, RAG, automation, and intelligent workflows.",
    icon: Sparkles,
    problems: ["Knowledge hidden in documents", "Repeated support questions", "Manual triage", "Slow data analysis"],
    capabilities: ["Generative AI", "RAG systems", "AI assistants", "Document intelligence", "AI search", "Workflow automation"],
    outcomes: ["Faster answers", "More consistent operations", "Human teams focused on higher-value work"],
  },
  {
    slug: "cloud",
    title: "Cloud Solutions",
    eyebrow: "Infrastructure that fits",
    description: "Cloud architecture and migration plans designed for resilience, cost control, security, and room to grow.",
    short: "Cloud foundations with clarity around cost, security, and scale.",
    icon: Cloud,
    problems: ["Unpredictable infrastructure costs", "Deployment bottlenecks", "On-premise limitations", "Limited resilience"],
    capabilities: ["Cloud architecture", "Cloud migration", "Managed hosting", "Serverless systems", "Observability", "Cost optimization"],
    outcomes: ["A resilient platform", "More predictable operations", "Infrastructure ready for growth"],
  },
  {
    slug: "devops",
    title: "DevOps",
    eyebrow: "Deliver with confidence",
    description: "Repeatable delivery pipelines, monitoring, and infrastructure practices that help teams ship more safely and often.",
    short: "Automated delivery, observability, and infrastructure discipline.",
    icon: Wrench,
    problems: ["Risky releases", "Manual deployments", "Production blind spots", "Slow incident response"],
    capabilities: ["CI/CD", "Infrastructure as code", "Monitoring", "Release automation", "Environment management", "Reliability practices"],
    outcomes: ["Faster, safer releases", "Better production insight", "A calmer delivery rhythm"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    eyebrow: "Security by design",
    description: "Security assessments and practical safeguards built into the technology decisions that matter most.",
    short: "Risk-aware systems that protect people, data, and operations.",
    icon: ShieldCheck,
    problems: ["Sensitive data exposure", "Unclear access controls", "Unpatched application risks", "Third-party integration risk"],
    capabilities: ["Security review", "Secure application design", "Identity and access", "Threat modeling", "Security testing", "Compliance readiness"],
    outcomes: ["Clearer risk visibility", "Stronger application controls", "A practical security baseline"],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    eyebrow: "Make data useful",
    description: "Data platforms and focused dashboards that turn scattered operational information into decisions people can make.",
    short: "Data pipelines, business intelligence, and decision-ready dashboards.",
    icon: BarChart3,
    problems: ["Data in disconnected tools", "Manual reports", "Lagging indicators", "Low trust in numbers"],
    capabilities: ["Data integration", "Analytics dashboards", "Reporting systems", "Data modeling", "Predictive analytics", "Data governance"],
    outcomes: ["A shared view of performance", "Less reporting overhead", "Better-informed decisions"],
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    eyebrow: "Designed for clarity",
    description: "Research-led product design that makes complicated systems easier to understand, learn, and use.",
    short: "Human-centered interfaces for products people enjoy using.",
    icon: Activity,
    problems: ["Poor product adoption", "Complex user journeys", "Inconsistent interfaces", "Support-heavy workflows"],
    capabilities: ["UX research", "Information architecture", "UI design", "Design systems", "Prototyping", "Usability testing"],
    outcomes: ["Clearer workflows", "More confident users", "A reusable visual language"],
  },
  {
    slug: "qa",
    title: "QA & Testing",
    eyebrow: "Quality that is deliberate",
    description: "Quality engineering that finds risks early and protects the releases your users rely on.",
    short: "Testing practices for dependable launches and calmer maintenance.",
    icon: PackageCheck,
    problems: ["Escaped production defects", "Slow regression cycles", "Unclear release confidence", "Inconsistent quality processes"],
    capabilities: ["Test strategy", "Manual QA", "Automation", "Performance testing", "Security testing support", "Release validation"],
    outcomes: ["More confident releases", "Fewer repeat defects", "Quality visibility across teams"],
  },
  {
    slug: "legacy-modernization",
    title: "Legacy Application Modernization",
    eyebrow: "Keep what works. Improve what limits you.",
    description: "A practical path from aging applications to more maintainable, secure, and adaptable systems.",
    short: "Modernize critical software without losing operational knowledge.",
    icon: ArrowLeftRight,
    problems: ["End-of-life technology", "Slow change cycles", "Security exposure", "Fragile integrations"],
    capabilities: ["Application assessment", "Incremental modernization", "Platform migration", "API enablement", "UI refresh", "Data migration planning"],
    outcomes: ["Lower technical risk", "A more adaptable platform", "A staged modernization plan"],
  },
  {
    slug: "managed-services",
    title: "Managed Technology Services",
    eyebrow: "A dependable technology partner",
    description: "Ongoing product, infrastructure, and support capabilities for organizations that need technology to keep moving.",
    short: "Ongoing care for the products and systems your organization runs on.",
    icon: UsersRound,
    problems: ["Thin internal teams", "Unplanned maintenance", "Growing support needs", "Infrastructure upkeep"],
    capabilities: ["Product maintenance", "Application support", "Cloud operations", "Enhancement roadmaps", "Monitoring", "Technical advisory"],
    outcomes: ["More reliable operations", "A stable support rhythm", "Access to the right expertise"],
  },
];

export const industries: ContentItem[] = [
  {
    slug: "education", title: "Education", eyebrow: "Digital campuses", description: "Technology systems that help institutions connect students, faculty, parents, and operations in one considered experience.", short: "Modern systems for student life, academics, and operations.", icon: GraduationCap,
    problems: ["Paper-based campus processes", "Disconnected student services", "Low parent visibility", "Fragmented operational data"], capabilities: ["University OS", "Learning systems", "Hostel and transport", "Student portals", "Attendance and exams", "Analytics"], outcomes: ["Connected student services", "Clearer campus operations", "Better information flow"],
  },
  {
    slug: "healthcare", title: "Healthcare", eyebrow: "Connected care", description: "Secure, usable digital systems that help healthcare organizations coordinate care, operations, and patient communication.", short: "Patient-centric systems designed around security and usability.", icon: HeartPulse,
    problems: ["Fragmented patient journeys", "Manual scheduling", "Limited care visibility", "Sensitive data requirements"], capabilities: ["Patient portals", "Appointment systems", "Care workflows", "Secure integrations", "Operational dashboards", "Mobile experiences"], outcomes: ["Smoother service delivery", "More informed teams", "Better patient access"],
  },
  {
    slug: "finance", title: "Finance", eyebrow: "Trust at every interaction", description: "Financial technology and operational software designed around clarity, control, integration, and responsible data handling.", short: "Secure digital experiences for financial operations and customers.", icon: Scale,
    problems: ["Manual approvals", "Legacy customer systems", "Reconciliation overhead", "Audit-ready reporting needs"], capabilities: ["Customer portals", "Workflow automation", "Reporting", "Secure APIs", "Analytics", "Modernization"], outcomes: ["More controlled operations", "Useful customer experiences", "Clearer reporting"],
  },
  {
    slug: "retail", title: "Retail", eyebrow: "Connected commerce", description: "Customer, inventory, and operations systems for retailers that want a clearer view of the business across channels.", short: "Retail technology across store, stock, customer, and commerce.", icon: ShoppingBag,
    problems: ["Inventory uncertainty", "Disconnected sales channels", "Manual customer follow-up", "Slow reporting"], capabilities: ["POS systems", "Inventory", "CRM", "E-commerce", "Loyalty workflows", "Analytics"], outcomes: ["Better stock visibility", "A more consistent customer experience", "Actionable retail data"],
  },
  {
    slug: "manufacturing", title: "Manufacturing", eyebrow: "Operations in view", description: "Operational systems that bring planning, production, inventory, and reporting closer together.", short: "ERP and workflow systems for complex production operations.", icon: Factory,
    problems: ["Disconnected production data", "Inventory inefficiency", "Manual planning", "Limited operational visibility"], capabilities: ["ERP", "Production planning", "Inventory", "Procurement", "Reporting", "System integrations"], outcomes: ["More visible operations", "Better planning signals", "Improved process control"],
  },
  {
    slug: "real-estate", title: "Real Estate", eyebrow: "Better property operations", description: "Digital products for property teams, agents, tenants, and owners that simplify the many moving pieces of real estate operations.", short: "Property, customer, and workflow systems for real estate teams.", icon: Building2,
    problems: ["Scattered property information", "Slow lead follow-up", "Manual tenant communication", "Opaque portfolio reporting"], capabilities: ["Property management", "CRM", "Customer portals", "Document workflows", "Mobile apps", "Analytics"], outcomes: ["Faster follow-up", "More organized portfolios", "Simpler tenant experiences"],
  },
  {
    slug: "hospitality", title: "Hospitality", eyebrow: "Service, orchestrated", description: "Guest and operations technology designed to make service delivery more responsive, consistent, and visible.", short: "Hospitality systems for service teams, guests, and operations.", icon: Plane,
    problems: ["Manual order flow", "Disconnected back-of-house data", "Inventory leakage", "Slow service reporting"], capabilities: ["Restaurant management", "POS", "Guest portals", "Inventory", "Mobile ordering", "Reporting"], outcomes: ["Smoother service", "Better cost visibility", "More connected teams"],
  },
  {
    slug: "logistics", title: "Logistics", eyebrow: "Operations that keep moving", description: "Connected systems for fleets, routes, deliveries, and support teams that need real-time operational clarity.", short: "Logistics tools for fleets, routes, delivery, and customer visibility.", icon: Truck,
    problems: ["Limited fleet visibility", "Manual dispatch", "Unclear delivery status", "Disconnected customer updates"], capabilities: ["Fleet management", "Route workflows", "Delivery apps", "Customer portals", "Integrations", "Operational analytics"], outcomes: ["More visible delivery operations", "Faster response", "Better customer updates"],
  },
  {
    slug: "startups", title: "Startups", eyebrow: "Build the right first version", description: "Product strategy and delivery for founding teams turning a promising idea into a focused, testable, scalable product.", short: "MVP planning and product delivery for ambitious startup teams.", icon: Sparkles,
    problems: ["Uncertain MVP scope", "Limited engineering bandwidth", "Need to validate fast", "Investor or market readiness"], capabilities: ["Product strategy", "MVP development", "UI/UX", "SaaS platforms", "AI features", "Fractional technology leadership"], outcomes: ["A sharper product thesis", "A credible first release", "A platform that can grow"],
  },
];

export const solutions: ContentItem[] = [
  {
    slug: "erp", title: "ERP Systems", eyebrow: "One operating picture", description: "Connected business systems for finance, procurement, inventory, operations, people, and reporting.", short: "A business operating system built around your real workflows.", icon: Database,
    problems: ["Fragmented systems", "Manual reconciliations", "Poor cross-team visibility", "Rigid reporting"], capabilities: ["CRM", "Inventory", "Billing", "Procurement", "Employee workflows", "Analytics"], outcomes: ["A shared source of truth", "Streamlined operations", "Data ready for decisions"],
  },
  {
    slug: "crm", title: "CRM Platforms", eyebrow: "Every relationship in context", description: "Customer relationship systems that bring sales, service, communication, and insight into a more useful flow.", short: "Customer systems that help teams follow through.", icon: UsersRound,
    problems: ["Lost leads", "Scattered customer data", "Inconsistent follow-up", "Low sales visibility"], capabilities: ["Lead management", "Customer profiles", "Sales workflows", "Service queues", "Automations", "Reporting"], outcomes: ["Better follow-up", "Clearer pipelines", "A more complete customer view"],
  },
  {
    slug: "saas", title: "SaaS Platforms", eyebrow: "Software as a business", description: "Multi-tenant software products designed for a clear customer experience, operational control, and sustainable growth.", short: "Subscription software designed to launch, learn, and scale.", icon: Cloud,
    problems: ["Complex product setup", "Subscription management", "Multi-tenant data needs", "Scaling uncertainty"], capabilities: ["Product design", "Multi-tenancy", "Billing integrations", "Admin platforms", "Analytics", "Cloud architecture"], outcomes: ["A focused platform", "A ready-to-evolve foundation", "Clear visibility into usage"],
  },
  {
    slug: "ai-automation", title: "AI Automation", eyebrow: "Remove routine friction", description: "Automation workflows that combine AI, business logic, and the systems your teams already use.", short: "Intelligent automation for repetitive, document-heavy work.", icon: BrainCircuit,
    problems: ["Repeated manual steps", "Document processing queues", "Slow information retrieval", "Inconsistent triage"], capabilities: ["AI agents", "RAG", "Document intelligence", "Workflow automation", "Integrations", "Human escalation"], outcomes: ["Faster routine work", "More consistent handoffs", "Auditable workflows"],
  },
  {
    slug: "university-os", title: "University OS", eyebrow: "A connected digital campus", description: "A concept digital operating system that unifies modern student services, campus operations, and trusted communication.", short: "A complete digital operating system for modern universities.", icon: GraduationCap,
    problems: ["Disconnected campus workflows", "Manual student services", "Fragmented parent communication", "Limited operational insight"], capabilities: ["Student management", "Hostel management", "Gate pass and QR security", "Attendance", "Fees", "Analytics"], outcomes: ["A connected campus experience", "Clearer daily operations", "Better service visibility"],
  },
  {
    slug: "business-automation", title: "Business Automation", eyebrow: "Workflows that move", description: "Thoughtful automation for approvals, customer requests, documents, reporting, and the routine work that slows good teams down.", short: "Automation that makes core operations more responsive.", icon: ArrowLeftRight,
    problems: ["Repeated data entry", "Slow approvals", "Manual handovers", "Untracked requests"], capabilities: ["Workflow design", "Approvals", "System integrations", "Notifications", "Document workflows", "Analytics"], outcomes: ["Less operational drag", "More traceable work", "Time returned to teams"],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  type: "Concept Product" | "Demo Project";
  category: string[];
  description: string;
  accent: string;
  technologies: string[];
  modules: string[];
  problem: string;
  solution: string;
  architecture: string[];
  roles: string[];
  workflow: string[];
  outcomes: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "university-os", title: "University OS", type: "Concept Product", category: ["Web", "Education", "SaaS"], description: "A complete digital operating system for modern universities.", accent: "blue", technologies: ["Next.js", "TypeScript", "PostgreSQL", "Role-based access", "Cloud"],
    modules: ["Student Management", "Hostel Management", "Online Gate Pass", "QR Security", "Leave Management", "Fees", "Complaints", "Mess", "Attendance", "Library", "Transport", "Exams", "Notifications", "Analytics", "Parent Portal"],
    problem: "University services are often distributed across paper processes, unrelated portals, and informal communication. That leaves students waiting, staff reconciling information, and leadership without a dependable operational view.",
    solution: "University OS brings essential campus services into a single role-aware platform, designed around the way students, faculty, parents, security, and administrators actually move through a day.",
    architecture: ["Role-aware web and mobile experiences", "Modular service domains", "Secure API layer", "Relational system of record", "Event-driven notifications", "Analytics-ready reporting"],
    roles: ["Students", "Parents", "Faculty", "Department staff", "Hostel teams", "Security", "University administrators"],
    workflow: ["A student makes a request", "The right team reviews it", "Rules and approvals guide the flow", "Relevant people are notified", "The outcome is visible and auditable"],
    outcomes: ["A more connected campus experience", "Reduced operational friction", "Clearer service ownership", "Decision-ready campus data"],
  },
  {
    slug: "business-erp", title: "Business ERP", type: "Demo Project", category: ["ERP", "Business", "Web"], description: "An integrated operating view for growing businesses with complex day-to-day workflows.", accent: "orange", technologies: ["React", "Node.js", "PostgreSQL", "REST APIs", "Cloud"],
    modules: ["CRM", "Inventory", "Billing", "Procurement", "Employees", "Reports", "Analytics"],
    problem: "Growing businesses often run core operations across a patchwork of spreadsheets and disconnected tools, making it difficult to see what is happening and act with confidence.",
    solution: "This ERP concept organizes relationships, procurement, inventory, billing, employee operations, and reporting into a flexible operational workspace.",
    architecture: ["Domain-based services", "Central relational data model", "Role-based administration", "Integration-ready APIs", "Analytics layer"],
    roles: ["Operations", "Sales", "Finance", "Procurement", "Managers", "Administrators"],
    workflow: ["A customer need enters CRM", "Operations checks availability", "Procurement and billing follow a traceable flow", "Leaders see the business state in reports"],
    outcomes: ["Better operational visibility", "Fewer duplicate handoffs", "Clearer reporting", "A foundation for automation"],
  },
  {
    slug: "ai-support", title: "AI Customer Support", type: "Demo Project", category: ["AI", "SaaS", "Business"], description: "A support workspace where AI handles the routine and humans handle the nuance.", accent: "violet", technologies: ["Generative AI", "RAG", "Vector search", "PostgreSQL", "TypeScript"],
    modules: ["AI chatbot", "RAG", "Document knowledge base", "Ticket management", "Analytics", "Escalation"],
    problem: "Support teams spend too much time locating answers, repeating guidance, and triaging conversations before they can apply their expertise to the cases that truly need it.",
    solution: "The concept combines a governed knowledge base, retrieval-augmented answers, ticket workflows, and human escalation controls.",
    architecture: ["Knowledge ingestion and review", "Embeddings and retrieval layer", "Guardrailed answer service", "Agent workspace", "Feedback and evaluation loop"],
    roles: ["Customers", "Support agents", "Knowledge owners", "Operations leaders"],
    workflow: ["A customer asks a question", "The system retrieves approved context", "The assistant answers or creates a ticket", "Agents take over when judgment is needed", "Feedback improves the knowledge base"],
    outcomes: ["Faster first responses", "More consistent answers", "A clearer support queue", "Governed AI adoption"],
  },
  {
    slug: "restaurant-management", title: "Restaurant Management", type: "Demo Project", category: ["Business", "Mobile", "Web"], description: "A connected restaurant operations concept from order to kitchen to reporting.", accent: "green", technologies: ["Next.js", "Mobile-first UX", "PostgreSQL", "Real-time updates", "Cloud"],
    modules: ["POS", "Orders", "Kitchen", "Inventory", "Billing", "Reports"],
    problem: "Front-of-house and back-of-house teams often operate through separate tools and paper checks, leaving managers with limited real-time visibility.",
    solution: "This concept connects ordering, kitchen operations, inventory, billing, and reporting into a shared, accessible workflow.",
    architecture: ["Order management domain", "Kitchen display workflow", "Inventory service", "Billing integration", "Operational reporting"],
    roles: ["Front-of-house", "Kitchen", "Managers", "Finance", "Administrators"],
    workflow: ["An order is placed", "The kitchen sees prioritised preparation", "Inventory records movement", "Billing closes the transaction", "Managers read the daily picture"],
    outcomes: ["Clearer service coordination", "More visible stock movement", "Simpler daily reporting"],
  },
];

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  sections: { heading: string; body: string }[];
};

export const insights: Insight[] = [
  {
    slug: "turn-business-idea-into-saas-product", title: "How to Turn a Business Idea Into a SaaS Product", excerpt: "A practical way to move from an idea to a focused product without trying to build everything at once.", category: "Product Strategy", readTime: "6 min read", date: "2026-08-12",
    sections: [
      { heading: "Start with the change you want to create", body: "A strong product begins with a specific user, a costly or frustrating problem, and a clear picture of what improves when the problem is solved. Features come later." },
      { heading: "Define the smallest useful workflow", body: "An MVP is not a smaller version of every ambition. It is the smallest end-to-end experience that lets a real customer complete a valuable job." },
      { heading: "Make technology decisions in context", body: "The right stack follows the product's constraints: speed to learn, integrations, security needs, operational ownership, and the path to scale." },
    ],
  },
  {
    slug: "ai-automate-business-operations", title: "How AI Can Automate Business Operations", excerpt: "Where AI is genuinely useful in operations, and how to introduce it without losing control of important work.", category: "AI", readTime: "5 min read", date: "2026-07-28",
    sections: [
      { heading: "Look for repeatable information work", body: "Good opportunities often involve classifying requests, extracting information from documents, finding answers in approved material, or drafting routine responses." },
      { heading: "Keep humans where judgment matters", body: "Automation is strongest when it has a clear boundary. High-impact decisions, exceptions, and ambiguous cases need simple escalation routes and visible context." },
      { heading: "Treat the knowledge base as a product", body: "AI answers are only as dependable as the information they are allowed to retrieve. Ownership, review, and feedback are essential parts of the system." },
    ],
  },
  {
    slug: "university-hostel-management-digital", title: "University Hostel Management: From Manual Processes to Digital", excerpt: "A close look at how a shared digital workflow can make hostel operations easier for students and staff.", category: "Education", readTime: "7 min read", date: "2026-07-08",
    sections: [
      { heading: "Map the actual journeys", body: "Room allocation, leave, complaints, visitor management, mess feedback, and payments affect different people. A useful system makes those journeys visible before it tries to automate them." },
      { heading: "Design for both speed and accountability", body: "Students need a quick way to make a request. Staff need assignment, status, escalation, and a history. The same workflow should serve both needs." },
      { heading: "Connect the wider campus", body: "Hostel services are more useful when they relate cleanly to student records, security, parents, finance, and notifications rather than becoming another isolated portal." },
    ],
  },
  {
    slug: "choose-right-technology-stack", title: "How to Choose the Right Technology Stack", excerpt: "A technology stack is a product decision, not a popularity contest. Here is what should guide it.", category: "Technology", readTime: "5 min read", date: "2026-06-21",
    sections: [
      { heading: "Anchor on constraints", body: "Your users, timeline, security obligations, integration landscape, delivery team, and expected change rate matter more than a framework's current buzz." },
      { heading: "Prefer boring foundations for critical paths", body: "Well-understood technology reduces delivery and hiring risk. Save experimentation for bounded areas where it can create a real advantage." },
      { heading: "Design for operating, not only launching", body: "A product needs observability, backup, access control, deployment discipline, and a sensible path for change from its first meaningful release." },
    ],
  },
  {
    slug: "erp-vs-custom-software", title: "ERP vs Custom Software", excerpt: "How to decide whether an ERP, custom system, or blended approach fits the way your organization actually works.", category: "Business Systems", readTime: "6 min read", date: "2026-06-03",
    sections: [
      { heading: "Choose ERP when the process is conventional", body: "Standard finance, procurement, inventory, and HR workflows can benefit from the maturity and established patterns of ERP systems." },
      { heading: "Build custom where the advantage is unique", body: "A distinctive customer experience, specialised workflow, or meaningful integration gap may justify tailored software around the core platform." },
      { heading: "A blended strategy is often the practical one", body: "An organization can preserve an ERP system of record while building focused applications and integrations that give teams a better day-to-day experience." },
    ],
  },
];

export function getBySlug<T extends { slug: string }>(items: T[], slug: string) {
  return items.find((item) => item.slug === slug);
}
