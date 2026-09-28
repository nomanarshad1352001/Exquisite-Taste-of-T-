import type { Metadata } from "next";
import { Lock, RefreshCw } from "lucide-react";
import PageHero from "@/components/PageHero";
import MenuExplorer from "@/components/menu/MenuExplorer";
import PaymentMarks from "@/components/PaymentMarks";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Weekly Menu",
  description:
    "This week's chef-crafted preorder menu from Exquisite Taste of T — entrées, sides, desserts and beverages, cooked to order for Saturday pickup or delivery across Philadelphia & Delaware County.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Weekly Drop"
        title="This Week&rsquo;s"
        accent="Menu"
        description="Cooked to order for the name on your ticket. Customize any plate with add-ons and pairings before checkout — orders close Thursday at 8 PM."
      />

      <div className="bg-charcoal pb-24">
        <MenuExplorer />

        <div className="bg-night mt-0">
          <SectionDivider className="py-10" />
          <div className="flex flex-col items-center gap-6 pb-16">
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2 text-xs text-ivory/45">
                <Lock size={13} className="text-gold/70" />
                Secure checkout via Stripe Payment Links — no account needed
              </span>
              <span className="hidden h-3 w-px bg-ivory/15 sm:block" />
              <span className="flex items-center gap-2 text-xs text-ivory/45">
                <RefreshCw size={13} className="text-gold/70" />
                Menu rotates every Sunday evening
              </span>
            </div>
            <PaymentMarks />
          </div>
        </div>
      </div>
    </>
  );
}
