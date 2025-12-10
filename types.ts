export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  isError?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
}