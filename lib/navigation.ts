export type NavItem = {
  href: string
  label: string
}

export const PRIMARY_NAV: NavItem[] = [
  { href: "/codes", label: "Codes" },
  { href: "/pets", label: "Pets" },
  { href: "/gears", label: "Gears" },
  { href: "/beginner", label: "Beginner" },
  { href: "/updates", label: "Updates" },
]

export const FOOTER_NAV: NavItem[] = [
  ...PRIMARY_NAV,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]
