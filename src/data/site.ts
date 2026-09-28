/* ─────────────────────────────────────────────────────────────
   Exquisite Taste of T — site-wide content (menu data lives in
   src/data/menu.ts so the owner can edit dishes independently).
   ───────────────────────────────────────────────────────────── */

import type { FaqItemData } from "@/components/FAQ";

export const contact = {
  phone: "(610) 555-0179",
  phoneHref: "tel:+16105550179",
  email: "hello@exquisitetasteoft.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  area: "Philadelphia & Delaware County, PA",
  pickup: "Drexel Hill, PA — Saturdays 11 AM – 2 PM",
  hours: "Preorder Tue 9 AM – Thu 8 PM · Fulfillment Saturdays",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Services", href: "/services" },
  { label: "Preorder", href: "/order" },
  { label: "Catering", href: "/catering" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const experienceSteps = [
  {
    number: "01",
    icon: "UtensilsCrossed",
    title: "Choose Your Meals",
    text: "A new menu drops every Sunday. Browse the week's plates, customize with add-ons and pairings, and build your spread.",
  },
  {
    number: "02",
    icon: "ShieldCheck",
    title: "Pay Securely",
    text: "Check out in under a minute via Stripe — cards, Apple Pay and Cash App Pay accepted. No account, no apps, no fuss. Order by Thursday 8 PM.",
  },
  {
    number: "03",
    icon: "ConciergeBell",
    title: "Pickup Or Doorstep",
    text: "Saturday: collect in Drexel Hill 11 AM – 2 PM, or contact-free delivery across Delco and Philadelphia for a flat $5.",
  },
];

export const chefProfile = {
  name: "Chef Bryant",
  role: "Founder & Executive Chef",
  portrait:
    "https://images.pexels.com/photos/4253315/pexels-photo-4253315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  portraitAlt: "Chef Bryant plating a dish with precision in a modern kitchen",
  portraitTwo:
    "https://images.pexels.com/photos/4253130/pexels-photo-4253130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  portraitTwoAlt: "Chef Bryant holding a cooking pot in a professional kitchen",
  accent:
    "https://images.pexels.com/photos/4253319/pexels-photo-4253319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  accentAlt: "Chef finishing a plate with sauce",
  years: "15",
  story: [
    "With a lifelong passion for food and an unwavering commitment to culinary excellence, Chef Bryant brings a wealth of experience and creativity to the table.",
    "A true artist at heart, he approaches cooking as a form of expression — weaving ingredients and flavors together with finesse and innovation, always built on the finest, locally sourced ingredients.",
  ],
  values: [
    { icon: "Award", title: "Craft First", text: "15 years in renowned kitchens — Atlanta to Philadelphia." },
    { icon: "Flame", title: "Cooked To Order", text: "Every plate made for a name, never a crowd." },
    { icon: "Leaf", title: "Local & Seasonal", text: "Delco farms and Philly markets, every week." },
  ],
};

export const aboutStory = {
  lead: "With a lifelong passion for food and an unwavering commitment to culinary excellence, Chef Bryant brings a wealth of experience and creativity to the table — the culinary mastermind behind every Exquisite Taste creation.",
  journey: [
    {
      title: "The Craft",
      text: "A diverse culinary background spanning 15 years, honed in renowned kitchens throughout Atlanta. A true artist at heart, he approaches cooking as a form of expression — weaving ingredients and flavors with finesse and innovation, always anchored in the finest, locally sourced ingredients.",
    },
    {
      title: "The Art",
      text: "Passionate about creating unique dining experiences, Chef Bryant thrives on designing menus that reflect the individual tastes and desires of each client — seamlessly blending traditional and contemporary culinary styles into dishes that are as visually stunning as they are tantalizing to the palate.",
    },
    {
      title: "The Hospitality",
      text: "Beyond his technical prowess, Chef Bryant is known for a warm and approachable demeanor. He collaborates closely with every client, listening to their vision and translating it into a culinary journey that exceeds expectations — with a personal touch that leaves a lasting impression.",
    },
  ],
  offDuty:
    "When Chef Bryant is not orchestrating culinary symphonies, he can be found exploring local markets, seeking inspiration from different cultures, and constantly pushing the boundaries of flavor combinations. A firm believer in lifelong learning, he continuously strives to stay at the forefront of culinary trends and innovations.",
  invitation:
    "With Chef Bryant at the helm, Exquisite Taste is your gateway to a world of culinary delights. Join us as we savor his artistry and passion — and discover a new level of culinary excellence, where each dish tells a story and every bite is an exquisite experience.",
  specialties: ["Menu Artistry", "Southern Classics", "Plated Desserts", "Sauce Work", "Global Flavors"],
  philosophy: [
    {
      icon: "Handshake",
      title: "Mission",
      text: "To make restaurant-caliber food personal again — cooked for a name on a ticket, not a covers count on a spreadsheet.",
    },
    {
      icon: "Sprout",
      title: "Sourcing",
      text: "Delco farm stands, Philly's Italian Market, and a short list of growers we call by first name. Menus follow the season, not the other way around.",
    },
    {
      icon: "HeartHandshake",
      title: "Personal, Not Transactional",
      text: "You’ll never get a ticket number here. You get a text when your order starts on the stove, and a chef who remembers you take it less sweet.",
    },
  ],
  behindScenes: [
    {
      src: "https://images.pexels.com/photos/36430149/pexels-photo-36430149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Chef garnishing a dish with sauce in a professional kitchen",
      caption: "Saturday 6 AM — sauces first",
    },
    {
      src: "https://images.pexels.com/photos/36904788/pexels-photo-36904788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Team of chefs plating a steak dish together",
      caption: "Event service — every plate inspected",
    },
    {
      src: "https://images.pexels.com/photos/36430153/pexels-photo-36430153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Precise plating with tweezers",
      caption: "Tweezer work on course three",
    },
    {
      src: "https://images.pexels.com/photos/4253319/pexels-photo-4253319.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Chef finishing a dish with a squeeze bottle",
      caption: "Final touches before boxing",
    },
  ],
};

export const whoWeAre = {
  lead: "Welcome to Exquisite Taste, where culinary excellence meets unparalleled service — a premier chef-owned catering service dedicated to delighting your palate and exceeding your expectations.",
  points: [
    {
      icon: "ChefHat",
      title: "Culinary Magic, Every Event",
      text: "Intimate wedding receptions, corporate galas, social gatherings — a bespoke menu that reflects your unique tastes and vision.",
    },
    {
      icon: "Leaf",
      title: "Freshest, Local First",
      text: "Only the highest-quality ingredients from local suppliers, so each dish we create is a masterpiece of flavor and presentation.",
    },
    {
      icon: "ConciergeBell",
      title: "Full-Service or Drop-Off",
      text: "Skilled waitstaff and full setup for grand affairs, or polished drop-off for casual ones — flexible options to suit your needs.",
    },
    {
      icon: "Handshake",
      title: "Service That Disappears",
      text: "From the initial consultation to the final bite, our professional, attentive team guides you through every step — seamless and stress-free.",
    },
  ],
  closing:
    "At Exquisite Taste, we believe great food has the power to bring people together, create memories, and elevate any occasion. As passionate food enthusiasts, we consider it an honor to be part of your special moments — and we pour our heart and soul into every event we cater.",
};

export const cateringPackages = [
  {
    id: "intimate",
    name: "The Intimate Table",
    range: "4 – 12 guests",
    price: "From $115 / guest",
    image:
      "https://images.pexels.com/photos/17294730/pexels-photo-17294730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Elegant private dining table with candles and florals",
    features: [
      "Private chef, in your home",
      "5–7 course seasonal tasting",
      "Printed menus & table styling",
      "Wine pairing guidance (BYOB-friendly)",
    ],
  },
  {
    id: "celebrations",
    name: "Celebrations & Socials",
    range: "Up to 75 guests",
    price: "From $54 / guest",
    featured: true,
    image:
      "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Passed appetizers styled for an elegant event",
    features: [
      "Buffet, family-style or stations",
      "Passed hors d’oeuvres service",
      "Setup, staff & breakdown included",
      "Custom menu built around your event",
    ],
  },
  {
    id: "weddings",
    name: "Weddings & Galas",
    range: "Full-service",
    price: "Custom proposal",
    image:
      "https://images.pexels.com/photos/17315461/pexels-photo-17315461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Candlelit wedding reception table with flowers",
    features: [
      "Plated multi-course service",
      "Tastings for parties of 50+",
      "Rentals & vendor coordination",
      "Day-of culinary team on site",
    ],
  },
];

export const cateringNotes = [
  { icon: "UtensilsCrossed", text: "Passed, stationed & plated service" },
  { icon: "Wine", text: "BYOB-friendly pairing guidance" },
  { icon: "Handshake", text: "Rentals & vendor coordination" },
];

export const galleryTiles = [
  {
    src: "https://images.pexels.com/photos/36904788/pexels-photo-36904788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Culinary team plating a steak dish in a professional kitchen",
    caption: "On the line · Wedding service, Media",
    span: "c1",
  },
  {
    src: "https://images.pexels.com/photos/24186303/pexels-photo-24186303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Refined tapas garnished with herbs on a black plate",
    caption: "Course three · Summer weekly drop",
    span: "c2",
  },
  {
    src: "https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Fine dining table setting with wine glasses",
    caption: "The Intimate Table · Swarthmore",
    span: "c3",
  },
  {
    src: "https://images.pexels.com/photos/17001833/pexels-photo-17001833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Floral table with candles and desserts",
    caption: "Dessert station · Baby shower, Drexel Hill",
    span: "c4",
  },
  {
    src: "https://images.pexels.com/photos/36430153/pexels-photo-36430153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Chef arranging a plate with tweezers",
    caption: "Plating · Saturday fulfillment",
    span: "c5",
  },
  {
    src: "https://images.pexels.com/photos/16935964/pexels-photo-16935964.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Table set with roses, candles and dinnerware",
    caption: "Anniversary dinner · Rose Valley",
    span: "c6",
  },
  {
    src: "https://images.pexels.com/photos/30562608/pexels-photo-30562608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Rustic wedding table with floral decor",
    caption: "Garden wedding · Chadds Ford",
    span: "c7",
  },
  {
    src: "https://images.pexels.com/photos/29683251/pexels-photo-29683251.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Assorted dessert platter with artistic presentation",
    caption: "Sweet finish · Gala service, Philadelphia",
    span: "c8",
  },
];

export const socialTiles = [
  {
    src: "https://images.pexels.com/photos/35985212/pexels-photo-35985212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Dining table with white flower centerpieces",
    caption: "Tablescape day",
  },
  {
    src: "https://images.pexels.com/photos/36869215/pexels-photo-36869215.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Barbecue platter with sides on a wooden table",
    caption: "Backyard drop test",
  },
  {
    src: "https://images.pexels.com/photos/27961865/pexels-photo-27961865.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Grilled potatoes with fresh chives",
    caption: "Market haul",
  },
  {
    src: "https://images.pexels.com/photos/27831791/pexels-photo-27831791.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Fried chicken sizzling in a pan",
    caption: "Cast iron, always",
  },
  {
    src: "https://images.pexels.com/photos/6192003/pexels-photo-6192003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Family sharing a feast at the table",
    caption: "The family table",
  },
  {
    src: "https://images.pexels.com/photos/8540978/pexels-photo-8540978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Pouring sweet tea outdoors in sunshine",
    caption: "Tea duty",
  },
];

export const testimonials = [
  {
    quote:
      "The short rib was the best thing we ate all year — and it showed up at our door still hot, plated like a restaurant. We preorder every single week now.",
    name: "Danielle M.",
    detail: "Weekly Preorder · Wallingford, PA",
  },
  {
    quote:
      "Chef Bryant catered our wedding for 120 and guests are still texting us about the food. Calm, precise, generous — the Intimate Table tasting sold us in one evening.",
    name: "The Hendersons",
    detail: "Wedding · Media, PA",
  },
  {
    quote:
      "We’ve used five caterers for our firm’s events. None of them touched this. Stations were beautiful, staff was invisible in the best way, and the shrimp and grits vanished first.",
    name: "Marcus T.",
    detail: "Corporate Social · Philadelphia",
  },
  {
    quote:
      "She turned our dining room into a restaurant for my parents’ 40th anniversary. Seven courses, printed menus, and a dessert my mother refuses to stop describing.",
    name: "Alicia R.",
    detail: "Private Dinner · Drexel Hill, PA",
  },
  {
    quote:
      "After my surgery, a month of these plates kept our family fed. Every box felt like it was cooked by someone who knew us — because by week two, she did.",
    name: "The Okafor Family",
    detail: "Weekly Preorder · Havertown, PA",
  },
  {
    quote:
      "Three offices, forty people, dietary needs everywhere. Chef Bryant built five menus and nailed every single one. Our founders now request him for every offsite.",
    name: "Priya K.",
    detail: "Corporate Retreat · Philadelphia",
  },
  {
    quote:
      "The lamb chops at my graduation party had my college friends asking for the caterer before they asked about my degree. Worth every penny.",
    name: "Devon W.",
    detail: "Graduation Party · Upper Darby, PA",
  },
];

export const orderFaqs: FaqItemData[] = [
  {
    q: "What payment methods do you accept?",
    a: "Checkout runs through Stripe Payment Links, so Visa, Mastercard, American Express, Apple Pay, Google Pay and Cash App Pay all work — no account or app required. Payment is taken in full at the time of preorder, and you’ll get an instant Stripe receipt by email.",
  },
  {
    q: "When is the preorder cutoff?",
    a: "Orders open Tuesday at 9 AM and close Thursday at 8 PM sharp. Popular items can sell out earlier — availability is shown live on the menu page. The menu itself rotates every Sunday evening.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Yes — up until the Thursday 8 PM cutoff, email us and we’ll modify or cancel with a full refund to your original payment method. After cutoff, ingredients have already been sourced against your ticket, so orders become final; we’re happy to convert the value to credit for a future week in genuine emergencies.",
  },
  {
    q: "How do you handle allergies and dietary needs?",
    a: "Add a note at checkout and Chef Bryant confirms every accommodation personally by email before cooking. Gluten-free, vegetarian and vegan items are marked on the menu with their gold line marks. Note that everything is prepared in a shared home kitchen that handles wheat, dairy, shellfish and nuts.",
  },
  {
    q: "Where and when do I pick up?",
    a: "Pickup is Saturdays 11 AM – 2 PM in Drexel Hill, PA. The exact address is sent with your Stripe receipt and again by text on Saturday morning. Bring a bag if you can — everything is boxed hot and labeled.",
  },
  {
    q: "How does delivery work?",
    a: "We deliver Saturdays 12 – 4 PM anywhere in Delaware County and Philadelphia for a flat $5. Orders arrive in insulated carriers with reheating notes. You’ll get a text when we’re on the way and a photo on drop — contact-free by default, but we’re happy to hand it over in person.",
  },
];
