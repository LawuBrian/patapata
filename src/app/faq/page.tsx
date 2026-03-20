import { FAQAccordionBlock } from "@/components/ui/faq-accordion-block-shadcnui";

export const metadata = {
  title: "FAQ — Pata Pata",
  description: "Frequently asked questions about Pata Pata Restaurant, reservations, live music, dietary requirements and more.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Inner-page hero */}
      <section className="relative h-64 md:h-80 bg-charcoal overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        {/* Subtle amber glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-[80px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C48A2D, transparent)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-10 pb-10 md:pb-14">
          <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-3">
            Pata Pata Restaurant
          </p>
          <h1 className="font-clarendon text-cream text-4xl md:text-6xl tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* Accordion content */}
      <FAQAccordionBlock />
    </main>
  );
}
