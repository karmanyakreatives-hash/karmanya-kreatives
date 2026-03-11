export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Themes", href: "/themes" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Where forever begins",
    description:
      "From intimate ceremonies to grand celebrations, we craft wedding environments that narrate your unique love story. Every petal, every light, every detail — orchestrated to perfection.",
    icon: "💍",
    features: ["Mandap & Stage Decor", "Floral Arrangements", "Lighting Design", "Table Settings", "Entrance Decor", "Photo Booths"],
  },
  {
    id: "birthdays",
    title: "Birthdays",
    subtitle: "Celebrate in style",
    description:
      "Whether it's a first birthday or a fiftieth, we design immersive celebrations that reflect your personality and leave guests in awe.",
    icon: "🎂",
    features: ["Theme-based Decor", "Balloon Installations", "Backdrop Design", "Cake Table Styling", "Party Favors Display", "Entertainment Zones"],
  },
  {
    id: "anniversaries",
    title: "Anniversaries",
    subtitle: "Honoring love's journey",
    description:
      "Renew your vows or celebrate milestones with elegant, romantic decor that honours every chapter of your journey together.",
    icon: "✨",
    features: ["Romantic Setups", "Memory Walls", "Floral Canopies", "Candlelight Arrangements", "Custom Signage", "Surprise Elements"],
  },
  {
    id: "corporate",
    title: "Corporate Events",
    subtitle: "Impress & inspire",
    description:
      "Elevate your brand events, product launches, and galas with sophisticated decor that commands attention and reflects excellence.",
    icon: "🏆",
    features: ["Brand-aligned Decor", "Stage & Podium Design", "Lounge Setups", "Award Night Styling", "Product Launch Decor", "Gala Dinners"],
  },
  {
    id: "baby-showers",
    title: "Baby Showers",
    subtitle: "Welcome the little one",
    description:
      "Celebrate new beginnings with dreamy, whimsical setups that make the mama-to-be feel cherished and the occasion truly magical.",
    icon: "🌸",
    features: ["Gender Reveal Setups", "Floral Installations", "Sweet Table Styling", "Balloon Clouds", "Photo Moments", "Welcome Arches"],
  },
  {
    id: "custom",
    title: "Custom Events",
    subtitle: "Your vision, our craft",
    description:
      "From engagement parties to farewell soirees — if you can dream it, we can design it. No event too big, no detail too small.",
    icon: "🎨",
    features: ["Concept Development", "Full Venue Transformation", "Custom Props", "Floral Design", "Lighting Mood", "Day-of Coordination"],
  },
];

export const THEMES = [
  {
    id: "royal-gold",
    title: "Royal Gold",
    description: "Opulent gold and ivory palette with regal draping, crystal chandeliers, and lush floral arrangements.",
    mood: "Majestic · Opulent · Timeless",
    palette: ["#D4A017", "#F5D97E", "#FFFFF0", "#1a1a1a"],
    bestFor: ["Weddings", "Anniversaries", "Galas"],
  },
  {
    id: "midnight-romance",
    title: "Midnight Romance",
    description: "Deep navy and blush tones with fairy lights, velvet textures, and intimate candlelit atmospheres.",
    mood: "Intimate · Dreamy · Romantic",
    palette: ["#191970", "#E8B4B8", "#FAF0E6", "#C0C0C0"],
    bestFor: ["Anniversaries", "Engagements", "Weddings"],
  },
  {
    id: "garden-eden",
    title: "Garden of Eden",
    description: "Lush greenery, cascading florals, and soft pastels that transform any venue into a botanical paradise.",
    mood: "Fresh · Romantic · Natural",
    palette: ["#2D5A27", "#F8C8D4", "#FFFAF0", "#E8D5B7"],
    bestFor: ["Weddings", "Baby Showers", "Birthdays"],
  },
  {
    id: "noir-glamour",
    title: "Noir Glamour",
    description: "Dramatic black, gold, and white contrast with geometric elements, metallic accents, and bold florals.",
    mood: "Bold · Dramatic · Chic",
    palette: ["#0a0a0a", "#D4A017", "#FFFFFF", "#C0C0C0"],
    bestFor: ["Corporate Events", "Birthdays", "Award Nights"],
  },
  {
    id: "blush-pearl",
    title: "Blush & Pearl",
    description: "Soft blush roses, pearl accents, and delicate white draping for an effortlessly feminine celebration.",
    mood: "Soft · Elegant · Feminine",
    palette: ["#F4C2C2", "#F8F0E3", "#FFFFF0", "#D4A574"],
    bestFor: ["Baby Showers", "Birthdays", "Bridal Showers"],
  },
  {
    id: "celestial",
    title: "Celestial Dream",
    description: "Deep purples, constellation-inspired lighting, and silver metallics for an otherworldly atmosphere.",
    mood: "Mystical · Ethereal · Magical",
    palette: ["#2E0854", "#9B59B6", "#C0C0C0", "#F5D97E"],
    bestFor: ["Birthdays", "Themed Events", "Galas"],
  },
];

export const PORTFOLIO_ITEMS = [
  { id: 1, title: "The Sharma Wedding", category: "Wedding", year: "2024", description: "A royal gold and ivory mandap draped in 10,000 roses." },
  { id: 2, title: "Little Aryan's 1st Birthday", category: "Birthday", year: "2024", description: "Dreamy cloud theme with balloon installations." },
  { id: 3, title: "25th Anniversary Gala", category: "Anniversary", year: "2024", description: "Intimate candlelit dinner for 200 guests." },
  { id: 4, title: "TechCorp Product Launch", category: "Corporate", year: "2023", description: "Sleek noir glamour for a premium product reveal." },
  { id: 5, title: "Baby Zara's Shower", category: "Baby Shower", year: "2023", description: "Garden of Eden theme with floral arch." },
  { id: 6, title: "The Kapoor Wedding", category: "Wedding", year: "2023", description: "Midnight romance theme across 3 ceremonies." },
  { id: 7, title: "Priya's Sweet Sixteen", category: "Birthday", year: "2023", description: "Celestial dream with starry installations." },
  { id: 8, title: "Engagement Soiree", category: "Engagement", year: "2024", description: "Blush and pearl garden setup at sunset." },
  { id: 9, title: "New Year Gala 2024", category: "Corporate", year: "2024", description: "Gold and black extravaganza for 500 guests." },
];

export const STATS = [
  { value: "500+", label: "Events Curated" },
  { value: "8+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Signature Themes" },
];

export const TESTIMONIALS = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding, 2024",
    quote:
      "Karmanya Kreatives didn't just decorate our venue — they told our story. Every flower, every light felt like it was chosen for us. Our guests are still talking about it.",
    rating: 5,
  },
  {
    name: "Meera Kapoor",
    event: "Anniversary Celebration, 2024",
    quote:
      "We wanted something intimate yet grand for our 25th anniversary. The team understood our vision perfectly and delivered beyond our wildest imagination.",
    rating: 5,
  },
  {
    name: "Ananya Mehta",
    event: "Baby Shower, 2023",
    quote:
      "The garden setup was absolutely breathtaking. I cried the moment I walked in. They made me feel like royalty on the most special day.",
    rating: 5,
  },
];
