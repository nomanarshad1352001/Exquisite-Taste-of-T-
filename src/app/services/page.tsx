import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import { Sprig } from "@/components/Ornaments";
import { PlateMark, ClocheMark, CoupeMark, GlassMark, WheatMark } from "@/components/Ornaments";
import { StationsMark, LeafLineMark } from "@/components/catering/serviceIcons";
import { CorporateMark, StaffMark, MenuScrollMark } from "@/components/services/icons";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service catering across Philadelphia & Delaware County — event catering, menu customization, buffet & plated service, cocktail receptions, bar service, dietary accommodations, food stations, corporate catering and professional staffing.",
};

const services = [
  {
    id: "event",
    Icon: PlateMark,
    name: "Event Catering",
    text: "Full-service catering for events of all sizes — weddings, corporate gatherings, private parties and social functions. Menu planning, food preparation, setup, service and clean-up, handled end to end.",
    tags: ["Weddings", "Private Parties", "Full Setup"],
    image: "https://images.pexels.com/photos/17315461/pexels-photo-17315461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Candlelit wedding reception table with candles and flowers",
  },
  {
    id: "menu",
    Icon: MenuScrollMark,
    name: "Menu Customization",
    text: "Designed closely with you — a personalized menu that suits your preferences, dietary restrictions and event theme. A variety of cuisines, courses, desserts and beverages, composed around your table.",
    tags: ["Bespoke Menus", "Event Themes", "All Cuisines"],
    image: "https://images.pexels.com/photos/36430153/pexels-photo-36430153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Chef arranging a custom plate with tweezers",
  },
  {
    id: "buffet",
    Icon: ClocheMark,
    name: "Buffet or Plated Service",
    text: "Your style, your room. Buffet-style setups where guests explore abundant food stations, or plated service where each guest is served individually at their table, course by course.",
    tags: ["Buffet Spreads", "Plated Courses", "Family Style"],
    image: "https://images.pexels.com/photos/38549538/pexels-photo-38549538.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Elegant buffet spread with chafing dishes and vegetables",
  },
  {
    id: "cocktail",
    Icon: CoupeMark,
    name: "Cocktail Receptions",
    text: "An array of hors d'oeuvres, canapés and finger foods for cocktail-style evenings — passed trays, stationary displays and creative bite-size offerings that keep the room talking.",
    tags: ["Passed Trays", "Canapés", "Small Bites"],
    image: "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Passed appetizers in glass cups at an elegant event",
  },
  {
    id: "bar",
    Icon: GlassMark,
    name: "Bar Services",
    text: "Professional bartenders and a curated selection of alcoholic and non-alcoholic beverages — full bar setup, signature cocktails, and every detail of beverage service managed for you.",
    tags: ["Signature Cocktails", "Full Bar", "BYOB-Friendly"],
    image: "https://images.pexels.com/photos/36870866/pexels-photo-36870866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Gourmet seafood meal paired with a vibrant cocktail",
  },
  {
    id: "dietary",
    Icon: LeafLineMark,
    name: "Dietary Accommodations",
    text: "Vegetarian, vegan, gluten-free, dairy-free and allergy-aware menus — planned from the first conversation so every guest is accommodated with delicious, suitable options, never an afterthought.",
    tags: ["Vegan", "Gluten-Free", "Allergy-Aware"],
    image: "https://images.pexels.com/photos/34278828/pexels-photo-34278828.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Vibrant assortment of freshly cooked vegetables",
  },
  {
    id: "stations",
    Icon: StationsMark,
    name: "Food Stations",
    text: "Interactive stations where guests customize their own plates or explore themed cuisines — carving, pasta, desserts and more. A little theater, built into the evening.",
    tags: ["Live Action", "Themed Cuisine", "Interactive"],
    image: "https://images.pexels.com/photos/36869215/pexels-photo-36869215.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Barbecue platter station with smoked meats and sides",
  },
  {
    id: "corporate",
    Icon: CorporateMark,
    name: "Corporate Catering",
    text: "Tailored catering for business — breakfast meetings, luncheons, conferences and office parties. Individual boxed meals, buffet setups or plated service, on time and quietly excellent.",
    tags: ["Luncheons", "Boxed Meals", "Conferences"],
    image: "https://images.pexels.com/photos/35985212/pexels-photo-35985212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Elegant dining table set for a formal gathering",
  },
  {
    id: "staffing",
    Icon: StaffMark,
    name: "Professional Staffing",
    text: "Experienced waitstaff, bartenders and chefs to keep service smooth and the experience memorable — setup, food service, beverage service and clean-up, all disappearing act.",
    tags: ["Waitstaff", "Bartenders", "Event Chefs"],
    image: "https://images.pexels.com/photos/36904788/pexels-photo-36904788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Team of chefs plating dishes together in a kitchen",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services We Provide"
        title="Let Us Elevate"
        accent="Your Event"
        description="Culinary artistry, lasting memories, and a team that treats your occasion like their own family table. These are the many services we provide."
      />

      <section className="bg-charcoal pb-24 pt-8 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {services.map((service, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={service.id} className="border-b border-ivory/8 py-12 first:pt-4 lg:py-16">
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* image */}
                  <div className={`relative lg:col-span-6 ${flipped ? "lg:order-2" : ""}`}>
                    <div className="absolute -inset-2.5 border border-gold/20" aria-hidden="true" />
                    <div className="group relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
                      <span className="text-ghost absolute -bottom-2 right-3 font-display text-7xl font-bold leading-none sm:text-8xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* copy */}
                  <div className={`lg:col-span-6 ${flipped ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
                    <span className="grid h-14 w-14 place-items-center border border-gold/40">
                      <service.Icon className="h-7 w-7 text-gold" />
                    </span>
                    <h2 className="mt-6 font-display text-3xl text-ivory sm:text-4xl">{service.name}</h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/60">{service.text}</p>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-gold/25 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-gold/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <div className="bg-night py-8">
        <SectionDivider />
      </div>

      {/* consultation band */}
      <section className="relative overflow-hidden bg-night py-20 sm:py-24">
        <Sprig className="pointer-events-none absolute -right-8 top-1/2 h-20 w-52 -translate-y-1/2 -scale-x-100 text-gold/15" />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory sm:text-5xl">
              Let&rsquo;s Customize <em className="italic text-gold">Yours</em>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory/60">
              New or existing clients — consult with us to discuss your specific requirements and let
              us tailor these offerings to your event. Every menu starts as a conversation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/catering#quote"
                className="btn-lux-dark bg-gold px-9 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-charcoal"
              >
                Request a Custom Quote
              </a>
              <a
                href={contact.phoneHref}
                className="group flex items-center gap-2.5 border border-ivory/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-ivory transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                <Phone size={14} className="text-gold" /> {contact.phone}
              </a>
            </div>
            <p className="mt-8">
              <a href="/catering" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold/80 transition-colors hover:text-gold">
                See catering packages <ArrowUpRight size={13} className="transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
