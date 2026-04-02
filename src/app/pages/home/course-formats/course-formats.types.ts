export interface CourseFormat {
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
  formats: CourseFormat[];
}
