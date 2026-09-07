export type PetTier =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendary"
  | "Secret"
  | "Prismatic"
  | "Divine"
  | "Exotic"
  | "Transcended"

export type PetEntry = {
  name: string
  tier: PetTier
  /** Lucky Block slot weight within that tier, as listed by the source guide. */
  chance: string
  moneyBoost: string
  ability: string
}

/**
 * Documented roster (50 entries) from community Pet Guide mirrored by sellores.com.
 * Evidence class: single-source / dated secondary — NOT in-game checked by us.
 * Owner posts have cited 51 unique pets; the missing entry is unresolved.
 * Source checked via sellores.com/pets/ capture 2026-09-07 (upstream guide ~Aug 30 / research Sep 2).
 */
export const PET_ROSTER: PetEntry[] = [
  {
    name: "Cat",
    tier: "Common",
    chance: "50%",
    moneyBoost: "8%",
    ability: "Increases ore yield by 5% and provides an 8% money boost",
  },
  {
    name: "Lizard",
    tier: "Common",
    chance: "25%",
    moneyBoost: "9%",
    ability: "Drones mine 5% faster and provides a 9% money boost",
  },
  {
    name: "Parrot",
    tier: "Common",
    chance: "15%",
    moneyBoost: "11%",
    ability: "Mined ores are worth 5% more and provides an 11% money boost",
  },
  {
    name: "Snail",
    tier: "Common",
    chance: "8%",
    moneyBoost: "13%",
    ability: "Every 120 seconds, reduces a random growing ore's remaining growth time by 15%, and provides a 13% money boost",
  },
  {
    name: "Owl",
    tier: "Common",
    chance: "2%",
    moneyBoost: "15%",
    ability: "Increases ore luck by 10% and provides a 15% money boost",
  },
  {
    name: "Frog",
    tier: "Uncommon",
    chance: "50%",
    moneyBoost: "23%",
    ability: "Increases ore yield by 8% and provides a 23% money boost",
  },
  {
    name: "Pigeon",
    tier: "Uncommon",
    chance: "25%",
    moneyBoost: "30%",
    ability: "Mined ores are worth 8% more and provides a 30% money boost",
  },
  {
    name: "Hamster",
    tier: "Uncommon",
    chance: "15%",
    moneyBoost: "31%",
    ability: "Drones mine 10% faster and provides a 31% money boost",
  },
  {
    name: "Chicken",
    tier: "Uncommon",
    chance: "8%",
    moneyBoost: "45%",
    ability: "Has a 4% chance for a mined ore to give 2× yield and provides a 45% money boost",
  },
  {
    name: "Guinea Pig",
    tier: "Uncommon",
    chance: "2%",
    moneyBoost: "53%",
    ability: "Increases ore luck by 15% and provides a 53% money boost",
  },
  {
    name: "Turtle",
    tier: "Rare",
    chance: "50%",
    moneyBoost: "75%",
    ability: "Mined ores are worth 12% more and provides a 75% money boost",
  },
  {
    name: "Rabbit",
    tier: "Rare",
    chance: "25%",
    moneyBoost: "83%",
    ability: "Increases ore luck by 20% and provides an 83% money boost",
  },
  {
    name: "Koala",
    tier: "Rare",
    chance: "15%",
    moneyBoost: "98%",
    ability: "Every 150 seconds, reduces a random ore's remaining growth time by 50%, and provides a 98% money boost",
  },
  {
    name: "Ostrich",
    tier: "Rare",
    chance: "8%",
    moneyBoost: "113%",
    ability: "Drones mine 18% faster and provides a 113% money boost",
  },
  {
    name: "Crab",
    tier: "Rare",
    chance: "2%",
    moneyBoost: "128%",
    ability: "Increases ore yield by 12% and provides a 128% money boost",
  },
  {
    name: "Goat",
    tier: "Epic",
    chance: "50%",
    moneyBoost: "150%",
    ability: "Every 180 seconds, instantly grows one random ore, and provides a 150% money boost",
  },
  {
    name: "Llama",
    tier: "Epic",
    chance: "25%",
    moneyBoost: "165%",
    ability: "Mined ores are worth 18% more and provides a 165% money boost",
  },
  {
    name: "Wolf",
    tier: "Epic",
    chance: "15%",
    moneyBoost: "188%",
    ability: "Every 150 seconds, a drone gains 40% mining speed for 20 seconds, and provides a 188% money boost",
  },
  {
    name: "Capybara",
    tier: "Epic",
    chance: "8%",
    moneyBoost: "203%",
    ability: "Increases ore luck by 25% and provides a 203% money boost",
  },
  {
    name: "Kangaroo",
    tier: "Epic",
    chance: "2%",
    moneyBoost: "225%",
    ability: "Every 180 seconds, reduces the remaining growth time of 2 random ores by 50%, and provides a 225% money boost",
  },
  {
    name: "Golden Retriever",
    tier: "Legendary",
    chance: "50%",
    moneyBoost: "300%",
    ability: "Every 180 seconds, the next ore mined gives 2× yield, and provides a 300% money boost",
  },
  {
    name: "Zebra",
    tier: "Legendary",
    chance: "25%",
    moneyBoost: "323%",
    ability: "Every 150 seconds, the next 2 ores mined give 1.5× yield, and provides a 323% money boost",
  },
  {
    name: "Pony",
    tier: "Legendary",
    chance: "15%",
    moneyBoost: "360%",
    ability: "Mined ores are worth 25% more and provides a 360% money boost",
  },
  {
    name: "Horse",
    tier: "Legendary",
    chance: "8%",
    moneyBoost: "375%",
    ability: "Drones mine 30% faster and provides a 375% money boost",
  },
  {
    name: "Tiger",
    tier: "Legendary",
    chance: "2%",
    moneyBoost: "375%",
    ability: "Has an 8% chance for a mined ore to give 2× yield and provides a 375% money boost",
  },
  {
    name: "Snake",
    tier: "Secret",
    chance: "50%",
    moneyBoost: "450%",
    ability: "Every 240 seconds, has a 20% chance to apply a random mutation to an unmutated ore. Admin Mutation will not be applied. Provides a 450% money boost",
  },
  {
    name: "Cow",
    tier: "Secret",
    chance: "25%",
    moneyBoost: "480%",
    ability: "Every 180 seconds, instantly grows a random ore and provides a 480% money boost",
  },
  {
    name: "Bull",
    tier: "Secret",
    chance: "15%",
    moneyBoost: "525%",
    ability: "Every 150 seconds, a drone gains 75% mining speed for 20 seconds, and provides a 525% money boost",
  },
  {
    name: "Crocodile",
    tier: "Secret",
    chance: "8%",
    moneyBoost: "563%",
    ability: "Every 210 seconds, the next 3 ores mined give 1.75× yield, and provides a 563% money boost",
  },
  {
    name: "Unicorn",
    tier: "Secret",
    chance: "2%",
    moneyBoost: "600%",
    ability: "Every 240 seconds, has a 25% chance to apply a random mutation to an unmutated ore. Admin Mutation will not be applied. Provides a 600% money boost",
  },
  {
    name: "Elephant",
    tier: "Prismatic",
    chance: "50%",
    moneyBoost: "675%",
    ability: "Every 180 seconds, reduces the remaining growth time for all ores by 20%, and provides a 675% money boost",
  },
  {
    name: "Bear",
    tier: "Prismatic",
    chance: "25%",
    moneyBoost: "600%",
    ability: "Increases ore yield by 30% and provides a 600% money boost",
  },
  {
    name: "Polar Bear",
    tier: "Prismatic",
    chance: "15%",
    moneyBoost: "788%",
    ability: "Every 240 seconds, has a 30% chance to apply the Frozen Mutation to a random ore. Admin Mutation will not be applied. Provides a 788% money boost",
  },
  {
    name: "Lion",
    tier: "Prismatic",
    chance: "8%",
    moneyBoost: "825%",
    ability: "Every 180 seconds, ores are worth 50% more for 20 seconds, and provides an 825% money boost",
  },
  {
    name: "Gorilla",
    tier: "Prismatic",
    chance: "2%",
    moneyBoost: "900%",
    ability: "Every 150 seconds, a drone gains 100% mining speed for 200 seconds, and provides a 900% money boost",
  },
  {
    name: "Triceratops",
    tier: "Divine",
    chance: "50%",
    moneyBoost: "900%",
    ability: "Every 180 seconds, instantly grows 2 random ores and provides a 900% money boost",
  },
  {
    name: "Brachiosaurus",
    tier: "Divine",
    chance: "25%",
    moneyBoost: "923%",
    ability: "Every 110 seconds, instantly grows 3 random ores and provides a 923% money boost",
  },
  {
    name: "Velociraptor",
    tier: "Divine",
    chance: "15%",
    moneyBoost: "938%",
    ability: "Every 180 seconds, reduces the growth time for all ores by 2× and provides a 938% money boost",
  },
  {
    name: "Spinosaurus",
    tier: "Divine",
    chance: "8%",
    moneyBoost: "960%",
    ability: "Every 240 seconds, the next 5 ores mined give 2× yield and provides a 960% money boost",
  },
  {
    name: "T-Rex",
    tier: "Divine",
    chance: "2%",
    moneyBoost: "975%",
    ability: "Every 600 seconds, has a 20% chance to upgrade a random ore's mutation. Admin Mutation will not be applied. Provides a 975% money boost",
  },
  {
    name: "Sabre Tiger",
    tier: "Exotic",
    chance: "50%",
    moneyBoost: "1050%",
    ability: "Has a 10% chance for a mined ore to give 2× yield and provides a 1,050% money boost",
  },
  {
    name: "Qilin",
    tier: "Exotic",
    chance: "25%",
    moneyBoost: "525%",
    ability: "Increases ore luck by 50% and provides a 525% money boost",
  },
  {
    name: "Imp",
    tier: "Exotic",
    chance: "15%",
    moneyBoost: "1125%",
    ability: "Every 240 seconds, has a 40% chance to apply a random mutation to an unmutated ore. Admin Mutation will not be applied. Provides a 1,125% money boost",
  },
  {
    name: "Cerberus",
    tier: "Exotic",
    chance: "8%",
    moneyBoost: "1163%",
    ability: "Every 180 seconds, grants 3 random buffs for 20 seconds. Possible buffs include +40% mining speed, +25% ore value, +25% ore yield, +24% ore luck, or +50% drone earnings. Provides a 1,163% money boost",
  },
  {
    name: "Minotaur",
    tier: "Exotic",
    chance: "2%",
    moneyBoost: "1200%",
    ability: "Every 150 seconds, a drone gains 125% mining speed for 20 seconds and provides a 1,200% money boost",
  },
  {
    name: "Griffin",
    tier: "Transcended",
    chance: "50%",
    moneyBoost: "1275%",
    ability: "Every 150 seconds, gains +50% mining speed and +35% ore value for 25 seconds. Provides a 1,275% money boost",
  },
  {
    name: "Hydra",
    tier: "Transcended",
    chance: "25%",
    moneyBoost: "1275%",
    ability: "Every 240 seconds, independently gives 2 random unmutated ores a 40% chance to receive a random mutation. Admin Mutation will not be applied. Provides a 1,275% money boost",
  },
  {
    name: "Kraken",
    tier: "Transcended",
    chance: "15%",
    moneyBoost: "1275%",
    ability: "Every 240 seconds, the next 7 ores mined give 2× yield and provides a 1,275% money boost",
  },
  {
    name: "Wyvern",
    tier: "Transcended",
    chance: "8%",
    moneyBoost: "1350%",
    ability: "Every 180 seconds, ores gain +50% yield and drones gain +35% mining speed for 25 seconds. Provides a 1,350% money boost",
  },
  {
    name: "Dragon",
    tier: "Transcended",
    chance: "2%",
    moneyBoost: "1425%",
    ability: "Increases furnace processing speed by 5% and processed ore value by 5%. These effects stack additively. Provides a 1,425% money boost",
  },
]

export const PET_ROSTER_META = {
  documentedCount: 50,
  ownerAnnouncedCount: 51,
  sourceLabel: "Community Pet Guide (via sellores.com)",
  sourceUrl: "https://sellores.com/pets/",
  checkedAt: "2026-09-07",
  evidenceClass: "single-source" as const,
}
