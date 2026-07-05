// DGF Website — dados tipados e centralizados. Substitui o @ts-nocheck do original.

export type CompanyStatus = "ativo" | "saida";

export interface Company {
  id: number;
  ini: string;
  name: string;
  desc: string;
  type: CompanyStatus;
  exit?: string;
  highlight?: boolean;
}

export const companies: Company[] = [
  { id: 1, ini: "TR", name: "Tractian", desc: "Manutenção preditiva industrial com IoT e IA", type: "ativo", highlight: true },
  { id: 2, ini: "SO", name: "Sólides", desc: "Gestão de pessoas para PMEs", type: "ativo", highlight: true },
  { id: 3, ini: "ME", name: "Memed", desc: "Plataforma de prescrição digital para médicos", type: "ativo", highlight: true },
  { id: 4, ini: "IN", name: "InHire", desc: "Recrutamento orientado por dados para médias empresas", type: "ativo", highlight: true },
  { id: 5, ini: "MG", name: "Maggu", desc: "Infraestrutura de pagamentos para a economia digital", type: "ativo", highlight: true },
  { id: 6, ini: "CS", name: "Cargo Sapiens", desc: "Inteligência logística para o setor de cargas", type: "ativo", highlight: true },
  { id: 7, ini: "MF", name: "Mudflap", desc: "Plataforma financeira para caminhoneiros nos EUA", type: "ativo", highlight: true },
  { id: 8, ini: "TK", name: "Takeat", desc: "Cardápio digital e pagamento para restaurantes", type: "ativo", highlight: true },
  { id: 9, ini: "D4", name: "Data4Sales", desc: "Plataforma de inteligência comercial B2B", type: "ativo", highlight: true },
  { id: 10, ini: "RD", name: "RD Station", desc: "Marketing digital, adquirida pela TOTVS em 2020", type: "saida", exit: "~34x", highlight: true },
  { id: 11, ini: "DA", name: "Daitan", desc: "Engenharia de software, saída estratégica", type: "saida", exit: "~67x", highlight: true },
  { id: 12, ini: "MO", name: "Mosyle", desc: "Gerenciamento de dispositivos Apple para empresas", type: "saida", exit: "~16,6x", highlight: true },
  { id: 13, ini: "SB", name: "SpeedBird", desc: "Operação logística aérea com drones autônomos", type: "ativo" },
  { id: 14, ini: "F1", name: "Frota 162", desc: "Gestão de frotas e mobilidade corporativa", type: "ativo" },
  { id: 15, ini: "KY", name: "Kyte", desc: "Sistema de gestão para pequenos comerciantes", type: "ativo" },
  { id: 16, ini: "TS", name: "Triple Session", desc: "Treinamento e analytics para times comerciais", type: "ativo" },
  { id: 17, ini: "AR", name: "Aravita", desc: "Suprimentos hortifrúti para food service", type: "ativo" },
  { id: 18, ini: "SS", name: "Safespace", desc: "Canal de denúncias e compliance corporativo", type: "ativo" },
  { id: 19, ini: "GP", name: "Greenplat", desc: "Rastreabilidade ambiental para a cadeia produtiva", type: "ativo" },
  { id: 20, ini: "SL", name: "Slang", desc: "Treinamento de inglês corporativo orientado por IA", type: "ativo" },
  { id: 21, ini: "BD", name: "Birdie", desc: "Inteligência de mercado a partir de reviews", type: "ativo" },
  { id: 22, ini: "TA", name: "TripAround", desc: "Plataforma de viagens corporativas inteligentes", type: "ativo" },
  { id: 23, ini: "RC", name: "Rocket.Chat", desc: "Comunicação empresarial open source segura", type: "ativo" },
  { id: 24, ini: "EM", name: "Mercado Eletrônico", desc: "Marketplace B2B e procurement corporativo", type: "ativo" },
  { id: 25, ini: "LG", name: "Logocenter", desc: "ERP que originou a TOTVS", type: "saida", exit: "Realizada", highlight: true },
  { id: 26, ini: "BU", name: "Buddemeyer", desc: "Indústria têxtil tradicional, modernização e expansão de mercado", type: "saida", exit: "Realizada" },
  { id: 27, ini: "PX", name: "Pollux", desc: "Automação industrial e robótica para manufatura", type: "saida", exit: "Realizada" },
  { id: 28, ini: "W2", name: "W2B", desc: "Plataforma e-commerce B2B para empresas", type: "saida", exit: "Realizada" },
  { id: 29, ini: "RN", name: "Reason", desc: "Sistemas de automação para o setor elétrico", type: "saida", exit: "Realizada" },
  { id: 30, ini: "ST", name: "Suntech", desc: "Software de telecom e gestão de redes", type: "saida", exit: "Realizada" },
  { id: 31, ini: "IC", name: "Incontrol", desc: "Soluções de TI para gestão empresarial", type: "saida", exit: "Realizada" },
  { id: 32, ini: "BR", name: "Bry", desc: "Assinatura digital e segurança da informação", type: "saida", exit: "Realizada" },
  { id: 33, ini: "MI", name: "Maie", desc: "Software de gestão e automação de processos", type: "saida", exit: "Realizada" },
  { id: 34, ini: "IM", name: "Image", desc: "Tecnologia para mídia e comunicação visual", type: "saida", exit: "Realizada" },
  { id: 35, ini: "GD", name: "Grupo Direct", desc: "Soluções de marketing e relacionamento", type: "saida", exit: "Realizada" },
  { id: 36, ini: "DH", name: "DHC", desc: "Software empresarial e consultoria de TI", type: "saida", exit: "Realizada" },
  { id: 37, ini: "NV", name: "Neovia", desc: "Logística inteligente e gestão de transportes", type: "saida", exit: "Realizada" },
  { id: 38, ini: "RE", name: "Redecamp", desc: "Infraestrutura de redes para corporativos", type: "saida", exit: "Realizada" },
  { id: 39, ini: "PN", name: "Pelenova", desc: "Tecnologia industrial e processos químicos", type: "saida", exit: "Realizada" },
  { id: 40, ini: "CT", name: "Cognitec", desc: "Software e serviços de tecnologia", type: "saida", exit: "Realizada" },
  { id: 41, ini: "DL", name: "Daitan Labs", desc: "P&D em software e engenharia avançada", type: "saida", exit: "Realizada" },
  { id: 42, ini: "WA", name: "Wappa", desc: "Mobilidade corporativa e gestão de viagens", type: "saida", exit: "Realizada" },
  { id: 43, ini: "MS", name: "Mastersaf", desc: "Software fiscal e tributário para empresas", type: "saida", exit: "Realizada" },
  { id: 44, ini: "EX", name: "Exopro", desc: "Plataforma B2B para indústria e comércio exterior", type: "saida", exit: "Realizada" },
  { id: 45, ini: "SW", name: "Softway", desc: "Soluções de software para mercado financeiro", type: "saida", exit: "Realizada" },
  { id: 46, ini: "BV", name: "Brasvending", desc: "Tecnologia para vending machines e self-service", type: "saida", exit: "Realizada" },
  { id: 47, ini: "AP", name: "APS", desc: "Software de planejamento e gestão industrial", type: "saida", exit: "Realizada" },
  { id: 48, ini: "DG", name: "Digipix", desc: "Plataforma de fotografia digital e impressão sob demanda", type: "saida", exit: "Realizada" },
  { id: 49, ini: "GE", name: "Gesto", desc: "Gestão de saúde corporativa orientada por dados", type: "saida", exit: "Realizada" },
  { id: 50, ini: "IT", name: "Intellibrand", desc: "Monitoramento e inteligência de marca digital", type: "saida", exit: "Realizada" },
  { id: 51, ini: "CO", name: "Concil", desc: "Conciliação financeira automatizada", type: "saida", exit: "Realizada" },
  { id: 52, ini: "AD", name: "ADTsys", desc: "Consultoria e serviços em cloud", type: "saida", exit: "Realizada" },
  { id: 53, ini: "IG", name: "Ingresse", desc: "Plataforma de vendas de ingressos para eventos", type: "saida", exit: "Realizada" },
  { id: 54, ini: "GF", name: "Geofusion", desc: "Inteligência geográfica para varejo e expansão", type: "saida", exit: "Realizada" },
  { id: 55, ini: "WR", name: "Webradar", desc: "Monitoramento e analytics para telecomunicações", type: "saida", exit: "Realizada" },
  { id: 56, ini: "RA", name: "Reclame Aqui", desc: "Plataforma de reputação e relacionamento com o consumidor", type: "saida", exit: "Realizada" },
  { id: 57, ini: "SG", name: "Stilingue", desc: "Inteligência de dados em redes sociais", type: "saida", exit: "Realizada" },
  { id: 58, ini: "DW", name: "Drumwave", desc: "Gestão e monetização de dados de consumidores", type: "saida", exit: "Realizada" },
  { id: 59, ini: "AT", name: "Adianta", desc: "Antecipação de recebíveis e crédito para PMEs", type: "saida", exit: "Realizada" },
  { id: 60, ini: "IB", name: "IBBX", desc: "Monitoramento industrial via IoT e análise de vibração", type: "saida", exit: "Realizada" },
];

