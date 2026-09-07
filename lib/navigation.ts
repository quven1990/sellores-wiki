export type NavItem = {
  href: string
  label: string
}

export const PRIMARY_NAV: NavItem[] = [
  { href: "/codes", label: "Codes" },
  { href: "/ores", label: "Ores" },
  { href: "/pets", label: "Pets" },
  { href: "/gears", label: "Gears" },
  { href: "/mutations", label: "Mutations" },
  { href: "/beginner", label: "Guides" },
  { href: "/updates", label: "Updates" },
]

export const GUIDE_NAV: NavItem[] = [
  { href: "/beginner", label: "Beginner" },
  { href: "/upgrades", label: "Upgrades" },
  { href: "/floors", label: "Floors" },
  { href: "/guides/afk-money", label: "AFK & Money" },
]

export const FOOTER_NAV: NavItem[] = [
  ...PRIMARY_NAV.filter((item) => item.href !== "/beginner"),
  ...GUIDE_NAV,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]
