"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Headphones, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "catalog",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Support",
          id: "faq",
        },
      ]}
      brandName="AirpodHub"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Elevate Your Audio Experience"
      description="Discover the latest generations of Apple AirPods. Premium sound, seamless connectivity, and unmatched comfort."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/professional-studio-photography-of-white-1774661840402-4beeb7ef.png?_wi=1",
          imageAlt: "AirPods Max Silver",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-pro-2-generation-earbuds-white-s-1774661839052-749f830c.png?_wi=1",
          imageAlt: "AirPods Pro 2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-max-silver-headset-premium-desig-1774661838890-7e2fcd01.png?_wi=1",
          imageAlt: "AirPods Max Silver",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-3rd-generation-white-clean-produ-1774661839413-fe1b2592.png?_wi=1",
          imageAlt: "AirPods 3rd Gen",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/close-up-of-apple-airpods-pro-2-in-charg-1774661838946-a6158092.png?_wi=1",
          imageAlt: "AirPods Pro Charging Case",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/close-up-of-apple-airpods-pro-2-in-charg-1774661838946-a6158092.png?_wi=2",
          imageAlt: "AirPods Pro Case",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-pro-2-generation-earbuds-white-s-1774661839052-749f830c.png?_wi=2",
          imageAlt: "AirPods Pro 2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/professional-studio-photography-of-white-1774661840402-4beeb7ef.png?_wi=2",
          imageAlt: "AirPods Collection",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-3rd-generation-white-clean-produ-1774661839413-fe1b2592.png?_wi=2",
          imageAlt: "AirPods 3rd Gen",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-max-silver-headset-premium-desig-1774661838890-7e2fcd01.png?_wi=2",
          imageAlt: "AirPods Max",
        },
      ]}
      buttons={[
        {
          text: "Shop AirPods",
          href: "#catalog",
        },
      ]}
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "prod1",
          name: "AirPods Pro (2nd Gen)",
          price: "$249",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-pro-2-generation-earbuds-white-s-1774661839052-749f830c.png?_wi=3",
        },
        {
          id: "prod2",
          name: "AirPods Max",
          price: "$549",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-max-silver-headset-premium-desig-1774661838890-7e2fcd01.png?_wi=3",
        },
        {
          id: "prod3",
          name: "AirPods (3rd Gen)",
          price: "$179",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/airpods-3rd-generation-white-clean-produ-1774661839413-fe1b2592.png?_wi=3",
        },
      ]}
      title="Our Collection"
      description="Explore the full lineup of Apple's premium wireless audio."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Shield,
          title: "Authenticity Guaranteed",
          description: "100% genuine Apple products directly sourced.",
        },
        {
          icon: Zap,
          title: "Fast Shipping",
          description: "Get your favorite audio gear delivered in days.",
        },
        {
          icon: Headphones,
          title: "Expert Support",
          description: "Dedicated customer service to help you choose.",
        },
      ]}
      title="Why Choose AirpodHub"
      description="Experience superior quality and authentic Apple technology."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          role: "Creative Lead",
          company: "DesignCo",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/portrait-of-a-young-tech-savvy-professio-1774661839945-2d305a07.png?_wi=1",
        },
        {
          id: "t2",
          name: "James Chen",
          role: "Student",
          company: "UniLab",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/portrait-of-a-student-listening-to-music-1774661839443-f2013925.png",
        },
        {
          id: "t3",
          name: "Elena Rossi",
          role: "Athlete",
          company: "RunPro",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/portrait-of-an-athlete-with-airpods-1774661840880-bf9df140.png",
        },
        {
          id: "t4",
          name: "Marcus King",
          role: "Developer",
          company: "CodeFlow",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/portrait-of-a-creative-designer-1774661841732-d3b08a9f.png",
        },
        {
          id: "t5",
          name: "Sofia V.",
          role: "Audiophile",
          company: "SoundSpace",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYMuFoZ49ZAY2WptV5JIBiM57P/portrait-of-a-young-tech-savvy-professio-1774661839945-2d305a07.png?_wi=2",
        },
      ]}
      title="What Our Customers Say"
      description="Trusted by audiophiles and tech enthusiasts worldwide."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Are these authentic Apple products?",
          content: "Yes, all our AirPods are 100% authentic and come in original packaging.",
        },
        {
          id: "q2",
          title: "What is the return policy?",
          content: "We offer a 30-day money-back guarantee on all unopened items.",
        },
        {
          id: "q3",
          title: "Do you ship internationally?",
          content: "Yes, we ship to most major regions worldwide.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All AirPods",
              href: "#catalog",
            },
            {
              label: "Compare",
              href: "#catalog",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 AirpodHub. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
