# Exquisite Taste of T — Owner's Site Guide

Welcome! This guide covers everything you can update yourself — no developer
needed for routine changes. Every edit below happens in **one of two text
files**:

| What you want to change | File |
| --- | --- |
| Menu items, prices, photos, availability, extras, pairings, Stripe links | `src/data/menu.ts` |
| Phone, email, hours, pickup/delivery info, testimonials, packages | `src/data/site.ts` |

After editing a file, save it and redeploy/restart the site (your host does
this automatically on push, or ask your developer to press "deploy").

---

## 1. Update Menu Items

Open `src/data/menu.ts`. Each dish is a block like this:

```ts
{
  id: "m3",                                        // don't change existing ids
  name: "Slow-Braised Short Rib · Mushroom Jus",
  description: "Eight hours low and slow …",
  price: 26,
  serves: "Feeds 1–2",
  tag: "Chef’s Signature",                          // corner ribbon (optional)
  image: "https://…photo-url…",                    // photo URL
  alt: "Braised beef plated with microgreens",      // photo description (SEO)
  stripeLink: stripe("shortrib_01"),                // ← your Stripe link
  category: "mains",                                // mains | sides | sweets | drinks
  dietary: ["gf"],                                  // "veg" "vegan" "gf" (or [])
  availability: "available",                        // see below
  addOns: [extraProtein, familySize, sweetFinish],
  pairings: ["s2", "sw2"],                          // ids of dishes that pair
  featured: true,                                   // show on the homepage
},
```

- **Change a price** → edit the number after `price:`.
- **Change the photo** → paste any image URL into `image:` (Pexels, Unsplash,
  or your own hosted photo) and describe it in `alt:`.
- **Mark something SOLD OUT** → set `availability: "soldout"`. The card gets a
  SOLD OUT banner and can't be ordered. Use `"low"` for a "Few Left" ribbon,
  and `"available"` when it's back.
- **This week's homepage picks** → set `featured: true` on up to 4 dishes.
- **Add a new dish** → copy a whole block, paste it at the bottom of its
  category group, give it a fresh unique `id` (e.g. `"m7"`), and edit the text.

## 2. Add or Edit Stripe Payment Links

Each dish, add-on, pairing and bundle has its own Stripe Payment Link.

1. In your Stripe Dashboard → **Payment Links** → create/copy a link
   (it looks like `https://buy.stripe.com/xxxxxxxx`).
2. In `src/data/menu.ts`, replace the placeholder, e.g.:

```ts
stripeLink: stripe("shortrib_01"),
// …becomes…
stripeLink: "https://buy.stripe.com/YOUR_REAL_LINK",
```

Do the same inside the shared add-ons list near the top of the file
(`extraProtein`, `familySize`, …) whenever you add a new extra.

**One combined checkout (optional):** if you'd like customers to pay for the
dish + extras + pairings in a single Stripe page, add your secret key to the
environment as `STRIPE_SECRET_KEY` — the site automatically switches to a real
Stripe Checkout Session with the exact items. Without the key it gracefully
guides customers through one Payment Link per item.

## 3. Update Photos Around the Site

| Photo | Where |
| --- | --- |
| Homepage hero video / poster | `src/components/Hero.tsx` (`HERO_VIDEO`, `HERO_POSTER` constants at top) |
| Chef portraits (home teaser + About) | `src/data/site.ts` → `chefProfile` |
| Homepage gallery | `src/data/site.ts` → `galleryTiles` |
| Social/Instagram strip | `src/data/site.ts` → `socialTiles` |
| Catering event gallery | `src/app/catering/page.tsx` → `eventGallery` |

## 4. Read Form Submissions

- **Catering + contact + VIP signups** are sent to your email once you set two
  environment variables: `RESEND_API_KEY` (from resend.com, free tier works)
  and `OWNER_EMAIL` (your inbox). No database needed.
- Until then, every submission is safely logged on the server and customers
  still see the confirmation message.

## 5. Hours, Pickup/Delivery & Announcements

- Phone, email, hours, pickup window → `src/data/site.ts` → `contact`.
- Preorder window/pickup/delivery blurbs → `src/data/menu.ts` → `preorderNotes`.
- Delivery town chips → `src/data/menu.ts` → `deliveryZones`.
- Quick bundles on the Order page → `src/data/menu.ts` → `orderBundles`.
- Testimonials → `src/data/site.ts` → `testimonials`.

## Weekly Rhythm Cheat-Sheet

- **Sunday evening:** update dishes in `menu.ts` (new names/prices/photos,
  set last week's items to `"soldout"` or remove them).
- **Tuesday 9 AM:** nothing to do — ordering opens automatically.
- **Thursday 8 PM:** take your Stripe receipts (Stripe emails each one) and
  cook against the ticket list.

You're the owner of everything here — domain, hosting, Stripe account, Google
Business Profile, and this code. Nothing is locked in.
