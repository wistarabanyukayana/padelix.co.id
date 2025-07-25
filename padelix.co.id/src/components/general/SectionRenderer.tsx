import type { Section } from "@/types";

import { HeroSection } from "@/components/sections/HeroSection";
import { InfoSection } from "@/components/sections/InfoSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PortofolioSection } from "../sections/PortofolioSection";

function sectionRenderer(section: Section, index: number) {
  switch (section.__component) {
    case "sections.hero-section":
      return <HeroSection key={index} {...section} />;
    case "sections.info-section":
      return <InfoSection key={index} {...section} />;
    case "sections.product-section":
      return <ProductSection key={index} {...section} />;
    case "sections.certificate-section":
      return <CertificateSection key={index} {...section} />;
    case "sections.contact-section":
      return <ContactSection key={index} {...section} />;
    case "sections.portofolio-section":
      return <PortofolioSection key={index} {...section} />;
    default:
      return null;
  }
}

export function SectionRenderer({ sections }: { sections: Section[] }) {
  return sections.map((section, index) => sectionRenderer(section, index));
}
