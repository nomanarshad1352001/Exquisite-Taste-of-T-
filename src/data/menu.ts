/* ═══════════════════════════════════════════════════════════════════
   EXQUISITE TASTE OF T — OWNER-EDITABLE WEEKLY MENU
   ───────────────────────────────────────────────────────────────────
   Update this file each week — no component code changes needed.

   • name / description / price ........ edit the text and numbers
   • image / alt ....................... paste any image URL (Pexels,
                                         Unsplash, your own host) + a
                                         short description for SEO
   • availability ...................... "available" | "low" | "soldout"
                                         (sold out cards show a SOLD OUT
                                         banner and can't be ordered)
   • tag ............................... optional corner ribbon text
   • dietary ........................... any of: "veg" "vegan" "gf"
   • stripeLink ........................ paste the item's Stripe
                                         Payment Link
   • addOns ............................ "Extras" for this dish, shown in
                                         step 1 of the order flow (name,
                                         description, icon, price + a
                                         Stripe link per add-on)
   • pairings .......................... "Pairs Well With" — ids of other
                                         dishes shown as chef's picks in
                                         step 2 of the order flow
   • featured .......................... true = shown on the home page

   CHECKOUT: when STRIPE_SECRET_KEY is set in the environment, the
   order builder assembles a single Stripe Checkout Session with the
   customer’s exact combination (Option A). Without keys, the flow
   guides customers through each item’s Payment Link (Option B).
   ═══════════════════════════════════════════════════════════════════ */

import type { Dietary } from "@/components/DietaryMarks";

export type DishCategory = "mains" | "sides" | "sweets" | "drinks";

export type Availability = "available" | "low" | "soldout";

export interface AddOn {
  id: string;
  name: string;
  description: string;
  /* icon key — see src/components/menu/marks.tsx */
  icon: string;
  price: number;
  stripeLink: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  serves: string;
  tag?: string;
  image: string;
  alt: string;
  stripeLink: string;
  category: DishCategory;
  dietary: Dietary[];
  availability: Availability;
  addOns: AddOn[];
  pairings: string[];
  featured?: boolean;
}

export const categories: { id: DishCategory; label: string }[] = [
  { id: "mains", label: "Entrées" },
  { id: "sides", label: "Sides & Extras" },
  { id: "sweets", label: "Desserts" },
  { id: "drinks", label: "Beverages" },
];

/* Replace these placeholders with your real Stripe Payment Links. */
const stripe = (code: string) => `https://buy.stripe.com/test_${code}`;

/* ── Shared add-ons (each is its own small Stripe item) ─────────── */
const extraProtein: AddOn = {
  id: "ao-protein",
  name: "Extra Protein Portion",
  description: "Double the star of the plate — same cut, same braise or brine.",
  icon: "protein",
  price: 6,
  stripeLink: stripe("addon_protein"),
};
const familySize: AddOn = {
  id: "ao-family",
  name: "Family-Size Upgrade",
  description: "Feeds four generously — arrives in a family-style pan.",
  icon: "family",
  price: 14,
  stripeLink: stripe("addon_family"),
};
const sweetFinish: AddOn = {
  id: "ao-sweet",
  name: "A Sweet Finish",
  description: "Chef’s choice dessert of the week, plated to travel.",
  icon: "sweet",
  price: 8,
  stripeLink: stripe("addon_sweet"),
};
const doubleSide: AddOn = {
  id: "ao-double",
  name: "Double Portion",
  description: "A second full scoop of this side — pot liquor included.",
  icon: "side",
  price: 7,
  stripeLink: stripe("addon_double"),
};
const extraSlice: AddOn = {
  id: "ao-slice",
  name: "Second Slice, Same Sweet",
  description: "Because one was never really going to be enough.",
  icon: "slice",
  price: 7,
  stripeLink: stripe("addon_slice"),
};
const giftBox: AddOn = {
  id: "ao-gift",
  name: "Gift-Wrap Keepsake Box",
  description: "Kraft-and-gold box with ribbon — ready to hand over.",
  icon: "gift",
  price: 4,
  stripeLink: stripe("addon_giftbox"),
};
const secondGallon: AddOn = {
  id: "ao-gallon",
  name: "Second Half-Gallon",
  description: "Chilled separately so the first stays ice-cold.",
  icon: "glass",
  price: 6,
  stripeLink: stripe("addon_gallon"),
};

