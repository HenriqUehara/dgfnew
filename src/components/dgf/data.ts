// DGF Website — typed, centralized data.

export type CompanyStatus = "ativo" | "saida";

export interface Company {
  id: number;
  ini: string;
  name: string;
  desc: string;
  type: CompanyStatus;
  highlight?: boolean;
}

export const companies: Company[] = [
  { id: 1, ini: "TR", name: "Tractian", desc: "Industrial predictive maintenance with IoT and AI", type: "ativo", highlight: true },
  { id: 2, ini: "SO", name: "Sólides", desc: "People management for SMBs", type: "ativo", highlight: true },
  { id: 3, ini: "ME", name: "Memed", desc: "Digital prescription platform for physicians", type: "ativo", highlight: true },
  { id: 4, ini: "IN", name: "InHire", desc: "Data-driven recruiting for mid-market companies", type: "ativo", highlight: true },
  { id: 5, ini: "MG", name: "Maggu", desc: "Payments infrastructure for the digital economy", type: "ativo", highlight: true },
  { id: 6, ini: "CS", name: "Cargo Sapiens", desc: "Logistics intelligence for the freight industry", type: "ativo", highlight: true },
  { id: 7, ini: "MF", name: "Mudflap", desc: "Financial platform for truckers in the US", type: "ativo", highlight: true },
  { id: 8, ini: "TK", name: "Takeat", desc: "Digital menu and payments for restaurants", type: "ativo", highlight: true },
  { id: 9, ini: "D4", name: "Data4Sales", desc: "B2B commercial intelligence platform", type: "ativo", highlight: true },
  { id: 10, ini: "RD", name: "RD Station", desc: "Digital marketing, acquired by TOTVS in 2020", type: "saida", highlight: true },
  { id: 11, ini: "DA", name: "Daitan", desc: "Software engineering, strategic exit", type: "saida", highlight: true },
  { id: 12, ini: "MO", name: "Mosyle", desc: "Apple device management for enterprises", type: "saida", highlight: true },
  { id: 13, ini: "SB", name: "SpeedBird", desc: "Aerial logistics operation with autonomous drones", type: "ativo" },
  { id: 14, ini: "F1", name: "Frota 162", desc: "Fleet management and corporate mobility", type: "ativo" },
  { id: 15, ini: "KY", name: "Kyte", desc: "Management system for small merchants", type: "ativo" },
  { id: 16, ini: "TS", name: "Triple Session", desc: "Training and analytics for sales teams", type: "ativo" },
  { id: 17, ini: "AR", name: "Aravita", desc: "Produce supply for food service", type: "ativo" },
  { id: 18, ini: "SS", name: "Safespace", desc: "Whistleblowing channel and corporate compliance", type: "ativo" },
  { id: 19, ini: "GP", name: "Greenplat", desc: "Environmental traceability for the supply chain", type: "ativo" },
  { id: 20, ini: "SL", name: "Slang", desc: "AI-driven corporate English training", type: "ativo" },
  { id: 21, ini: "BD", name: "Birdie", desc: "Market intelligence from product reviews", type: "ativo" },
  { id: 22, ini: "TA", name: "TripAround", desc: "Smart corporate travel platform", type: "ativo" },
  { id: 23, ini: "RC", name: "Rocket.Chat", desc: "Secure open source enterprise communication", type: "ativo" },
  { id: 24, ini: "EM", name: "Mercado Eletrônico", desc: "B2B marketplace and corporate procurement", type: "ativo" },
  { id: 25, ini: "LG", name: "Logocenter", desc: "ERP that originated TOTVS", type: "saida", highlight: true },
  { id: 26, ini: "BU", name: "Buddemeyer", desc: "Traditional textile industry, modernization and market expansion", type: "saida" },
  { id: 27, ini: "PX", name: "Pollux", desc: "Industrial automation and robotics for manufacturing", type: "saida" },
  { id: 28, ini: "W2", name: "W2B", desc: "B2B e-commerce platform for enterprises", type: "saida" },
  { id: 29, ini: "RN", name: "Reason", desc: "Automation systems for the electric power sector", type: "saida" },
  { id: 30, ini: "ST", name: "Suntech", desc: "Telecom software and network management", type: "saida" },
  { id: 31, ini: "IC", name: "Incontrol", desc: "IT solutions for business management", type: "saida" },
  { id: 32, ini: "BR", name: "Bry", desc: "Digital signature and information security", type: "saida" },
  { id: 33, ini: "MI", name: "Maie", desc: "Management software and process automation", type: "saida" },
  { id: 34, ini: "IM", name: "Image", desc: "Technology for media and visual communication", type: "saida" },
  { id: 35, ini: "GD", name: "Grupo Direct", desc: "Marketing and relationship solutions", type: "saida" },
  { id: 36, ini: "DH", name: "DHC", desc: "Enterprise software and IT consulting", type: "saida" },
  { id: 37, ini: "NV", name: "Neovia", desc: "Smart logistics and transportation management", type: "saida" },
  { id: 38, ini: "RE", name: "Redecamp", desc: "Corporate network infrastructure", type: "saida" },
  { id: 39, ini: "PN", name: "Pelenova", desc: "Industrial technology and chemical processes", type: "saida" },
  { id: 40, ini: "CT", name: "Cognitec", desc: "Software and technology services", type: "saida" },
  { id: 41, ini: "DL", name: "Daitan Labs", desc: "R&D in software and advanced engineering", type: "saida" },
  { id: 42, ini: "WA", name: "Wappa", desc: "Corporate mobility and travel management", type: "saida" },
  { id: 43, ini: "MS", name: "Mastersaf", desc: "Fiscal and tax software for enterprises", type: "saida" },
  { id: 44, ini: "EX", name: "Exopro", desc: "B2B platform for industry and foreign trade", type: "saida" },
  { id: 45, ini: "SW", name: "Softway", desc: "Software solutions for financial markets", type: "saida" },
  { id: 46, ini: "BV", name: "Brasvending", desc: "Technology for vending machines and self-service", type: "saida" },
  { id: 47, ini: "AP", name: "APS", desc: "Industrial planning and management software", type: "saida" },
  { id: 48, ini: "DG", name: "Digipix", desc: "Digital photography and on-demand printing platform", type: "saida" },
  { id: 49, ini: "GE", name: "Gesto", desc: "Data-driven corporate healthcare management", type: "saida" },
  { id: 50, ini: "IT", name: "Intellibrand", desc: "Digital brand monitoring and intelligence", type: "saida" },
  { id: 51, ini: "CO", name: "Concil", desc: "Automated financial reconciliation", type: "saida" },
  { id: 52, ini: "AD", name: "ADTsys", desc: "Cloud consulting and services", type: "saida" },
  { id: 53, ini: "IG", name: "Ingresse", desc: "Event ticketing platform", type: "saida" },
  { id: 54, ini: "GF", name: "Geofusion", desc: "Geographic intelligence for retail and expansion", type: "saida" },
  { id: 55, ini: "WR", name: "Webradar", desc: "Monitoring and analytics for telecommunications", type: "saida" },
  { id: 56, ini: "RA", name: "Reclame Aqui", desc: "Consumer reputation and relationship platform", type: "saida" },
  { id: 57, ini: "SG", name: "Stilingue", desc: "Social media data intelligence", type: "saida" },
  { id: 58, ini: "DW", name: "Drumwave", desc: "Consumer data management and monetization", type: "saida" },
  { id: 59, ini: "AT", name: "Adianta", desc: "Receivables advance and credit for SMBs", type: "saida" },
  { id: 60, ini: "IB", name: "IBBX", desc: "Industrial monitoring via IoT and vibration analysis", type: "saida" },
];

