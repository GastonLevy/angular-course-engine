export interface AppConfig {
  hero: {
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
    imageAlt: string;
  };
  courseFormats: {
    heading: string;
    subheading: string;
    formats: Array<{
      title: string;
      features: string[];
      buttonText: string;
      buttonClass: string;
      cardClass?: string;
      headerClass?: string;
    }>;
  };
  priceOffers: {
    heading: string;
    subheading: string;
    offers: Array<{
      title: string;
      price: number;
      currency: string;
      period: string;
      features: string[];
      buttonText: string;
      buttonClass: string;
      cardClass?: string;
      headerClass?: string;
    }>;
  };
  teachers: Array<{
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  }>;
  technologies: Array<{
    name: string;
    iconUrl: string;
    iconAlt: string;
  }>;
}