export const dishes: Dish[] = [
  /* ── ENTRÉES ─────────────────────────────────────────────────── */
  {
    id: "m1",
    name: "Smoked Gouda Mac · Blackened Chicken",
    description:
      "Five-cheese pull, cast-iron crust, blackened chicken folded through a gouda cream that finishes with white pepper heat.",
    price: 18,
    serves: "Feeds 1–2",
    tag: "Crowd Favorite",
    image: "https://images.pexels.com/photos/23021490/pexels-photo-23021490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Creamy mac and cheese topped with blackened chicken and herbs",
    stripeLink: stripe("mac_gouda_01"),
    category: "mains",
    dietary: [],
    availability: "available",
    addOns: [extraProtein, familySize, sweetFinish],
    pairings: ["s1", "d1"],
    featured: true,
  },
  {
    id: "m2",
    name: "Brown-Butter Herb Salmon",
    description:
      "Crisp-skinned Atlantic salmon in nutty brown butter, charred lemon, blistered tomatoes and garden herbs.",
    price: 24,
    serves: "Feeds 1",
    image: "https://images.pexels.com/photos/29168406/pexels-photo-29168406.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Grilled salmon with cherry tomatoes and greens on a stylish plate",
    stripeLink: stripe("salmon_01"),
    category: "mains",
    dietary: ["gf"],
    availability: "available",
    addOns: [extraProtein, sweetFinish],
    pairings: ["s2", "sw3"],
    featured: true,
  },
  {
    id: "m3",
    name: "Slow-Braised Short Rib · Mushroom Jus",
    description:
      "Eight hours low and slow until it yields to a spoon, finished with a glossy wild-mushroom jus and micro herbs.",
    price: 26,
    serves: "Feeds 1–2",
    tag: "Chef’s Signature",
    image: "https://images.pexels.com/photos/1639559/pexels-photo-1639559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Braised beef plated with microgreens and creamy mushroom sauce",
    stripeLink: stripe("shortrib_01"),
    category: "mains",
    dietary: ["gf"],
    availability: "available",
    addOns: [extraProtein, familySize, sweetFinish],
    pairings: ["s2", "sw2"],
    featured: true,
  },
  {
    id: "m4",
    name: "Citrus & Herb Cornish Hen",
    description:
      "Half hen brined in orange, thyme and bay — roasted until the skin lacquers, resting jus poured tableside at home.",
    price: 22,
    serves: "Feeds 1",
    image: "https://images.pexels.com/photos/24186393/pexels-photo-24186393.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Plated roasted hen on a dark elegant plate",
    stripeLink: stripe("cornish_01"),
    category: "mains",
    dietary: ["gf"],
    availability: "available",
    addOns: [extraProtein, familySize],
    pairings: ["s3", "d3"],
  },
  {
    id: "m5",
    name: "Garlic Shrimp · White-Cheddar Grits",
    description:
      "Gulf shrimp seared in garlic butter over stone-ground grits whipped with white cheddar and chive oil.",
    price: 23,
    serves: "Feeds 1",
    tag: "Limited Run",
    image: "https://images.pexels.com/photos/24289213/pexels-photo-24289213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Elegant seafood dish with herbs and microgreens on a black plate",
    stripeLink: stripe("shrimp_grits_01"),
    category: "mains",
    dietary: ["gf"],
    availability: "low",
    addOns: [extraProtein, sweetFinish],
    pairings: ["s3", "d2"],
    featured: true,
  },
  {
    id: "m6",
    name: "Buttermilk Chicken & Waffles",
    description:
      "24-hour buttermilk brine, shattering crust, brown-butter waffle and warm hot-honey maple on the side.",
    price: 17,
    serves: "Feeds 1",
    tag: "Weekend Only",
    image: "https://images.pexels.com/photos/9840172/pexels-photo-9840172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Chicken and waffles served with maple and butter",
    stripeLink: stripe("chicken_waffles_01"),
    category: "mains",
    dietary: [],
    availability: "soldout",
    addOns: [familySize, sweetFinish],
    pairings: ["s2", "d1"],
  },
  /* ── SIDES & EXTRAS ──────────────────────────────────────────── */
  {
    id: "s1",
    name: "Collard Greens · Smoked Turkey",
    description:
      "Slow-simmered with smoked turkey, cider vinegar and a whisper of heat — the pot liquor is the point.",
    price: 9,
    serves: "Serves 2–3",
    image: "https://images.pexels.com/photos/750952/pexels-photo-750952.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Fresh collard greens with rich natural texture",
    stripeLink: stripe("collards_01"),
    category: "sides",
    dietary: ["gf"],
    availability: "available",
    addOns: [doubleSide],
    pairings: ["m1"],
  },
  {
    id: "s2",
    name: "Roasted-Garlic Whipped Potatoes",
    description:
      "Yukon golds whipped silk-smooth with confit garlic, cream and salted butter. Spoon required, not optional.",
    price: 9,
    serves: "Serves 2–3",
    image: "https://images.pexels.com/photos/5718072/pexels-photo-5718072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Bowl of whipped potatoes served at a dinner table",
    stripeLink: stripe("whipped_potatoes_01"),
    category: "sides",
    dietary: ["veg", "gf"],
    availability: "available",
    addOns: [doubleSide],
    pairings: ["m3"],
  },
  {
    id: "s3",
    name: "Skillet Corn Spoonbread · Hot Honey",
    description:
      "Half cornbread, half souffle — baked in cast iron and brushed with hot honey butter the moment it lands.",
    price: 8,
    serves: "Serves 3–4",
    image: "https://images.pexels.com/photos/34637996/pexels-photo-34637996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Golden corn spoonbread cake on a decorative plate",
    stripeLink: stripe("spoonbread_01"),
    category: "sides",
    dietary: ["veg"],
    availability: "available",
    addOns: [doubleSide],
    pairings: ["m4"],
  },
  /* ── DESSERTS ────────────────────────────────────────────────── */
  {
    id: "sw1",
    name: "Red Velvet · Cream-Cheese Silk",
    description:
      "Deep cocoa layers, tangy silk frosting and a candied crumble — the slice that ends the week properly.",
    price: 8,
    serves: "One generous slice",
    tag: "Signature",
    image: "https://images.pexels.com/photos/35622247/pexels-photo-35622247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Red velvet cake with decorative garnishes on a plate",
    stripeLink: stripe("red_velvet_01"),
    category: "sweets",
    dietary: ["veg"],
    availability: "available",
    addOns: [extraSlice, giftBox],
    pairings: ["d2"],
    featured: true,
  },
  {
    id: "sw2",
    name: "Dark Chocolate Mousse Torte",
    description:
      "Flourless, glossy, and unapologetically rich — finished with whipped cream, toasted nuts and cocoa dust.",
    price: 8,
    serves: "One generous slice",
    image: "https://images.pexels.com/photos/8601851/pexels-photo-8601851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Chocolate mousse cake slices with whipped cream and nuts",
    stripeLink: stripe("mousse_01"),
    category: "sweets",
    dietary: ["veg", "gf"],
    availability: "available",
    addOns: [extraSlice, giftBox],
    pairings: ["d3"],
  },
  {
    id: "sw3",
    name: "Wildflower Honeycomb Cheesecake",
    description:
      "No-crack vanilla bean cheesecake crowned with local honeycomb and torched cream. A small-plate luxury.",
    price: 9,
    serves: "One petite cake",
    tag: "Limited Run",
    image: "https://images.pexels.com/photos/35708376/pexels-photo-35708376.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Artistic honeycomb and cream dessert on a dark plate",
    stripeLink: stripe("honeycomb_01"),
    category: "sweets",
    dietary: ["veg"],
    availability: "low",
    addOns: [giftBox],
    pairings: ["d2"],
  },
  /* ── BEVERAGES ───────────────────────────────────────────────── */
  {
    id: "d1",
    name: "Peach Sweet Tea · Half Gallon",
    description:
      "Slow-steeped black tea, ripe peach nectar, barely sweet — the way a porch afternoon tastes.",
    price: 7,
    serves: "Half gallon",
    image: "https://images.pexels.com/photos/8540276/pexels-photo-8540276.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Pitcher of sweet tea with fresh lemon on a table",
    stripeLink: stripe("peach_tea_01"),
    category: "drinks",
    dietary: ["vegan", "gf"],
    availability: "available",
    addOns: [secondGallon],
    pairings: ["m1"],
  },
  {
    id: "d2",
    name: "Cold-Pressed Hibiscus Lemonade",
    description:
      "Tart hibiscus, cold-pressed lemon, a hint of vanilla bean — jewel-toned and dangerously drinkable.",
    price: 7,
    serves: "Half gallon",
    image: "https://images.pexels.com/photos/8541309/pexels-photo-8541309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Iced citrus drink in a clear glass with lemon slices",
    stripeLink: stripe("hibiscus_01"),
    category: "drinks",
    dietary: ["vegan", "gf"],
    availability: "available",
    addOns: [secondGallon],
    pairings: ["m2", "sw1"],
  },
  {
    id: "d3",
    name: "Sorrel & Ginger Punch",
    description:
      "Caribbean sorrel steeped with fresh ginger and clove — bright, spiced, and festive in a glass.",
    price: 8,
    serves: "Half gallon",
    tag: "Limited Run",
    image: "https://images.pexels.com/photos/7703248/pexels-photo-7703248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Iced beverages with citrus slices in clear glasses",
    stripeLink: stripe("sorrel_01"),
    category: "drinks",
    dietary: ["vegan", "gf"],
    availability: "available",
    addOns: [secondGallon],
    pairings: ["m4"],
  },
  /* ── ANOTHER WEEK · keeping the drop generous ─────────────────── */
  {
    id: "m7",
    name: "Harissa Lamb Chops · Mint Gremolata",
    description:
      "Frenched chops brushed with rose harissa, seared hard, finished with mint-pistachio gremolata and warm pan jus.",
    price: 27,
    serves: "Three chops",
    tag: "New This Week",
    image: "https://images.pexels.com/photos/36678410/pexels-photo-36678410.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Gourmet lamb chop with herb sauce in a fine dining setting",
    stripeLink: stripe("lamb_chops_01"),
    category: "mains",
    dietary: ["gf"],
    availability: "available",
    addOns: [extraProtein, familySize, sweetFinish],
    pairings: ["s5", "sw4"],
  },
  {
    id: "m8",
    name: "Twelve-Spice Brisket · Burnt-End Jus",
    description:
      "A secret twelve-spice rub, twelve hours of patience, and a burnt-end jus that gets spooned over everything it touches.",
    price: 25,
    serves: "Feeds 1–2",
    image: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Grilled sliced beef topped with microgreens on a dark plate",
    stripeLink: stripe("brisket_01"),
    category: "mains",
    dietary: ["gf"],
    availability: "available",
    addOns: [extraProtein, familySize, sweetFinish],
    pairings: ["s1", "d3"],
  },
  {
    id: "m9",
    name: "Butter-Poached Lobster · Saffron Rice",
    description:
      "Cold-water lobster poached gently in cultured butter over golden saffron rice with charred broccolini.",
    price: 29,
    serves: "Feeds 1",
    tag: "Limited Run",
    image: "https://images.pexels.com/photos/24246112/pexels-photo-24246112.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Lobster served with rice and broccoli on an elegant plate",
    stripeLink: stripe("lobster_01"),
    category: "mains",
    dietary: ["gf"],
    availability: "low",
    addOns: [sweetFinish, giftBox],
    pairings: ["s4", "d2"],
  },
  {
    id: "s4",
    name: "Charred Green Beans · Garlic Almond",
    description:
      "Blistered in a screaming pan with confit garlic, toasted almonds and a squeeze of charred lemon.",
    price: 9,
    serves: "Serves 2–3",
    image: "https://images.pexels.com/photos/37073152/pexels-photo-37073152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Colorful vegetable sauté with carrots and green beans on a plate",
    stripeLink: stripe("green_beans_01"),
    category: "sides",
    dietary: ["vegan", "gf"],
    availability: "available",
    addOns: [doubleSide],
    pairings: ["m2"],
  },
  {
    id: "s5",
    name: "Hot-Honey Rainbow Carrots",
    description:
      "Heirloom carrots roasted to the edge of caramel, brushed with hot honey and crushed coriander seed.",
    price: 8,
    serves: "Serves 2–3",
    image: "https://images.pexels.com/photos/8477225/pexels-photo-8477225.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Grilled rainbow carrots in a tray with vibrant color",
    stripeLink: stripe("carrots_01"),
    category: "sides",
    dietary: ["veg", "gf"],
    availability: "available",
    addOns: [doubleSide],
    pairings: ["m7"],
  },
  {
    id: "sw4",
    name: "Bourbon Pecan Pie Bar",
    description:
      "Brown-butter shortbread, a bourbon-laced pecan filling that holds its edge, and a whisper of smoked salt.",
    price: 8,
    serves: "One generous bar",
    image: "https://images.pexels.com/photos/11082264/pexels-photo-11082264.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Homemade pecan pie with caramel glaze, close-up",
    stripeLink: stripe("pecan_bar_01"),
    category: "sweets",
    dietary: ["veg"],
    availability: "available",
    addOns: [extraSlice, giftBox],
    pairings: ["d1"],
  },
  {
    id: "sw5",
    name: "Cast-Iron Skillet Cookie · Sea Salt",
    description:
      "Baked to order in the skillet — molten center, crisp rim, dark chocolate, toasted pecans, flaky sea salt.",
    price: 8,
    serves: "Feeds 2, honestly",
    tag: "Crowd Favorite",
    image: "https://images.pexels.com/photos/6773051/pexels-photo-6773051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Skillet cookie with chocolate chips and pecans",
    stripeLink: stripe("skillet_cookie_01"),
    category: "sweets",
    dietary: ["veg"],
    availability: "available",
    addOns: [extraSlice, giftBox],
    pairings: ["d2"],
  },
  {
    id: "d4",
    name: "Blackberry Mint Iced Tea",
    description:
      "Muddled blackberries and bruised mint over slow-steeped tea — barely sweet, endlessly refillable at the table.",
    price: 7,
    serves: "Half gallon",
    image: "https://images.pexels.com/photos/8540185/pexels-photo-8540185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Iced tea with lemon and ice in a tall glass",
    stripeLink: stripe("blackberry_tea_01"),
    category: "drinks",
    dietary: ["vegan", "gf"],
    availability: "available",
    addOns: [secondGallon],
    pairings: ["m1"],
  },
];

