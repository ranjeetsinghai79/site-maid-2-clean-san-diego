import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Maid2Clean",
    tagline: "Sparkling Homes, Stress-Free Living",
    phone: "(858) 461-8680",
    phoneHref: "tel:+18584618680",
    email: "info@maid2clean.com",
    address: "123 Clean Street",
    city: "San Diego",
    serviceAreas: ["San Diego"],
    license: "Licensed & Insured",
    since: "2010",
    google_rating: "5.0",
    review_count: "250",
    emergency: false,
    theme: "ocean",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "Routine Basic Cleaning", desc: "Keep your home consistently fresh and tidy with our scheduled basic cleaning service.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Experience a truly immaculate home with our comprehensive deep cleaning, tackling every nook and cranny.", urgent: false },
    { icon: "truck", title: "Move In/Out Cleaning", desc: "Ensure a spotless transition with our thorough cleaning services for moving in or out of your property.", urgent: false },
    { icon: "briefcase", title: "Office Cleaning", desc: "Maintain a professional and hygienic workspace with our reliable and efficient office cleaning solutions.", urgent: false },
    { icon: "star", title: "Vacation Rental Cleaning", desc: "Prepare your rental for guests with our meticulous cleaning, ensuring a pristine and inviting experience.", urgent: false },
    { icon: "hammer", title: "Post Construction Clean Up", desc: "Remove all dust and debris after renovations, leaving your newly built or remodeled space sparkling clean.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "San Diego, CA", stars: 5, text: "Maid2Clean transformed my apartment! After a hectic week, coming home to a spotless place was such a relief. They did an incredible deep clean last Tuesday, paying attention to every detail, even under the sofa. Worth every penny for the peace of mind!" },
    { name: "David M.", location: "La Jolla, CA", stars: 5, text: "We used Maid2Clean for our move-out clean, and they were fantastic. The team arrived on time, worked efficiently, and left the house looking better than when we moved in. The landlord was very impressed, and we got our full deposit back without any issues. Highly recommend their thorough service!" },
    { name: "Emily R.", location: "Coronado, CA", stars: 5, text: "I've tried several cleaning services, but Maid2Clean stands out. Their routine basic cleaning is consistently excellent. My kitchen and bathrooms always sparkle, and they even organize my kids' toys! It's such a joy to have a clean home without lifting a finger. Their flat-rate billing is a huge plus too." }
  ],

  trustBadges: [
    "Highest Rated Service", "45-Point Checklist", "Flat-Rate Billing", "100% Satisfaction Guarantee", "24/7 Customer Support", "Licensed & Insured"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 5000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We pride ourselves on prompt communication and scheduling to meet your cleaning needs quickly." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Enjoy transparent, flat-rate billing with no hidden fees, so you always know what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our cleaning technicians are highly trained, background-checked, and dedicated to excellence." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work; if you're not happy, we'll make it right, guaranteed." },
    { icon: "phone", title: "24/7 Customer Support", desc: "Our friendly team is always available to assist you with scheduling or any questions you may have." },
    { icon: "home", title: "Spotless Homes", desc: "We follow a comprehensive 45-point checklist to ensure every corner of your home sparkles." }
  ],

  formServiceOptions: ["Routine Basic Cleaning", "Deep Cleaning", "Move In/Out Cleaning", "Office Cleaning", "Vacation Rental Cleaning", "Post Construction Clean Up"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!