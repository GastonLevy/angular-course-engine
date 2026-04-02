export type NavbarItemType = 'link' | 'button' | 'logo';

export interface NavbarItem {
  type: NavbarItemType;
  text: string;
  href: string;
  classes?: string;
}
