// Hearthfire Constants — Materials, Rarity, Provisions, Gear, Levels

export const MATERIALS = {
  hearthstone: { name: "Hearthstone", theme: "Warmth & Home", color: "#D4943A", icon: "\u16BA", gear: "Hearth" },
  ironwood:    { name: "Ironwood",    theme: "Strength & Journey", color: "#6B4E3D", icon: "\u16C1", gear: "Mount" },
  emberDust:   { name: "Ember Dust",  theme: "Energy & Spark", color: "#CD7F32", icon: "\u16B2", gear: "Forge" },
  curedLeather:{ name: "Cured Leather",theme: "Protection & Craft", color: "#9B7B2F", icon: "\u16DA", gear: "Wardrobe" },
  wovenCord:   { name: "Woven Cord",  theme: "Connection & Utility", color: "#8B8B8B", icon: "\u16B9", gear: "General" },
};

export const PROVISIONS = [
  { name: "Gas Coin", value: "$0.50", icon: "\u16B1", desc: "Applied to gas fund", sortVal: 0.5 },
  { name: "Gas Coin", value: "$0.75", icon: "\u16B1", desc: "Applied to gas fund", sortVal: 0.75 },
  { name: "Gas Coin", value: "$1.00", icon: "\u16B1", desc: "Applied to gas fund", sortVal: 1 },
  { name: "Snack Token", value: "1 item", icon: "\u16C3", desc: "Free snack from grocery run", sortVal: 1 },
  { name: "Game Credit", value: "$1.00", icon: "\u16B7", desc: "Toward game purchase fund", sortVal: 1 },
  { name: "Game Credit", value: "$2.00", icon: "\u16B7", desc: "Toward game purchase fund", sortVal: 2 },
];

export const RARITY = {
  common:   { name: "Common",    units: 1, color: "#8B8680", chance: 0.70, sortVal: 10 },
  uncommon: { name: "Uncommon",  units: 2, color: "#4A90D9", chance: 0.225, sortVal: 20 },
  rare:     { name: "Rare",      units: 5, color: "#9B59B6", chance: 0.05, sortVal: 50 },
  wildcard: { name: "Legendary", units: 0, color: "#F1C40F", chance: 0.025, sortVal: 100 },
};

export const LEVEL_MATS = {
  1: ["hearthstone", "ironwood"],
  2: ["hearthstone", "ironwood", "emberDust"],
  3: ["hearthstone", "ironwood", "emberDust", "curedLeather"],
  4: ["hearthstone", "ironwood", "emberDust", "curedLeather", "wovenCord"],
};

export const LOCATIONS = [
  { name: "Hollow Oak", icon: "\u16D2", scene: "forest", desc: "An ancient tree split by lightning" },
  { name: "Creek Bed", icon: "\u16DA", scene: "water", desc: "Smooth stones in a shallow stream" },
  { name: "Stone Ruins", icon: "\u16C7", scene: "ruins", desc: "Weathered walls, forgotten time" },
  { name: "Cave Mouth", icon: "\u16C1", scene: "cave", desc: "A dark opening, cool and sharp" },
  { name: "Burned Clearing", icon: "\u16B2", scene: "fire", desc: "Charred stumps in a circle" },
  { name: "Ridge Overlook", icon: "\u16D6", scene: "mountain", desc: "Windswept ridge above the valley" },
  { name: "Moss Bank", icon: "\u16C3", scene: "moss", desc: "Thick emerald carpet, fallen log" },
  { name: "Fallen Tower", icon: "\u16A6", scene: "tower", desc: "Crumbled stone stacked impossibly" },
  { name: "Iron Vein", icon: "\u16C1", scene: "mineral", desc: "Dark ore glinting through rock" },
  { name: "Ancient Well", icon: "\u16C8", scene: "well", desc: "Fitted stones, a dark shaft" },
  { name: "Bramble Thicket", icon: "\u16A6", scene: "bramble", desc: "Something gleaming deeper inside" },
  { name: "Windswept Bluff", icon: "\u16B1", scene: "wind", desc: "Exposed cliff, wind never stops" },
  { name: "Sunken Garden", icon: "\u16C3", scene: "garden", desc: "Wildflowers in strange patterns" },
  { name: "Ember Pool", icon: "\u16B2", scene: "thermal", desc: "Warm water bubbling, steam rising" },
];

