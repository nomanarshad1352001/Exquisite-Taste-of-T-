import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandIntro from "@/components/BrandIntro";
import FeaturedDishes from "@/components/FeaturedDishes";
import PhotoRail from "@/components/PhotoRail";
import HowItWorks from "@/components/HowItWorks";
import ChefSection from "@/components/ChefSection";
import CateringSection from "@/components/CateringSection";
import ImageBreak from "@/components/ImageBreak";
import Gallery from "@/components/Gallery";
import SocialStrip from "@/components/SocialStrip";
import Testimonials from "@/components/Testimonials";
import VipBand from "@/components/VipBand";
import InquiryForm from "@/components/InquiryForm";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandIntro />
      <FeaturedDishes />
      <PhotoRail />
      <div className="bg-espresso py-8">
        <SectionDivider />
      </div>
      <HowItWorks />
      <div className="bg-charcoal py-8">
        <SectionDivider />
      </div>
      <ChefSection />
      <div className="bg-espresso py-8">
        <SectionDivider />
      </div>
      <CateringSection />
      <ImageBreak />
      <Gallery />
      <SocialStrip />
      <Testimonials />
      <VipBand />
      <InquiryForm />
    </>
  );
}