export interface Thesis { n: string; title: string; body: string; }
export const thesis: Thesis[] = [
  { n: "01", title: "Software B2B", body: "Foco exclusivo desde 2012. Alta margem, baixo custo marginal, poder de precificação." },
  { n: "02", title: "Receita Recorrente", body: "Modelos previsíveis que permitem investir em produto e distribuição com convicção." },
  { n: "03", title: "Unit Economics Sólidos", body: "Crescimento sustentável com CAC/LTV que resistem a análise rigorosa." },
  { n: "04", title: "Times Técnicos", body: "Fundadores que entendem o problema. Produto e engenharia como vantagem competitiva." },
  { n: "05", title: "Potencial Global", body: "Brasil como ponto de partida, não como teto. Competir internacionalmente desde cedo." },
  { n: "06", title: "Processo Criterioso", body: "Metodologia proprietária em busca de consenso do Comitê. Lideramos rodadas de US$ 1M–US$ 3M com assento no conselho." },
];

export interface NotableExit { name: string; desc: string; multiple?: string; }
export const notableExits: NotableExit[] = [
  { name: "RD Station", desc: "Marketing digital · adquirida pela TOTVS", multiple: "~34x" },
  { name: "Daitan", desc: "Engenharia de software · saída estratégica", multiple: "~67x" },
  { name: "Mosyle", desc: "Gestão de dispositivos Apple", multiple: "~16,6x" },
  { name: "Logocenter", desc: "ERP que deu origem à TOTVS", multiple: undefined },
];

