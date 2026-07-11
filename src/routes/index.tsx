import { createFileRoute } from "@tanstack/react-router";
import DGFWebsite from "@/components/DGFWebsite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DGF Investimentos · 25 years of Venture Capital" },
      { name: "description", content: "DGF Investimentos: 25 years investing in B2B software in Latin America. Thesis, portfolio and track record with discipline and capital efficiency." },
      { property: "og:title", content: "DGF Investimentos · 25 years" },
      { property: "og:description", content: "Funds come and go. Firms endure. Venture Capital focused on B2B software since 2001." },
    ],
  }),
  component: Index,
});

function Index() {
  return <DGFWebsite />;
}