export interface Thesis { n: string; title: string; body: string; }
export const thesis: Thesis[] = [
  { n: "01", title: "B2B Software", body: "Exclusive focus since 2012. High margin, low marginal cost, pricing power." },
  { n: "02", title: "Recurring Revenue", body: "Predictable models that let us invest in product and distribution with conviction." },
  { n: "03", title: "Strong Unit Economics", body: "Sustainable growth with CAC/LTV that hold up under rigorous scrutiny." },
  { n: "04", title: "Technical Teams", body: "Founders who understand the problem. Product and engineering as competitive advantage." },
  { n: "05", title: "Global Potential", body: "Brazil as a starting point, not a ceiling. Competing internationally from day one." },
  { n: "06", title: "Rigorous Process", body: "Proprietary methodology in pursuit of Investment Committee consensus. We lead US$1M–US$3M rounds with a board seat." },
];

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  variant?: "dark" | "light";
}
export const heroStats: Stat[] = [
  { value: "25", suffix: "+", label: "Years operating" },
  { value: "67", label: "Investments" },
  { value: "42", label: "Exits" },
];
export const trackStats: Stat[] = [
  { value: "#1", label: "Preqin — Emerging Markets", variant: "dark" },
  { value: "25", suffix: "+", label: "Years operating", variant: "dark" },
  { value: "Top Quartile", label: "Fund performance", variant: "light" },
  { value: "8", label: "Funds raised", variant: "light" },
];

export interface TeamMember { ini: string; name: string; role: string; li?: string; bio?: string; }
export const team: TeamMember[] = [
  { ini: "SC", name: "Sidney Chameh", role: "Founding Partner", li: "https://br.linkedin.com/in/sidney-chameh-10a4ba34" },
  { ini: "FG", name: "Frederico Greve", role: "Managing Partner", li: "https://br.linkedin.com/in/frederico-greve-79557615" },
  { ini: "DH", name: "Daniel Heise", role: "Senior Partner", li: "https://www.linkedin.com/in/dsheise" },
  { ini: "HU", name: "Henrique Uehara", role: "Partner", li: "https://www.linkedin.com/in/henriqueuehara" },
  { ini: "HF", name: "Henrique Ferreira", role: "Partner", li: "https://www.linkedin.com/in/henrique-f-ferreira-969364114" },
  { ini: "DB", name: "Dario Boralli", role: "Senior Advisor", li: "https://br.linkedin.com/in/dario-boralli-30a84136" },
  { ini: "DM", name: "Daniel Menache", role: "Associate Partner", li: "https://www.linkedin.com/in/daniel-menache-55402a1b5/" },
  { ini: "JO", name: "João Orem", role: "Associate Partner", li: "https://www.linkedin.com/in/jo%C3%A3o-gabriel-coser-de-orem-2a152a15b/" },
  { ini: "LG", name: "Lucas Gouveia", role: "Compliance Director", li: "https://www.linkedin.com/in/lucas-gouveia-branco-6795311b9" },
  { ini: "MM", name: "Marcelo Merichello", role: "Analyst", li: "https://br.linkedin.com/in/marcelomerichello" },
  { ini: "LP", name: "LP & ex-founder network", role: "DGF network", bio: "Institutional funds, family offices and tech ex-founders who form our support network and open doors for portfolio companies." },
];

export interface NavLink { id: string; label: string; }
export const navLinks: NavLink[] = [
  { id: "sobre", label: "About" },
  { id: "tese", label: "Thesis" },
  { id: "portfolio", label: "Portfolio" },
  { id: "track", label: "Track Record" },
  { id: "time", label: "Team" },
];
