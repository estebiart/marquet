export interface NewsItem {
    category?: string;
    title: string;
    description: string;
    imageUrl?: string;
    date?: string;
    author?: {
      id?: number;
      name?: string;
    };
  }
  
  export interface CategoryProps {
    title: string;
    color: string;
    bgcolor: string;
    children: React.ReactNode;
  }
  