export const SCENES = {
  forest: "linear-gradient(170deg, #1a3520 0%, #2a4a2a 40%, #1a3018 100%)",
  water: "linear-gradient(170deg, #152a3a 0%, #254a6a 40%, #152838 100%)",
  ruins: "linear-gradient(170deg, #2a2520 0%, #3e3830 40%, #2a2218 100%)",
  cave: "linear-gradient(170deg, #181828 0%, #252540 40%, #181828 100%)",
  fire: "linear-gradient(170deg, #2a1508 0%, #4a2a10 40%, #2a1808 100%)",
  mountain: "linear-gradient(170deg, #2a3548 0%, #3a4a60 40%, #2a3548 100%)",
  moss: "linear-gradient(170deg, #1a3018 0%, #2a4a22 40%, #1a3018 100%)",
  tower: "linear-gradient(170deg, #252030 0%, #38304a 40%, #201a2a 100%)",
  mineral: "linear-gradient(170deg, #1a1a30 0%, #2a2a45 40%, #1a1a30 100%)",
  well: "linear-gradient(170deg, #182028 0%, #253038 40%, #151a22 100%)",
  bramble: "linear-gradient(170deg, #301818 0%, #452218 40%, #301010 100%)",
  wind: "linear-gradient(170deg, #283038 0%, #3a4a58 40%, #252a32 100%)",
  garden: "linear-gradient(170deg, #1a2818 0%, #2a3a22 40%, #142010 100%)",
  thermal: "linear-gradient(170deg, #302015 0%, #452a18 40%, #281510 100%)",
};

export const LEVEL_THRESHOLDS = [
  { level: 1, title: "Recruit",           xpToNext: 300,  cumulative: 0 },
  { level: 2, title: "Scout",             xpToNext: 500,  cumulative: 300 },
  { level: 3, title: "Pathfinder",        xpToNext: 700,  cumulative: 800 },
  { level: 4, title: "Ranger",            xpToNext: 900,  cumulative: 1500 },
  { level: 5, title: "Trailblazer",       xpToNext: 1100, cumulative: 2400 },
  { level: 6, title: "Navigator",         xpToNext: 1500, cumulative: 3500 },
  { level: 7, title: "Expedition Leader", xpToNext: null, cumulative: 5000 },
];

export const MORNING_ITEMS = [
  { key: "wakeUp",     label: "Wake Up",    fullDesc: "On time, no help", partialDesc: "On time, needed backup", missDesc: "Late / didn't happen" },
  { key: "medication", label: "Medication",  fullDesc: "Taken correctly, on time", partialDesc: "Taken, but late/uncertain", missDesc: "Missed / forgot" },
  { key: "hygiene",    label: "Hygiene",     fullDesc: "Shower, teeth, deodorant", partialDesc: "Partial", missDesc: "Skipped" },
  { key: "essentials", label: "Essentials",  fullDesc: "Phone, keys, backpack, charger", partialDesc: "Missing something", missDesc: "Didn't check" },
];

export const EVENING_ITEMS = [
  { key: "eveningMeds", label: "Evening Medication", options: ["Taken", "Forgot"] },
  { key: "roomStatus",  label: "Room Status",        options: ["Functional", "Messy", "Disaster"] },
  { key: "tomorrowPrep", label: "Tomorrow Prep",     options: ["Ready", "Partial", "Not thought about"] },
  { key: "calendarCheck", label: "Calendar Check",   options: ["Know schedule", "Vaguely aware", "No idea"] },
];

export const GEAR_CATALOG = {
  hearth: {
    title: "Hearth Gear",
    subtitle: "Room & Living Space",
    material: "hearthstone",
    items: [
      { key: "ledStrip",     name: "LED light strip",           cost: 12, level: 1, estDays: 10, price: "$15" },
      { key: "deskOrganizer", name: "Desk organizer",           cost: 10, level: 1, estDays: 8,  price: "$12" },
      { key: "wallArt",      name: "Wall art / poster",         cost: 16, level: 2, estDays: 13, price: "$20" },
      { key: "curtains",     name: "Blackout curtains",         cost: 20, level: 3, estDays: 16, price: "$25" },
      { key: "chargeStation", name: "Bedside charging station", cost: 24, level: 3, estDays: 19, price: "$30" },
    ],
  },
  mount: {
    title: "Mount Gear",
    subtitle: "Car & Transportation",
    material: "ironwood",
    items: [
      { key: "phoneMount",   name: "Phone mount for car",   cost: 10, level: 1, estDays: 8,  price: "$12" },
      { key: "trunkOrg",     name: "Trunk organizer",       cost: 14, level: 2, estDays: 11, price: "$18" },
      { key: "seatCovers",   name: "Seat covers",           cost: 20, level: 3, estDays: 16, price: "$25" },
      { key: "roadsideKit",  name: "Emergency roadside kit", cost: 24, level: 4, estDays: 19, price: "$30" },
    ],
  },
  forge: {
    title: "Forge Gear",
    subtitle: "Tech",
    material: "emberDust",
    items: [
      { key: "mousePad",     name: "Mouse pad upgrade",    cost: 10, level: 2, estDays: 8,  price: "$12" },
      { key: "cableKit",     name: "Cable management kit", cost: 12, level: 2, estDays: 10, price: "$15" },
      { key: "headsetStand", name: "Headset stand",        cost: 16, level: 3, estDays: 13, price: "$20" },
      { key: "coolingPad",   name: "Laptop cooling pad",   cost: 24, level: 2, estDays: 19, price: "$30" },
    ],
  },
  wardrobe: {
    title: "Wardrobe Gear",
    subtitle: "Personal",
    material: "curedLeather",
    items: [
      { key: "carabinerSet", name: "Keychain / carabiner set", cost: 8,  level: 3, estDays: 6,  price: "$10" },
      { key: "doppKit",      name: "Dopp kit / toiletry bag",  cost: 10, level: 3, estDays: 8,  price: "$12" },
      { key: "backpack",     name: "Backpack upgrade",         cost: 30, level: 4, estDays: 24, price: "$40" },
      { key: "watch",        name: "Watch or accessory",       cost: 36, level: 5, estDays: 28, price: "$45" },
    ],
  },
};

