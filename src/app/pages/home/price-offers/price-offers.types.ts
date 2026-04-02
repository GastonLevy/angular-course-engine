export interface PriceOffer {
  title: string;
  price: number;
  currency: string; // ej: '€'
  period: string; // ej: '/mo'
  features: string[];
  buttonText: string;
  buttonClass: string;
  cardClass?: string;
  headerClass?: string;
}

export interface PriceOffersConfig {
  heading: string;
  subheading: string;
  offers: PriceOffer[];
}