/* ── Preorder logistics (shown across menu & order pages) ───────── */
export const preorderNotes = [
  { icon: "Clock", title: "Preorder Window", text: "Tuesday 9 AM – Thursday 8 PM. When plates sell out, they’re gone." },
  { icon: "MapPin", title: "Saturday Pickup", text: "Drexel Hill, PA · 11 AM – 2 PM. Address shared at checkout." },
  { icon: "Truck", title: "Saturday Delivery", text: "Delco + Philadelphia · $5 flat, contact-free at your door." },
];

/* ── Quick-order bundles (each links to a Stripe Payment Link) ──── */
export const orderBundles = [
  {
    id: "bundle-family",
    name: "The Family Supper",
    description: "Any two entrées, two sides and a spoonbread — feeds four generously.",
    price: 68,
    stripeLink: stripe("bundle_family"),
  },
  {
    id: "bundle-date",
    name: "Date Night for Two",
    description: "Two entrées, one side and one dessert — candles not included, encouraged.",
    price: 54,
    stripeLink: stripe("bundle_date"),
  },
  {
    id: "bundle-sweet",
    name: "The Sweet Finish",
    description: "A trio of this week’s desserts — one for now, one for later, one to share.",
    price: 22,
    stripeLink: stripe("bundle_sweet"),
  },
];

export const deliveryZones = [
  "Drexel Hill",
  "Upper Darby",
  "Havertown",
  "Lansdowne",
  "Springfield",
  "Media",
  "Swarthmore",
  "Broomall",
  "Newtown Square",
  "Philadelphia",
];
