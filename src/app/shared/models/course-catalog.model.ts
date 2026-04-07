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

export interface CourseTopicConfig {
  heading: string;
  description: string;
  learningPoints: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  rating: number;
  comment: string;
}

export interface TestimonialsConfig {
  heading: string;
  subheading: string;
  items: TestimonialItem[];
}

export interface VideoItem {
  title: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
}

export interface VideosConfig {
  heading: string;
  subheading: string;
  items: VideoItem[];
}

export interface LearningSpaceConfig {
  heading: string;
  description: string;
  features: string[];
}

export interface NewsItem {
  title: string;
  description: string;
  date: string;
  link?: string;
}

export interface MainWebsiteLink {
  label: string;
  url: string;
}

export interface CourseCatalog {
  hero: HeroConfig;
  courseTopic: CourseTopicConfig;
  testimonials: TestimonialsConfig;
  videos: VideosConfig;
  learningSpace: LearningSpaceConfig;
  news: NewsItem[];
  mainWebsiteLinks: MainWebsiteLink[];
  courseFormats: CourseFormatsConfig;
  priceOffers: PriceOffersConfig;
  teachers: Teacher[];
  technologies: Technology[];
}
