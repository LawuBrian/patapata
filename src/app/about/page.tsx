import Link from "next/link";
import { ReservationCTA } from "@/components/sections/reservation-cta";

export const metadata = {
  title: "About — Pata Pata",
  description: "The story behind Pata Pata Restaurant in the heart of Maboneng, Johannesburg.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* 1. Hero — short emotional headline */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/10" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 blur-[100px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C48A2D, transparent)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10 pb-14 md:pb-20">
          <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-4">
            About Pata Pata · Est. Maboneng
          </p>
          <h1 className="font-spectral text-cream text-5xl md:text-7xl leading-tight mb-4">
            Where Johannesburg<br className="hidden md:block" /> sits down to eat.
          </h1>
          <p className="text-cream/60 font-light text-base md:text-lg max-w-xl">
            A restaurant, a gallery, a music venue — and above all, a gathering place.
          </p>
        </div>
      </section>

      {/* 2. Core Story */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-10">
          <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-5">Our Story</p>
          <h2 className="font-clarendon text-charcoal text-2xl md:text-3xl leading-tight mb-6">
            Born from a love of craft, culture, and community.
          </h2>
          <div className="h-[2px] w-12 bg-amber mb-7" />
          <div className="space-y-5">
            <p className="font-spectral text-charcoal/80 text-base md:text-lg leading-relaxed">
              Pata Pata opened its doors in the heart of the Maboneng Precinct with a single conviction:
              that a great meal is about far more than food. It&apos;s about the warmth of the room, the
              rhythm of live music drifting across a candlelit table, and the stories exchanged over
              slow-cooked dishes and hand-crafted cocktails.
            </p>
            <p className="font-spectral text-charcoal/65 text-base leading-relaxed">
              Over a decade later, that conviction hasn&apos;t changed. We still source our produce from
              local farmers, still book musicians who challenge your expectations, and still believe that
              every guest deserves an evening that stays with them long after the last glass is poured.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Experience section — visual + short lines */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 h-56 md:h-72">
          {[
            { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", label: "The Dining Room" },
            { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80", label: "Live Music" },
            { src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80", label: "The Kitchen" },
            { src: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=600&q=80", label: "The Gallery" },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden group">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/25 transition-colors duration-500" />
              <p className="absolute bottom-3 left-3 font-bebas text-cream/80 text-xs tracking-[0.2em] uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Craft section — food philosophy */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-4">The Kitchen</p>
              <h2 className="font-clarendon text-cream text-2xl md:text-3xl leading-tight mb-5">
                Our food philosophy: honest, fire-kissed, deeply African.
              </h2>
              <div className="h-[2px] w-12 bg-amber mb-6" />
              <p className="font-spectral text-cream/65 text-base leading-relaxed mb-5">
                We cook the food we love — drawing on Southern African heritage, bold spices, and
                ingredients sourced from local farmers and markets. Nothing on our menu is there by
                accident. Every dish is crafted to evoke memory, warmth, and place.
              </p>
              <p className="font-spectral text-cream/50 text-base leading-relaxed">
                From flame-grilled Mozambique prawns to slow-braised oxtail and warm Malva pudding,
                we cook for people who care about what&apos;s on their plate — and why.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80"
                alt="Pata Pata kitchen craft"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. People section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-3">The People</p>
          <h2 className="font-clarendon text-charcoal text-2xl md:text-3xl mb-10">The Faces Behind the Food</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Chef Amara Diallo",
                role: "Head Chef",
                bio: "With 15 years of experience across West and Southern Africa, Amara brings depth, fire, and soul to every plate.",
                img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
              },
              {
                name: "Thabo Nkosi",
                role: "Bar Director",
                bio: "A cocktail architect who believes every drink should tell a story. His Rooibos Old Fashioned has become legend.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              },
              {
                name: "Leila Mokoena",
                role: "Events & Music Curator",
                bio: "The person responsible for booking the music that turns a dinner into a memory. She only books acts she'd personally stay up for.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
              },
            ].map((person) => (
              <div key={person.name} className="flex flex-col">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 bg-black/5">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-bebas tracking-[0.2em] uppercase text-amber text-xs mb-1">{person.role}</p>
                <h3 className="font-clarendon text-charcoal text-base mb-2">{person.name}</h3>
                <p className="font-spectral text-charcoal/60 text-sm leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Culture / identity */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-10 text-center">
          <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-4">Who We Are</p>
          <h2 className="font-clarendon text-charcoal text-2xl md:text-3xl mb-6">
            A space built for connection.
          </h2>
          <div className="h-[2px] w-12 bg-amber mx-auto mb-7" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                label: "Inclusive by Design",
                body: "We welcome everyone — families, artists, professionals, tourists, locals. This is Johannesburg's table.",
              },
              {
                label: "African First",
                body: "From the music to the food to the antiques on our walls — we celebrate African creativity and heritage.",
              },
              {
                label: "Community Rooted",
                body: "We source locally, hire from Maboneng, and invest in the precinct that gave us our home.",
              },
            ].map((v) => (
              <div key={v.label} className="border-t-2 border-amber/30 pt-4">
                <h3 className="font-bebas tracking-[0.2em] uppercase text-charcoal text-sm mb-2">{v.label}</h3>
                <p className="font-spectral text-charcoal/60 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Location */}
      <section className="py-16 md:py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-3">Find Us</p>
              <h2 className="font-clarendon text-cream text-2xl md:text-3xl mb-5">In the Heart of Maboneng</h2>
              <div className="space-y-3 mb-7">
                {[
                  { label: "Address", value: "Fox Street, Maboneng Precinct, Johannesburg" },
                  { label: "Phone", value: "+27 11 334 8038" },
                  { label: "Email", value: "info@patapata.co.za" },
                  { label: "Mon – Thu", value: "11:00 – 22:00" },
                  { label: "Fri – Sat", value: "11:00 – 00:00" },
                  { label: "Sunday", value: "11:00 – 21:00" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4 items-baseline">
                    <span className="font-bebas text-amber text-xs tracking-[0.2em] uppercase min-w-[80px] shrink-0">{row.label}</span>
                    <span className="font-spectral text-cream/65 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-amber hover:bg-amber-light text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-colors duration-500"
              >
                Get Directions
              </Link>
            </div>
            <div className="aspect-[4/3] bg-charcoal/50 rounded-sm overflow-hidden border border-amber/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.9!2d28.0535!3d-26.2035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzEyLjYiUyAyOMKwMDMnMTIuNiJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                title="Pata Pata location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <ReservationCTA />
    </main>
  );
}