export interface Stat { value: string; suffix?: string; label: string; }
export const heroStats: Stat[] = [
  { value: "25", suffix: "+", label: "Anos de operação" },
  { value: "67", label: "Investimentos" },
  { value: "42", label: "Saídas" },
];
export const trackStats: Stat[] = [
  { value: "8", label: "Fundos desde 2001" },
  { value: "67", label: "Investimentos" },
  { value: "42", label: "Saídas realizadas" },
  { value: "10", suffix: "–14", label: "Empresas por fundo" },
];

export interface TeamMember { ini: string; name: string; role: string; li?: string; bio?: string; }
export const team: TeamMember[] = [
  { ini: "SC", name: "Sidney Chameh", role: "Founding Partner", li: "https://br.linkedin.com/in/sidney-chameh-10a4ba34" },
  { ini: "FG", name: "Frederico Greve", role: "Managing Partner", li: "https://br.linkedin.com/in/frederico-greve-79557615" },
  { ini: "DH", name: "Daniel Heise", role: "Senior Partner", li: "https://www.linkedin.com/in/dsheise" },
  { ini: "HU", name: "Henrique Uehara", role: "Partner", li: "https://www.linkedin.com/in/henriqueuehara" },
  { ini: "HF", name: "Henrique Ferreira", role: "Partner", li: "https://www.linkedin.com/in/henrique-f-ferreira-969364114" },
  { ini: "DB", name: "Dario Boralli", role: "Senior Advisor", li: "https://br.linkedin.com/in/dario-boralli-30a84136" },
  { ini: "DM", name: "Daniel Menache", role: "Partner", li: "https://www.linkedin.com/in/daniel-menache-55402a1b5/" },
  { ini: "JO", name: "João Orem", role: "Partner", li: "https://www.linkedin.com/in/jo%C3%A3o-gabriel-coser-de-orem-2a152a15b/" },
  { ini: "LG", name: "Lucas Gouveia", role: "Compliance Director", li: "https://www.linkedin.com/in/lucas-gouveia-branco-6795311b9" },
  { ini: "MM", name: "Marcelo Merichello", role: "Analyst", li: "https://br.linkedin.com/in/marcelomerichello" },
  { ini: "LP", name: "Base de LPs e ex-empreendedores", role: "Rede DGF", bio: "Fundos institucionais, family offices e ex-fundadores de tech que compõem nossa rede de suporte e abrem portas para as investidas." },
];

export interface NavLink { id: string; label: string; }
export const navLinks: NavLink[] = [
  { id: "sobre", label: "Sobre" },
  { id: "tese", label: "Tese" },
  { id: "portfolio", label: "Portfólio" },
  { id: "track", label: "Track Record" },
  { id: "time", label: "Time" },
];
