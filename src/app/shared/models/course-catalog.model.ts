export interface HeroConfig {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CourseFormatItem {
  title: string;
  features: string[];
  buttonText: string;
  buttonClass: string;
  cardClass?: string;
  headerClass?: string;
}

export interface CourseFormatsConfig {
  heading: string;
  subheading: string;
  formats: CourseFormatItem[];
}

export interface PriceOfferItem {
  title: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonClass: string;
  cardClass?: string;
  headerClass?: string;
}

export interface PriceOffersConfig {
  heading: string;
  subheading: string;
  offers: PriceOfferItem[];
}

export interface Teacher {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Technology {
  name: string;
  iconUrl: string;
  iconAlt: string;
}

export interface CourseCatalog {
  hero: HeroConfig;
  courseFormats: CourseFormatsConfig;
  priceOffers: PriceOffersConfig;
  teachers: Teacher[];
  technologies: Technology[];
}
