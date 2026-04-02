export type FooterItemType = 'title' | 'text' | 'link';

export interface FooterItem {
  type: FooterItemType;
  text: string;
  href?: string;
  classes?: string;
}

export interface FooterColumn {
  items: FooterItem[];
}