// ─── Level Privileges: Car Access & Independence ───
// Each level defines what car access is unlocked, the weekly activation
// requirements to USE that access, and communication expectations.

export const LEVEL_PRIVILEGES = {
  1: {
    title: "Recruit",
    carAccess: "Errands only — defined purpose, pre-approved destination",
    curfew: null,
    passengers: null,
    weekendTrips: null,
    weekdayFree: false,
    activation: "5 of 7 morning check-ins + quest started",
    communication: "Text departure & arrival",
    gamingThreshold: 5,
  },
  2: {
    title: "Scout",
    carAccess: "Errands + friend's house (1x weekend, daytime only)",
    curfew: "Daytime only",
    passengers: null,
    weekendTrips: "1x weekend",
    weekdayFree: false,
    activation: "5 of 7 morning check-ins + quest active",
    communication: "Pre-approved destination",
    gamingThreshold: 5,
  },
  3: {
    title: "Pathfinder",
    carAccess: "Multi-stop trips, 2x weekend, 1 passenger, until 9 PM",
    curfew: "9 PM",
    passengers: "1 passenger",
    weekendTrips: "2x weekend",
    weekdayFree: false,
    activation: "4 of 7 morning check-ins + quest engaged",
    communication: "General plan shared",
    gamingThreshold: 5,
  },
  4: {
    title: "Ranger",
    carAccess: "Evening driving (10 PM), multi-passenger, weekday access",
    curfew: "10 PM",
    passengers: "Multiple passengers",
    weekendTrips: "Flexible",
    weekdayFree: true,
    activation: "4 of 7 morning check-ins + quest this month",
    communication: "Communication, not permission",
    gamingThreshold: 5,
  },
  5: {
    title: "Trailblazer",
    carAccess: "11 PM curfew, weekday free, longer distance trips",
    curfew: "11 PM",
    passengers: "Multiple passengers",
    weekendTrips: "Flexible",
    weekdayFree: true,
    activation: "3 of 7 morning check-ins + quest this month",
    communication: "General awareness",
    gamingThreshold: 5,
  },
  6: {
    title: "Navigator",
    carAccess: "Near-full access, flexible curfew, road trips possible",
    curfew: "Flexible",
    passengers: "Unrestricted",
    weekendTrips: "Unrestricted",
    weekdayFree: true,
    activation: "3 of 7 morning check-ins + not disengaged",
    communication: "Courtesy communication",
    gamingThreshold: 5,
  },
  7: {
    title: "Expedition Leader",
    carAccess: "Full access — adult norms apply",
    curfew: "None",
    passengers: "Unrestricted",
    weekendTrips: "Unrestricted",
    weekdayFree: true,
    activation: "None required",
    communication: "Adult norms",
    gamingThreshold: 5,
  },
};

export const MILESTONES = [
  { key: "firstMorning",      label: "First morning check-in",         xp: 10 },
  { key: "firstEvening",      label: "First evening check-in",         xp: 10 },
  { key: "firstQuestStarted", label: "First quest started",            xp: 15 },
  { key: "firstQuestDone",    label: "First quest completed",          xp: 25 },
  { key: "first7DayStreak",   label: "First 7-day morning streak",     xp: 25 },
  { key: "firstCalibration",  label: "First calibration completed",    xp: 15 },
  { key: "firstHonestGap",    label: "First honest gap identified",    xp: 20 },
  { key: "reachedLevel2",     label: "Level 2 reached",                xp: 100 },
  { key: "firstChallenging",  label: "First challenging quest done",   xp: 25 },
  { key: "firstL2Reflection", label: "First Level 2 reflection",       xp: 20 },
];

export const DOMAINS = [
  { key: "dailyLiving",   name: "Daily Living & Independence",            color: "#D4943A", icon: "\u16DF" },
  { key: "health",        name: "Physical Health & Self-Care",             color: "#4CAF50", icon: "\u16CA" },
  { key: "timeManagement",name: "Time Management & Follow-Through",       color: "#4A90D9", icon: "\u16C7" },
  { key: "social",        name: "Social Skills & Relationships",           color: "#E87BAC", icon: "\u16B9" },
  { key: "mentalHealth",  name: "Mental Health & Emotional Regulation",    color: "#9B59B6", icon: "\u16D7" },
  { key: "safety",        name: "Safety, Judgment & Impulse Control",      color: "#E74C3C", icon: "\u16C1" },
  { key: "adhd",          name: "ADHD Self-Management & Self-Advocacy",    color: "#F39C12", icon: "\u16B2" },
  { key: "academic",      name: "Academic Independence",                   color: "#1ABC9C", icon: "\u16B1" },
];
