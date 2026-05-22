import { createFileRoute } from "@tanstack/react-router";
import DGFWebsite from "@/components/DGFWebsite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DGF Investimentos · 25 anos de Venture Capital" },
      {
        name: "description",
        content:
          "DGF Investimentos: 25 anos investindo em software B2B na América Latina. Tese, portfólio e track record com disciplina e eficiência de capital.",
      },
      { property: "og:title", content: "DGF Investimentos · 25 anos" },
      {
        property: "og:description",
        content:
          "Fundos passam. Firmas permanecem. Venture Capital com foco em software B2B desde 2001.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return <DGFWebsite />;
}
